'use client';

import Image from 'next/image';
import type { MouseEvent } from "react";
import React from "react";

interface Star {
  top: string;
  left: string;
  size: number;
  opacity: number;
}

const STARS: Star[] = [
  { top: "6%", left: "19%", size: 2, opacity: 0.9 },
  { top: "4%", left: "26%", size: 1.5, opacity: 0.5 },
  { top: "11%", left: "32%", size: 2, opacity: 0.7 },
  { top: "3%", left: "39%", size: 1.5, opacity: 0.6 },
  { top: "15%", left: "44%", size: 2.5, opacity: 0.8 },
  { top: "8%", left: "51%", size: 1.5, opacity: 0.4 },
  { top: "19%", left: "57%", size: 2, opacity: 0.6 },
  { top: "5%", left: "62%", size: 1.5, opacity: 0.5 },
  { top: "23%", left: "68%", size: 2, opacity: 0.7 },
  { top: "13%", left: "72%", size: 1.5, opacity: 0.5 },
  { top: "17%", left: "17%", size: 1.5, opacity: 0.4 },
  { top: "27%", left: "35%", size: 2, opacity: 0.5 },
  { top: "21%", left: "49%", size: 1.5, opacity: 0.3 },
  { top: "9%", left: "24%", size: 1.5, opacity: 0.6 },
  { top: "29%", left: "59%", size: 2, opacity: 0.4 },
];

export default function Hero() {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full h-screen h-[100dvh] max-h-[100dvh] bg-white p-2 sm:p-3 md:p-4 flex flex-col justify-center items-center box-border overflow-hidden">
      <style>{`
        @keyframes subtle-twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 8px 1px rgba(255,255,255,0.4); }
        }
      `}</style>

      {/* Black card container strictly contained within 100dvh with visible white border all around */}
      <section 
        id="home" 
        className="relative mx-auto w-full h-full max-w-[1600px] overflow-hidden rounded-[18px] sm:rounded-[24px] bg-[#000000] flex flex-col justify-center items-center px-4 sm:px-6"
      >
        {/* Faint grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse 85% 65% at 50% 0%, black 30%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 65% at 50% 0%, black 30%, transparent 90%)",
          }}
        />

        {/* Primary warm glow */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[450px]"
          style={{
            background:
              "radial-gradient(800px 400px at 50% -10%, rgba(251,146,60,0.25), transparent 70%)",
          }}
        />

        {/* Secondary glow */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[350px]"
          style={{
            background:
              "radial-gradient(600px 300px at 50% -5%, rgba(234,88,12,0.15), transparent 80%)",
          }}
        />

        {/* Scattered stars with reduced motion fallback */}
        <div className="pointer-events-none absolute inset-0 motion-reduce:hidden">
          {STARS.map((star, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animation: `subtle-twinkle ${3 + (i % 3)}s ease-in-out infinite ${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        {/* Main Content - Vertically centered with padding for navbar */}
        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl px-4 sm:px-8 pt-8 sm:pt-12">
          <h1 className="font-display text-[2.75rem] sm:text-[3.75rem] md:text-[4.75rem] lg:text-[5.25rem] font-bold leading-[1.06] tracking-tight text-white max-w-5xl">
            Engineering the edge <br />
            in every product we <br />
            build
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-medium text-neutral-400 max-w-2xl">
            Digital precision. Automated scale.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, 'projects')} 
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-2.5 sm:py-3 text-sm font-bold text-black transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-md"
            >
              view projects
            </a>
            
            <div className="flex items-center text-sm" aria-label="Core Engineering Team">
              <div className="flex -space-x-2.5 sm:-space-x-3">
                <div 
                  className="z-30 h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-full border-[3px] border-[#000000] bg-[#fca5a5] shadow-md transition-transform hover:scale-110" 
                  title="Mudassar — Web & Automation"
                >
                  <Image 
                    src="/mudassar-zoom.jpg" 
                    alt="Mudassar" 
                    width={44} 
                    height={44} 
                    className="h-full w-full object-cover scale-105" 
                  />
                </div>
                <div 
                  className="z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-[3px] border-[#000000] bg-[#6ee7b7] text-xs font-bold text-black shadow-md transition-transform hover:scale-110" 
                  title="Kashan — ML & Web"
                >
                  K
                </div>
                <div 
                  className="z-10 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-[3px] border-[#000000] bg-[#f472b6] text-xs font-bold text-black shadow-md transition-transform hover:scale-110" 
                  title="Abdullah — Sr. Full Stack"
                >
                  A
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
