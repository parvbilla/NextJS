import Link from "next/link";

function NonFoundPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6">
        <div className="max-w-xl w-full rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] p-12 text-center">

          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/20 border border-red-500/40 mb-8">
            <span className="text-5xl">🚫</span>
          </div>

          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-red-400 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-4">
            404
          </h1>

          <h1 className="text-3xl font-bold text-white mb-4">
            Not Found Page
          </h1>

          <p className="text-gray-400 text-lg mb-10">
            Oops! The page you're looking for doesn't exist or may have been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 active:scale-95"
          >
            🏠 Back To Home
          </Link>

        </div>
      </div>
    </>
  );
}

export default NonFoundPage;