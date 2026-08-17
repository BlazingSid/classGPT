import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadPdf } from "../services/api.js";

function Dashboard() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleUpload(event) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!file) {
      setError("Please select a PDF first.");
      return;
    }

    try {
      setUploading(true);

      await uploadPdf(file);

      setMessage(
        "PDF uploaded successfully. The backend has started processing it."
      );

      setFile(null);
      event.target.reset();
    } catch (requestError) {
      setError(
        requestError.message ||
          "Upload failed. Make sure the backend is running."
      );
    } finally {
      setUploading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-8">

      <div className="mx-auto max-w-6xl">

        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              ClassGPT
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Student Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              Your classroom information in one place.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/welcome")}
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
          >
            Back
          </button>

        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <button
            type="button"
            onClick={() => navigate("/chat")}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:-translate-y-1 hover:border-blue-500"
          >
            <h2 className="text-lg font-semibold">
              AI Classroom Chat
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Ask questions about your classroom material.
            </p>
          </button>

          <button
            type="button"
            onClick={() => navigate("/notices")}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:-translate-y-1 hover:border-blue-500"
          >
            <h2 className="text-lg font-semibold">
              Notices
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              View classroom announcements.
            </p>
          </button>

          <button
            type="button"
            onClick={() => navigate("/notes")}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:-translate-y-1 hover:border-blue-500"
          >
            <h2 className="text-lg font-semibold">
              Notes
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Access your study material.
            </p>
          </button>

          <button
            type="button"
            onClick={() => navigate("/timetable")}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:-translate-y-1 hover:border-blue-500"
          >
            <h2 className="text-lg font-semibold">
              Timetable
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Check your class schedule.
            </p>
          </button>

        </section>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-xl font-semibold">
            Classroom Material
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Upload a PDF for the ClassGPT RAG system to process.
          </p>

          <form
            onSubmit={handleUpload}
            className="mt-6"
          >

            <div className="rounded-xl border border-dashed border-slate-700 p-6">

              <input
                type="file"
                accept="application/pdf,.pdf"
                onChange={(event) =>
                  setFile(event.target.files?.[0] || null)
                }
                className="block w-full text-sm text-slate-400 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:font-semibold file:text-white"
              />

              <button
                type="submit"
                disabled={uploading}
                className="mt-4 rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {uploading ? "Uploading..." : "Upload PDF"}
              </button>

            </div>

            {message && (
              <p className="mt-4 rounded-xl border border-emerald-800 bg-emerald-950/40 p-4 text-sm text-emerald-300">
                {message}
              </p>
            )}

            {error && (
              <p className="mt-4 rounded-xl border border-red-800 bg-red-950/40 p-4 text-sm text-red-300">
                {error}
              </p>
            )}

          </form>

        </section>

      </div>
    </main>
  );
}

export default Dashboard;