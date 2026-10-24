function Loading(){
    return(
        <div className="flex flex-col items-center justify-center gap-3 py-8">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-400/20 border-t-violet-400">
         <p className="text-sm text-slate-400">
          Generating your README...
         </p>
        </div>

        </div>
    )
}
export default Loading;