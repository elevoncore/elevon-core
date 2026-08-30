'use client';

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <footer id="footer" className="snap-start w-full mt-32 relative z-10 overflow-hidden">
      {/* Top Divider & Content (Responsive Sizing to fit mobile perfectly) */}
      <div className="w-full border-t border-[var(--card-border)] pt-16 pb-20 px-3 md:px-6 flex justify-center">
        
        {/* Inner Container */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-28 w-full md:w-max max-w-full">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4 md:gap-5 items-center md:items-start text-center md:text-left">
            <span className="text-3xl md:text-4xl font-bold tracking-wide text-[var(--text-main)] whitespace-nowrap">Elevon Core</span>
            <a href="mailto:elevoncore@gmail.com" className="text-sm md:text-base text-[var(--text-muted)] hover:text-[var(--text-main)] transition whitespace-nowrap">elevoncore@gmail.com</a>
          </div>

          {/* The Link Columns */}
          <div className="grid grid-cols-3 md:flex md:flex-row md:justify-start gap-4 md:gap-16 w-full">
            
            {/* Quick Links */}
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="text-[14px] sm:text-base md:text-lg text-[var(--text-main)] font-semibold mb-1 whitespace-nowrap">Quick Links</span>
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] hover:text-[var(--text-main)] transition whitespace-nowrap">Home</a>
              <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] hover:text-[var(--text-main)] transition whitespace-nowrap">Team</a>
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] hover:text-[var(--text-main)] transition whitespace-nowrap">Projects</a>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="text-[14px] sm:text-base md:text-lg text-[var(--text-main)] font-semibold mb-1 whitespace-nowrap">Social Media</span>
              <a href="#" className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] hover:text-[var(--text-main)] transition whitespace-nowrap">Github</a>
              <a href="#" className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] hover:text-[var(--text-main)] transition whitespace-nowrap">Linkedin</a>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="text-[14px] sm:text-base md:text-lg text-[var(--text-main)] font-semibold mb-1 whitespace-nowrap">Legal</span>
              <a href="#" className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] hover:text-[var(--text-main)] transition whitespace-nowrap">Privacy Policy</a>
              <a href="#" className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] hover:text-[var(--text-main)] transition whitespace-nowrap">Terms & Conditions</a>
            </div>

          </div>
        </div>
      </div>

      {/* Giant Typography & Bottom Bar */}
      <div className="w-full border-t border-[var(--card-border)] pt-16 flex flex-col items-center relative">
        
        {/* Giant SVG Background Text */}
        <div className="w-full px-2 md:px-6 pointer-events-none select-none">
          <svg 
            aria-hidden="true"
            className="w-full h-auto" 
            viewBox="0 0 1000 280" 
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="textFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--svg-stop-1)" />    
                <stop offset="50%" stopColor="var(--svg-stop-2)" />   
                <stop offset="100%" stopColor="var(--svg-stop-3)" />  
              </linearGradient>
            </defs>
            <text 
              x="50%" 
              y="85%" 
              textAnchor="middle" 
              fill="url(#textFade)" 
              className="font-bold tracking-tighter font-display" 
              style={{ fontSize: "300px" }}
            >
              Elevon
            </text>
          </svg>
        </div>

        {/* Tiny Bottom Copyright Bar */}
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center mt-8 pb-8 text-[10px] md:text-xs text-[var(--text-muted)] gap-4">
          <p>© Elevon Core 2026. All Rights Reserved</p>
          <div className="flex gap-6">
          </div>
        </div>

      </div>
    </footer>
  );
}
