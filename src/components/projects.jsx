import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaMobileScreen,
} from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { SiReact, SiMongodb, SiNodedotjs } from "react-icons/si";
import schematicProjectImage from "../assets/schematic project/image.png";

const projects = [
{
  title: "Schematic Circuit Designer",
  type: "EDA / Digital Circuit Tool",
  desc: "A visual digital circuit designer where users create circuits and download generated netlists.",
  stack: ["React", "HTML5 Canvas", "Graph Data Structures", "Netlist Parser", "Digital Logic", "EDA Tooling"],
  icon: FaLaptopCode,
  image: schematicProjectImage,
  detailsPath: "/schematicDetails",
},
{
  title: "Enterprise LMS Platform",
  type: "Full Stack LMS",
  desc: "A complete LMS ecosystem with admin, candidate, training, tests, progress tracking, notices, book reader and role-based workflows.",
  stack: ["React", "Node.js", "MongoDB", "REST APIs"],
  icon: MdDashboardCustomize,
},
  {
    title: "React Native Mobile App",
    type: "Mobile App",
    desc: "Expo-based Android application with login, dashboard, candidate data, test details and mobile-first user experience.",
    stack: ["React Native", "Expo", "API", "Android"],
    icon: FaMobileScreen,
  },
  {
    title: "Admin Dashboard System",
    type: "Dashboard UI",
    desc: "Premium admin dashboards with tables, filters, CRUD workflows, analytics-style layouts and responsive interface design.",
    stack: ["React", "Tailwind", "CRUD", "UI"],
    icon: SiReact,
  },
  {
    title: "Simulation Learning Modules",
    type: "Interactive Learning",
    desc: "Physics and logic-gate simulations with animated flow, controls, visual stages and interactive learning behavior.",
    stack: ["Phaser.js", "React", "Canvas", "Logic"],
    icon: FaCode,
  },
  {
    title: "Backend API Architecture",
    type: "Backend System",
    desc: "Authentication, protected routes, file handling, database models and production-ready API workflow architecture.",
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    icon: SiNodedotjs,
  },
  {
    title: "Database Driven Web Apps",
    type: "MERN Projects",
    desc: "Dynamic web applications with MongoDB schemas, clean data flow, backend integration and scalable frontend structure.",
    stack: ["MongoDB", "Express", "React", "Node"],
    icon: SiMongodb,
  },
  {
    title: "Business Landing Websites",
    type: "Frontend Website",
    desc: "Premium landing pages and portfolio-style websites focused on trust, conversion, presentation and responsive design.",
    stack: ["Vite", "React", "Tailwind", "UI/UX"],
    icon: SiReact,
  },
];

const stats = [
  { value: "10+", label: "Major Projects" },
  { value: "2", label: "Companies Worked" },
  { value: "LMS", label: "Product Expertise" },
  { value: "EDA", label: "Tooling Expertise" },
];

function ProjectCard({ project }) {
  const Icon = project.icon;

  const cardContent = (
    <article className="group relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.38)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/35 hover:bg-white/[0.055]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.08),transparent_36%,rgba(129,140,248,0.08))] opacity-60" />
      <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-44 w-44 rounded-full bg-cyan-400/10 blur-[70px] transition-all duration-300 group-hover:bg-indigo-400/14" />

      <div className="relative">
        {project.image && (
          <div className="mb-5 overflow-hidden rounded-[24px] border border-white/10 bg-black/45">
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-2xl text-cyan-200">
          <Icon />
        </div>

        <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
          {project.type}
        </p>

        <h3 className="mt-3 text-2xl font-black text-amber-500">
          {project.title}
        </h3>

        <p className="mt-4 min-h-[112px] text-sm font-medium leading-7 text-white/58">
          {project.desc}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-[#111] px-3 py-1.5 text-xs font-bold text-emerald-400"
            >
              {item}
            </span>
          ))}
        </div>

        {project.detailsPath && (
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
            View Project Details
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </article>
  );

  if (project.detailsPath) {
    return (
      <Link to={project.detailsPath} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}


function Projects({ variant = "preview" }) {
  const isPreview = variant === "preview";
  const visibleProjects = isPreview ? projects.slice(0, 4) : projects;

  return (
    <section
      id="projects"
      className={`relative overflow-hidden bg-black px-5 md:px-10 ${
        isPreview ? "py-28" : "min-h-screen pt-32 pb-28"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(8,145,178,0.18),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(79,70,229,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="relative mx-auto max-w-9xl">
        <div className="mx-auto mb-16 max-w-5xl text-center">
          <div className="mx-auto inline-flex items-center justify-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.035] px-5 py-2">
            <Sparkles size={18} className="text-cyan-300" />
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              {isPreview ? "Selected Works" : "Project Portfolio"}
            </p>
          </div>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-white md:text-7xl">
            {isPreview ? "My Projects" : "All Projects"}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-white/60 md:text-lg">
            A focused collection of full stack, LMS, EDA, dashboard and mobile
            app projects built with scalable architecture, clean UI and real
            production-style workflows.
          </p>

          <div className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-bold text-emerald-400">
            <SiReact className="text-xl text-cyan-400" />
            Built with React, Vite, Tailwind and modern component architecture
          </div>
        </div>

        <div className="mb-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[26px] border border-white/10 bg-white/[0.035] p-5 text-center"
            >
              <h3 className="text-3xl font-black text-emerald-500">{item.value}</h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-white/75">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {isPreview && (
          <div className="mt-14 flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-white/[0.045] px-8 py-4 text-sm font-black text-cyan-100 transition-all duration-300 hover:scale-105 hover:border-indigo-300/40 hover:bg-white/[0.08] hover:text-white"
            >
              Explore All Projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;