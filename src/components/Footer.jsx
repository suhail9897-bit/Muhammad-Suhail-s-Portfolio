function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#151515] px-5 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <div>
          <h2 className="text-xl font-black text-white">Portfolio</h2>
          <p className="mt-1 text-sm text-white/45">
            Modern frontend portfolio website.
          </p>
        </div>

        <p className="text-sm text-white/45">
          © {year} Portfolio. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-white/65 transition-all duration-300 hover:border-emerald-400/35 hover:text-emerald-300"
          >
            Home
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-white/65 transition-all duration-300 hover:border-emerald-400/35 hover:text-emerald-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;