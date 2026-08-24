"use client"

import { saveReContact } from "./action";

function Recontact() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 px-4">

            <div className="w-full max-w-md rounded-3xl border border-slate-700/50 bg-slate-900/70 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 p-8">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Contact Form
                    </h1>
                    <p className="text-slate-400 mt-2">
                        Enter your details below
                    </p>
                </div>

                <form action={saveReContact} className="space-y-6">

                    <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                            name="name"
                            className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                        />
                    </div>

                    <button
                        className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/50 active:scale-95"
                    >
                        Submit
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Recontact;