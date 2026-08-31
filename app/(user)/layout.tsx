import type { ReactNode } from "react";
import Link from "next/link";
import "../globals.css";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 text-white`}
      >
        {/* Navbar */}
        <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-xl">
          <div className="max-w-7xl mx-auto px-8 py-5">
            <ul className="flex flex-wrap items-center justify-center gap-6 text-lg font-semibold">
              <li>
                <Link
                  href="/"
                  className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/service"
                  className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                  href="/about/teams"
                  className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                >
                  Teams
                </Link>
              </li>

              <li>
                <Link
                  href="/clientcomp"
                  className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                >
                  Client Comp
                </Link>
              </li>

              <li>
                <Link
                  href="/servercomp"
                  className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                >
                  Server Comp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Heading */}
        <div className="max-w-7xl mx-auto px-8 py-10">
          <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Text Font Changed
          </h1>
        </div>

        {/* Child Pages */}
        <main className="max-w-7xl mx-auto px-8 py-6">
          {children}
        </main>

        {/* Image Section */}
        <div className="flex justify-center items-center py-20 px-6">
          <div className="rounded-3xl p-4 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500 hover:scale-105">
            <Image
              src="/new.jpg"
              alt="Profile Picture"
              width={500}
              height={500}
              priority
              className="rounded-2xl object-cover w-auto h-auto"
            />
          </div>
        </div>
      </body>
    </html>
  );
}

export default Layout;