function Success() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 px-4">

            <div className="relative overflow-hidden w-full max-w-2xl rounded-3xl border border-emerald-500/20 bg-slate-900/70 backdrop-blur-2xl shadow-2xl shadow-emerald-500/20 p-10 text-center">

                {/* Decorative Glow */}
                <div className="absolute -top-20 -left-20 h-52 w-52 rounded-full bg-emerald-500/20 blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl"></div>

                {/* Success Icon */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-green-500 shadow-xl shadow-emerald-500/40">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                {/* Heading */}
                <h1 className="mt-8 text-5xl font-extrabold bg-gradient-to-r from-emerald-400 via-green-300 to-cyan-400 bg-clip-text text-transparent">
                    Success!
                </h1>

                {/* Description */}
                <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                    Your form has been submitted successfully.
                    <br />
                    Thank you for your response.
                </p>

                {/* Bottom Badge */}
                <div className="mt-8 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-300">
                    ✓ Submission Completed Successfully
                </div>

            </div>

        </div>
    );
}

export default Success;