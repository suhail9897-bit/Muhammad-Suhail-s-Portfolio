import { useState } from "react";
import { Link } from "react-router-dom";
import Tooltip from "../utility files/tooltip";
import Profile from "./profile";
import { IoIosPerson } from "react-icons/io";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "My Projects", href: "/projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-gradient-to-br from-zinc-950 via-cyan-900/40 to-zinc-950 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-9xl items-center justify-between px-5 md:px-10">
          <div className="group flex items-center gap-3">
            <Tooltip title="Open Profile" text="Open Profile">
              <button
                type="button"
                onClick={() => setProfileOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all duration-300 hover:scale-105 hover:border-emerald-300/60 hover:bg-emerald-400/20"
                aria-label="Open Profile"
              >
                <IoIosPerson className="text-2xl text-emerald-300" />
              </button>
            </Tooltip>

            <Link to="/">
              <h1 className="text-lg font-black tracking-wide text-white">
                Portfolio
              </h1>
              <p className="text-xs font-medium text-white/45">
                Full Stack Developer
              </p>
            </Link>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-5 py-2 text-lg font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-emerald-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="rounded-full px-5 py-2 text-lg font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-emerald-300"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <a
            href="/#contact"
            className="hidden rounded-full bg-gradient-to-br from-zinc-950 via-cyan-900/40 to-zinc-950 px-6 py-3 text-sm font-black text-cyan-300  transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900 md:inline-flex"
          >
            Hire Me
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Toggle Menu"
          >
            <span className="text-2xl leading-none">{open ? "×" : "≡"}</span>
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 bg-[#1e1e1e] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-bold text-white/75"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-bold text-white/75"
                  >
                    {link.name}
                  </Link>
                )
              )}

              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-emerald-400 px-5 py-4 text-center text-sm font-black text-[#111]"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </header>

      <Profile open={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
}

export default Header;