"use client"

import { useEffect, useState } from "react";
import Counter from "./counter";

const url = "https://jsonplaceholder.typicode.com/posts";

function ClientComp() {
    const [value, setValue] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {

        const apifetch = async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setData(data);
        }

        apifetch();

    }, []);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-10 px-6">

                <div className="max-w-5xl mx-auto">

                    {/* Header */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 text-center mb-8">

                        <h1 className="text-4xl font-bold text-white mb-4">
                            Hello Client Component 👋
                        </h1>

                        <h1 className="text-2xl font-semibold text-cyan-400 mb-6">
                            Value: <span className="text-white">{value}</span>
                        </h1>

                        <button
                            onClick={() => setValue(value + 1)}
                            className="bg-cyan-500 hover:bg-cyan-600 active:scale-95 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-xl shadow-lg"
                        >
                            ➕ Add
                        </button>

                    </div>

                    {/* API Data */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">

                        <h2 className="text-3xl font-bold text-white mb-6 text-center">
                            API Posts
                        </h2>

                        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">

                            {
                                data.slice(0,10).map((data) => (
                                    <div
                                        key={data.id}
                                        className="bg-slate-800/70 border border-slate-700 rounded-xl p-5 text-gray-200 hover:bg-slate-700 transition duration-300 shadow-md"
                                    >
                                        <p className="leading-relaxed">
                                            {data.body}
                                        </p>
                                    </div>
                                ))
                            }

                        </div>

                    </div>

                    {/* Counter Component */}
                    <div className="mt-10">
                        <Counter />
                    </div>

                </div>

            </div>
        </>
    );
}

export default ClientComp;