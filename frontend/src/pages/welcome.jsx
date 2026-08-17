import { useNavigate } from "react-router-dom";
import { FlippingWordSwap } from "@/components/ui/flipping-word-swap";

function Welcome() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070b] text-white">

      {/* Ambient background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" />

        <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="absolute right-[-10%] top-[30%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Navbar */}

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
            <span className="text-lg font-black">C</span>
          </div>

          <span className="text-lg font-bold tracking-tight">
            ClassGPT
          </span>

        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">

          <button className="transition hover:text-white">
            Features
          </button>

          <button className="transition hover:text-white">
            How it works
          </button>

          <button className="transition hover:text-white">
            About
          </button>

        </div>

        <button
          onClick={() => navigate("/login")}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium backdrop-blur-xl transition hover:bg-white/[0.08]"
        >
          Sign in
        </button>

      </nav>

      {/* Hero */}

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 pb-20 pt-12 lg:px-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

          {/* LEFT */}

          <div>

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 text-sm text-blue-300">

              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />

              Your intelligent classroom companion

            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">

              Your classroom.
              <br />

              <span className="text-slate-500">
                Supercharged by
              </span>

            </h1>

            <div className="mt-6 min-h-[72px]">

              <FlippingWordSwap
                word1="Artificial Intelligence"
                word2="Grounded Knowledge"
                duration={500}
                stagger={40}
                className="text-blue-400"
                toClassName="text-violet-400"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              />

            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              ClassGPT helps students understand classroom material,
              discover information, and ask questions using knowledge
              grounded in their own academic resources.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() => navigate("/dashboard")}
                className="group rounded-xl bg-blue-600 px-6 py-3.5 font-semibold shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Explore ClassGPT
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                onClick={() => navigate("/register")}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold backdrop-blur-xl transition hover:bg-white/[0.08]"
              >
                Create account
              </button>

            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">

              <span>✦ AI powered</span>
              <span>•</span>
              <span>RAG grounded</span>
              <span>•</span>
              <span>Student focused</span>

            </div>

          </div>

          {/* RIGHT — AI PREVIEW */}

          <div className="relative hidden lg:block">

            <div className="absolute -inset-10 rounded-[40px] bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0e14]/90 shadow-2xl shadow-black/50 backdrop-blur-xl">

              {/* Window header */}

              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">

                <div className="flex gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                </div>

                <span className="text-xs text-slate-500">
                  ClassGPT AI Tutor
                </span>

                <div className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />

              </div>

              {/* Chat */}

              <div className="space-y-5 p-6">

                <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-blue-600/90 p-4 text-sm leading-6">
                  Explain the main concept from today's lecture.
                </div>

                <div className="max-w-[88%] rounded-2xl rounded-tl-md border border-white/[0.06] bg-white/[0.04] p-4">

                  <div className="mb-3 flex items-center gap-2">

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/15 text-xs text-blue-400">
                      ✦
                    </div>

                    <span className="text-xs font-medium text-slate-400">
                      ClassGPT
                    </span>

                  </div>

                  <p className="text-sm leading-7 text-slate-300">
                    The main concept can be understood through three
                    connected ideas: foundation, application, and impact.
                    Here's how they relate...
                  </p>

                  <div className="mt-4 flex gap-2">

                    <span className="rounded-md bg-blue-500/10 px-2 py-1 text-[10px] text-blue-300">
                      Course Material
                    </span>

                    <span className="rounded-md bg-violet-500/10 px-2 py-1 text-[10px] text-violet-300">
                      AI Generated
                    </span>

                  </div>

                </div>

                {/* Input preview */}

                <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3">

                  <span className="flex-1 text-sm text-slate-600">
                    Ask ClassGPT anything...
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm">
                    ↑
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Welcome;