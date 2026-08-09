"use client";

import { useState } from "react";
import DoctorDrawer from "./DoctorDrawer";

export default function DoctorCards({ rows }) {

    const [open, setOpen] = useState(false);

    const [doctor, setDoctor] = useState(null);

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-12 px-6">

            <div className="mx-auto max-w-7xl">

                <div className="mb-12 text-center">

                    <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        🏥 Hospital Management
                    </h1>

                    <p className="mt-4 text-lg text-gray-400">
                        View doctor information with a modern premium interface.
                    </p>

                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {

                        rows.map((item) => (

                            <div
                                key={item.id}
                                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-cyan-500/20"
                            >

                                <div className="mb-6 flex items-center justify-between">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-2xl font-bold text-white shadow-lg">
                                        {item.name.charAt(0).toUpperCase()}
                                    </div>

                                    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-semibold text-cyan-300">
                                        ID #{item.id}
                                    </span>

                                </div>

                                <h2 className="text-2xl font-bold text-white">
                                    {item.name}
                                </h2>

                                <p className="mt-2 text-gray-400">
                                    Department
                                </p>

                                <h3 className="text-lg font-semibold text-emerald-400">
                                    {item.part}
                                </h3>

                                <p className="mt-5 text-gray-400">
                                    Hospital
                                </p>

                                <h3 className="text-lg font-semibold text-yellow-300">
                                    {item.hospitalName}
                                </h3>

                                <button

                                    onClick={() => {

                                        setDoctor(item);

                                        setOpen(true);

                                    }}

                                    className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/40 active:scale-95"

                                >

                                    View Details →

                                </button>

                            </div>

                        ))

                    }

                </div>

            </div>

            <DoctorDrawer

                open={open}

                setOpen={setOpen}

                doctor={doctor}

            />

        </div>

    )

}