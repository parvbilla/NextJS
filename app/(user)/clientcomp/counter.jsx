import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
                <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-8 text-center">

                    <h1 className="text-3xl font-bold text-white mb-6">
                        Counter Component
                    </h1>

                    <h1 className="text-5xl font-extrabold text-cyan-400 mb-8">
                        Count: <span className="text-white">{count}</span>
                    </h1>

                    <button
                        onClick={() => setCount(count + 1)}
                        className="w-full bg-cyan-500 hover:bg-cyan-600 active:scale-95 transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-lg mb-4"
                    >
                        ➕ Add
                    </button>

                    <button
                        onClick={() => setCount(count - 1)}
                        className="w-full bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-lg"
                    >
                        ➖ Minus
                    </button>

                </div>
            </div>
        </>
    );
}

export default Counter;