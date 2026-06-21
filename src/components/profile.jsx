import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/profile_image2.png";
import Tooltip from "../utility files/tooltip";
import { X, ShieldCheck } from "lucide-react";
import { HiBadgeCheck } from "react-icons/hi";
import loadingVideo from "../assets/profileVideo.mp4";



const PROFILE_LOADING_DURATION = 5000;


function LoadingProfile({ duration = PROFILE_LOADING_DURATION }) {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    let animationFrameId;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const nextProgress = Math.min(Math.round((elapsed / duration) * 100), 100);

      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, [duration]);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    video.currentTime = 0;
    video.muted = true;

    const setSpeedAndPlay = () => {
      const videoDuration = video.duration || 7;
      video.playbackRate = videoDuration / (duration / 1000);
      video.play().catch(() => {});
    };

    if (video.readyState >= 1) {
      setSpeedAndPlay();
    } else {
      video.addEventListener("loadedmetadata", setSpeedAndPlay, { once: true });
    }

    return () => {
      video.removeEventListener("loadedmetadata", setSpeedAndPlay);
    };
  }, [duration]);

  return (
    <div className="fixed inset-0 z-[100] h-screen w-full overflow-hidden bg-black text-white">
      <video
        ref={videoRef}
        src={loadingVideo}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="flex w-[92%] max-w-xl translate-y-[170px] flex-col items-center text-center">
          <div className="relative flex h-28 w-28 items-center justify-center">
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] md:text-5xl">
            Loading Profile...
          </h2>

          <p className="mt-3 text-xs font-black uppercase tracking-[0.38em] text-cyan-300 drop-shadow-[0_4px_18px_rgba(0,0,0,0.75)] md:text-sm">
            Preparing professional profile
          </p>

          <div className="mt-9 w-full max-w-md">
            <div className="h-2.5 w-full overflow-hidden rounded-full border border-white/20 bg-black/35 shadow-[0_0_22px_rgba(0,0,0,0.35)]">
              <div
               className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-300 shadow-[0_0_24px_rgba(103,232,249,0.45)] transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-4 text-lg font-black text-cyan-200 drop-shadow-[0_3px_14px_rgba(0,0,0,0.8)]">
              {progress}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function InfoCard({ label, value }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.08),transparent_36%,rgba(129,140,248,0.08))]" />

      <div className="relative">
        <p className="text-sm font-bold text-slate-400">{label}</p>
        <h3 className="mt-1 pb-1 bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-200 bg-clip-text text-lg font-black leading-[1.18] text-transparent">
          {value}
        </h3>
      </div>
    </div>
  );
}

function Profile({ open, onClose }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleContactClick = () => {
    onClose();

    setTimeout(() => {
      navigate("/contact");

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }, 0);
  };
  useEffect(() => {
    if (!open) return;

    setLoading(true);

    const oldBodyOverflow = document.body.style.overflow;
    const oldHtmlOverflowX = document.documentElement.style.overflowX;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflowX = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
    }, PROFILE_LOADING_DURATION);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = oldBodyOverflow;
      document.documentElement.style.overflowX = oldHtmlOverflowX;
    };
  }, [open]);

  if (!open) return null;

if (loading) {
  return <LoadingProfile duration={PROFILE_LOADING_DURATION} />;
}

const skills = [
  "React.js",
  "Vite",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Authentication",
  "Role-Based Access",
  "React Native",
  "Expo",
  "LMS Platforms",
  "EDA Tools",
  "Schematic Systems",
  "Admin Dashboards",
  "Full Stack Architecture",
  "Responsive UI",
];

const buildItems = [
  "Enterprise-style LMS platforms with admin, candidate, training, test and progress workflows",
  "EDA schematic design tools with circuit creation, JSON import/export and netlist-oriented flows",
  "Production-ready React dashboards with premium UI, responsive layouts and clean component architecture",
  "Full stack web applications with authentication, REST APIs, MongoDB and role-based access",
  "React Native mobile applications using Expo workflow for Android-based business use cases",
  "Client-facing portfolio, landing page and business websites designed for conversion and credibility",
];

  return (
    <div className="scroll-profile fixed inset-0 z-[100] h-screen w-full max-w-full overflow-y-auto overflow-x-hidden bg-black text-white backdrop-blur-2xl">
<style>{`
  .scroll-profile{
    scrollbar-width: thin;
    scrollbar-color: rgba(103,232,249,.95) rgba(8,15,18,.95);
  }

  .scroll-profile::-webkit-scrollbar{
    width: 11px;
  }

  .scroll-profile::-webkit-scrollbar-track{
    background: linear-gradient(
      180deg,
      rgba(8,15,18,.95),
      rgba(15,23,42,.95)
    );
    border-left: 1px solid rgba(255,255,255,.06);
  }

  .scroll-profile::-webkit-scrollbar-thumb{
    background: linear-gradient(
      180deg,
      rgba(103,232,249,.95),
      rgba(129,140,248,.9),
      rgba(244,114,182,.82)
    );
    border: 2px solid rgba(8,15,18,.95);
    border-radius: 999px;
    box-shadow:
      0 0 16px rgba(103,232,249,.35),
      inset 0 0 8px rgba(255,255,255,.16);
  }

  .scroll-profile::-webkit-scrollbar-thumb:hover{
    background: linear-gradient(
      180deg,
      rgba(165,243,252,1),
      rgba(129,140,248,1),
      rgba(244,114,182,.95)
    );
    box-shadow:
      0 0 22px rgba(103,232,249,.5),
      inset 0 0 10px rgba(255,255,255,.2);
  }

  .scroll-profile::-webkit-scrollbar-corner{
    background: transparent;
  }
`}</style>
     <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(8,145,178,0.18),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(79,70,229,0.16),transparent_30%),linear-gradient(135deg,rgba(103,232,249,0.08),transparent_36%,rgba(129,140,248,0.08))]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div className="fixed right-5 top-5 z-[120] md:right-10 md:top-8">
        <Tooltip title="Close Profile" text="Close Profile">
        <button
            type="button"
            onClick={onClose}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:border-cyan-300/50 hover:bg-cyan-300 hover:text-black"
            aria-label="Close Profile"
            >
            <X size={24} strokeWidth={2.6} />
        </button>
        </Tooltip>
      </div>

      <div className="relative mx-auto w-full max-w-9xl px-5 py-20 md:px-10 md:py-24">
        {/* TOP ROW: IMAGE LEFT + CONTENT RIGHT */}
        <div className="grid w-full items-start gap-8 lg:grid-cols-[260px_1fr]">
          <div className="relative w-full max-w-[230px]">
            <div className="absolute inset-0 rotate-6 rounded-[30px] bg-cyan-300/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-cyan-300/20 bg-white/[0.035] p-3 shadow-2xl backdrop-blur-xl">
              <div className="overflow-hidden rounded-[22px] border border-cyan-300/20 bg-black">
                <img
                  src={profileImage}
                  alt="Mr. Muhammad Suhail"
                  className="h-[240px] w-full object-cover"
                />
              </div>
            </div>

            <div className="relative mt-4 rounded-[24px] border border-cyan-300/20 bg-cyan-300/[0.06] p-4 text-center">
                <h3 className="text-lg font-black text-white">
                    Mr. Muhammad Suhail
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                    Full Stack Developer
                    </p>
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
        <HiBadgeCheck className="text-4xl text-cyan-300 drop-shadow-[0_0_12px_rgba(103,232,249,0.42)]" />

        <p className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300">
            Professional Profile
        </p>
        </div>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Mr. Muhammad Suhail
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h2>

            <p className="mt-5 max-w-6xl text-base leading-8 text-white/65 md:text-lg">
            Professional full stack developer with 2+ years of professional experience
            across Logicknots and Xcevo Academy, delivering large-scale web,
            mobile and EDA-based software solutions. My work includes LMS
            platforms, advanced admin dashboards, backend APIs, React Native
            applications with Expo, and schematic-driven EDA tools built with a
            strong focus on performance, usability and clean product architecture.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <InfoCard label="Education" value="BCA" />
            <InfoCard label="Experience" value="2+ Years" />
            <InfoCard label="Project Scale" value="10+ Major Projects" />
            <InfoCard label="Professional Work" value="Logicknots + Xcevo" />
            </div>
          </div>
        </div>

        {/* FULL WIDTH BELOW */}
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard label="Primary Role" value="Full Stack Developer" />
            <InfoCard label="Mobile Engineering" value="React Native + Expo" />
            <InfoCard label="Backend Systems" value="Node.js / Express / APIs" />
            <InfoCard label="Domain Expertise" value="EDA Tools + LMS Products" />
            </div>

        <div className="relative mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-6">
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.08),transparent_36%,rgba(129,140,248,0.08))]" />
  <div className="relative">
         <h3 className="pb-1 bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-200 bg-clip-text text-xl font-black leading-[1.18] text-transparent">
  Core Skills
</h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-300/20 bg-black/35 px-4 py-2 text-sm font-bold text-cyan-100 transition-all duration-300 hover:border-indigo-300/35 hover:text-indigo-100"
              >
                {skill}
              </span>
            ))}
                   </div>
        </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-6">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.08),transparent_36%,rgba(129,140,248,0.08))]" />
          <div className="relative">
          <h3 className="pb-1 bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-200 bg-clip-text text-xl font-black leading-[1.18] text-transparent">
            What I Can Build
          </h3>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {buildItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-300/15 bg-black/35 px-4 py-3 text-sm font-semibold leading-6 text-slate-300 transition-all duration-300 hover:border-indigo-300/30 hover:bg-indigo-400/[0.06]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          onClick={handleContactClick}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-300 px-8 py-4 text-sm font-black text-black transition-all duration-300 hover:scale-105"
          >
        Contact Me
        <ShieldCheck size={18} />
        </button>

          <button
            type="button"
            onClick={onClose}
           className="rounded-full border border-cyan-300/20 bg-white/[0.035] px-8 py-4 text-sm font-black text-cyan-100 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/40 hover:bg-white/[0.07] hover:text-indigo-100"
          >
            Back To Website
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;