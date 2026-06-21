import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Atom,
  BookOpenCheck,
  BrainCircuit,
  CircuitBoard,
  Code2,
  Cpu,
  ExternalLink,
  Gamepad2,
  GraduationCap,
  Layers,
  Lightbulb,
  LineChart,
  MonitorPlay,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

import sixthProjectImage from "../../assets/sixth Project/image1.png";
const liveLink = "https://admirable-jalebi-b3425c.netlify.app";

const technologies = [
  "React.js",
  "Vite",
  "Tailwind CSS",
  "Phaser.js",
  "HTML5 Canvas",
  "JavaScript",
  "Scene-Based Architecture",
  "Interactive Controls",
  "Animated Signal Flow",
  "Responsive Simulation Layout",
  "Resistance Simulation",
  "Capacitance Simulation",
  "Logic Gate Simulation",
  "Game-Style Learning UI",
];

const challenges = [
  "Creating physics concepts visually so students can understand behavior instead of only reading theory.",
  "Managing Phaser scenes inside a React + Vite application without breaking component flow.",
  "Building multiple modules like Resistance, Capacitance, AND Gate, OR Gate and NOT Gate with separate logic.",
  "Keeping animations smooth while updating current flow, charge level, bulb glow, signal dots and output states.",
  "Designing responsive layouts so simulations remain usable on different screen sizes.",
  "Making scientific concepts interactive without making the UI overloaded or confusing.",
];

const coreFunctionalities = [
  {
    title: "Resistance Simulation",
    desc: "Explains resistance, current flow and circuit behavior through visual water-flow and animated current concepts.",
    icon: Zap,
  },
  {
    title: "Capacitance Simulation",
    desc: "Shows capacitor charging, discharging, stored charge, electric field behavior and bulb glow output.",
    icon: Atom,
  },
  {
    title: "Logic Gate Modules",
    desc: "Includes AND, OR and NOT gate simulations with input switches, output behavior and animated signal movement.",
    icon: CircuitBoard,
  },
  {
    title: "Interactive Learning Flow",
    desc: "Students can select modules, change values, observe output and learn by experimenting directly.",
    icon: Gamepad2,
  },
];

const useCases = [
  "Physics concept visualization",
  "Electronics learning labs",
  "School and college demonstrations",
  "Digital circuit teaching",
  "Interactive classroom activities",
  "Self-learning simulation practice",
];

const educationContribution = [
  {
    title: "Visual Learning",
    desc: "Students can see current flow, capacitor charge and logic output instead of only reading formulas.",
    icon: MonitorPlay,
  },
  {
    title: "Concept Clarity",
    desc: "Interactive sliders, switches and animated feedback make abstract electronics concepts easier to understand.",
    icon: Lightbulb,
  },
  {
    title: "Practice-Based Learning",
    desc: "The platform supports experimentation, observation and repeated practice across different modules.",
    icon: BookOpenCheck,
  },
];

const bestFeatures = [
  "Resistance module",
  "Capacitance module",
  "AND gate simulation",
  "OR gate simulation",
  "NOT gate simulation",
  "Animated current flow",
  "Interactive input switches",
  "Real-time output feedback",
  "Scene-based Phaser architecture",
  "Responsive simulation layout",
  "Game-style learning interface",
  "Physics + electronics concept coverage",
];

const demonstratedSkills = [
  "Phaser.js development",
  "React + Phaser integration",
  "Canvas-based simulation design",
  "Interactive UI engineering",
  "Physics concept visualization",
  "Logic gate behavior modeling",
  "Animation and state handling",
  "Responsive simulation layout",
  "Educational product thinking",
  "Problem solving with visual systems",
];

function DetailCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[28px] border border-cyan-300/15 bg-gradient-to-br from-cyan-950/25 via-white/[0.035] to-indigo-950/25 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/35 hover:bg-white/[0.055]">
      <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
        <Icon size={26} />
      </div>

      <h3 className="mt-5 pb-1 bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-200 bg-clip-text text-xl font-black leading-[1.22] text-transparent">
        {title}
      </h3>

      <p className="mt-3 text-sm font-medium leading-7 text-slate-300">
        {desc}
      </p>
    </div>
  );
}

function SectionTitle({ icon: Icon, label, title, desc }) {
  return (
    <div className="mb-10">
      <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-5 py-2">
        <Icon size={18} className="text-cyan-300" />
        <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">
          {label}
        </p>
      </div>

      <h2 className="mt-5 pb-2 bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-3xl font-black leading-[1.18] tracking-tight text-transparent md:text-5xl md:leading-[1.18]">
        {title}
      </h2>

      {desc && (
        <p className="mt-4 max-w-4xl text-base font-semibold leading-8 text-slate-300">
          {desc}
        </p>
      )}
    </div>
  );
}

function SixthProject() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-5 pt-32 pb-24 text-white md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(8,145,178,0.18),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(79,70,229,0.14),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="relative mx-auto max-w-9xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-black text-cyan-100 transition-all duration-300 hover:border-cyan-300/35 hover:bg-white/[0.08]"
        >
          <ArrowLeft size={18} />
          Back To Projects
        </Link>

        <div className="mt-5 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.035] px-5 py-2">
              <Atom size={18} className="text-cyan-300" />
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Physics Simulation Learning Lab
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.16] tracking-tight text-white md:text-7xl md:leading-[1.16]">
              Interactive Physics
              <span className="block pb-4 bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300 bg-clip-text text-transparent">
                Simulation Lab
              </span>
            </h1>

            <p className="mt-6 max-w-4xl text-lg font-semibold leading-8 text-slate-300">
              A React + Phaser based educational simulation platform where
              students can learn resistance, capacitance and digital logic gates
              through animated circuits, interactive controls and real-time
              visual feedback.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
  <a
    href={liveLink}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300 px-7 py-4 text-sm font-black text-black transition-all duration-300 hover:scale-105"
  >
    Try Live Simulation
    <ExternalLink size={18} />
  </a>

  <a
    href="#simulation-modules"
    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.045] px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:border-cyan-300/35 hover:bg-white/[0.08]"
  >
    View Modules
    <Workflow size={18} />
  </a>
</div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-cyan-300/15 bg-white/[0.035] p-5">
                <h3 className="text-3xl font-black text-cyan-200">Phaser</h3>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  Simulation Engine
                </p>
              </div>

              <div className="rounded-[24px] border border-cyan-300/15 bg-white/[0.035] p-5">
                <h3 className="text-3xl font-black text-indigo-200">
                  Physics
                </h3>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  Visual Concepts
                </p>
              </div>

              <div className="rounded-[24px] border border-cyan-300/15 bg-white/[0.035] p-5">
                <h3 className="text-3xl font-black text-emerald-200">Logic</h3>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  Gate Modules
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-4">
            <img
              src={sixthProjectImage}
              alt="Physics Simulation Lab UI"
              className="h-[430px] w-full rounded-[26px] object-cover"
            />
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={Code2}
            label="Technology Stack"
            title="Technologies Used"
            desc="This project combines React UI structure with Phaser.js scenes to build animated and interactive educational simulations."
          />

          <div className="flex flex-wrap gap-3">
            {technologies.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-black text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div id="simulation-modules" className="mt-20">
          <SectionTitle
            icon={Workflow}
            label="Core Functionality"
            title="What This Simulation Platform Does"
            desc="The project converts physics and electronics topics into interactive visual modules instead of static textbook-style explanations."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreFunctionalities.map((item) => (
              <DetailCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-7">
            <SectionTitle
              icon={Wrench}
              label="Development Challenges"
              title="Challenges Solved"
            />

            <div className="space-y-4">
              {challenges.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-cyan-300/15 bg-gradient-to-r from-cyan-950/20 to-indigo-950/20 p-4 text-sm font-semibold leading-7 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-7">
            <SectionTitle
              icon={Rocket}
              label="Main Aim"
              title="Where This Project Can Be Used"
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-indigo-300/15 bg-indigo-400/[0.06] px-4 py-3 text-sm font-black text-indigo-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={GraduationCap}
            label="Education Contribution"
            title="Contribution To Physics Learning"
            desc="This project helps students understand difficult electronics and physics concepts through visual experimentation, animated behavior and direct interaction with circuit-like systems."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {educationContribution.map((item) => (
              <DetailCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-7">
            <SectionTitle
              icon={ShieldCheck}
              label="Best Features"
              title="What Makes It Strong"
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {bestFeatures.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.055] px-4 py-3 text-sm font-black text-cyan-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-7">
            <SectionTitle
              icon={Sparkles}
              label="Differentiator"
              title="Why This Simulation Project Stands Out"
            />

            <p className="text-base font-semibold leading-8 text-slate-300">
              Many learning websites only show text, videos or static diagrams.
              This project is different because it lets learners interact with
              physics and electronics concepts directly. Students can change
              inputs, observe animations, understand current flow, capacitor
              behavior and logic output through a practical simulation-style
              interface.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={Layers}
            label="Skills Demonstrated"
            title="Skills This Project Proves"
            desc="This project demonstrates simulation engineering, animation logic, Phaser scene management and education-focused UI development."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {demonstratedSkills.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.06] to-indigo-400/[0.06] p-4 text-center text-sm font-black text-cyan-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[36px] border border-cyan-300/20 bg-white/[0.04] p-8 text-center">
          <Cpu className="mx-auto text-cyan-300" size={38} />

          <h2 className="mt-5 pb-2 bg-gradient-to-r from-cyan-200 via-white to-indigo-200 bg-clip-text text-3xl font-black leading-[1.18] text-transparent md:text-5xl md:leading-[1.18]">
            Interactive Simulation Architecture
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-8 text-slate-300">
            This project proves the ability to build advanced visual learning
            tools where React handles UI flow and Phaser handles simulation
            scenes, animation, interaction and real-time concept visualization.
          </p>

          <a
  href={liveLink}
  target="_blank"
  rel="noreferrer"
  className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300 px-8 py-4 text-sm font-black text-black transition-all duration-300 hover:scale-105"
>
  Open Live Simulation
  <ExternalLink size={18} />
</a>
        </div>
      </div>
    </section>
  );
}

export default SixthProject;