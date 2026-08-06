import saveContact from "./action";

function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 p-8 text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 border-4 border-white/30 text-5xl shadow-lg">
                        📩
                    </div>

                    <h1 className="text-4xl font-extrabold text-white">
                        Contact Us
                    </h1>

                    <p className="mt-2 text-blue-100">
                        We'd love to hear from you. Fill out the form below.
                    </p>
                </div>

                {/* Form */}
                <form action={saveContact} className="space-y-6 p-8">

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-300">
                            Name
                        </label>

                        <input
                            type="text"
                            required
                            name="name"
                            placeholder="Enter your name"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-300">
                            Email
                        </label>

                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-300">
                            Message
                        </label>

                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            required
                            rows={5}
                            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
                        />
                    </div>

                    <button
                        className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/30 active:scale-95"
                    >
                        🚀 Submit Message
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Contact;