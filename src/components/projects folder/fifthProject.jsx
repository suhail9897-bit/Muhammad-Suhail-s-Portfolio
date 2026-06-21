import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpenCheck,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Library,
  ListChecks,
  LockKeyhole,
  MonitorCheck,
  Rocket,
  School,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Users,
  Video,
  Workflow,
  Wrench,
} from "lucide-react";

import fifthProjectImage from "../../assets/fifth Project/image2.png";

const technologies = [
  "React.js",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT Authentication",
  "Role-Based Access",
  "Teacher Registration",
  "Student Registration",
  "Subject Marketplace",
  "Paid Subject Access",
  "Chapter Management",
  "Subject Tests",
  "Practice Tests",
  "Free Library",
  "PDF / Video Content",
  "Simulation Learning",
];

const challenges = [
  "Building a marketplace-style LMS where teachers can register, create subjects and sell their learning content.",
  "Separating teacher-created subjects so students can filter by subject and choose the best teacher.",
  "Managing paid access where students only access purchased subjects and their related learning content.",
  "Handling chapters, topics, PDFs, videos, subject tests, chapter tests, practice tests and free library flows in one system.",
  "Designing teacher, student and admin-side workflows without making the UI confusing.",
  "Keeping content discovery simple so students can quickly find subjects according to their class, topic or teacher.",
];

const coreFunctionalities = [
  {
    title: "Teacher Registration",
    desc: "Teachers can register, create their profile and publish subjects for students.",
    icon: Users,
  },
  {
    title: "Subject Marketplace",
    desc: "Students can browse and filter subjects, compare teachers and purchase access to the preferred subject.",
    icon: Store,
  },
  {
    title: "Learning CRUD Flow",
    desc: "The system supports subject, chapter, topic, PDF, video, test and practice-based learning content management.",
    icon: Workflow,
  },
  {
    title: "Tests & Practice",
    desc: "Students can attempt subject tests, chapter tests and practice tests to improve learning performance.",
    icon: ListChecks,
  },
];

const useCases = [
  "Online teacher marketplace",
  "Paid subject selling platform",
  "Coaching institute portal",
  "Independent teacher platform",
  "Student subject purchase system",
  "Digital learning business model",
];

const educationContribution = [
  {
    title: "Teacher Monetization",
    desc: "Teachers can build paid subjects and earn through their own learning content.",
    icon: GraduationCap,
  },
  {
    title: "Student Choice",
    desc: "Students can filter subjects and select the best teacher according to their learning needs.",
    icon: School,
  },
  {
    title: "Complete Learning Access",
    desc: "Purchased subjects can include chapters, tests, practice, videos, PDFs, library and simulations.",
    icon: BookOpenCheck,
  },
];

const bestFeatures = [
  "Teacher registration",
  "Student registration",
  "Paid subject marketplace",
  "Subject filtering",
  "Teacher profile flow",
  "Subject purchase flow",
  "Chapter-based learning",
  "Subject tests",
  "Practice tests",
  "Free library",
  "PDF and video content",
  "Simulation learning modules",
  "Admin-side subject control",
  "Role-based access",
  "MongoDB-driven content",
  "Premium responsive UI",
];

const demonstratedSkills = [
  "Marketplace LMS architecture",
  "Teacher-student product flow",
  "Paid content access logic",
  "React dashboard development",
  "Backend API development",
  "MongoDB schema design",
  "Authentication and authorization",
  "Role-based UI handling",
  "Content CRUD architecture",
  "Education product strategy",
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

function FifthProject() {
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
              <Store size={18} className="text-cyan-300" />
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Teacher Marketplace LMS
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.16] tracking-tight text-white md:text-7xl md:leading-[1.16]">
              Paid Subject
              <span className="block pb-4 bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300 bg-clip-text text-transparent">
                Marketplace LMS
              </span>
            </h1>

            <p className="mt-6 max-w-4xl text-lg font-semibold leading-8 text-slate-300">
              A completely different LMS concept where teachers register, create
              paid subjects, manage learning content and students purchase the
              best teacher’s subject according to their learning requirement.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-cyan-300/15 bg-white/[0.035] p-5">
                <h3 className="text-3xl font-black text-cyan-200">Teacher</h3>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  Paid Content
                </p>
              </div>

              <div className="rounded-[24px] border border-cyan-300/15 bg-white/[0.035] p-5">
                <h3 className="text-3xl font-black text-indigo-200">
                  Student
                </h3>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  Subject Purchase
                </p>
              </div>

              <div className="rounded-[24px] border border-cyan-300/15 bg-white/[0.035] p-5">
                <h3 className="text-3xl font-black text-emerald-200">CRUD</h3>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  Learning System
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-4">
            <img
              src={fifthProjectImage}
              alt="Teacher Marketplace LMS UI"
              className="h-[430px] w-full rounded-[26px] object-cover"
            />
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={Code2}
            label="Technology Stack"
            title="Technologies Used"
            desc="This LMS uses a full stack architecture with teacher-side subject creation, student-side purchase flow and learning content management."
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
            desc="This LMS is different from the previous LMS projects because it works like a paid teacher marketplace with subject purchase access."
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
            desc="This project gives teachers a digital business platform and gives students freedom to choose the best subject content according to class, subject and teacher quality."
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
              A normal LMS gives access to fixed courses controlled by one
              platform. This LMS works more like a teacher marketplace: teachers
              create paid subjects, students discover teachers through subject
              filtering and then purchase access to the content they need. This
              makes it different from the previous LMS projects because the main
              model is teacher monetization plus student choice.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={Library}
            label="Learning Modules"
            title="Content, Tests, Library & Simulations"
            desc="The platform supports complete learning workflows after purchase, including subject content, tests, free library access and interactive learning modules."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <DetailCard
              icon={BookOpenCheck}
              title="Subject Content"
              desc="Students access purchased subjects with chapters, topics and structured learning material."
            />
            <DetailCard
              icon={ListChecks}
              title="Tests & Practice"
              desc="Subject tests, chapter tests and practice flows support assessment-based learning."
            />
            <DetailCard
              icon={Library}
              title="Free Library"
              desc="Students can explore free learning resources alongside paid subject content."
            />
            <DetailCard
              icon={Video}
              title="Simulations"
              desc="Interactive simulation modules can support better visual understanding of concepts."
            />
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            icon={Layers}
            label="Skills Demonstrated"
            title="Skills This Project Proves"
            desc="This project demonstrates marketplace thinking, full stack LMS development, role-based product architecture and paid content workflow design."
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
            Marketplace-Based LMS Architecture
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-8 text-slate-300">
            This project proves the ability to build a real education-business
            platform where teachers sell subjects, students purchase access and
            the system manages learning content, tests, library and structured
            progress-ready workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FifthProject;