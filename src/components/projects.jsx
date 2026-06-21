import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  CircuitBoard,
  FileJson,
  Download,
  GraduationCap,
  Store,
  Atom,
  Gamepad2,
  Globe2,
} from "lucide-react";

import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaMobileScreen,
} from "react-icons/fa6";

import {
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiVite,
  SiTailwindcss,
  SiTypescript,
  SiExpo,
} from "react-icons/si";
import schematicProjectImage from "../assets/schematic project/image.png";
import lmsProjectImage from "../assets/second Project/image.png";
import thirdProjectImage from "../assets/Third Project/image1.png";
import fourthProjectImage from "../assets/fourth Project/image.jpeg";
import fifthProjectImage from "../assets/fifth Project/image1.png";
import sixthProjectImage from "../assets/sixth Project/image1.png";

const projects = [
{
  title: "Schematic Circuit Designer",
  type: "EDA / Digital Circuit Tool",
  desc: "A visual digital circuit designer where users create circuits and download generated netlists.",
  stack: ["React", "HTML5 Canvas", "Graph Data Structures", "Netlist Parser", "Digital Logic", "EDA Tooling"],
  icons: [CircuitBoard, SiReact, FileJson, Download],
  image: schematicProjectImage,
  detailsPath: "/schematicDetails",
},
{
  title: "Enterprise LMS Platform",
  type: "Full Stack LMS Product",
  desc: "A complete LMS with admin and candidate panels, training assignment, tests, progress tracking, notices and learning workflows.",
  stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Role-Based Access"],
  icons: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
  image: lmsProjectImage,
  detailsPath: "/secondProject",
},
{
  title: "Parent-Connected LMS",
  type: "LMS With Parent Portal",
  desc: "A subject-based LMS where candidates learn through chapters and tests while parents track child progress.",
  stack: ["React", "Node.js", "MongoDB", "Subjects", "Parent Portal", "Progress Tracking"],
  icons: [SiReact, SiNodedotjs, SiMongodb, GraduationCap],
  image: thirdProjectImage,
  detailsPath: "/thirdProject",
},
{
  title: "Parent Progress Mobile App",
  type: "React Native / Expo App",
  desc: "A mobile companion app where parents can track their child’s subjects, chapters, tests and overall progress.",
  stack: ["React Native", "Expo", "TypeScript", "SecureStore", "Progress Tracking"],
  icons: [FaMobileScreen, SiReact, SiTypescript, SiExpo],
  image: fourthProjectImage,
  detailsPath: "/fourthProject",
},
{
  title: "Teacher Marketplace LMS",
  type: "Paid Subject Marketplace",
  desc: "A marketplace-style LMS where teachers create paid subjects and students purchase the best teacher’s content.",
  stack: ["React", "Node.js", "MongoDB", "Teacher Panel", "Subject Purchase", "Free Library"],
  icons: [Store, SiReact, SiNodedotjs, SiMongodb],
  image: fifthProjectImage,
  detailsPath: "/fifthProject",
},
{
  title: "Physics Simulation Lab",
  type: "Interactive Physics Learning",
  desc: "A Phaser-based simulation platform for learning resistance, capacitance and logic gates through animated visuals.",
  stack: ["React", "Vite", "Phaser.js", "Canvas", "Physics Logic", "Interactive UI"],
  icons: [Atom, SiReact, Gamepad2, FaCode],
  image: sixthProjectImage,
  detailsPath: "/sixthProject",
},
  // {
  //   title: "Database Driven Web Apps",
  //   type: "MERN Projects",
  //   desc: "Dynamic web applications with MongoDB schemas, clean data flow, backend integration and scalable frontend structure.",
  //   stack: ["MongoDB", "Express", "React", "Node"],
  //   icons: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
  // },
  // {
  //   title: "Business Landing Websites",
  //   type: "Frontend Website",
  //   desc: "Premium landing pages and portfolio-style websites focused on trust, conversion, presentation and responsive design.",
  //   stack: ["Vite", "React", "Tailwind", "UI/UX"],
  //   icons: [Globe2, SiReact, SiVite, SiTailwindcss],
  // },
];

const stats = [
  { value: "10+", label: "Major Projects" },
  { value: "2", label: "Companies Worked" },
  { value: "LMS", label: "Product Expertise" },
  { value: "EDA", label: "Tooling Expertise" },
];

function ProjectCard({ project }) {
  const Icons = project.icons || [];

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

       <div className="grid w-fit grid-cols-4 gap-2">
          {Icons.map((Icon, index) => (
            <div
              key={index}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-xl text-cyan-200 transition-all duration-300 group-hover:border-indigo-300/35 group-hover:text-indigo-200"
            >
              <Icon />
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
          {project.type}
        </p>

       <h3 className="mt-3 pb-1 text-2xl font-black leading-[1.18] bg-gradient-to-r from-indigo-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
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

    const headingRef = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const target = headingRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeadingVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className={`relative overflow-hidden bg-black px-5 md:px-10 ${
        isPreview ? "py-28" : "min-h-screen pt-[155px] pb-28"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(8,145,178,0.18),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(79,70,229,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="relative mx-auto max-w-9xl">
       <div ref={headingRef} className="mx-auto mb-16 max-w-5xl text-center">
          <div className="mx-auto inline-flex items-center justify-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.035] px-5 py-2">
            <Sparkles size={18} className="text-cyan-300" />
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              {isPreview ? "Selected Works" : "Project Portfolio"}
            </p>
          </div>

          <h2
            className={`mt-6 transform text-5xl font-black tracking-tight text-white transition-all duration-[1000ms] ease-out md:text-7xl ${
              headingVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-24 opacity-0"
            }`}
          >
            {isPreview ? "My Projects" : "All Projects"}
          </h2>

        <div
          className={`transform transition-all delay-300 duration-[900ms] ease-out ${
            headingVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-14 opacity-0"
          }`}
        >
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