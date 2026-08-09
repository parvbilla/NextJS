"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";

export default function DoctorDrawer({
  open,
  setOpen,
  doctor,
}) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="mx-auto w-full max-w-2xl rounded-t-3xl border-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white shadow-[0_-20px_60px_rgba(0,0,0,0.5)]">

        <DrawerHeader className="border-b border-white/10 pb-6">

          <DrawerTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            👨‍⚕️ Doctor Details
          </DrawerTitle>

          <DrawerDescription className="mt-2 text-sm text-gray-400">
            Complete doctor information from the hospital database.
          </DrawerDescription>

        </DrawerHeader>

        {doctor && (
          <div className="space-y-5 p-6">

            <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-5 hover:border-cyan-400 transition-all duration-300">

              <div className="flex items-center justify-between">

                <span className="text-gray-400 font-medium">
                  Doctor ID
                </span>

                <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-cyan-300 font-semibold">
                  #{doctor.id}
                </span>

              </div>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:scale-[1.02] transition-all duration-300">

              <p className="text-sm text-gray-400">
                Doctor Name
              </p>

              <h2 className="mt-1 text-2xl font-bold text-white">
                {doctor.name}
              </h2>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:scale-[1.02] transition-all duration-300">

              <p className="text-sm text-gray-400">
                Department
              </p>

              <h2 className="mt-1 text-xl font-semibold text-emerald-400">
                {doctor.part}
              </h2>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:scale-[1.02] transition-all duration-300">

              <p className="text-sm text-gray-400">
                Hospital Name
              </p>

              <h2 className="mt-1 text-xl font-semibold text-yellow-300">
                {doctor.hospitalName}
              </h2>

            </div>

          </div>
        )}

        <DrawerFooter className="border-t border-white/10 p-6">

          <DrawerClose className="w-full rounded-xl bg-gradient-to-r from-red-500 to-pink-600 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-red-600 hover:to-pink-700 active:scale-95">
            ✖ Close Drawer
          </DrawerClose>

        </DrawerFooter>

      </DrawerContent>
    </Drawer>
  );
}