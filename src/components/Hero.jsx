import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Hero1 from "../assets/Hero1.mp4";
import Hero2 from "../assets/Hero2.mp4";
import Hero3 from "../assets/Hero3.mp4";

const heroVideos = [Hero1, Hero2, Hero3];

function Hero() {
  const [activeVideo, setActiveVideo] = useState(0);

  const nextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % heroVideos.length);
  };

  const prevVideo = () => {
    setActiveVideo((prev) =>
      prev === 0 ? heroVideos.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextVideo();
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-black pt-20"
    >
      {/* Background Video */}
      <video
        key={activeVideo}
        src={heroVideos[activeVideo]}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Light overlay only for text readability */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_42%)]" />

      {/* Left Toggle */}
      <button
        type="button"
        onClick={prevVideo}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-emerald-400/60 hover:bg-emerald-400 hover:text-[#111] md:left-8 md:h-14 md:w-14"
        aria-label="Previous video"
      >
        <IoChevronBack className="text-2xl md:text-3xl" />
      </button>

      {/* Right Toggle */}
      <button
        type="button"
        onClick={nextVideo}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-emerald-400/60 hover:bg-emerald-400 hover:text-[#111] md:right-8 md:h-14 md:w-14"
        aria-label="Next video"
      >
        <IoChevronForward className="text-2xl md:text-3xl" />
      </button>

      {/* Foreground Text */}
      <div className="relative z-10 flex min-h-[calc(100svh-90px)] items-center justify-center px-5 text-center md:px-10">
        <div className="max-w-6xl">
         

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_8px_35px_rgba(0,0,0,0.85)] md:text-7xl xl:text-8xl">
            Building Scalable
            <span className="block bg-gradient-to-r from-indigo-300 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              Web, Mobile & EDA
            </span>
            Solutions
          </h1>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
        to="/projects"
        className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-gradient-to-r from-indigo-400 via-emerald-500 to-indigo-500 px-7 py-3 text-md font-black text-slate-800 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-transparent hover:text-slate-100"
      >
        <FaCircleArrowLeft className="text-xl transition-transform duration-300 group-hover:-translate-x-1" />
        <span>Explore Projects</span>
      </Link>

      <a
        href="#contact"
        className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-400 via-emerald-500 to-indigo-500 px-9 py-3 text-md font-black text-slate-800 shadow-[0_0_35px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-105 hover:text-slate-100"
      >
        <span>Contact Us</span>
        <FaCircleArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
      </a>
      </div>
        </div>
      </div>

      {/* Bottom Video Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {heroVideos.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveVideo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeVideo === index
                ? "w-10 bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.85)]"
                : "w-2.5 bg-white/45 hover:bg-white"
            }`}
            aria-label={`Show video ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;