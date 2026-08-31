"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function ClientDatafetch(prop) {
    const[gender,setGender] = useState({});
    const searchparams = useSearchParams();
    const username = searchparams.get("name");
    console.log(username);

    useEffect(() => {
        const getApi = async () => {
            const res = await fetch(`https://api.genderize.io/?name=${username}`);
            const data = await res.json();
            setGender(data);
            console.log(data);
        }
        getApi();
    }, [])

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 p-6">
                <div className="w-full max-w-2xl rounded-3xl border border-slate-700/50 bg-slate-900/70 backdrop-blur-xl shadow-2xl p-8">

                    <h1 className="text-4xl font-extrabold text-center text-white mb-8">
                        🚀 Server Data Fetch Page
                    </h1>

                    <div className="space-y-5">

                        <div className="flex items-center justify-between rounded-xl bg-slate-800/60 p-4 border border-slate-700">
                            <span className="text-gray-400 font-medium">
                                📊 Prediction Result
                            </span>
                            <span className="text-green-400 font-bold">
                                Success
                            </span>
                        </div>

                        <div className="flex items-center justify-between rounded-xl bg-slate-800/60 p-4 border border-slate-700">
                            <span className="text-gray-400 font-medium">
                                👤 Username
                            </span>
                            <span className="text-white font-semibold">
                                {username}
                            </span>
                        </div>

                        <div className="flex items-center justify-between rounded-xl bg-slate-800/60 p-4 border border-slate-700">
                            <span className="text-gray-400 font-medium">
                                🚻 Gender
                            </span>
                            <span className="text-blue-400 font-semibold capitalize">
                                {gender.gender || "Unknown"}
                            </span>
                        </div>

                        <div className="flex items-center justify-between rounded-xl bg-slate-800/60 p-4 border border-slate-700">
                            <span className="text-gray-400 font-medium">
                                🎯 Probability
                            </span>
                            <span className="text-yellow-400 font-bold">
                                {gender.probability * 100}%
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default ClientDatafetch;