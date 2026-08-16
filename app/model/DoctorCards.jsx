"use client";

import { useState } from "react";
import Modal from "./Modal";

function DoctorCards({ rows }) {
    const [doctor, setDoctor] = useState(null);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-10">

                <h1 className="text-5xl font-extrabold text-center text-white mb-12 tracking-wide">
                    🏥 Doctor Cards
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {rows.map((item) => (
                        <div
                            key={item.id}
                            className="group rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/30 hover:border-cyan-400"
                        >
                            <div className="flex flex-col items-center">

                                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                                    {item.name.charAt(0).toUpperCase()}
                                </div>

                                <h1 className="mt-6 text-2xl font-bold text-white">
                                    {item.name}
                                </h1>

                                <button
                                    onClick={() => {
                                        setOpen(true);
                                        setDoctor(item);
                                    }}
                                    className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/50 active:scale-95"
                                >
                                    View Details
                                </button>

                            </div>
                        </div>
                    ))}

                </div>

                {open && (
                    <Modal
                        doctor={doctor}
                        closeModal={() => setOpen(false)}
                    />
                )}

            </div>
        </>
    );
}

export default DoctorCards;