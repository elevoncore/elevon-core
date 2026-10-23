export default function BackgroundRibbons() {
  return (
    <>
      {/* --- 1. FIRST PAGE GLOWY RIBBON --- */}
      <div 
        style={{ opacity: 'var(--ribbon-opacity, 0.35)' }} 
        className="absolute top-0 left-0 w-full h-[900px] overflow-hidden -z-10 flex justify-center pointer-events-none transition-opacity duration-300"
      >
        {/* DESKTOP CURVE */}
        <svg
          aria-hidden="true"
          className="hidden md:block absolute min-w-[1200px] w-full h-full opacity-100 animate-[pulse_6s_ease-in-out_infinite] motion-reduce:animate-none"
          viewBox="0 0 1200 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Thick Outer Glow */}
          <path d="M-100 150 C 400 400, 800 0, 1500 750" stroke="url(#paint0_top)" strokeWidth="60" strokeLinecap="round" filter="blur(24px)" />
          {/* Inner 3D Core */}
          <path d="M-100 150 C 400 400, 800 0, 1500 750" stroke="url(#paint1_top)" strokeWidth="22" strokeLinecap="round" filter="blur(4px)" />
          <defs>
            <linearGradient id="paint0_top" x1="0" y1="0" x2="1200" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#4f46e5" />
              <stop offset="0.5" stopColor="#ec4899" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="paint1_top" x1="0" y1="0" x2="1200" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#818cf8" />
              <stop offset="0.5" stopColor="#f472b6" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>

        {/* MOBILE CURVE */}
        <svg
          aria-hidden="true"
          className="block md:hidden absolute w-full min-w-[400px] h-full opacity-100 animate-[pulse_6s_ease-in-out_infinite] motion-reduce:animate-none left-1/2 -translate-x-1/2"
          viewBox="0 0 400 900"
          preserveAspectRatio="xMidYMin slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-50 150 C 150 450, 350 100, 500 700" stroke="url(#paint0_top_mobile)" strokeWidth="36" strokeLinecap="round" filter="blur(16px)" />
          <path d="M-50 150 C 150 450, 350 100, 500 700" stroke="url(#paint1_top_mobile)" strokeWidth="12" strokeLinecap="round" filter="blur(3px)" />
          <defs>
            <linearGradient id="paint0_top_mobile" x1="0" y1="0" x2="400" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#4f46e5" />
              <stop offset="0.5" stopColor="#ec4899" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="paint1_top_mobile" x1="0" y1="0" x2="400" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#818cf8" />
              <stop offset="0.5" stopColor="#f472b6" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* --- 2. LAST PAGE GLOWY RIBBON --- */}
      <div 
        style={{ opacity: 'var(--ribbon-opacity, 0.35)' }} 
        className="absolute bottom-0 left-0 w-full h-[900px] overflow-hidden -z-10 flex justify-center pointer-events-none transition-opacity duration-300"
      >
        {/* DESKTOP CURVE */}
        <svg
          aria-hidden="true"
          className="hidden md:block absolute min-w-[1200px] w-full h-full opacity-100 animate-[pulse_6s_ease-in-out_infinite] motion-reduce:animate-none"
          viewBox="0 0 1200 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 1300 600 C 900 400, 700 900, -100 800" stroke="url(#paint0_bottom)" strokeWidth="60" strokeLinecap="round" filter="blur(24px)" />
          <path d="M 1300 600 C 900 400, 700 900, -100 800" stroke="url(#paint1_bottom)" strokeWidth="22" strokeLinecap="round" filter="blur(4px)" />
          <defs>
            <linearGradient id="paint0_bottom" x1="0" y1="0" x2="1200" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#8b5cf6" />
              <stop offset="0.5" stopColor="#ec4899" />
              <stop offset="1" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id="paint1_bottom" x1="0" y1="0" x2="1200" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#a78bfa" />
              <stop offset="0.5" stopColor="#f472b6" />
              <stop offset="1" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>

        {/* MOBILE CURVE */}
        <svg
          aria-hidden="true"
          className="block md:hidden absolute w-full min-w-[400px] h-full opacity-100 animate-[pulse_6s_ease-in-out_infinite] motion-reduce:animate-none left-1/2 -translate-x-1/2"
          viewBox="0 0 400 900"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 500 750 C 250 550, 150 1000, -50 950" stroke="url(#paint0_bottom_mobile)" strokeWidth="36" strokeLinecap="round" filter="blur(16px)" />
          <path d="M 500 750 C 250 550, 150 1000, -50 950" stroke="url(#paint1_bottom_mobile)" strokeWidth="12" strokeLinecap="round" filter="blur(3px)" />
          <defs>
            <linearGradient id="paint0_bottom_mobile" x1="0" y1="0" x2="400" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#8b5cf6" />
              <stop offset="0.5" stopColor="#ec4899" />
              <stop offset="1" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id="paint1_bottom_mobile" x1="0" y1="0" x2="400" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#a78bfa" />
              <stop offset="0.5" stopColor="#f472b6" />
              <stop offset="1" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
