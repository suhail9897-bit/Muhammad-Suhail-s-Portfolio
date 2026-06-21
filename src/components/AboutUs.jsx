import {
  Atom,
  BadgeCheck,
  BrainCircuit,
  CircuitBoard,
  Code2,
  Database,
  GraduationCap,
  Layers,
  MonitorPlay,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  Workflow,
} from "lucide-react";

import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiExpo,
  SiTypescript,
} from "react-icons/si";

import aboutVideo1 from "../assets/about Us/video1.mp4";
import aboutVideo2 from "../assets/about Us/video2.mp4";

const coreStack = [
  { name: "React.js", icon: SiReact },
  { name: "Vite", icon: SiVite },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "React Native + Expo", icon: SiExpo },
  { name: "TypeScript", icon: SiTypescript },
];

const profileHighlights = [
  {
    title: "Full Stack Product Development",
    desc: "I build complete MERN-based products with frontend dashboards, backend APIs, authentication, role-based access and database-driven workflows.",
    icon: Code2,
  },
  {
    title: "EDA & Schematic Tools",
    desc: "I have built a schematic circuit designer where users can create digital circuits, export JSON, upload JSON and download netlists.",
    icon: CircuitBoard,
  },
  {
    title: "Education & LMS Platforms",
    desc: "My strongest work includes multiple LMS products: admin-candidate LMS, parent-connected LMS, teacher marketplace LMS and progress tracking systems.",
    icon: GraduationCap,
  },
  {
    title: "Mobile App Development",
    desc: "I build React Native + Expo mobile apps, including parent-facing apps for tracking subjects, chapters, tests and overall student progress.",
    icon: MonitorSmartphone,
  },
];

const projectDomains = [
  {
    title: "EDA Tooling",
    desc: "Schematic editor, circuit redraw, JSON workflow and netlist generation.",
    icon: CircuitBoard,
  },
  {
    title: "Enterprise LMS",
    desc: "Admin panels, candidate dashboards, training assignment, tests and progress logic.",
    icon: GraduationCap,
  },
  {
    title: "Parent LMS System",
    desc: "Subject-based learning with dedicated parent visibility and child progress tracking.",
    icon: BrainCircuit,
  },
  {
    title: "Teacher Marketplace LMS",
    desc: "Teachers create paid subjects and students purchase the best teacher’s content.",
    icon: Store,
  },
  {
    title: "Mobile Learning Apps",
    desc: "Parent progress mobile app with secure storage, API integration and dashboard screens.",
    icon: MonitorSmartphone,
  },
  {
    title: "Physics Simulations",
    desc: "React + Phaser simulation lab for resistance, capacitance and logic gate learning.",
    icon: Atom,
  },
];

const strengths = [
  "2+ years professional experience",
  "Individually designed and developed solo projects",
  "Worked with Logicknots and Xcevo Academy",
  "10+ major real-world projects",
  "Full stack MERN architecture",
  "EDA and LMS domain expertise",
  "React Native + Expo mobile apps",
  "Role-based access systems",
  "Premium dashboard UI development",
  "Progress tracking and test systems",
  "Production-style frontend structure",
];

const aboutVideos = [
  {
    title: "Product Engineering Workflow",
    desc: "A quick visual look at the type of polished, production-style interfaces I build across LMS, EDA tools and dashboards.",
    src: aboutVideo1,
    points: [
      "Solo UI planning",
      "Product-level component structure",
      "Dashboard and workflow thinking",
      "Deployment-ready presentation",
    ],
  },
  {
    title: "Solo Project Execution",
    desc: "Every major project in this portfolio was handled individually, including UI architecture, feature logic, API integration and final deployment flow.",
    src: aboutVideo2,
    points: [
      "Frontend + backend ownership",
      "LMS, EDA and mobile app logic",
      "Authentication and progress systems",
      "Real client-style project execution",
    ],
  },
];

function AboutUs({ isPage = false }) {
  return (
    <section
      id="about"
       className={`relative overflow-hidden bg-black px-5 text-white md:px-10 ${
        isPage ? "pt-[155px] pb-28" : "py-28"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(8,145,178,0.18),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(79,70,229,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="relative mx-auto max-w-9xl">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto inline-flex items-center justify-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.035] px-5 py-2">
            <Sparkles size={18} className="text-cyan-300" />
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              About Me
            </p>
          </div>

          <h2 className="mt-6 pb-2 bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-4xl font-black leading-[1.16] tracking-tight text-transparent md:text-7xl md:leading-[1.16]">
            I build full stack products,
            <span className="block bg-gradient-to-r from-cyan-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
              LMS platforms, EDA tools
            </span>
            and mobile apps.
          </h2>

        <p className="mx-auto mt-7 max-w-4xl text-base font-semibold leading-8 text-slate-300 md:text-lg">
          I am Mr. Muhammad Suhail, a full stack developer with 2+ years of
          professional experience and 10+ major projects. My work covers
          complex LMS platforms, EDA schematic tools, parent progress systems,
          teacher marketplace products, React Native mobile apps and
          interactive physics simulations. Every project showcased here was
          designed and developed individually by me, from planning and UI
          architecture to core logic, integration and deployment.
        </p>
       </div>

<div className="mt-16">
  <div className="mx-auto mb-10 max-w-5xl text-center">
    <div className="mx-auto inline-flex items-center justify-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-5 py-2">
      <MonitorPlay size={18} className="text-cyan-300" />
      <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">
        Visual Work Preview
      </p>
    </div>

    <h3 className="mt-5 pb-2 bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-3xl font-black leading-[1.18] text-transparent md:text-5xl">
      Built independently from idea to execution.
    </h3>

    <p className="mx-auto mt-4 max-w-4xl text-base font-semibold leading-8 text-slate-300">
      These are solo-built projects. I handled the full development cycle
      individually: planning, UI architecture, component structure, backend API
      integration, database-driven flows, authentication logic, progress
      systems, mobile app workflows, EDA logic and deployment-ready
      presentation.
    </p>
  </div>

  <div className="grid gap-8">
    {aboutVideos.map((video, index) => (
      <div
        key={video.title}
        className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-cyan-300/35 hover:bg-white/[0.055] md:p-7"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.08),transparent_36%,rgba(129,140,248,0.08))]" />

        <div
          className={`relative grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center ${
            index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="mx-auto w-full max-w-[330px]">
            <div className="overflow-hidden rounded-[32px] border border-cyan-300/20 bg-black p-3">
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[9/16] w-full rounded-[24px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-5 py-2">
              <BadgeCheck size={18} className="text-cyan-300" />
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
                {index === 0 ? "Product Preview" : "Solo Ownership"}
              </p>
            </div>

            <h4 className="mt-5 pb-2 bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-200 bg-clip-text text-3xl font-black leading-[1.18] text-transparent md:text-5xl">
              {video.title}
            </h4>

            <p className="mt-4 max-w-3xl text-base font-semibold leading-8 text-slate-300">
              {video.desc}
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {video.points.map((point) => (
                <div
                  key={point}
                  className="rounded-[22px] border border-cyan-300/15 bg-cyan-300/[0.055] p-4"
                >
                  <BadgeCheck size={18} className="text-cyan-300" />
                  <p className="mt-3 text-sm font-black leading-6 text-cyan-100">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-[26px] border border-indigo-300/15 bg-indigo-400/[0.06] p-5">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-indigo-200">
                Professional Note
              </p>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-300">
                These projects were not built as part of a team assignment.
                They represent individual execution across product planning,
                frontend development, backend integration, logic building,
                testing and deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
<div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {profileHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/35 hover:bg-white/[0.055]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.08),transparent_36%,rgba(129,140,248,0.08))]" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 pb-1 bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-200 bg-clip-text text-2xl font-black leading-[1.18] text-transparent">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-semibold leading-7 text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-7 md:p-9">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-5 py-2">
              <Workflow size={18} className="text-cyan-300" />
              <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">
                What I Actually Build
              </p>
            </div>

            <h3 className="mt-5 pb-2 bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-3xl font-black leading-[1.18] text-transparent md:text-5xl">
              Real product work, not only static websites.
            </h3>

            <p className="mt-5 text-base font-semibold leading-8 text-slate-300">
              My portfolio is focused on projects with real workflows:
              authentication, dashboards, CRUD operations, subject management,
              tests, progress tracking, JSON import/export, netlist generation,
              mobile API integration and simulation logic. This means I can work
              on client projects that need actual product behavior, not just
              layout design.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.055] px-4 py-3"
                >
                  <BadgeCheck size={18} className="shrink-0 text-cyan-300" />
                  <span className="text-sm font-black text-cyan-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-7 md:p-9">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-5 py-2">
              <Layers size={18} className="text-cyan-300" />
              <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">
                Project Domains
              </p>
            </div>

            <h3 className="mt-5 pb-2 bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-3xl font-black leading-[1.18] text-transparent md:text-5xl">
              My strongest domains.
            </h3>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {projectDomains.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-black/35 p-5"
                  >
                    <Icon size={24} className="text-cyan-300" />

                    <h4 className="mt-4 pb-1 bg-gradient-to-r from-cyan-200 to-indigo-200 bg-clip-text text-lg font-black leading-[1.2] text-transparent">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[36px] border border-white/10 bg-white/[0.035] p-7 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-5 py-2">
                <Code2 size={18} className="text-cyan-300" />
                <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">
                  Technology Stack
                </p>
              </div>

              <h3 className="mt-5 pb-2 bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-3xl font-black leading-[1.18] text-transparent md:text-5xl">
                Tools and technologies I use.
              </h3>

              <p className="mt-5 text-base font-semibold leading-8 text-slate-300">
                I work mainly with React-based frontend architecture, MERN
                backend systems, MongoDB databases, React Native mobile apps and
                domain-specific products like LMS and EDA tools.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {coreStack.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="rounded-[24px] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.06] to-indigo-400/[0.06] p-5 text-center"
                  >
                    <Icon className="mx-auto text-3xl text-cyan-300" />
                    <p className="mt-4 text-sm font-black text-cyan-100">
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[36px] border border-cyan-300/20 bg-white/[0.04] p-8 text-center">
          <Rocket className="mx-auto text-cyan-300" size={38} />

          <h3 className="mt-5 pb-2 bg-gradient-to-r from-cyan-200 via-white to-indigo-200 bg-clip-text text-3xl font-black leading-[1.18] text-transparent md:text-5xl">
            I can build complete digital products.
          </h3>

          <p className="mx-auto mt-4 max-w-4xl text-base font-semibold leading-8 text-slate-300">
            From premium frontend UI to backend APIs, database models,
            dashboards, mobile apps, EDA workflows and educational simulations,
            I can handle full project development with clean structure and
            professional presentation.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-300/25 bg-white/[0.045] px-8 py-4 text-sm font-black text-cyan-100 transition-all duration-300 hover:scale-105 hover:bg-white/[0.08]"
            >
              View My Projects
              <Layers size={18} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-300 px-8 py-4 text-sm font-black text-black transition-all duration-300 hover:scale-105"
            >
              Contact Me
              <ShieldCheck size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;