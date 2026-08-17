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
    <main className="min-h-screen bg-[#07090d] text-white">

      {/* =====================================================
          TOP NAVIGATION
      ====================================================== */}

      <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#07090d]/85 backdrop-blur-xl">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

          {/* Brand */}

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-black shadow-lg shadow-blue-600/20">
              C
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold">
                ClassGPT
              </p>

              <p className="text-[10px] text-slate-500">
                Student workspace
              </p>
            </div>
          </button>

          {/* Navigation */}

          <nav className="hidden items-center gap-1 md:flex">

            <button
              onClick={() => navigate("/dashboard")}
              className="rounded-lg bg-white/[0.06] px-4 py-2 text-sm font-medium text-white"
            >
              Dashboard
            </button>

            <button
              onClick={() => navigate("/chat")}
              className="rounded-lg px-4 py-2 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
            >
              AI Tutor
            </button>

            <button
              onClick={() => navigate("/notes")}
              className="rounded-lg px-4 py-2 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
            >
              Notes
            </button>

            <button
              onClick={() => navigate("/notices")}
              className="rounded-lg px-4 py-2 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
            >
              Notices
            </button>

            <button
              onClick={() => navigate("/timetable")}
              className="rounded-lg px-4 py-2 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
            >
              Timetable
            </button>

          </nav>

          {/* User */}

          <div className="flex items-center gap-3">

            <button
              className="hidden h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-slate-400 transition hover:bg-white/[0.05] hover:text-white sm:flex"
              title="Notifications"
            >
              ♢
            </button>

            <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-2 py-1.5">

              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-xs font-bold">
                S
              </div>

              <span className="hidden text-xs font-medium sm:block">
                Student
              </span>

            </div>

          </div>

        </div>

      </header>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-10">

        {/* Header */}

        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <p className="text-sm font-medium text-blue-400">
              STUDENT DASHBOARD
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Good to see you, Student.
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Your classroom resources, AI tutor, and academic activity
              all in one place.
            </p>

          </div>

          <button
            onClick={() => navigate("/welcome")}
            className="self-start rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/[0.07] sm:self-auto"
          >
            Exit workspace
          </button>

        </section>

        {/* =================================================
            AI QUICK ACTION
        ================================================== */}

        <section className="relative mt-8 overflow-hidden rounded-2xl border border-blue-500/15 bg-gradient-to-br from-blue-950/50 via-[#0b101a] to-[#0b0d13] p-6">

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-lg text-blue-400">
                ✦
              </div>

              <div>

                <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
                  ClassGPT AI Tutor
                </p>

                <h2 className="mt-1 text-xl font-semibold">
                  What are you trying to understand?
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Ask questions about your uploaded classroom material.
                </p>

              </div>

            </div>

            <button
              onClick={() => navigate("/chat")}
              className="mt-6 flex w-full items-center gap-3 rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-left transition hover:border-blue-400/30 hover:bg-black/30"
            >

              <span className="flex-1 text-sm text-slate-600">
                Ask ClassGPT anything...
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm">
                ↑
              </span>

            </button>

            <div className="mt-3 flex flex-wrap gap-2">

              {[
                "Summarize my notes",
                "Explain a concept",
                "Create study questions",
              ].map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => navigate("/chat")}
                  className="rounded-lg border border-white/[0.06] px-3 py-1.5 text-xs text-slate-500 transition hover:border-white/10 hover:text-slate-300"
                >
                  {prompt}
                </button>
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            QUICK ACCESS
        ================================================== */}

        <section className="mt-8">

          <div className="mb-4 flex items-center justify-between">

            <div>
              <h2 className="font-semibold">
                Quick access
              </h2>

              <p className="mt-1 text-xs text-slate-600">
                Jump back into your classroom.
              </p>
            </div>

          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            <QuickCard
              icon="✦"
              title="AI Tutor"
              description="Ask questions and learn."
              onClick={() => navigate("/chat")}
            />

            <QuickCard
              icon="▤"
              title="Notes"
              description="Review your study material."
              onClick={() => navigate("/notes")}
            />

            <QuickCard
              icon="◇"
              title="Notices"
              description="Check classroom updates."
              onClick={() => navigate("/notices")}
            />

            <QuickCard
              icon="◷"
              title="Timetable"
              description="View your schedule."
              onClick={() => navigate("/timetable")}
            />

          </div>

        </section>

        {/* =================================================
            LOWER GRID
        ================================================== */}

        <section className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">

          {/* Upload */}

          <div className="rounded-2xl border border-white/[0.07] bg-[#0b0e14] p-6">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                  Knowledge base
                </p>

                <h2 className="mt-2 text-lg font-semibold">
                  Add classroom material
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Upload a PDF to make it available to the RAG system.
                </p>

              </div>

              <div className="hidden h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 sm:flex">
                ↑
              </div>

            </div>

            <form
              onSubmit={handleUpload}
              className="mt-6"
            >

              <label className="group block cursor-pointer rounded-xl border border-dashed border-white/[0.1] bg-black/10 p-6 text-center transition hover:border-blue-500/30 hover:bg-blue-500/[0.02]">

                <input
                  type="file"
                  accept="application/pdf,.pdf"
                  onChange={(event) =>
                    setFile(event.target.files?.[0] || null)
                  }
                  className="hidden"
                />

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-500 transition group-hover:text-blue-400">
                  ↑
                </div>

                <p className="mt-3 text-sm font-medium text-slate-300">
                  {file ? file.name : "Choose a PDF file"}
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  PDF documents only
                </p>

              </label>

              <button
                type="submit"
                disabled={uploading || !file}
                className="mt-4 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {uploading ? "Processing upload..." : "Upload material"}
              </button>

            </form>

            {message && (
              <div className="mt-4 rounded-xl border border-emerald-500/15 bg-emerald-500/[0.05] p-4">

                <div className="flex gap-3">

                  <span className="text-emerald-400">
                    ✓
                  </span>

                  <p className="text-sm leading-6 text-emerald-300">
                    {message}
                  </p>

                </div>

              </div>
            )}

            {error && (
              <div className="mt-4 rounded-xl border border-red-500/15 bg-red-500/[0.05] p-4">

                <div className="flex gap-3">

                  <span className="text-red-400">
                    !
                  </span>

                  <p className="text-sm leading-6 text-red-300">
                    {error}
                  </p>

                </div>

              </div>
            )}

          </div>

          {/* Activity */}

          <div className="rounded-2xl border border-white/[0.07] bg-[#0b0e14] p-6">

            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
              Workspace
            </p>

            <h2 className="mt-2 text-lg font-semibold">
              Recent activity
            </h2>

            <div className="mt-6 space-y-5">

              <Activity
                icon="✦"
                title="AI Tutor"
                description="Ready for your next question"
                color="blue"
              />

              <Activity
                icon="↑"
                title="Knowledge base"
                description="Upload course material"
                color="violet"
              />

              <Activity
                icon="◇"
                title="Notices"
                description="Check your latest updates"
                color="emerald"
              />

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}

/* ==========================================================
   QUICK CARD
========================================================== */

function QuickCard({ icon, title, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group rounded-2xl border border-white/[0.07] bg-[#0b0e14] p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/20 hover:bg-[#0d1119]"
    >

      <div className="flex items-center justify-between">

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-sm text-slate-400 transition group-hover:bg-blue-500/10 group-hover:text-blue-400">
          {icon}
        </div>

        <span className="text-slate-700 transition group-hover:translate-x-1 group-hover:text-blue-400">
          →
        </span>

      </div>

      <h3 className="mt-5 text-sm font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-xs text-slate-600">
        {description}
      </p>

    </button>
  );
}

/* ==========================================================
   ACTIVITY
========================================================== */

function Activity({ icon, title, description, color }) {
  const colors = {
    blue: "bg-blue-500/10 text-blue-400",
    violet: "bg-violet-500/10 text-violet-400",
    emerald: "bg-emerald-500/10 text-emerald-400",
  };

  return (
    <div className="flex items-center gap-3">

      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm ${colors[color]}`}
      >
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-sm font-medium">
          {title}
        </p>

        <p className="mt-0.5 truncate text-xs text-slate-600">
          {description}
        </p>

      </div>

    </div>
  );
}

export default Dashboard;