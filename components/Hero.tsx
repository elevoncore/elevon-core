'use client';

import Image from 'next/image';
import type { CSSProperties, MouseEvent } from "react";
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
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="w-full h-[100dvh] bg-background p-1 sm:p-[6px] dark:p-0 transition-all duration-300">
      
      <style>{`
        @keyframes subtle-twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 8px 1px rgba(255,255,255,0.4); }
        }
      `}</style>

      {/* Notice the dark:rounded-none added here */}
      <section id="home" className="relative mx-auto w-full h-full max-w-[1600px] overflow-hidden rounded-[16px] sm:rounded-[20px] dark:rounded-none bg-[#000000] flex flex-col justify-center items-center transition-all duration-300">
        
        {/* Faint grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={
            {
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
              maskImage:
                "radial-gradient(ellipse 85% 65% at 50% 0%, black 30%, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 85% 65% at 50% 0%, black 30%, transparent 90%)",
            } as React.CSSProperties
          }
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

        {/* Scattered stars */}
        <div className="pointer-events-none absolute inset-0">
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

        {/* --- Main Centered Content --- */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-6 sm:px-10 lg:px-14 mt-24">
          
          <h1 className="max-w-5xl text-[3.25rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white">
            Engineering the edge <br />
            in every product we <br />
            build
          </h1>

          <p className="mt-6 text-base font-medium text-neutral-400 sm:text-lg">
            Digital precision. Automated scale.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, 'projects')} 
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-md"
            >
              view projects
            </a>
            
            <div className="flex items-center text-sm">
              <div className="flex -space-x-3">
                <div className="z-30 h-11 w-11 overflow-hidden rounded-full border-[3px] border-[#000000] bg-[#fca5a5]">
                  <Image src="/mudassar-zoom.jpg" alt="Mudassar" width={44} height={44} className="h-full w-full object-cover scale-105" />
                </div>
                <div className="z-20 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#000000] bg-[#6ee7b7] text-xs font-bold text-black">
                  K
                </div>
                <div className="z-10 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#000000] bg-[#f472b6] text-xs font-bold text-black">
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