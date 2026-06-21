import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CircuitBoard,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  FileJson,
  Layers,
  Puzzle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Upload,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

import schematicProjectImage from "../../assets/schematic project/image.png";

const liveLink = "https://schematic-tool.netlify.app/";

const technologies = [
  "React.js",
  "Vite",
  "Tailwind CSS",
  "JavaScript",
  "HTML5 Canvas",
  "Graph Data Structures",
  "JSON Import / Export",
  "Custom Netlist Logic",
  "Component State Management",
  "EDA-Oriented UI Flow",
];

const challenges = [
  "Managing circuit components, wires, labels and block positions without breaking canvas behavior.",
  "Generating clean netlist output from user-created visual circuit connections.",
  "Redrawing complete circuits from uploaded JSON while preserving previous component structure.",
  "Handling reusable blocks, multiple uploaded designs and circuit identity without confusing the user.",
  "Keeping the UI smooth and usable while supporting complex schematic interactions.",
];

const coreFunctionalities = [
  {
    title: "Digital Circuit Creation",
    desc: "Users can visually create digital circuits using schematic components and connection flows.",
    icon: CircuitBoard,
  },
  {
    title: "Netlist Download",
    desc: "The tool converts the visual circuit into a downloadable netlist file for EDA-style workflows.",
    icon: Download,
  },
  {
    title: "JSON Save / Restore",
    desc: "Users can download the circuit as JSON and later upload it again to redraw the same design.",
    icon: FileJson,
  },
  {
    title: "Reusable Circuit Flow",
    desc: "Designed to support reusable circuit blocks and structured schematic-based project handling.",
    icon: Workflow,
  },
];

const useCases = [
  "Digital circuit prototyping",
  "EDA workflow demonstration",
  "Academic semiconductor design learning",
  "Logic design visualization",
  "Netlist generation practice",
  "Circuit structure documentation",
];

const bestFeatures = [
  "Visual schematic creation",
  "Downloadable netlist output",
  "JSON-based circuit backup",
  "JSON upload and redraw flow",
  "Clean dark UI for technical users",
  "Reusable block-oriented architecture",
  "Frontend-only fast deployment",
  "Built for EDA portfolio demonstration",
];

const workflowSteps = [
  {
    title: "Netlist Download",
    desc: "After creating a circuit, the tool reads the connected components and generates a netlist file that can be downloaded by the user.",
    icon: Download,
  },
  {
    title: "JSON Download",
    desc: "The complete circuit state is exported as JSON, including components, positions, names and connection data.",
    icon: FileJson,
  },
  {
    title: "JSON Upload",
    desc: "The saved JSON file can be uploaded again to restore the previous circuit on the canvas.",
    icon: Upload,
  },
  {
    title: "Circuit Redraw",
    desc: "After upload, the system reconstructs the circuit visually using the stored JSON structure.",
    icon: Workflow,
  },
];

const demonstratedSkills = [
  "React component architecture",
  "Complex UI state handling",
  "Canvas-based interaction design",
  "Graph-style data thinking",
  "Digital circuit workflow understanding",
  "File import/export handling",
  "EDA domain understanding",
  "Frontend product design",
  "Problem solving with structured data",
  "Production-style deployment on Netlify",
];

function DetailCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[28px] border border-cyan-300/15 bg-gradient-to-br from-cyan-950/25 via-white/[0.035] to-indigo-950/25 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/35 hover:bg-white/[0.055]">
      <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
        <Icon size={26} />
      </div>

      <h3 className="mt-5 bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-200 bg-clip-text text-xl font-black text-transparent">
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

      <h2 className="mt-5 bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-3xl font-black tracking-tight text-transparent md:text-5xl">
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
function SchematicDetails() {
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
              <CircuitBoard size={18} className="text-cyan-300" />
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                EDA / Digital Circuit Tool
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl ">
              Schematic Circuit
              <span className="block pb-4 bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300 bg-clip-text text-transparent">
                Designer
              </span>
            </h1>

            <p className="mt-6 max-w-4xl text-lg font-medium leading-8 text-white/62">
              A frontend-based EDA tool where users can design digital circuits,
              connect components visually, download generated netlists, save
              circuits as JSON and upload JSON files to redraw previous circuit
              designs.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300 px-7 py-4 text-sm font-black text-black transition-all duration-300 hover:scale-105"
              >
                Try Live Project
                <ExternalLink size={18} />
              </a>

              <a
                href="#workflow"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.045] px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:border-cyan-300/35 hover:bg-white/[0.08]"
              >
                View Workflow
                <Workflow size={18} />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-4">
            <img
              src={schematicProjectImage}
              alt="Schematic Circuit Designer UI"
              className="h-[430px] w-full rounded-[26px] object-cover"
            />
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={Code2}
            label="Technology Stack"
            title="Technologies Used"
            desc="The project combines frontend engineering, canvas interaction, structured data handling and EDA-oriented logic."
          />

          <div className="flex flex-wrap gap-3">
            {technologies.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-black text-cyan-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={Zap}
            label="Core Functionality"
            title="What The Tool Does"
            desc="The tool is not just a static UI. It handles actual circuit creation, data persistence and export workflows."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreFunctionalities.map((item) => (
              <DetailCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div id="workflow" className="mt-20">
          <SectionTitle
            icon={Workflow}
            label="File Workflow"
            title="Netlist, JSON Download & JSON Upload Flow"
            desc="The project supports both EDA-style netlist output and JSON-based circuit restore functionality."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {workflowSteps.map((item) => (
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
            icon={Cpu}
            label="Semiconductor Contribution"
            title="Contribution To Semiconductor Chip Design"
            desc="This project demonstrates an important early-stage concept of chip design: converting visual circuit intent into structured data that can move toward EDA workflows. It can help students, engineers and visitors understand how schematic creation, circuit representation and netlist generation connect with semiconductor design processes."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <DetailCard
              icon={CircuitBoard}
              title="Schematic Thinking"
              desc="Shows how digital circuit ideas can be represented visually before moving into implementation workflows."
            />
            <DetailCard
              icon={FileJson}
              title="Structured Circuit Data"
              desc="Demonstrates how circuit state can be saved, reused and reconstructed through JSON data."
            />
            <DetailCard
              icon={Download}
              title="Netlist-Oriented Output"
              desc="Connects frontend schematic design with a netlist output concept used in EDA pipelines."
            />
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
                  className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm font-black text-white/68"
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
              title="Why This Stands Out"
            />

            <p className="text-base font-semibold leading-8 text-slate-300">
              Many online schematic tools are either too complex for quick
              learning or focused only on drawing. This project focuses on a
              clean portfolio-ready EDA experience: visual circuit creation,
              structured JSON save/restore, netlist download and a simple
              interface that clearly explains the workflow behind schematic
              design.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={Layers}
            label="Skills Demonstrated"
            title="Skills This Project Proves"
            desc="This project is useful for showing both frontend development strength and domain understanding in EDA-style applications."
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
          <Puzzle className="mx-auto text-cyan-300" size={38} />

          <h2 className="mt-5 bg-gradient-to-r from-cyan-200 via-white to-indigo-200 bg-clip-text text-3xl font-black text-transparent md:text-5xl">
            Test The Live Schematic Tool
          </h2>

         <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-8 text-slate-300">
            You can open the deployed Netlify version, create sample
            circuits and test the schematic workflow directly in the browser.
          </p>

          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300 px-8 py-4 text-sm font-black text-black transition-all duration-300 hover:scale-105"
          >
            Open Live Demo
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SchematicDetails;