"use client";

import { useEffect, useState } from "react";

function Jokes() {
    const [jokes, setJokes] = useState({});
    const [showJokes, setShowJokes] = useState(true);

    const apiCall = async () => {
        const url = "https://v2.jokeapi.dev/joke/Programming?safe-mode";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setJokes(data);
    };

    useEffect(() => {
        apiCall();
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center p-6">

                <div className="w-full max-w-4xl rounded-[30px] border border-slate-700/50 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.15)] overflow-hidden">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-center">
                        <h1 className="text-5xl font-extrabold text-white tracking-wide">
                            😂 Programming Joke Generator
                        </h1>
                        <p className="mt-3 text-slate-200 text-lg">
                            Random Programming Jokes powered by JokeAPI 🚀
                        </p>
                    </div>

                    {/* Content */}
                    <div className="p-10 space-y-8">

                        {/* Joke */}
                        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 shadow-xl">
                            <h2 className="text-xl font-semibold text-cyan-400 mb-3">
                                💡 Joke Setup
                            </h2>

                            <p className="text-gray-200 text-xl leading-9">
                                {jokes.joke || jokes.setup}
                            </p>
                        </div>

                        {/* Reveal Section */}
                        {showJokes ? (
                            <div className="flex justify-center">
                                <button
                                    onClick={() => setShowJokes(false)}
                                    className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40 active:scale-95"
                                >
                                    👀 Reveal Details
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-5 rounded-2xl border border-slate-700 bg-slate-900/60 p-8 shadow-xl">

                                <div className="flex items-center justify-between rounded-xl bg-slate-800/70 p-4">
                                    <span className="text-slate-400 font-medium">
                                        🆔 Joke ID
                                    </span>
                                    <span className="font-bold text-white">
                                        {jokes.id}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between rounded-xl bg-slate-800/70 p-4">
                                    <span className="text-slate-400 font-medium">
                                        📂 Category
                                    </span>
                                    <span className="font-bold text-blue-400">
                                        {jokes.category}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between rounded-xl bg-slate-800/70 p-4">
                                    <span className="text-slate-400 font-medium">
                                        🎭 Type
                                    </span>
                                    <span className="font-bold text-purple-400 uppercase">
                                        {jokes.type}
                                    </span>
                                </div>

                                <div className="flex justify-center pt-4">
                                    <button
                                        onClick={() => setShowJokes(true)}
                                        className="rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/40 active:scale-95"
                                    >
                                        🙈 Hide Details
                                    </button>
                                </div>

                            </div>
                        )}

                        {/* Next Button */}
                        <div className="flex justify-center pt-4">
                            <button
                                onClick={() => apiCall()}
                                className="rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 px-10 py-4 text-xl font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 active:scale-95"
                            >
                                🔄 Next Joke
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Jokes;