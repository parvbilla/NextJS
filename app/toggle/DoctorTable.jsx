"use client";

function DoctorTable({ rows }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-[#020617] dark:via-[#0f172a] dark:to-[#1e293b] transition-all duration-500 px-6 py-16">

            <div className="mx-auto max-w-7xl">

                <div className="mb-14 text-center">

                    <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-sky-400 dark:to-violet-500 bg-clip-text text-transparent">
                        🏥 Doctor Directory
                    </h1>

                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Premium Hospital Management Dashboard
                    </p>

                </div>

                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

                    {rows.map((item) => (

                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-3xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500 dark:hover:border-cyan-400/50 hover:shadow-2xl dark:hover:shadow-[0_25px_60px_rgba(34,211,238,0.25)]"
                        >

                            {/* Glow */}
                            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/20 dark:bg-cyan-500/20 blur-3xl group-hover:bg-cyan-500/30 dark:group-hover:bg-cyan-400/30 transition-all duration-500"></div>

                            {/* Avatar */}
                            <div className="relative z-10 flex justify-center mb-8">

                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 text-4xl shadow-xl shadow-cyan-500/30 ring-4 ring-slate-300 dark:ring-white/10">
                                    👨‍⚕️
                                </div>

                            </div>

                            {/* Doctor Name */}
                            <div className="relative z-10 space-y-5">

                                <div className="rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 p-4">

                                    <p className="text-xs uppercase tracking-[3px] text-cyan-600 dark:text-cyan-400">
                                        Doctor Name
                                    </p>

                                    <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white break-words">
                                        {item.name}
                                    </h2>

                                </div>

                                {/* Department */}

                                <div className="rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 p-4">

                                    <p className="text-xs uppercase tracking-[3px] text-emerald-600 dark:text-emerald-400">
                                        Department
                                    </p>

                                    <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white break-words">
                                        {item.part}
                                    </h2>

                                </div>

                                {/* Hospital */}

                                <div className="rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 p-4">

                                    <p className="text-xs uppercase tracking-[3px] text-yellow-600 dark:text-yellow-400">
                                        Hospital
                                    </p>

                                    <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white break-words">
                                        {item.hospitalName}
                                    </h2>

                                </div>

                            </div>

                            {/* Badge */}

                            <div className="relative z-10 mt-8 flex justify-center">

                                <span className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-2 text-sm font-bold text-white shadow-lg shadow-cyan-500/30">
                                    ⭐ Verified Doctor
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default DoctorTable;