"use client";

import { motion } from "framer-motion";

export default function DoctorCard({ rows }) {

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">

            {/* Animated Background */}

            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl"
            />

            <motion.div
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-3xl"
            />

            <div className="relative z-10 p-10">

                {/* Heading */}

                <motion.h1

                    initial={{
                        opacity: 0,
                        y: -100,
                        scale: 0.8,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}

                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 120,
                    }}

                    className="text-6xl font-black text-center mb-14 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"

                >
                    🏥 Hospital Management
                </motion.h1>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {
                        rows.map((doctor, index) => (

                            <motion.div

                                key={doctor.id}

                                initial={{
                                    opacity: 0,
                                    y: 100,
                                    scale: 0.7,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}

                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.2,
                                    type: "spring",
                                    stiffness: 120,
                                }}

                                whileHover={{
                                    scale: 1.08,
                                    rotateY: 10,
                                    rotateX: -5,
                                    y: -15,
                                    boxShadow:
                                        "0px 25px 60px rgba(34,211,238,0.45)",
                                }}

                                whileTap={{
                                    scale: 0.95,
                                }}

                                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-7 shadow-2xl cursor-pointer"

                            >

                                {/* Animated Glow */}

                                <motion.div

                                    animate={{
                                        x: ["-100%", "250%"],
                                    }}

                                    transition={{
                                        repeat: Infinity,
                                        duration: 4,
                                        ease: "linear",
                                    }}

                                    className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"

                                />

                                {/* Doctor Icon */}

                                <motion.div

                                    whileHover={{
                                        rotate: 360,
                                        scale: 1.2,
                                    }}

                                    transition={{
                                        duration: 0.8,
                                    }}

                                    className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-4xl mx-auto shadow-xl"

                                >
                                    👨‍⚕️
                                </motion.div>

                                <motion.h2

                                    initial={{
                                        opacity: 0,
                                    }}

                                    animate={{
                                        opacity: 1,
                                    }}

                                    transition={{
                                        delay: 0.3,
                                    }}

                                    className="text-3xl font-bold mt-6 text-center text-cyan-300"

                                >
                                    {doctor.name}
                                </motion.h2>

                                <motion.p

                                    initial={{
                                        x: -40,
                                        opacity: 0,
                                    }}

                                    animate={{
                                        x: 0,
                                        opacity: 1,
                                    }}

                                    transition={{
                                        delay: 0.5,
                                    }}

                                    className="mt-6 text-lg text-center text-green-400"

                                >
                                    🩺 {doctor.part}
                                </motion.p>

                                <motion.p

                                    initial={{
                                        x: 40,
                                        opacity: 0,
                                    }}

                                    animate={{
                                        x: 0,
                                        opacity: 1,
                                    }}

                                    transition={{
                                        delay: 0.7,
                                    }}

                                    className="mt-3 text-center text-purple-300"

                                >
                                    🏥 {doctor.hospitalName}
                                </motion.p>

                            </motion.div>

                        ))
                    }

                </div>

            </div>

        </div>

    );
}






