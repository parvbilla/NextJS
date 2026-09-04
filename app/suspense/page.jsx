import { Suspense } from "react";
import User from "./user";
import Loading from "./loading";

function Suspenses() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black grid grid-cols-1 lg:grid-cols-2">

                {/* Left Side */}
                <div className="relative flex flex-col justify-center items-center p-10 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>

                    <div className="relative z-10 max-w-xl">

                        <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-cyan-300 text-sm font-semibold">
                            🚀 React Suspense Demo
                        </span>

                        <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                            HTML
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                {" "}Static{" "}
                            </span>
                            Page
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-400">
                            This section is rendered immediately because it is
                            static content. The right panel demonstrates how
                            React Suspense loads asynchronous content without
                            blocking the entire page.
                        </p>

                        <div className="mt-10 flex gap-4">

                            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-xl px-6 py-5">
                                <h2 className="text-3xl font-bold text-cyan-400">
                                    ⚡
                                </h2>
                                <p className="mt-2 text-slate-300">
                                    Instant UI
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-xl px-6 py-5">
                                <h2 className="text-3xl font-bold text-purple-400">
                                    ⏳
                                </h2>
                                <p className="mt-2 text-slate-300">
                                    Suspense Loading
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center p-8">

                    <div className="w-full max-w-xl rounded-3xl border border-slate-700/60 bg-white/5 backdrop-blur-2xl shadow-2xl p-8">

                        <h2 className="mb-8 text-center text-3xl font-bold text-white">
                            👨‍💻 Dynamic Component
                        </h2>

                        <Suspense fallback={<Loading />}>
                            <User />
                        </Suspense>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Suspenses;