import { useNavigate } from "react-router-dom";
import { FlippingWordSwap } from "@/components/ui/flipping-word-swap";

function Welcome() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070b] text-white">

      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main glow */}
        <div className="absolute left-1/2 top-[-250px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[150px]" />

        {/* Violet glow */}
        <div className="absolute bottom-[-250px] left-[-150px] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

        {/* Cyan glow */}
        <div className="absolute right-[-150px] top-[30%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      </div>

      {/* Subtle grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        {/* Logo */}

        <button
          onClick={() => navigate("/welcome")}
          className="group flex items-center gap-3"
        >

          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20 transition duration-300 group-hover:scale-105 group-hover:shadow-blue-500/40">

            <span className="text-lg font-black">
              C
            </span>

          </div>

          <span className="text-lg font-bold tracking-tight">
            ClassGPT
          </span>

        </button>

        {/* Navigation */}

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

        {/* Sign in */}

        <button
          onClick={() => navigate("/login")}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.08]"
        >
          Sign in
        </button>

      </nav>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 pb-20 pt-10 lg:px-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div>

            {/* Badge */}

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 text-sm text-blue-300 backdrop-blur-xl">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>

              Intelligent learning, reimagined

            </div>

            {/* Main heading */}

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">

              Your classroom.

              <br />

              <span className="text-slate-500">
                Supercharged by
              </span>

            </h1>

            {/* Animated words */}

            <div className="mt-7 min-h-[76px]">

              <FlippingWordSwap
                word1="Artificial Intelligence"
                word2="Your Buddyyy!"
                duration={500}
                stagger={40}
                className="text-blue-400"
                toClassName="text-violet-400"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.045em",
                }}
              />

            </div>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

              From “I have no idea” to “okay, I get it.”
               Without the academic meltdown.

            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() => navigate("/dashboard")}
                className="group relative overflow-hidden rounded-xl bg-blue-600 px-6 py-3.5 font-semibold shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30"
              >

                <span className="relative z-10">
                  Explore ClassGPT
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </button>

              <button
                onClick={() => navigate("/register")}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
              >
                Create account
              </button>

            </div>

            {/* Trust indicators */}

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">

              <span className="flex items-center gap-2">
                <span className="text-blue-400">✦</span>
                AI powered
              </span>

              <span className="text-slate-700">
                •
              </span>

              <span className="flex items-center gap-2">
                <span className="text-violet-400">◆</span>
                RAG grounded
              </span>

              <span className="text-slate-700">
                •
              </span>

              <span className="flex items-center gap-2">
                <span className="text-cyan-400">◈</span>
                Student focused
              </span>

            </div>

          </div>

          {/* =================================================
              RIGHT SIDE — AI PREVIEW
          ================================================== */}

          <div className="relative hidden lg:block">

            {/* Glow behind card */}

            <div className="absolute -inset-12 rounded-[50px] bg-blue-500/10 blur-3xl" />

            {/* Floating decoration */}

            <div className="absolute -right-6 -top-8 z-20 rounded-2xl border border-white/10 bg-[#0c1018]/90 px-4 py-3 shadow-xl backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  ✓
                </div>

                

              </div>

            </div>

            {/* Main application preview */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0e14]/95 shadow-2xl shadow-black/60 backdrop-blur-xl">

              {/* Browser header */}

              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">

                <div className="flex gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />

                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />

                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />

                </div>

                <span className="text-xs text-slate-500">
                  ClassGPT AI Tutor
                </span>

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

                  <span className="text-[10px] text-emerald-400">
                    Online
                  </span>

                </div>

              </div>

              {/* Application body */}

              <div className="p-6">

                {/* Small heading */}

                <div className="mb-6">

                  <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                    AI Classroom Assistant
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    let's cook!!
                  </p>

                </div>

                {/* User message */}

                <div className="ml-auto max-w-[78%] rounded-2xl rounded-tr-md bg-blue-600/90 p-4 text-sm leading-6 shadow-lg shadow-blue-900/10">

                  Explain the main concept from
                  today's lecture.

                </div>

                {/* AI response */}

                <div className="mt-5 max-w-[90%] rounded-2xl rounded-tl-md border border-white/[0.06] bg-white/[0.035] p-5">

                  <div className="mb-4 flex items-center gap-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-sm text-blue-400">
                      ✦
                    </div>

                    <div>

                      <p className="text-xs font-semibold">
                        ClassGPT
                      </p>

                      <p className="text-[10px] text-slate-600">
                        AI Tutor
                      </p>

                    </div>

                  </div>

                  <p className="text-sm leading-7 text-slate-300">

                    The main concept can be understood
                    through three connected ideas:
                    foundation, application, and impact.

                  </p>

                  {/* Source indicators */}

                  <div className="mt-5 flex flex-wrap gap-2">

                    <span className="rounded-lg border border-blue-400/10 bg-blue-500/10 px-2.5 py-1 text-[10px] text-blue-300">
                      Course Material
                    </span>

                    <span className="rounded-lg border border-violet-400/10 bg-violet-500/10 px-2.5 py-1 text-[10px] text-violet-300">
                      RAG Retrieved
                    </span>

                  </div>

                </div>

                {/* Suggested prompts */}

                <div className="mt-5 flex gap-2">

                  <div className="rounded-lg border border-white/[0.06] px-3 py-2 text-[10px] text-slate-500">
                    Summarize this
                  </div>

                  <div className="rounded-lg border border-white/[0.06] px-3 py-2 text-[10px] text-slate-500">
                    Explain simply
                  </div>

                </div>

                {/* Input */}

                <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3">

                  <span className="flex-1 text-sm text-slate-600">
                    Ask ClassGPT anything...
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm shadow-lg shadow-blue-600/20">
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