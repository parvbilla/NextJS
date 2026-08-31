function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden">

            {/* Background Blur Effects */}
            <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute right-20 top-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>

            {/* Loading Card */}
            <div className="relative z-10 w-full max-w-lg rounded-3xl border border-slate-700/50 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.15)] p-10">

                {/* Animated Spinner */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full border-[6px] border-slate-700"></div>

                        <div className="absolute inset-0 w-24 h-24 rounded-full border-[6px] border-transparent border-t-cyan-400 border-r-blue-500 animate-spin"></div>

                        <div className="absolute inset-3 w-[72px] h-[72px] rounded-full border-[4px] border-transparent border-b-purple-500 animate-spin"></div>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="mt-10 text-center text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Loading...
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-center text-slate-400 text-lg">
                    Fetching the latest programming jokes 🚀
                </p>

                {/* Progress Bar */}
                <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse"></div>
                </div>

                {/* Skeleton Cards */}
                <div className="mt-10 space-y-4">
                    <div className="h-6 w-3/4 rounded-md bg-slate-800 animate-pulse"></div>
                    <div className="h-5 w-full rounded-md bg-slate-800 animate-pulse"></div>
                    <div className="h-5 w-5/6 rounded-md bg-slate-800 animate-pulse"></div>
                    <div className="h-5 w-2/3 rounded-md bg-slate-800 animate-pulse"></div>
                </div>

            </div>

        </div>
    );
}

export default Loading;