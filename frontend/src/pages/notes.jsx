import { useNavigate } from "react-router-dom";

function Notes() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white">

      <div className="mx-auto max-w-4xl">

        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="mb-8 text-sm text-slate-400 hover:text-white"
        >
          ← Dashboard
        </button>

        <h1 className="text-3xl font-bold">
          Notes
        </h1>

        <p className="mt-2 text-slate-400">
          Your classroom notes and study material.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <p className="text-slate-400">
            Notes integration will be connected when the backend notes API
            contract is confirmed.
          </p>

          <button
            type="button"
            onClick={() => navigate("/chat")}
            className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
          >
            Ask ClassGPT about your material
          </button>

        </div>

      </div>
    </main>
  );
}

export default Notes;