"use client";

import { useActionState, useEffect } from "react";
import DoctorAction from "./doctorAction";
import { toast } from "sonner";

const initialState = {
    success: false,
    message: ""
};

function DocotorForm() {

    const [state, action] = useActionState(DoctorAction, initialState);

    useEffect(() => {
        console.log(state);

        if (state.success) {
            toast.success(state.message);
        }
    }, [state]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-6 py-10">

            <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 p-10">

                <div className="text-center mb-10">

                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        🏥 Doctor Form
                    </h1>

                    <p className="mt-4 text-gray-400 text-lg">
                        Add Doctor Details into Hospital Database
                    </p>

                </div>

                <form action={action} className="space-y-7">

                    <div>

                        <label className="mb-2 block text-sm font-semibold text-gray-300">
                            Doctor Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter doctor name"
                            required
                            name="name"
                            className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500"
                        />

                    </div>

                    <div>

                        <label className="mb-2 block text-sm font-semibold text-gray-300">
                            Department
                        </label>

                        <input
                            type="text"
                            placeholder="Enter department"
                            required
                            name="part"
                            className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500"
                        />

                    </div>

                    <div>

                        <label className="mb-2 block text-sm font-semibold text-gray-300">
                            Hospital Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter hospital name"
                            required
                            name="hospitalName"
                            className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500"
                        />

                    </div>

                    <button
                        className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 py-4 text-lg font-bold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/50 active:scale-95"
                    >
                        🚀 Submit
                    </button>

                </form>

            </div>

        </div>
    );
}

export default DocotorForm;



