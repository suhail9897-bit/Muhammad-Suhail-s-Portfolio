import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BarChart3,
  BookOpenCheck,
  Code2,
  Database,
  GraduationCap,
  Layers,
  LineChart,
  ListChecks,
  LockKeyhole,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

import fourthProjectImage from "../../assets/fourth Project/image.jpeg";

const technologies = [
  "React Native",
  "Expo",
  "TypeScript",
  "React Navigation",
  "Expo SecureStore",
  "REST APIs",
  "JWT Token Handling",
  "Android APK Build",
  "Subject Progress APIs",
  "Chapter Progress Logic",
  "Overall Progress Calculation",
  "Responsive Mobile UI",
];

const challenges = [
  "Building a mobile-first progress tracking experience that stays simple for parents.",
  "Managing secure login and token storage using Expo SecureStore.",
  "Fetching candidate data, assigned subjects and progress details from backend APIs.",
  "Calculating overall progress from subject tests, chapter tests and practice results.",
  "Designing subject-wise and chapter-wise progress screens inside a compact mobile UI.",
  "Keeping navigation smooth between login, dashboard, profile, subjects and chapter progress screens.",
];

const coreFunctionalities = [
  {
    title: "Secure Login Flow",
    desc: "Parents can access the app through a secure login flow with token-based session handling.",
    icon: LockKeyhole,
  },
  {
    title: "Overall Progress",
    desc: "The dashboard shows overall learning progress calculated from subject, chapter and test data.",
    icon: BarChart3,
  },
  {
    title: "Subject Tracking",
    desc: "Parents can view assigned subjects and open subject-wise progress details.",
    icon: BookOpenCheck,
  },
  {
    title: "Chapter Progress",
    desc: "The app allows checking chapter-level progress and learning performance details.",
    icon: ListChecks,
  },
];

const useCases = [
  "Parent progress tracking",
  "School learning companion app",
  "Coaching institute mobile portal",
  "Subject-wise performance monitoring",
  "Student test progress visibility",
  "Mobile learning dashboard",
];

const educationContribution = [
  {
    title: "Parent Awareness",
    desc: "Parents can monitor their child’s academic progress directly from a mobile app.",
    icon: Users,
  },
  {
    title: "Better Learning Visibility",
    desc: "Subject, chapter and test progress help parents understand where the child needs attention.",
    icon: LineChart,
  },
  {
    title: "Mobile-First Education Flow",
    desc: "The app makes LMS progress accessible without opening a desktop dashboard.",
    icon: MonitorSmartphone,
  },
];

const bestFeatures = [
  "Parent-focused mobile dashboard",
  "Secure token storage",
  "Overall progress calculation",
  "Subject-wise progress view",
  "Chapter-wise progress view",
  "Profile screen",
  "Drawer navigation",
  "API-based data loading",
  "Expo Android workflow",
  "Clean dark mobile UI",
  "Fast navigation screens",
  "Progress-first product design",
];

const demonstratedSkills = [
  "React Native development",
  "Expo app workflow",
  "TypeScript mobile app structure",
  "Mobile navigation handling",
  "Secure token storage",
  "API integration in mobile apps",
  "Progress calculation logic",
  "Parent-facing UX design",
  "Android APK build workflow",
  "Mobile dashboard architecture",
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

function FourthProject() {
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
              <Smartphone size={18} className="text-cyan-300" />
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Parent Progress Mobile App
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.16] tracking-tight text-white md:text-7xl md:leading-[1.16]">
              Parent Progress
              <span className="block pb-4 bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300 bg-clip-text text-transparent">
                Mobile App
              </span>
            </h1>

            <p className="mt-6 max-w-4xl text-lg font-semibold leading-8 text-slate-300">
              A React Native + Expo mobile app connected with LMS-2, designed
              for parents to track their child’s subjects, chapters, test
              performance and overall learning progress directly from mobile.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-cyan-300/15 bg-white/[0.035] p-5">
                <h3 className="text-3xl font-black text-cyan-200">Expo</h3>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  Mobile Workflow
                </p>
              </div>

              <div className="rounded-[24px] border border-cyan-300/15 bg-white/[0.035] p-5">
                <h3 className="text-3xl font-black text-indigo-200">
                  Parents
                </h3>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  Child Tracking
                </p>
              </div>

              <div className="rounded-[24px] border border-cyan-300/15 bg-white/[0.035] p-5">
                <h3 className="text-3xl font-black text-emerald-200">
                  Progress
                </h3>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  Subject + Chapter
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-4">
            <img
              src={fourthProjectImage}
              alt="Parent Progress Mobile App UI"
              className="h-[560px] w-full rounded-[26px] object-cover"
            />
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={Code2}
            label="Technology Stack"
            title="Technologies Used"
            desc="This mobile app uses React Native, Expo and TypeScript with secure token storage and API-driven progress tracking."
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
            title="What This Mobile App Does"
            desc="This is the mobile companion of LMS-2, focused on parent-side progress visibility and child performance monitoring."
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
              title="Where This App Can Be Used"
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
            desc="The app improves education transparency by giving parents quick access to their child’s academic progress, subject performance and learning status."
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
              title="Why This Mobile App Stands Out"
            />

            <p className="text-base font-semibold leading-8 text-slate-300">
              Most LMS systems keep progress tracking inside a web dashboard.
              This project brings that progress tracking into a dedicated mobile
              experience for parents. It is directly connected with LMS-2 and
              focuses on subject-wise, chapter-wise and overall progress
              visibility from a compact mobile interface.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={Layers}
            label="Skills Demonstrated"
            title="Skills This Project Proves"
            desc="This project demonstrates mobile app development, API integration, secure storage and education-focused product thinking."
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
            LMS-2 Mobile Companion App
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-8 text-slate-300">
            This app proves the ability to extend a web-based LMS into a mobile
            product where parents can monitor child progress, subjects, chapters
            and test performance in a cleaner mobile format.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FourthProject;