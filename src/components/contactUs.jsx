import { useEffect, useRef, useState } from "react";

import {
  Mail,
  Phone,
  Send,
  Sparkles,
  MessageSquareText,
  BriefcaseBusiness,
  UserRound,
  ShieldCheck,
} from "lucide-react";

const emailAddress = "techsuhail62@gmail.com";
const phoneNumber = "+91 98706 99801";

function ContactUs({ isPage = false }) {
  const contactHeadingRef = useRef(null);
  const [contactHeadingVisible, setContactHeadingVisible] = useState(false);

  useEffect(() => {
    const target = contactHeadingRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setContactHeadingVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className={`relative overflow-hidden bg-black px-5 text-white md:px-10 ${
        isPage ? "pt-[155px] pb-28" : "py-28"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(8,145,178,0.18),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(79,70,229,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="relative mx-auto max-w-9xl">
        <div ref={contactHeadingRef} className="mx-auto mb-16 max-w-5xl text-center">
          <div className="mx-auto inline-flex items-center justify-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.035] px-5 py-2">
            <Sparkles size={18} className="text-cyan-300" />
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              Contact
            </p>
          </div>

      <h2
        className={`mt-6 transform pb-2 bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-4xl font-black leading-[1.16] tracking-tight text-transparent transition-all duration-[1100ms] ease-out md:text-7xl md:leading-[1.16] ${
          contactHeadingVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-24 opacity-0"
        }`}
      >
        Let’s build something
        <span className="block bg-gradient-to-r from-cyan-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
          serious together.
        </span>
      </h2>

          <p className="mx-auto mt-6 max-w-4xl text-base font-semibold leading-8 text-slate-300 md:text-lg">
            For freelance projects, full stack work, LMS platforms, EDA tools,
            React Native apps, dashboards or job opportunities, send your
            message directly from this form.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.035] p-7 md:p-9">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.08),transparent_36%,rgba(129,140,248,0.08))]" />

              <div className="relative">
                <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-5 py-2">
                  <BriefcaseBusiness size={18} className="text-cyan-300" />
                  <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">
                    Available For Work
                  </p>
                </div>

                <h3 className="mt-5 pb-2 bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-3xl font-black leading-[1.18] text-transparent md:text-5xl">
                  Projects, jobs and collaborations.
                </h3>

                <p className="mt-5 text-base font-semibold leading-8 text-slate-300">
                  I can work on complete frontend, MERN applications, LMS
                  systems, EDA workflows, dashboard products and React Native
                  mobile apps. Share your requirement and I will respond through
                  email.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Full Stack Projects",
                    "LMS Development",
                    "EDA Tooling",
                    "Mobile Apps",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.055] px-4 py-3"
                    >
                      <ShieldCheck
                        size={18}
                        className="shrink-0 text-cyan-300"
                      />
                      <span className="text-sm font-black text-cyan-100">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={`mailto:${emailAddress}`}
              className="group flex items-center gap-4 rounded-[28px] border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.055]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                <Mail size={24} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-400">Email</p>
                <h3 className="mt-1 font-black text-cyan-100">
                  {emailAddress}
                </h3>
              </div>
            </a>

            <a
              href={`tel:${phoneNumber.replaceAll(" ", "")}`}
              className="group flex items-center gap-4 rounded-[28px] border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/35 hover:bg-white/[0.055]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-300/25 bg-indigo-300/10 text-indigo-200">
                <Phone size={24} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-400">Phone</p>
                <h3 className="mt-1 font-black text-indigo-100">
                  {phoneNumber}
                </h3>
              </div>
            </a>
          </div>

          <form
            action={`https://formsubmit.co/${emailAddress}`}
            method="POST"
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.38)] md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.08),transparent_36%,rgba(129,140,248,0.08))]" />

            <div className="relative">
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />
              <input type="hidden" name="_template" value="table" />

              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  <MessageSquareText size={24} />
                </div>

                <div>
                  <h3 className="pb-1 bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-200 bg-clip-text text-2xl font-black leading-[1.18] text-transparent">
                    Send Project Inquiry
                  </h3>
                  <p className="text-sm font-semibold text-slate-400">
                    Your message will be delivered to my email.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-black text-cyan-100">
                    <UserRound size={16} className="text-cyan-300" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/50 focus:bg-black/45"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-black text-cyan-100">
                    <Mail size={16} className="text-cyan-300" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/50 focus:bg-black/45"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-black text-cyan-100">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project / Job / Collaboration"
                  className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/50 focus:bg-black/45"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-black text-cyan-100">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="7"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/50 focus:bg-black/45"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-300 px-8 py-4 text-sm font-black text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]"
              >
                Send Message
                <Send size={18} />
              </button>

              <p className="mt-4 text-center text-xs font-semibold leading-6 text-slate-500">
                No backend is used. This form sends messages through a
                frontend-friendly email forwarding service.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;