function ProjectForm({
    ProjectName,
    setProjectName,
    description,
    setdescription,
    features,
    setFeatures,
    technologies,
    setTechnologies,
    onGenerate,
    isLoading,
}){
    return(
        <section className="rounded-3xl border border-white/[0.09] bg-gradient-to-br from-[#151a30]/95 to-[#101529]/95 p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">
        <div className="mb-7">
        <h2 className="text-xl font-semibold text-white">Project Details</h2>
        <p  className="mt-2 text-sm leading-6 text-slate-400">         
         Enter your project information to generate a README.
        </p>
        </div>
        <form
        onSubmit={(e) => {
          e.preventDefault();
          onGenerate();
        }}
        className="space-y-5"
      >
        {/* project name */}
     <div>
        <lable  className="mb-2 block text-sm font-medium text-slate-300">Project Name</lable>
        <input
        type="text"
        value={ProjectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="e.g Student Feedback Manager"
        required
        className="w-full rounded-xl border border-white/10 bg-[#0b1020]/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10"
        />  
     </div>
      
      {/* description */}
      <div>
        <lable className="mb-2 block text-sm font-medium text-slate-300">Project Description</lable>
        <textarea
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        placeholder="What does your project do?"
        rows={4}
        required
        className="w-full resize-y rounded-xl border border-white/10 bg-[#0b1020]/80 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10"
        />

        {/* features */}

        <div>
            <lable className="mb-2 block text-sm font-medium text-slate-300">Key Features</lable>
            <textarea
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            placeholder={"Enter one feature per line\nUser authentication\nCreate and manage notes"}
            rows={4}
            required
            className="w-full resize-y rounded-xl border border-white/10 bg-[#0b1020]/80 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10"
            />
        </div>

        {/* technology */}
        <div>
            <lable className="mb-2 block text-sm font-medium text-slate-300">Technologies</lable>
            <input
            type="text"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            placeholder="React, Node.js, Express, MongoDB"
            required
            className="w-full rounded-xl border border-white/10 bg-[#0b1020]/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10"
          />
        </div>

        <button
        type="submit"
        disabled={isLoading}
       className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:from-violet-400 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
            {isLoading ? "Generating..." : "Generate README"}
        </button>  
      </div>
        </form>
        </section>
    )
}
export default ProjectForm;