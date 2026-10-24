
import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import ProjectForm from "./components/ProjectForm.jsx";
import Loading from "./components/Loading.jsx";
import ReadmePreview from "./components/ReadmePreview.jsx";
import { generateReadme } from "./services/readmeServices.js";

function App() {
  // Store form input
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [technologies, setTechnologies] = useState("");

  // Store generated README and UI status
  const [readme, setReadme] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Generate README using the backend API
  const handleGenerate = async () => {
    setIsLoading(true);
    setError("");
    setReadme("");

    try {
      const projectData = {
        projectName: projectName.trim(),
        description: description.trim(),

        features: features
          .split("\n")
          .map((feature) => feature.trim())
          .filter(Boolean),

        technologies: technologies
          .split(",")
          .map((technology) => technology.trim())
          .filter(Boolean),
      };

      const generatedReadme = await generateReadme(projectData);

      setReadme(generatedReadme);
    } catch (err) {
      setError(
        err.message || "Unable to generate README. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080b18] text-slate-100">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-violet-700/20 blur-[130px]" />

      <div className="pointer-events-none absolute -right-32 top-48 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

      {/* Navbar */}
      <Navbar />

      <main className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        {/* Hero section */}
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
            <span>
              <span className="mr-2 text-violet-400">✦</span>
              Clear overview
            </span>

            <span>
              <span className="mr-2 text-blue-400">✦</span>
              Organized features
            </span>

            <span>
              <span className="mr-2 text-purple-400">✦</span>
              Markdown ready
            </span>
          </div>
        </header>

        {/* Main workspace */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Project form */}
          <ProjectForm
            projectName={projectName}
            setProjectName={setProjectName}
            description={description}
            setDescription={setDescription}
            features={features}
            setFeatures={setFeatures}
            technologies={technologies}
            setTechnologies={setTechnologies}
            onGenerate={handleGenerate}
            isLoading={isLoading}
          />

          {/* README preview and loading state */}
          <section className="min-w-0">
            {error && (
              <div
                role="alert"
                className="mb-4 rounded-xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-300"
              >
                {error}
              </div>
            )}

            {isLoading ? (
              <Loading />
            ) : (
              <ReadmePreview readme={readme} />
            )}
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© 2026 ReadmeAI · Built for developers.</p>

          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Made by: Najni Saikh
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
