"use client"

import { useRouter } from "next/navigation";

function Home() {

    const router = useRouter();

    function goToDashboard() {
        router.push("/dashboard");
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 px-6">

            <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/70 backdrop-blur-2xl shadow-2xl shadow-cyan-500/20 p-12 text-center">

                {/* Background Glow */}
                <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"></div>

                {/* Home Icon */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/40">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 10.5L12 3l9 7.5M5.25 9.75V21h13.5V9.75"
                        />
                    </svg>

                </div>

                {/* Heading */}
                <h1 className="mt-8 text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Home Page
                </h1>

                {/* Description */}
                <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                    Welcome to your Next.js application.
                    <br />
                    Click the button below to open the Dashboard.
                </p>

                {/* Button */}
                <button
                    onClick={() => goToDashboard()}
                    className="mt-10 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-xl shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/60 active:scale-95"
                >
                    Go To Dashboard

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

            </div>

        </div>

    );
}

export default Home;