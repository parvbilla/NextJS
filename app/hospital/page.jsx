import { actionForm } from "./action";
import { db } from "../config/db";

async function Hospital() {

    const [rows] = await db.query("SELECT * FROM doctors");

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 text-white flex flex-col items-center px-6 py-10">

            {/* Heading */}

            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-10">
                🏥 Hospital Management
            </h1>

            {/* Form */}

            <form
                action={actionForm}
                className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 space-y-6"
            >

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold text-cyan-300">
                        Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter Doctor Name"
                        className="w-full rounded-xl border border-slate-600 bg-slate-900/70 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold text-cyan-300">
                        Part
                    </label>

                    <input
                        type="text"
                        name="part"
                        required
                        placeholder="Enter Speciality"
                        className="w-full rounded-xl border border-slate-600 bg-slate-900/70 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold text-cyan-300">
                        Hospital Name
                    </label>

                    <input
                        type="text"
                        name="hospitalName"
                        required
                        placeholder="Enter Hospital Name"
                        className="w-full rounded-xl border border-slate-600 bg-slate-900/70 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                    />
                </div>

                <button
                    className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 py-3 text-lg font-bold tracking-wide shadow-lg hover:scale-[1.02] hover:shadow-cyan-500/30 active:scale-95 transition-all duration-300"
                >
                    🚀 Submit
                </button>

            </form>

            {/* Doctor List */}

            <div className="w-full max-w-5xl mt-12">

                <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    👨‍⚕️ Doctor Data
                </h1>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {
                        rows.map((item, index) => (

                            <div
                                key={index}
                                className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl p-6 hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300"
                            >

                                <div className="flex justify-center mb-5">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-3xl shadow-lg">
                                        👨‍⚕️
                                    </div>
                                </div>

                                <div className="space-y-4">

                                    <div className="bg-slate-900/50 rounded-xl p-3">
                                        <p className="text-gray-400 text-sm">
                                            Doctor Name
                                        </p>
                                        <h1 className="text-xl font-bold text-cyan-300">
                                            {item.name}
                                        </h1>
                                    </div>

                                    <div className="bg-slate-900/50 rounded-xl p-3">
                                        <p className="text-gray-400 text-sm">
                                            Speciality
                                        </p>
                                        <h1 className="text-xl font-bold text-green-400">
                                            {item.part}
                                        </h1>
                                    </div>

                                    <div className="bg-slate-900/50 rounded-xl p-3">
                                        <p className="text-gray-400 text-sm">
                                            Hospital
                                        </p>
                                        <h1 className="text-xl font-bold text-purple-400">
                                            {item.hospitalName}
                                        </h1>
                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default Hospital;