import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Layers,
  LineChart,
  ListChecks,
  LockKeyhole,
  MonitorCheck,
  Parentheses,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

import thirdProjectDetailImage from "../../assets/Third Project/image 2.png";

const technologies = [
  "React.js",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT Authentication",
  "Role-Based Access",
  "REST APIs",
  "Subject Management",
  "Candidate Dashboard",
  "Parents Web App",
  "Progress Calculation",
  "Test Result Tracking",
];

const challenges = [
  "Keeping LMS-2 different from a normal admin-candidate LMS by adding a parent-facing progress tracking layer.",
  "Calculating overall progress from subjects, subject tests, chapter tests and practice test results.",
  "Managing subject-based learning where every subject can have chapters, topics, tests and practice workflows.",
  "Separating candidate, admin and parent-side UI expectations while keeping data connected through APIs.",
  "Handling stored candidate data, assigned subjects and progress values cleanly on the parents web app.",
  "Designing a learning dashboard that can explain child progress without making parents interact with complex admin tools.",
];

const coreFunctionalities = [
  {
    title: "Subject-Based LMS",
    desc: "The system is organized around subjects, chapters, topics, tests and practice workflows.",
    icon: School,
  },
  {
    title: "Candidate Learning Flow",
    desc: "Candidates can access assigned subjects, view chapter content and attempt linked tests or practice tests.",
    icon: GraduationCap,
  },
  {
    title: "Parents Web App",
    desc: "Parents can log in and track the child’s learning progress, subject performance and completion status.",
    icon: Users,
  },
  {
    title: "Progress Analytics",
    desc: "Progress is calculated from subject tests, chapter tests and practice results to show learning performance.",
    icon: BarChart3,
  },
];

const useCases = [
  "School learning platforms",
  "Coaching institute LMS",
  "Parent-child progress tracking",
  "Subject-wise online learning",
  "Candidate assessment portals",
  "Academic performance dashboards",
];

const educationContribution = [
  {
    title: "Parent Visibility",
    desc: "Parents can see how their child is performing instead of depending only on offline reports.",
    icon: Users,
  },
  {
    title: "Subject-Wise Learning",
    desc: "The platform structures learning around subjects, chapters, tests and practice activities.",
    icon: BookOpenCheck,
  },
  {
    title: "Performance Awareness",
    desc: "Progress data helps students, parents and institutes identify where improvement is needed.",
    icon: LineChart,
  },
];

const bestFeatures = [
  "Admin dashboard",
  "Candidate dashboard",
  "Parents web app",
  "Subject-wise progress",
  "Chapter learning flow",
  "Subject tests",
  "Chapter tests",
  "Practice test results",
  "Overall progress calculation",
  "Secure login flow",
  "MongoDB-driven structure",
  "Responsive dashboard UI",
];

const demonstratedSkills = [
  "Multi-panel product architecture",
  "React dashboard development",
  "Parent portal design",
  "Subject-based LMS logic",
  "Progress calculation logic",
  "Backend API integration",
  "MongoDB schema handling",
  "Authentication workflow",
  "Role-based product thinking",
  "Education product development",
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

function ThirdProject() {
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
              <Parentheses size={18} className="text-cyan-300" />
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Subject-Based LMS With Parent Portal
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.16] tracking-tight text-white md:text-7xl md:leading-[1.16]">
              Parent-Connected
              <span className="block pb-4 bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300 bg-clip-text text-transparent">
                LMS Platform
              </span>
            </h1>

            <p className="mt-6 max-w-4xl text-lg font-semibold leading-8 text-slate-300">
              A different type of LMS focused on subject-wise learning,
              candidate progress and parent visibility. It connects admin,
              candidate and parents web flows so parents can track child
              performance through structured progress data.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-cyan-300/15 bg-white/[0.035] p-5">
                <h3 className="text-3xl font-black text-cyan-200">Subjects</h3>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  Learning Structure
                </p>
              </div>

              <div className="rounded-[24px] border border-cyan-300/15 bg-white/[0.035] p-5">
                <h3 className="text-3xl font-black text-indigo-200">
                  Parents
                </h3>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  Progress View
                </p>
              </div>

              <div className="rounded-[24px] border border-cyan-300/15 bg-white/[0.035] p-5">
                <h3 className="text-3xl font-black text-emerald-200">
                  Tests
                </h3>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  Performance Flow
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-4">
            <img
              src={thirdProjectDetailImage}
              alt="Parent Connected LMS UI"
              className="h-[430px] w-full rounded-[26px] object-cover"
            />
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={Code2}
            label="Technology Stack"
            title="Technologies Used"
            desc="This LMS uses a MERN-style architecture with a separate parents web app for tracking child learning progress."
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

        <div className="mt-20">
          <SectionTitle
            icon={Workflow}
            label="Core Functionality"
            title="What This LMS Does"
            desc="This project is different from the previous LMS because it is subject-driven and includes a dedicated parent progress tracking experience."
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
            title="Contribution To Education"
            desc="This project improves education workflows by connecting the student’s learning activity with parent visibility. It helps parents understand subject progress, test performance and chapter completion without needing admin access."
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
              title="Why This LMS Stands Out"
            />

            <p className="text-base font-semibold leading-8 text-slate-300">
              A normal LMS focuses mainly on admin and learner panels. This LMS
              adds a separate parents web experience, making it more suitable
              for school or coaching workflows where parents need visibility
              into the child’s subject progress, tests and overall learning
              performance. That parent-facing layer makes this project different
              from the second LMS project.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={Layers}
            label="Skills Demonstrated"
            title="Skills This Project Proves"
            desc="This project demonstrates multi-panel architecture, subject-wise product thinking and educational progress tracking."
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
          <Database className="mx-auto text-cyan-300" size={38} />

          <h2 className="mt-5 pb-2 bg-gradient-to-r from-cyan-200 via-white to-indigo-200 bg-clip-text text-3xl font-black leading-[1.18] text-transparent md:text-5xl md:leading-[1.18]">
            LMS With Parent Progress Tracking
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-8 text-slate-300">
            This project proves the ability to build an education platform where
            students learn through subjects and tests, while parents can monitor
            progress from a separate dedicated web app.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThirdProject;