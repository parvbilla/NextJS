import { db } from "../../config/db"

async function StaticPage() {
    const [student] = await db.execute("select * from students");
    console.log(student);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black py-12 px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        🎓 Student Database
                    </h1>

                    <p className="mt-3 text-slate-400 text-lg">
                        Connected with MySQL Database 🚀
                    </p>
                </div>

                {/* Student Cards */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

                    {
                        student.map((student) => (
                            <div
                                key={student.id}
                                className="group rounded-3xl border border-slate-700/50 bg-white/5 backdrop-blur-xl p-7 shadow-2xl hover:scale-[1.03] hover:border-cyan-400/50 hover:shadow-cyan-500/20 transition-all duration-300"
                            >

                                {/* Profile Circle */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                                        {student.name.charAt(0)}
                                    </div>
                                </div>

                                {/* Student Details */}
                                <div className="space-y-4">

                                    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                                        <span className="text-slate-400 font-medium">
                                            🆔 ID
                                        </span>
                                        <span className="text-white font-bold">
                                            {student.id}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                                        <span className="text-slate-400 font-medium">
                                            👤 Name
                                        </span>
                                        <span className="text-cyan-400 font-semibold">
                                            <h1>{student.name}</h1>
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                                        <span className="text-slate-400 font-medium">
                                            📧 Email
                                        </span>
                                        <span className="text-white text-sm text-right">
                                            <h1>{student.email}</h1>
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                                        <span className="text-slate-400 font-medium">
                                            📚 Course
                                        </span>
                                        <span className="rounded-full bg-blue-500/20 px-4 py-1 text-blue-400 font-semibold">
                                            <h1>{student.course}</h1>
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400 font-medium">
                                            📍 City
                                        </span>
                                        <span className="rounded-full bg-purple-500/20 px-4 py-1 text-purple-400 font-semibold">
                                            <h1>{student.city}</h1>
                                        </span>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </>
    )
}

export default StaticPage;