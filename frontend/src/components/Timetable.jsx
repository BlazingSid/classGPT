import { useNavigate } from "react-router-dom";

function Timetable() {
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
          Timetable
        </h1>

        <p className="mt-2 text-slate-400">
          Your class schedule.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <p className="text-slate-400">
            Timetable integration will be connected after we inspect the
            backend timetable API response.
          </p>

        </div>

      </div>
    </main>
  );
}

export default Timetable;