"use client";

import { useTheme } from "next-themes";

export default function ThemeButton() {

    const { theme, setTheme } = useTheme();

    return (
        <div className="fixed top-6 right-6 z-50">

            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl px-7 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-500 hover:scale-105 hover:border-cyan-400/60 hover:shadow-[0_20px_60px_rgba(34,211,238,0.35)] active:scale-95"
            >

                {/* Animated Background */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                {/* Glow */}
                <span className="absolute -left-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/40"></span>

                {/* Button Text */}
                <span className="relative flex items-center gap-3 text-lg font-bold tracking-wide text-white">

                    <span className="text-2xl transition-transform duration-500 group-hover:rotate-180">
                        {theme === "dark" ? "☀️" : "🌙"}
                    </span>

                    <span>
                        {theme === "dark"
                            ? "Light Mode"
                            : "Dark Mode"}
                    </span>

                </span>

            </button>

        </div>
    );
}