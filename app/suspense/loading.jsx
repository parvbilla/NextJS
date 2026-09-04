function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black">

            {/* Background Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
            <div className="absolute right-20 top-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>

            {/* Loading Card */}
            <div className="relative z-10 w-full max-w-md rounded-3xl border border-slate-700/60 bg-slate-900/70 backdrop-blur-xl shadow-2xl p-10">

                {/* Spinner */}
                <div className="flex justify-center">
                    <div className="relative h-20 w-20">

                        <div className="absolute inset-0 rounded-full border-4 border-slate-700"></div>

                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-500 animate-spin"></div>

                    </div>
                </div>

                {/* Heading */}
                <h1 className="mt-8 text-center text-3xl font-extrabold text-white">
                    Loading...
                </h1>

                <p className="mt-3 text-center text-slate-400">
                    Please wait while we prepare your content 🚀
                </p>

                {/* Progress Bar */}
                <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse"></div>
                </div>

                {/* Skeleton Loader */}
                <div className="mt-8 space-y-4">

                    <div className="h-5 w-3/4 rounded-md bg-slate-800 animate-pulse"></div>

                    <div className="h-4 w-full rounded-md bg-slate-800 animate-pulse"></div>

                    <div className="h-4 w-5/6 rounded-md bg-slate-800 animate-pulse"></div>

                    <div className="h-4 w-2/3 rounded-md bg-slate-800 animate-pulse"></div>

                </div>

            </div>

        </div>
    );
}

export default Loading;