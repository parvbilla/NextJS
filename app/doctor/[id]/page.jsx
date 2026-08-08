import { notFound } from "next/navigation";

const doctors = [
  { id: "1", name: "abc", part: "liver" },
  { id: "2", name: "xyz", part: "kidney" },
  { id: "3", name: "abcxyz", part: "heart" },
  { id: "4", name: "xyzabc", part: "lungs" },
];

export async function generateStaticParams() {
  return doctors.map((item) => ({ id: item.id.toString() }));
}

async function Doctor({ params }) {
  const { id } = await params;

  const doctor = doctors.find((item) => item.id === id);

  if (!doctor) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 p-8 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 border-4 border-white/30 text-5xl shadow-lg">
            👨‍⚕️
          </div>

          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            Doctor Profile
          </h1>

          <p className="mt-2 text-blue-100">
            Professional Medical Information
          </p>
        </div>

        {/* Details */}
        <div className="p-8 space-y-6">

          <div className="flex items-center justify-between rounded-2xl bg-slate-800/60 p-5 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
            <span className="text-slate-400 font-medium">
              Doctor ID
            </span>

            <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-cyan-400 font-bold">
              #{doctor.id}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-slate-800/60 p-5 border border-slate-700 hover:border-blue-500 transition-all duration-300">
            <span className="text-slate-400 font-medium">
              Doctor Name
            </span>

            <span className="text-xl font-bold text-white">
              {doctor.name}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-slate-800/60 p-5 border border-slate-700 hover:border-emerald-500 transition-all duration-300">
            <span className="text-slate-400 font-medium">
              Specialization
            </span>

            <span className="rounded-full bg-emerald-500/20 px-4 py-1 text-emerald-400 font-semibold capitalize">
              {doctor.part}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Doctor;