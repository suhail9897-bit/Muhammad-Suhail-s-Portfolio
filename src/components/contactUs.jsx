function ContactUs() {
  return (
    <section id="contact" className="relative bg-[#1e1e1e] px-5 py-28 md:px-10">
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-emerald-300">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
              Let’s build something impressive.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              For freelance projects, job opportunities or collaboration, you
              can contact me directly. Since this is frontend-only, this form
              uses mail link instead of backend submission.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-emerald-400/35 hover:bg-emerald-400/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                  @
                </div>
                <div>
                  <p className="text-sm text-white/45">Email</p>
                  <h3 className="font-bold text-white">your-email@example.com</h3>
                </div>
              </a>

              <a
                href="tel:+910000000000"
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-emerald-400/35 hover:bg-emerald-400/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                  ☎
                </div>
                <div>
                  <p className="text-sm text-white/45">Phone</p>
                  <h3 className="font-bold text-white">+91 00000 00000</h3>
                </div>
              </a>
            </div>
          </div>

          <form
            action="mailto:your-email@example.com"
            method="post"
            encType="text/plain"
            className="rounded-[36px] border border-white/10 bg-[#141414] p-6 shadow-2xl md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-white/70">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-emerald-400/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/70">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-emerald-400/50"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold text-white/70">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Project / Job / Collaboration"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-emerald-400/50"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold text-white/70">
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-emerald-400/50"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-emerald-400 px-8 py-4 text-sm font-black text-[#111] shadow-[0_0_35px_rgba(16,185,129,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;