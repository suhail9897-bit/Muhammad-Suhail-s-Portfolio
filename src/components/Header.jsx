import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Tooltip from "../utility files/tooltip";
import Profile from "./profile";
import { IoIosPerson } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { Mail, Phone, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "My Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const emailAddress = "techsuhail62@gmail.com";
const phoneNumber = "+91 98706 99801";
const whatsappNumber = "919870699801";

function Header() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [headerReady, setHeaderReady] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);

  const lastScrollY = useRef(0);
  const scrollTimer = useRef(null);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setHeaderReady(true);
    }, 80);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (open) return;

      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      if (currentScrollY <= 20) {
        setHeaderHidden(false);
      } else if (scrollingDown) {
        setHeaderHidden(true);
      }

      window.clearTimeout(scrollTimer.current);

      scrollTimer.current = window.setTimeout(() => {
        setHeaderHidden(false);
      }, 230);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(scrollTimer.current);
    };
  }, [open]);

  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-gradient-to-br from-zinc-950 via-cyan-900/40 to-zinc-950 backdrop-blur-md transition-transform duration-500 ease-out ${
          headerReady && !headerHidden ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="border-b border-white/10 bg-black/25 px-5 py-2 md:px-10">
          <div className="mx-auto flex max-w-9xl items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300 md:text-sm">
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 transition-all duration-300 hover:text-cyan-300"
              >
                <Mail size={15} className="text-cyan-300" />
                <span>{emailAddress}</span>
              </a>

              <a
                href={`tel:${phoneNumber.replaceAll(" ", "")}`}
                className="inline-flex items-center gap-2 transition-all duration-300 hover:text-cyan-300"
              >
                <Phone size={15} className="text-cyan-300" />
                <span>{phoneNumber}</span>
              </a>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] text-xl text-emerald-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-cyan-300 hover:text-black"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <nav className="mx-auto grid h-20 max-w-9xl grid-cols-[1fr_auto_1fr] items-center px-5 md:px-10">
          <div className="group flex items-center gap-3 justify-self-start">
            <Tooltip title="Open Profile" text="Open Profile">
              <button
                type="button"
                onClick={() => setProfileOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 transition-all duration-300 hover:scale-105 hover:border-cyan-300/60 hover:bg-cyan-300/20"
                aria-label="Open Profile"
              >
                <IoIosPerson className="text-2xl text-cyan-300" />
              </button>
            </Tooltip>

            <Link to="/" onClick={closeMobileMenu}>
              <h1 className="text-lg font-black tracking-wide text-white">
                Portfolio
              </h1>
              <p className="text-xs font-medium text-white/45">
                Full Stack Developer
              </p>
            </Link>
          </div>

          <div className="hidden items-center gap-2 justify-self-center md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="rounded-full px-5 py-2 text-lg font-semibold text-white/90 transition-all duration-300 hover:bg-cyan-300/[0.08] hover:text-cyan-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center justify-self-end rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] text-white transition-all duration-300 hover:border-cyan-300/45 hover:bg-cyan-300 hover:text-black md:hidden"
            aria-label="Toggle Menu"
          >
            <span className="text-2xl leading-none">{open ? "×" : "≡"}</span>
          </button>
        </nav>

       {open && (
  <div className="border-t border-cyan-300/15 bg-gradient-to-br from-zinc-950 via-cyan-950/80 to-zinc-950 px-5 py-5 backdrop-blur-xl md:hidden">
    <div className="flex flex-col gap-3">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          onClick={closeMobileMenu}
          className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.055] px-5 py-4 text-sm font-black text-cyan-100 transition-all duration-300 hover:border-indigo-300/30 hover:bg-indigo-400/[0.08] hover:text-white"
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
)}
      </header>

      <Profile open={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
}

export default Header;