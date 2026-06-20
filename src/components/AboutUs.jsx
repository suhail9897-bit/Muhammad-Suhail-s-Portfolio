const skills = [
  "React.js",
  "Vite",
  "Tailwind CSS",
  "JavaScript",
  "Responsive UI",
  "Landing Pages",
  "Portfolio Websites",
  "Dashboard UI",
];

const highlights = [
  {
    title: "Modern UI Design",
    desc: "Clean sections, strong spacing, dark premium colors and professional layout.",
  },
  {
    title: "Responsive Frontend",
    desc: "Websites that work properly on laptop, tablet and mobile screens.",
  },
  {
    title: "Project Presentation",
    desc: "Portfolio structure made to showcase real projects and attract clients or employers.",
  },
];

function AboutUs() {
  return (
    <section id="about" className="relative bg-[#1e1e1e] px-5 py-28 md:px-10">
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-emerald-400/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-emerald-300">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            I design and build frontend websites that look professional.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            This portfolio is made to present my work clearly: who I am, what I
            can build, which technologies I use and how clients or employers can
            contact me.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-[32px] border border-white/10 bg-white/[0.035] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/35 hover:bg-emerald-400/[0.06]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-xl font-black text-emerald-300">
                0{index + 1}
              </div>

              <h3 className="mt-7 text-2xl font-black text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-white/55">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[36px] border border-white/10 bg-[#141414] p-7 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-300">
                Skills
              </p>

              <h3 className="mt-4 text-3xl font-black text-white">
                Technologies I use
              </h3>

              <p className="mt-4 leading-7 text-white/55">
                These are the core frontend skills that will be used in this
                portfolio and future project sections.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;