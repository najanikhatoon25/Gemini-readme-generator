
import { useState } from "react";

function App() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [readme, setReadme] = useState("");

  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
        <h1 className="text-xl font-bold tracking-wide">
          Readme<span className="text-violet-400">AI</span>
        </h1>

        <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
          Gemini Powered
        </span>
      </nav>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-5 py-10 md:px-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Documentation made simple
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Build your README with{" "}
            <span className="text-violet-400">AI.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
            Describe your project, add its features, and generate
            professional documentation in seconds.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Project form */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h3 className="text-xl font-semibold">Project Details</h3>
            <p className="mt-2 text-sm text-slate-400">
              Tell us about your project.
            </p>

            <form className="mt-7 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Project Name
                </label>
                <input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g. Task Management App"
                  className="w-full rounded-xl border border-white/10 bg-[#11182b] px-4 py-3 outline-none transition focus:border-violet-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Project Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What does your project do?"
                  rows={4}
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#11182b] px-4 py-3 outline-none transition focus:border-violet-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Key Features
                </label>
                <textarea
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                  placeholder={"User authentication\nTask management\nDashboard"}
                  rows={4}
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#11182b] px-4 py-3 outline-none transition focus:border-violet-400"
                />
                <p className="mt-2 text-xs text-slate-500">
                  Write one feature per line.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Technologies
                </label>
                <input
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  placeholder="React, Node.js, MongoDB"
                  className="w-full rounded-xl border border-white/10 bg-[#11182b] px-4 py-3 outline-none transition focus:border-violet-400"
                />
                <p className="mt-2 text-xs text-slate-500">
                  Separate technologies with commas.
                </p>
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-violet-600 px-5 py-3.5 font-semibold transition hover:bg-violet-500"
              >
                ✨ Generate README
              </button>
            </form>
          </section>

          {/* README preview */}
          <section className="min-h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-[#0f1729]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <h3 className="font-semibold">README Preview</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Your generated documentation
                </p>
              </div>

              <span className="rounded-md bg-white/5 px-3 py-1.5 text-xs text-slate-400">
                README.md
              </span>
            </div>

            <div className="p-6 md:p-8">
              {readme ? (
                <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-7 text-slate-300">
                  {readme}
                </pre>
              ) : (
                <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-3xl">
                    ✨
                  </div>

                  <h4 className="text-lg font-medium text-slate-200">
                    Your README starts here
                  </h4>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                    Fill in your project details and generate your
                    documentation to see it here.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Built with React, Tailwind CSS and Gemini AI
        </p>
      </main>
    </div>
  );
}

export default App;
