
import React, { useEffect, useState, useRef } from 'react';
import { 
  Settings, Layers, History, Target, Activity, Quote, Star, 
  Linkedin, Twitter, Phone, Mail, TrendingUp, ShieldAlert, Award, Rocket,
  HelpCircle, Terminal, ShieldCheck, ChevronsUpDown, Maximize2
} from 'lucide-react';

export const SGALogo: React.FC<{ className?: string; scrolled?: boolean }> = ({ className = "h-10", scrolled = false }) => (
  <div className={`flex items-center gap-2 md:gap-4 transition-all duration-500 ease-in-out ${className} ${scrolled ? 'scale-[0.95]' : 'scale-100'}`}>
    <div className="h-full aspect-square flex items-center justify-center shrink-0 relative overflow-visible group">
      <img
        src="/logo.png" // <-- put your logo inside /public
        alt="SGA Industrial Automations"
        className="h-full w-auto object-contain"
      />
    </div>
    <div className={`w-[2px] bg-[#1B9B34] opacity-80 shrink-0 transition-all duration-500 ease-out ${scrolled ? 'h-[50%]' : 'h-[70%]'}`}></div>
    <div className="flex flex-col relative">
      <span className={`text-sm md:text-lg font-bold tracking-[0.05em] text-[#1B9B34] whitespace-nowrap transition-all duration-700 ease-out ${scrolled ? 'translate-x-0' : 'translate-x-0 md:translate-x-1'}`}>
        SGA INDUSTRIAL AUTOMATIONS
      </span>
      <div className={`absolute bottom-0 left-0 h-[1px] bg-[#1B9B34] transition-all duration-1000 ${scrolled ? 'w-full opacity-40' : 'w-0 opacity-0'}`} />
    </div>
  </div>
);

export const RoboticHandIllustration: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34] opacity-20 group-hover:opacity-40 transition-opacity duration-700">
    <path d="M40 160 L60 100 L80 60 Q85 50 90 60 L100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
    <path d="M60 100 L110 50 Q115 40 120 50 L130 90" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M100 100 L140 40 Q145 30 150 40 L160 80" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M130 110 L160 60 Q165 50 170 60 L180 100" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M40 160 Q70 180 120 160 L160 120" fill="none" stroke="currentColor" strokeWidth="4" />
    <circle cx="60" cy="100" r="4" fill="currentColor" />
    <circle cx="100" cy="100" r="4" fill="currentColor" />
    <circle cx="130" cy="110" r="4" fill="currentColor" />
    <circle cx="120" cy="160" r="6" fill="currentColor" className="animate-ping" />
  </svg>
);

export const IndustrialIllustration: React.FC = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full text-[#1B9B34]/20" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0 V400 M100 0 V400 M150 0 V400 M200 0 V400 M250 0 V400 M300 0 V400 M350 0 V400" stroke="currentColor" strokeWidth="0.5" />
    <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400 M0 300 H400 M0 350 H400" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="200" cy="200" r="60" fill="none" stroke="#1B9B34" strokeWidth="1" strokeDasharray="10 5" className="animate-[spin_20s_linear_infinite]" />
  </svg>
);

export const ParallaxCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTransform(`perspective(1000px) rotateX(${-y / 20}deg) rotateY(${x / 20}deg) scale3d(1.02, 1.02, 1.02)`);
  };
  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={() => setTransform("")}
      style={{ transform, transition: transform ? "none" : "transform 0.5s ease" }}
      className={`relative overflow-hidden rounded-2xl ${className}`}>{children}</div>
  );
};

export const AnimatedCounter: React.FC<{ value: string; label: string; icon?: React.ReactNode }> = ({ value, label, icon }) => {
  const numericValue = parseInt(value.match(/\d+/)?.[0] || "0");
  const suffix = value.replace(/^\d+/, "");
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          setCount(Math.floor(progress * numericValue));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <div ref={elementRef} className="text-center group">
      {icon && <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1B9B34]/10 text-[#1B9B34] mb-4">{icon}</div>}
      <div className="text-4xl font-black text-main mb-1">{count}{suffix}</div>
      <div className="text-[10px] uppercase tracking-widest text-muted font-bold">{label}</div>
    </div>
  );
};

export const BackgroundRobotics: React.FC<{ theme: string }> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame: number;
    let particles: Particle[] = [];
    // Increase density for more presence
    const particleCount = Math.min(100, Math.floor(window.innerWidth / 12));
    const connectionDistance = 220; // Increased radius for more networking
    
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulse: number;
      pulseDir: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Slightly faster but smooth motion
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.size = Math.random() * 2.5 + 1.5;
        this.pulse = Math.random();
        this.pulseDir = 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Breathe effect
        this.pulse += this.pulseDir;
        if (this.pulse > 1.2 || this.pulse < 0.6) this.pulseDir *= -1;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        const baseOpacity = theme === 'dark' ? 0.6 : 0.8;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * this.pulse, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark' 
          ? `rgba(27, 155, 52, ${baseOpacity})` 
          : `rgba(27, 155, 52, ${baseOpacity})`;
        
        if (theme === 'dark') {
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#1B9B34';
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for lines

        // Inner core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawGrid = () => {
      ctx.strokeStyle = theme === 'dark' ? 'rgba(27, 155, 52, 0.05)' : 'rgba(27, 155, 52, 0.12)';
      ctx.lineWidth = 0.5;
      const size = 60;
      
      for (let x = 0; x < canvas.width; x += size) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += size) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        // Line to mouse interaction
        const mdx = particles[i].x - mouseRef.current.x;
        const mdy = particles[i].y - mouseRef.current.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        
        if (mDist < 250) {
          const mOpacity = (1 - (mDist / 250)) * 0.4;
          ctx.strokeStyle = `rgba(27, 155, 52, ${mOpacity})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - (distance / connectionDistance));
            
            // Stronger, clearer lines
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(27, 155, 52, ${opacity * 0.35})` 
              : `rgba(27, 155, 52, ${opacity * 0.5})`;
            
            // Varying line width for depth
            ctx.lineWidth = opacity * 1.5;
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      drawConnections();
      frame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export const Footer: React.FC = () => (
  <footer className="py-12 border-t border-[#1B9B34]/10 bg-slate-950/20">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
      <div>
        <div className="mb-4">
          <SGALogo className="h-8 md:h-10" />
        </div>
        <p className="text-muted text-[10px] uppercase tracking-widest leading-relaxed">Plot no 1-9-202/29/15A, <br/>EC complex, kushaiguda, Hyderabad, 500062</p>
      </div>
      <div className="text-center space-y-2">
         <div className="flex items-center justify-center space-x-2 text-xs font-bold text-main"><Phone size={14} className="text-[#1B9B34]"/><span>+91 7673902729</span></div>
         <div className="flex items-center justify-center space-x-2 text-xs font-bold text-main"><Mail size={14} className="text-[#1B9B34]"/><span>sgaindustrialautomations@zohomail.in</span></div>
      </div>
      <div className="flex flex-col items-center md:items-end space-y-4">
         <div className="flex space-x-4">
           <a
  href="https://www.linkedin.com/in/sga-industrial-automations-443a913aa/"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 glass rounded-full hover:text-[#1B9B34] transition-colors"
>
  <Linkedin size={18} />
</a>

<a
  href="https://x.com/SgaAutomations"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 glass rounded-full hover:text-[#1B9B34] transition-colors"
>
  <Twitter size={18} />
</a>
         </div>
         <p className="text-muted text-[10px] uppercase tracking-widest">© 2024 SGA Industrial Automations</p>
      </div>
    </div>
  </footer>
);

export const TestimonialCarousel: React.FC = () => {
  const [active, setActive] = useState(0);
  const items = [
    { q: "SGA's integration of UNS architecture transformed our data silos into a real-time decision engine.", a: "Robert Chen", r: "Ops Director @ Apex" },
    { q: "The team's deep understanding of IEC 61511 safety standards gave us complete confidence.", a: "Sarah Jenkins", r: "Lead Engineer @ NovaChem" }
  ];
  useEffect(() => { const i = setInterval(() => setActive(p => (p + 1) % items.length), 6000); return () => clearInterval(i); }, [items.length]);
  return (
    <section className="py-24 bg-slate-950/40 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="glass p-12 md:p-20 rounded-[3rem] border-[#1B9B34]/10 relative text-center">
          <div className="relative z-10 min-h-[150px] flex flex-col justify-center">
            {items.map((t, i) => active === i && (
              <div key={i} className="animate-reveal">
                <p className="text-xl md:text-2xl font-medium text-main mb-8 italic">"{t.q}"</p>
                <h4 className="text-lg font-bold text-[#1B9B34]">{t.a}</h4>
                <p className="text-[10px] uppercase tracking-widest text-muted">{t.r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
