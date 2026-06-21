import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import {
  ArrowUpRight,
  Code2,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const emailAddress = "techsuhail62@gmail.com";
const phoneNumber = "+91 98706 99801";
const whatsappNumber = "919870699801";
const linkedInUrl = "https://www.linkedin.com/in/muhammad-suhail-b97335356";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "My Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();

  const handleFooterNavClick = (event, href) => {
    if (location.pathname === href) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-5 py-14 text-white md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(8,145,178,0.16),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(79,70,229,0.14),transparent_32%),linear-gradient(135deg,rgba(103,232,249,0.08),transparent_36%,rgba(129,140,248,0.08))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="relative mx-auto max-w-9xl">
        <div className="grid gap-8 rounded-[36px] border border-white/10 bg-white/[0.035] p-7 md:p-9 lg:grid-cols-[1.15fr_0.85fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-5 py-2">
              <Sparkles size={18} className="text-cyan-300" />
              <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">
                Portfolio
              </p>
            </div>

            <h2 className="mt-5 pb-1 bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-3xl font-black leading-[1.16] text-transparent md:text-5xl">
              Mr. Muhammad Suhail
            </h2>

            <p className="mt-3 max-w-xl text-sm font-semibold leading-7 text-slate-300 md:text-base">
              Full stack developer building LMS platforms, EDA tools, React
              Native apps, dashboards and production-style frontend experiences.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.055] px-4 py-2 text-xs font-black text-cyan-100">
                <ShieldCheck size={15} className="text-cyan-300" />
                2+ Years Experience
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/15 bg-indigo-400/[0.06] px-4 py-2 text-xs font-black text-indigo-100">
                <Code2 size={15} className="text-indigo-200" />
                10+ Major Projects
              </div>
            </div>
          </div>

          <div>
            <h3 className="pb-1 bg-gradient-to-r from-cyan-200 to-indigo-200 bg-clip-text text-xl font-black leading-[1.18] text-transparent">
              Quick Links
            </h3>

            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(event) => handleFooterNavClick(event, link.href)}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-black text-slate-300 transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.07] hover:text-cyan-100"
              >
                  <span>{link.name}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-cyan-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="pb-1 bg-gradient-to-r from-cyan-200 to-pink-200 bg-clip-text text-xl font-black leading-[1.18] text-transparent">
              Contact & Social
            </h3>

            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-slate-300 transition-all duration-300 hover:border-cyan-300/35 hover:text-cyan-100"
              >
                <Mail size={17} className="text-cyan-300" />
                <span>{emailAddress}</span>
              </a>

              <a
                href={`tel:${phoneNumber.replaceAll(" ", "")}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-slate-300 transition-all duration-300 hover:border-indigo-300/35 hover:text-indigo-100"
              >
                <Phone size={17} className="text-indigo-200" />
                <span>{phoneNumber}</span>
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] text-2xl text-sky-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-cyan-300 hover:text-black"
                aria-label="LinkedIn"
              >
                <TbBrandLinkedinFilled />
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] text-2xl text-emerald-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/45 hover:bg-emerald-300 hover:text-black"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

             <Link
                to="/contact"
                onClick={(event) => handleFooterNavClick(event, "/contact")}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-300 px-5 py-3 text-sm font-black text-black transition-all duration-300 hover:-translate-y-1"
              >
                Contact
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row">
          <p className="text-sm font-semibold text-slate-500">
            © {year} Mr. Muhammad Suhail. All rights reserved.
          </p>

          <p className="text-sm font-semibold text-slate-500">
            Built with React, Vite and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;