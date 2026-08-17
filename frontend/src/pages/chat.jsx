import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { askQuestion } from "../services/api.js";

function Chat() {
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      setError("Please enter a question.");
      return;
    }

    setError("");
    setLoading(true);

    setMessages((current) => [
      ...current,
      {
        role: "user",
        content: trimmedQuestion,
      },
    ]);

    setQuestion("");

    try {
      const data = await askQuestion(trimmedQuestion);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.answer || "The backend returned no answer.",
          sources: data.sources_used,
        },
      ]);
    } catch (requestError) {
      setError(
        requestError.message ||
          "Unable to reach ClassGPT. Make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-6 sm:px-6">

      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-4xl flex-col">

        <header className="flex items-center justify-between border-b border-slate-800 pb-4">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              ClassGPT
            </p>

            <h1 className="mt-1 text-2xl font-bold">
              Classroom Chat
            </h1>
          </div>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
          >
            Dashboard
          </button>

        </header>

        <section className="flex-1 space-y-4 overflow-y-auto py-6">

          {messages.length === 0 && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <h2 className="text-xl font-semibold">
                Ask about your classroom material
              </h2>

              <p className="mt-2 text-slate-400">
                Try a question that is answered by the PDF you uploaded.
              </p>

            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[85%] rounded-2xl px-5 py-4 ${
                  message.role === "user"
                    ? "bg-blue-600"
                    : "border border-slate-800 bg-slate-900"
                }`}
              >

                <p className="whitespace-pre-wrap leading-7">
                  {message.content}
                </p>

                {message.role === "assistant" &&
                  typeof message.sources !== "undefined" && (
                    <p className="mt-3 text-xs text-slate-400">
                      Sources used: {message.sources}
                    </p>
                  )}

              </div>

            </div>
          ))}

          {loading && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-slate-400">
              Thinking from your classroom material...
            </div>
          )}

        </section>

        {error && (
          <div className="mb-4 rounded-xl border border-red-800 bg-red-950/40 p-4 text-sm text-red-300">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 border-t border-slate-800 pt-4 sm:flex-row"
        >

          <input
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Ask a question..."
            disabled={loading}
            className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-500 disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Thinking..." : "Send"}
          </button>

        </form>

      </div>
    </main>
  );
}

export default Chat;