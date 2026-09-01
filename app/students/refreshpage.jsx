"use client";

import { useRouter } from "next/navigation";

function RefreshPage() {

    const router = useRouter();

    function refreshButton() {
        router.refresh();
    }

    return (
        <div className="mt-8 flex flex-col items-center gap-5">

            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                🔄 Refresh Page
            </h1>

            <button
                onClick={() => refreshButton()}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 active:scale-95"
            >

                <span className="relative z-10 flex items-center gap-3">
                    🔄 Refresh Button
                </span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>

            </button>

        </div>
    );
}

export default RefreshPage;