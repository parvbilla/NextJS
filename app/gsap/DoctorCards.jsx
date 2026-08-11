"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DoctorCards({ rows }) {

    const headingRef = useRef(null);
    const cardRef = useRef([]);

    // useEffect(() => {

    //     const tl = gsap.timeline();

    //     // Heading Animation
    //     tl.from(headingRef.current, {
    //         y: -120,
    //         opacity: 0,
    //         scale: 0.7,
    //         rotationX: -90,
    //         duration: 1.2,
    //         ease: "back.out(1.7)",
    //     });

    //     // Cards Animation
    //     tl.from(
    //         cardRef.current.filter(Boolean),
    //         {
    //             y: 120,
    //             opacity: 0,
    //             scale: 0.6,
    //             rotateY: 45,
    //             duration: 1,
    //             stagger: 0.2,
    //             ease: "power4.out",
    //         },
    //         "-=0.5"
    //     );

    //     // Floating Animation
    //     gsap.to(cardRef.current.filter(Boolean), {
    //         y: -8,
    //         duration: 2,
    //         repeat: -1,
    //         yoyo: true,
    //         stagger: 0.15,
    //         ease: "sine.inOut",
    //     });

    // }, []);

    console.log(rows);

    return (

        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-8 py-12">

            {/* Background */}

            <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

            <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-3xl"></div>

            {/* Heading */}

            <h1
                ref={headingRef}
                className="relative z-10 mb-16 text-center text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
                🏥 Hospital Management
            </h1>

            {/* Cards */}

            <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {rows.map((doctor, index) => {

                    console.log(doctor);

                    return (

                        <div
                            key={doctor.id}
                            ref={(el) => (cardRef.current[index] = el)}
                            onMouseEnter={(e) => {

                                gsap.to(e.currentTarget, {
                                    scale: 1.07,
                                    rotateY: 10,
                                    rotateX: -8,
                                    y: -15,
                                    boxShadow: "0px 30px 60px rgba(34,211,238,0.45)",
                                    duration: 0.4,
                                    ease: "power3.out",
                                });

                            }}
                            onMouseLeave={(e) => {

                                gsap.to(e.currentTarget, {
                                    scale: 1,
                                    rotateY: 0,
                                    rotateX: 0,
                                    y: 0,
                                    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                                    duration: 0.4,
                                    ease: "power3.out",
                                });

                            }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-7 shadow-2xl transition-all"
                        >

                            {/* Shine */}

                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>

                            {/* Avatar */}

                            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-5xl shadow-xl">
                                👨‍⚕️
                            </div>

                            {/* Name */}

                            <h2 className="mb-5 text-center text-3xl font-bold text-cyan-300">
                                {doctor.name}
                            </h2>

                            {/* Speciality */}

                            <div className="mb-4 rounded-xl bg-slate-900/60 p-4">
                                <p className="text-sm text-gray-400">
                                    Speciality
                                </p>

                                <h3 className="mt-1 text-xl font-semibold text-green-400">
                                    🩺 {doctor.part}
                                </h3>
                            </div>

                            {/* Hospital */}

                            <div className="rounded-xl bg-slate-900/60 p-4">
                                <p className="text-sm text-gray-400">
                                    Hospital
                                </p>

                                <h3 className="mt-1 text-xl font-semibold text-purple-300">
                                    🏥 {doctor.hospitalName}
                                </h3>
                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );
}