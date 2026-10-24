
function ReadmePreview({ readme }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br from-[#151a30]/95 to-[#0f1529]/95 shadow-2xl shadow-black/20 backdrop-blur-2xl">
      {/* Preview Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
        <div>
          <h2 className="text-lg font-semibold text-white">
            README Preview
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Your generated documentation
          </p>
        </div>

        <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
          Markdown
        </span>
      </div>

      {/* Preview Content */}
      <div className="min-h-[560px] p-5 sm:p-7">
        {readme ? (
          <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-7 text-slate-300">
            {readme}
          </pre>
        ) : (
          <div className="flex min-h-[500px] flex-col items-center justify-center rounded-2xl border border-dashed border-violet-400/20 bg-gradient-to-br from-violet-500/[0.06] via-[#11172b]/60 to-blue-500/[0.06] px-6 py-12 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
              <span className="text-3xl text-violet-300">{"</>"}</span>
            </div>

            <h3 className="text-lg font-semibold text-white">
              Your README will appear here
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
              Fill in your project details and click Generate README to create
              your documentation.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-1.5 w-8 rounded-full bg-violet-400/70" />
              <span className="h-1.5 w-5 rounded-full bg-purple-400/50" />
              <span className="h-1.5 w-3 rounded-full bg-blue-400/40" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ReadmePreview;
