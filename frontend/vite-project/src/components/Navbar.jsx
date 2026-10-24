function Navbar() {
  return (
    <nav className="relative z-10 border-b border-white/[0.08] bg-[#0b1020]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        {/* logo and brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 text-xl font-black text-white shadow-lg shadow-violet-600/25">
            R
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-white">
              Readme <span className="text-violet-400">AI</span>
            </h1>
            <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500">
              {" "}
              SMART DOCUMENTATION
            </p>
          </div>
        </div>

        {/* gemini status */}
        <div className="flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3 py-2 sm:px-4">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

          <span className="text-xs font-medium text-violet-200 sm:text-sm">
            Gemini Powered
          </span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
