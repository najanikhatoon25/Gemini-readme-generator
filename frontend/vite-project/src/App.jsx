import { useState } from "react";

function App() {
  const [ProjectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [readme, setReadme] = useState("");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080b18] text-slate-100">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-violet-700/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-48 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

      {/* Navbar */}
      <nav className="relative z-10 border-b border-white/[0.08] bg-[#0b1020]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 text-xl font-black text-white shadow-lg shadow-violet-600/25">
              R
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-white">
                Readme<span className="text-violet-400">AI</span>
              </h1>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500">
                SMART DOCUMENTATION
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3 py-2 sm:px-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            <span className="text-xs font-medium text-violet-200 sm:text-sm">
              Gemini Powered
            </span>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        {/* Hero */}
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 text-xs font-semibold tracking-wide text-violet-300 sm:text-sm">
            <span className="text-blue-400">✦</span>
            YOUR AI DOCUMENTATION ASSISTANT
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build your README
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text pb-2 text-transparent">
              with AI.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
            Turn your project ideas into polished documentation.
            Describe what you built and let AI organize the details.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-400 sm:text-sm">
            <span><span className="mr-2 text-violet-400">✦</span>Clear overview</span>
            <span><span className="mr-2 text-blue-400">✦</span>Organized features</span>
            <span><span className="mr-2 text-purple-400">✦</span>Markdown ready</span>
          </div>
        </header>

        {/* Workspace */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Project form */}
          <section className="rounded-3xl border border-white/[0.09] bg-gradient-to-br from-[#151a30]/95 to-[#101529]/95 p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-blue-500/10 text-xl text-violet-300">
                  ✎
                </div>
                <h3 className="text-xl font-bold text-white">
                  Project details
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Tell us what makes your project unique.
                </p>
              </div>

              <span className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-semibold tracking-wider text-slate-500">
                STEP 01
              </span>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Project name
                </label>
                <input
                  value={ProjectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g. TaskFlow"
                  className="w-full rounded-xl border border-white/[0.09] bg-[#0b1020]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-violet-400/30 focus:border-violet-400/60 focus:bg-[#0c1225] focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Project description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What problem does your project solve?"
                  rows={4}
                  className="w-full resize-y rounded-xl border border-white/[0.09] bg-[#0b1020]/80 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 hover:border-violet-400/30 focus:border-violet-400/60 focus:bg-[#0c1225] focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Key features
                </label>
                <textarea
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                  placeholder={"User authentication\nTask management\nResponsive dashboard"}
                  rows={4}
                  className="w-full resize-y rounded-xl border border-white/[0.09] bg-[#0b1020]/80 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 hover:border-violet-400/30 focus:border-violet-400/60 focus:bg-[#0c1225] focus:ring-4 focus:ring-violet-500/10"
                />
                <p className="mt-2 text-xs text-slate-500">
                  Tip: Add one feature per line.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Technologies used
                </label>
                <input
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  placeholder="React, Node.js, MongoDB"
                  className="w-full rounded-xl border border-white/[0.09] bg-[#0b1020]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-violet-400/30 focus:border-violet-400/60 focus:bg-[#0c1225] focus:ring-4 focus:ring-violet-500/10"
                />
                <p className="mt-2 text-xs text-slate-500">
                  Separate technologies with commas.
                </p>
              </div>

              <button
                type="button"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-violet-900/30 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-700/20 focus:outline-none focus:ring-4 focus:ring-violet-500/20"
              >
                <span className="text-lg transition group-hover:rotate-12">✦</span>
                Generate README
                <span className="ml-1 transition group-hover:translate-x-1">→</span>
              </button>

              <p className="text-center text-xs text-slate-500">
                AI-powered documentation · Ready for your repository
              </p>
            </form>
          </section>

          {/* README preview */}
          <section className="overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br from-[#151a30]/95 to-[#0f1529]/95 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] bg-white/[0.02] px-5 py-5 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-violet-500/10 text-xl text-blue-300">
                  ▤
                </div>
                <div>
                  <h3 className="font-bold text-white">README preview</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Your documentation workspace
                  </p>
                </div>
              </div>

              <span className="rounded-lg border border-white/[0.08] bg-[#0b1020]/70 px-3 py-2 font-mono text-xs text-slate-400">
                README.md
              </span>
            </div>

            <div className="min-h-[560px] p-5 sm:p-7">
              {readme ? (
                <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-7 text-slate-300">
                  {readme}
                </pre>
              ) : (
                <div className="flex min-h-[500px] flex-col items-center justify-center rounded-2xl border border-dashed border-violet-400/20 bg-gradient-to-br from-violet-500/[0.06] via-[#11172b]/60 to-blue-500/[0.06] px-6 py-12 text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-3xl shadow-lg shadow-violet-900/20">
                    ✨
                  </div>

                  <span className="mb-3 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3 py-1.5 text-xs font-semibold text-violet-300">
                    YOUR PREVIEW
                  </span>

                  <h4 className="text-xl font-bold tracking-tight text-white">
                    Your README starts here
                  </h4>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
                    Your project overview, features and setup instructions
                    will appear here once your README is generated.
                  </p>

                  <div className="mt-7 flex items-center gap-2">
                    <span className="h-1.5 w-8 rounded-full bg-violet-500/70" />
                    <span className="h-1.5 w-5 rounded-full bg-blue-500/60" />
                    <span className="h-1.5 w-3 rounded-full bg-purple-400/50" />
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© 2026 ReadmeAI · Built for developers.</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Made by : Najni saikh 
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
