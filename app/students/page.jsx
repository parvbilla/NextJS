import { studentSave } from "./action";
import RefreshPage from "./refreshpage";
import { db } from "../config/db";

async function Students() {

    const [rows] = await db.query("SELECT * FROM student");

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 text-white px-6 py-10 flex flex-col items-center">

            {/* Heading */}

            <h1 className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                🎓 Student Management System
            </h1>

            {/* Form */}

            <form
                action={studentSave}
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
                        placeholder="Enter Your Name"
                        className="w-full rounded-xl border border-slate-600 bg-slate-900/70 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold text-cyan-300">
                        Course
                    </label>

                    <input
                        type="text"
                        name="course"
                        required
                        placeholder="Enter Your Course"
                        className="w-full rounded-xl border border-slate-600 bg-slate-900/70 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-lg font-semibold text-cyan-300">
                        College
                    </label>

                    <input
                        type="text"
                        name="college"
                        required
                        placeholder="Enter Your College"
                        className="w-full rounded-xl border border-slate-600 bg-slate-900/70 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                    />
                </div>

                <button
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 font-bold text-lg shadow-lg hover:scale-[1.02] hover:shadow-cyan-500/30 active:scale-95 transition-all duration-300"
                >
                    🚀 Submit
                </button>

            </form>

            {/* Refresh Button */}

            <div className="mt-6">
                <RefreshPage />
            </div>

            {/* Student Data */}

            <div className="w-full max-w-6xl mt-12">

                <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    📚 Student Records
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
                                        🎓
                                    </div>
                                </div>

                                <div className="space-y-4">

                                    <div className="bg-slate-900/50 rounded-xl p-3">
                                        <p className="text-sm text-gray-400">
                                            Student Name
                                        </p>

                                        <h1 className="text-xl font-bold text-cyan-300">
                                            {item.name}
                                        </h1>
                                    </div>

                                    <div className="bg-slate-900/50 rounded-xl p-3">
                                        <p className="text-sm text-gray-400">
                                            Course
                                        </p>

                                        <h1 className="text-xl font-bold text-green-400">
                                            {item.course}
                                        </h1>
                                    </div>

                                    <div className="bg-slate-900/50 rounded-xl p-3">
                                        <p className="text-sm text-gray-400">
                                            College
                                        </p>

                                        <h1 className="text-xl font-bold text-purple-400">
                                            {item.college}
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

export default Students;