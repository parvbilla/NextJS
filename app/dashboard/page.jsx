function Dashboard() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6">

            <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-violet-500/20 bg-slate-900/70 backdrop-blur-2xl shadow-2xl shadow-violet-500/20 p-12 text-center">

                {/* Background Glow */}
                <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>
                <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"></div>

                {/* Dashboard Icon */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-600 shadow-xl shadow-violet-500/40">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 13h8V3H3v10zm10 8h8V11h-8v10zM3 21h8v-6H3v6zm10-10h8V3h-8v8z"
                        />
                    </svg>

                </div>

                {/* Heading */}
                <h1 className="mt-8 text-5xl font-extrabold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                    Dashboard
                </h1>

                {/* Description */}
                <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                    Welcome to your dashboard.
                    <br />
                    Everything is ready and running successfully.
                </p>

                {/* Status Badge */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-300">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    System Online
                </div>

            </div>

        </div>
    );
}

export default Dashboard;