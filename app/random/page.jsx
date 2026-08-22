"use client";

import { useMemo, useState } from "react";
import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiSearchLine,
  RiSendPlaneFill,
  RiTimeLine,
} from "@remixicon/react";

const contactDetails = [
  {
    icon: RiPhoneLine,
    title: "Call Us",
    detail: "+91-95401-95411",
    subDetail: "Call us for immediate assistance",
    href: "tel:+919540195411",
    color: "bg-emerald-500/10 text-emerald-700",
  },
  {
    icon: RiMailLine,
    title: "Email Us",
    detail: "info@cuet.plus",
    subDetail: "We'll respond within 24 hours",
    href: "mailto:info@cuet.plus",
    color: "bg-[#d4af37]/15 text-[#9a7410]",
  },
  {
    icon: RiMapPinLine,
    title: "Visit Us",
    detail: "Commerce Classes by Nisha ma'am",
    subDetail: "Gurugram | XI, XII Boards + CUET Preparations",
    href: "https://www.google.com/maps?q=28.4748178,77.0087279",
    color: "bg-slate-900/10 text-slate-900",
  },
];

const branches = [
  {
    id: 1,
    name: "Commerce Classes by Nisha ma'am",
    label:
      "Best Commerce Classes in Gurugram | XI, XII Boards + CUET Preparations",
    address: "Commerce Classes by Nisha ma'am, Gurugram, Delhi NCR",
    phone: "+91-95401-95411",
    email: "info@cuet.plus",
    hours: "Open 24/7 - Online Classes Available Globally",
    map: "https://www.google.com/maps?q=28.4748178,77.0087279&z=15&output=embed",
  },
  {
    id: 2,
    name: "Commerce Classes by Nisha ma'am",
    label:
      "Best Commerce Classes in Gurugram | XI, XII Boards + CUET Preparations",
      address: "319, Dharam Colony, Palam Vihar Extension, Gurugram, Haryana 122017",
      phone: "+91-95401-95411",
      email: "info@cuet.plus",
      hours: "Open 24/7 - Online Classes Available Globally",
      map: "https://www.google.com/maps?q=28.5025993,77.0306526&z=15&output=embed"
  }
];

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<"branch" | "message">("branch");
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [search, setSearch] = useState("");

  const filteredBranches = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return branches;
    }

    return branches.filter((branch) =>
      `${branch.name} ${branch.label} ${branch.address} ${branch.phone} ${branch.email}`
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  return (
    <section id="contact" className="w-full scroll-mt-24 overflow-hidden pb-16">
      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#0f5b49,_#073a33_48%,_#031f1d)] px-4 py-14 text-center text-white md:py-20">
        <div className="absolute right-[-90px] top-[-90px] h-72 w-72 rounded-full bg-[#d4af37]/20 blur-3xl" />
        <div className="absolute bottom-[-110px] left-[-90px] h-72 w-72 rounded-full bg-emerald-300/15 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <span className="mb-4 inline-flex rounded-full border border-[#d4af37]/40 bg-white/10 px-4 py-2 text-sm font-bold text-[#f6dc91]">
            Contact Us
          </span>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Visit Our Center in South Extension
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
            Conveniently located in the heart of Delhi NCR. Clear your doubts,
            book a demo, or speak with our team directly.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 md:-mt-14">
        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.title === "Visit Us" ? "_blank" : undefined}
                rel={item.title === "Visit Us" ? "noopener noreferrer" : undefined}
                className="group flex min-h-56 flex-col items-center justify-center rounded-[28px] border border-white/70 bg-white p-6 text-center text-gray-900 shadow-xl shadow-emerald-950/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={`mb-5 rounded-2xl p-4 transition duration-300 group-hover:scale-110 ${item.color}`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mb-2 text-xl font-black">{item.title}</h3>
                <p className="max-w-full break-words text-base font-extrabold text-[#0f3f34] md:text-lg">
                  {item.detail}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  {item.subDetail}
                </p>
              </a>
            );
          })}
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-xl shadow-emerald-950/10 md:rounded-[2.5rem]">
            <div className="border-b border-gray-100">
              <div className="relative grid grid-cols-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("branch")}
                  className={`relative z-10 py-5 text-sm font-black transition md:text-lg ${
                    activeTab === "branch"
                      ? "text-[#0f3f34]"
                      : "text-gray-500"
                  }`}
                >
                  Select a Branch
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("message")}
                  className={`relative z-10 py-5 text-sm font-black transition md:text-lg ${
                    activeTab === "message"
                      ? "text-[#0f3f34]"
                      : "text-gray-500"
                  }`}
                >
                  Send us Message
                </button>

                <div
                  className={`absolute bottom-0 h-[3px] w-1/2 bg-[#d4af37] transition-all duration-500 ${
                    activeTab === "branch" ? "left-0" : "left-1/2"
                  }`}
                />
              </div>
            </div>

            <div className="overflow-hidden">
              <div
                className={`flex w-[200%] transition-transform duration-500 ease-in-out ${
                  activeTab === "branch" ? "translate-x-0" : "-translate-x-1/2"
                }`}
              >
                <div className="w-1/2 p-5 md:p-8">
                  <h3 className="text-2xl font-black tracking-tight text-gray-950 md:text-3xl">
                    Select a Branch
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 md:text-base">
                    Choose a branch to view its location on the map.
                  </p>

                  <div className="relative my-6">
                    <RiSearchLine className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search branch..."
                      className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 text-sm font-semibold outline-none transition focus:border-[#d4af37] focus:bg-white focus:ring-4 focus:ring-[#d4af37]/15"
                    />
                  </div>

                  <div className="max-h-[500px] space-y-4 overflow-y-auto pr-1">
                    {filteredBranches.length > 0 ? (
                      filteredBranches.map((branch) => (
                        <button
                          key={branch.id}
                          type="button"
                          onClick={() => setSelectedBranch(branch)}
                          className={`w-full rounded-3xl border p-5 text-left transition duration-300 md:p-6 ${
                            selectedBranch.id === branch.id
                              ? "border-[#d4af37] bg-[#fff8df] shadow-md"
                              : "border-gray-200 bg-white hover:border-emerald-700/40 hover:bg-emerald-50/40"
                          }`}
                        >
                          <h4 className="text-lg font-black leading-snug text-gray-950 md:text-2xl">
                            {branch.name}
                          </h4>
                          <p className="mt-1 text-sm font-semibold text-emerald-700">
                            {branch.label}
                          </p>

                          <div className="mt-4 flex gap-3">
                            <RiMapPinLine className="mt-1 h-5 w-5 shrink-0 text-[#0f3f34]" />
                            <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                              {branch.address}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center gap-3">
                            <RiPhoneLine className="h-5 w-5 shrink-0 text-[#0f3f34]" />
                            <p className="text-sm font-bold text-gray-900 md:text-base">
                              {branch.phone}
                            </p>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="rounded-2xl bg-gray-50 py-10 text-center text-gray-500">
                        No branch found
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-1/2 p-5 md:p-8">
                  <h3 className="mb-8 text-2xl font-black tracking-tight text-gray-950 md:text-3xl">
                    Send us a Message
                  </h3>

                  <form
                    className="space-y-5"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Full Name" placeholder="Your name" />
                      <Field
                        label="Email Address"
                        placeholder="you@example.com"
                        type="email"
                      />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <Field
                        label="Phone Number"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      <Field
                        label="Subject"
                        placeholder="Inquiry about Program"
                      />
                    </div>

                    <label className="block space-y-2">
                      <span className="ml-1 text-sm font-bold text-gray-900">
                        Message
                      </span>
                      <textarea
                        placeholder="How can we help you?"
                        className="min-h-[160px] w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-[#d4af37] focus:bg-white focus:ring-4 focus:ring-[#d4af37]/15"
                      />
                    </label>

                    <button
                      type="submit"
                      className="group inline-flex h-14 w-full items-center justify-center rounded-xl bg-[#0f3f34] text-base font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#d4af37] hover:text-black hover:shadow-xl"
                    >
                      Send Message
                      <RiSendPlaneFill className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="rounded-[2rem] border border-emerald-900/10 bg-white p-5 shadow-xl shadow-emerald-950/10 md:rounded-[2.5rem] md:p-8">
              <h3 className="text-2xl font-black leading-snug text-gray-950 md:text-3xl">
                {selectedBranch.name}
              </h3>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                {selectedBranch.label}
              </p>

              <div className="mt-5 flex gap-3">
                <RiMapPinLine className="mt-1 h-5 w-5 shrink-0 text-[#0f3f34]" />
                <p className="text-sm leading-relaxed text-gray-600 md:text-lg">
                  {selectedBranch.address}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <RiPhoneLine className="h-5 w-5 shrink-0 text-[#0f3f34]" />
                <p className="text-base font-bold text-gray-950 md:text-lg">
                  {selectedBranch.phone}
                </p>
              </div>
            </div>

            <div className="relative h-[320px] overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-xl shadow-emerald-950/10 sm:h-[400px] md:h-[500px] md:rounded-[2.5rem]">
              <iframe
                key={selectedBranch.id}
                title={selectedBranch.name}
                src={selectedBranch.map}
                width="100%"
                height="100%"
                className="transition-transform duration-700 hover:scale-105"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-[2rem] border border-[#d4af37]/25 bg-[#fff8df] p-5 md:p-8">
              <h4 className="mb-4 flex items-center gap-2 text-lg font-black text-[#0f3f34] md:text-xl">
                <RiTimeLine className="h-6 w-6 text-[#9a7410]" />
                Working Hours
              </h4>

              <p className="text-sm font-semibold leading-relaxed text-gray-700 md:text-base">
                {selectedBranch.hours}
              </p>
              <p className="mt-5 text-sm italic leading-relaxed text-gray-500">
                Online classes are available globally, and the team is ready to
                help with admission and demo class queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="ml-1 text-sm font-bold text-gray-900">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-semibold outline-none transition focus:border-[#d4af37] focus:bg-white focus:ring-4 focus:ring-[#d4af37]/15"
      />
    </label>
  );
}
