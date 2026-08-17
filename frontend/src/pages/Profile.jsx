import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#07090d] text-white">

      {/* Header */}

      <header className="border-b border-white/[0.06] bg-[#07090d]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-black">
              C
            </div>

            <span className="font-bold">
              ClassGPT
            </span>
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="rounded-xl border border-white/[0.08] px-4 py-2 text-sm text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
          >
            ← Dashboard
          </button>

        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-10 lg:px-8">

        {/* Heading */}

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Account
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your ClassGPT account and personal information.
          </p>
        </div>

        {/* Profile card */}

        <section className="mt-8 rounded-2xl border border-white/[0.07] bg-[#0b0e14] p-6">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-violet-600 text-3xl font-bold shadow-xl shadow-blue-600/10">
              S
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                Student
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                student@classgpt.local
              </p>

              <span className="mt-3 inline-flex rounded-lg border border-emerald-500/15 bg-emerald-500/[0.06] px-2.5 py-1 text-xs text-emerald-400">
                Active account
              </span>
            </div>

          </div>

        </section>

        {/* Personal information */}

        <section className="mt-5 rounded-2xl border border-white/[0.07] bg-[#0b0e14] p-6">

          <h2 className="font-semibold">
            Personal information
          </h2>

          <p className="mt-1 text-sm text-slate-600">
            Your basic account information.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">

            <ProfileField
              label="Full name"
              value="Student"
            />

            <ProfileField
              label="Email"
              value="student@classgpt.local"
            />

            <ProfileField
              label="Role"
              value="Student"
            />

            <ProfileField
              label="Account status"
              value="Active"
            />

          </div>

        </section>

        {/* Documents shortcut */}

        <section className="mt-5 rounded-2xl border border-blue-500/15 bg-blue-950/20 p-6">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-semibold">
                Your classroom documents
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Manage the PDFs and study material associated with your account.
              </p>

            </div>

            <button
              onClick={() => navigate("/documents")}
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-500"
            >
              My Documents →
            </button>

          </div>

        </section>

      </div>

    </main>
  );
}

function ProfileField({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
        {label}
      </p>

      <div className="mt-2 rounded-xl border border-white/[0.06] bg-black/10 px-4 py-3 text-sm text-slate-300">
        {value}
      </div>
    </div>
  );
}

export default Profile;