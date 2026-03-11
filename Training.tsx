import React, { useState } from 'react';
import { 
  Thermometer, 
  Zap, 
  Settings, 
  Cpu, 
  Monitor, 
  GraduationCap, 
  ArrowRight, 
  Activity, 
  Workflow, 
  Database, 
  Layout, 
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  ChevronDown,
  HelpCircle,
  Clock,
  Briefcase
} from 'lucide-react';
import { ParallaxCard } from './Components';

export const TrainingPage: React.FC<{ setPage: (p: string) => void }> = ({ setPage }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const levels = [
    {
      level: "Level 1",
      title: "Sensors, Temp Controls & Transmitters",
      subtitle: "The Field Layer: Industrial Data Acquisition",
      focus: "Build strong fundamentals in industrial field devices.",
      desc: "This module builds expertise in how machines perceive their environment through high-precision telemetry.",
      points: [
        { t: "Industrial Sensors", d: "Inductive (metal), Capacitive (non-metal), and Photoelectric (light-based) detection strategies." },
        { t: "Temperature Mastery", d: "RTDs for laboratory accuracy and Thermocouples for high-durability measurement in extreme heat." },
        { t: "Transmitters", d: "Signal conversion to 4-20mA/0-10V standards for noise-free long-distance transmission to the PLC." }
      ],
      icon: <Thermometer className="w-8 h-8" />,
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" className="animate-pulse" />
          <path d="M40 100 H160" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
          <rect x="90" y="70" width="20" height="60" rx="4" fill="currentColor" fillOpacity="0.2" />
        </svg>
      )
    },
    {
      level: "Level 2",
      title: "VFD & Servo Drive Training",
      subtitle: "The Action Layer: Precision Motion Control",
      focus: "Learn how to control AC motor speed and high-precision positioning.",
      desc: "Master the technology used to vary frequency for energy efficiency and encoder feedback for robotics.",
      points: [
        { t: "VFD Configuration", d: "Parameter setup, acceleration/deceleration timing, soft starts, and motor protection protocols." },
        { t: "Servo & Motion", d: "Closed-loop motion control, encoder feedback systems, and pick-and-place application logic." },
        { t: "Motion Optimization", d: "Energy efficiency strategies and introduction to PID control for stable mechanical operation." }
      ],
      icon: <Settings className="w-8 h-8" />,
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" className="animate-[spin_10s_linear_infinite]" />
          <path d="M100 50 V150 M50 100 H150" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
        </svg>
      )
    },
    {
      level: "Level 3",
      title: "PLC Training",
      subtitle: "The Logic Layer: The Brain of Automation",
      focus: "Programmable Logic Controller – The Industry Standard Brain.",
      desc: "Learn to program the central controller that reads inputs, executes logic, and updates outputs.",
      points: [
        { t: "Hardware & Wiring", d: "CPU architecture, I/O module configuration, power supplies, and industrial field-wiring." },
        { t: "Ladder Logic", d: "Industry-standard programming including Timers, Counters, and complex motor control logic." },
        { t: "Diagnosis", d: "Understanding the PLC Scan Cycle, fault diagnosis, and advanced troubleshooting techniques." }
      ],
      icon: <Cpu className="w-8 h-8" />,
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <rect x="40" y="40" width="120" height="120" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M60 70 H140 M60 100 H140 M60 130 H140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
          <circle cx="100" cy="100" r="10" fill="currentColor" className="animate-pulse" />
        </svg>
      )
    },
    {
      level: "Level 4",
      title: "SCADA & HMI Training",
      subtitle: "The Oversight Layer: Visualization & Monitoring",
      focus: "Supervisory Control and Data Acquisition systems.",
      desc: "Design the dashboards that allow control rooms to supervise entire manufacturing plants.",
      points: [
        { t: "HMI Development", d: "Creating interactive touch-screen interfaces for real-time machine visualization." },
        { t: "Data & Alarms", d: "Configuring real-time alarms, historical data logging, and professional trending reports." },
        { t: "Remote Monitoring", d: "Implementing supervisory techniques to monitor plant health from centralized locations." }
      ],
      icon: <Monitor className="w-8 h-8" />,
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <rect x="30" y="50" width="140" height="100" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M40 100 Q100 40 160 100 T280 100" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
          <rect x="40" y="60" width="120" height="80" fill="currentColor" fillOpacity="0.05" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      q: "What is Industrial Automation Training?",
      a: "Industrial automation training teaches how PLCs, SCADA, sensors, drives, and control panels work together in manufacturing and process industries to create cohesive, automated systems."
    },
    {
      q: "Is this course available worldwide?",
      a: "Yes. SGA Industrial Automations provides online training accessible globally, alongside our specialized offline hands-on programs."
    },
    {
      q: "Does this training include practical sessions?",
      a: "Yes. Training includes real-time programming, wiring practice, and industrial case studies."
    },
    {
      q: "Is it suitable for beginners?",
      a: "Absolutely. Our curriculum is designed to start from the absolute fundamentals of field devices and progress through to advanced logic and enterprise visualization."
    },
    {
      q: "What is the best PLC training course for beginners?",
      a: "A beginner-friendly PLC course should start with hardware basics and Ladder Logic programming, followed by hands-on practical sessions. Our structured PLC training ensures both theory and industrial application exposure."
    },
    {
      q: "What is the difference between PLC and SCADA?",
      a: "PLC is the controller that executes automation logic, while SCADA is the supervisory system that monitors, logs, and visualizes process data."
    },
    {
      q: "Is VFD training important for industrial jobs?",
      a: "Yes. Most industries use VFDs for energy-efficient motor control. Knowledge of VFD parameter setting and troubleshooting significantly improves employability.  "
    },
    {
      q: "What is PID control in servo systems?",
      a: "PID (Proportional-Integral-Derivative) control ensures precise positioning by minimizing error and preventing overshoot in motion control systems."
    },
    {
      q: "What is the use of 4-20mA signal in automation?",
      a: "The 4-20mA signal standard allows reliable long-distance transmission of analog signals without interference, making it ideal for industrial environments."
    }
  ];

  return (
    <div className="pt-32 pb-20 animate-reveal container mx-auto px-6">
      {/* Academy Hero */}
      <div className="max-w-4xl mb-24 reveal">
        <div className="inline-flex items-center space-x-2 text-[#1B9B34] mb-6 bg-[#1B9B34]/10 px-4 py-1.5 rounded-full border border-[#1B9B34]/20">
          <GraduationCap size={16} className="animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">SGA Technical Academy</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-main mb-8 leading-tight tracking-tighter">
          Automation <span className="text-[#1B9B34]">Training.</span>
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-2xl">
          World-class Industrial Automation Training for students and engineers. Available in both Online & Offline formats, focusing on real-world industrial applications and certified excellence.
        </p>
      </div>

      {/* Level Breakdown Grid */}
      <div className="space-y-48 mb-48 reveal">
        {levels.map((lvl, i) => (
          <div key={i} className="grid lg:grid-cols-12 gap-16 items-start">
            <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="px-4 py-1.5 bg-[#1B9B34] text-white text-[10px] font-black rounded-lg uppercase tracking-widest shadow-lg shadow-[#1B9B34]/20">
                  {lvl.level}
                </div>
                <div className="h-px flex-1 bg-[#1B9B34]/20" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-main mb-2 tracking-tight">{lvl.title}</h2>
              <div className="text-[#1B9B34] text-sm font-bold uppercase tracking-widest mb-6">{lvl.subtitle}</div>
              
              <div className="glass p-6 rounded-2xl border-[#1B9B34]/10 bg-[#1B9B34]/5 mb-8">
                <div className="flex items-center space-x-3 mb-2 text-[#1B9B34]">
                   <Activity size={18} />
                   <span className="text-xs font-black uppercase tracking-widest">Training Focus</span>
                </div>
                <p className="text-lg text-main font-medium italic">"{lvl.focus}"</p>
              </div>

              <p className="text-muted text-sm leading-relaxed mb-10">{lvl.desc}</p>

              <div className="space-y-6 mb-12">
                {lvl.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start space-x-5 group/pt">
                    <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#1B9B34]/10 text-[#1B9B34] border border-[#1B9B34]/20 group-hover/pt:bg-[#1B9B34] group-hover/pt:text-white transition-all">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-main uppercase tracking-widest mb-1">{pt.t}</h4>
                      <p className="text-xs text-muted leading-relaxed">{pt.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setPage('contact')}
                className="px-10 py-5 bg-[#1B9B34] text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all flex items-center space-x-3 shadow-xl group/cta"
              >
                <span>Enroll in Technical Program</span>
                <ArrowRight size={16} className="group-hover/cta:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:col-span-5 aspect-square glass rounded-[4rem] border-[#1B9B34]/10 bg-slate-950/40 flex items-center justify-center relative group overflow-hidden sticky top-32">
               <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
               <div className="w-1/2 h-1/2 transform group-hover:scale-110 transition-transform duration-1000">
                  {lvl.visual}
               </div>
               <div className="absolute top-10 right-10 p-5 bg-[#1B9B34]/10 text-[#1B9B34] rounded-2xl group-hover:bg-[#1B9B34] group-hover:text-white transition-all duration-500 shadow-xl">
                  {lvl.icon}
               </div>
               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 glass px-6 py-2 rounded-full border-[#1B9B34]/10 flex items-center space-x-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                  <Maximize2 size={12} className="text-[#1B9B34]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-main">Technical Schematic {i+1}.0</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Career & Panel Design Section */}
      <section className="py-24 relative overflow-hidden reveal">
        <div className="glass p-12 md:p-24 rounded-[4rem] border-[#1B9B34]/10 bg-gradient-to-br from-[#1B9B34]/10 to-transparent flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
          <div className="flex-1 relative z-10">
            <h2 className="text-5xl font-black text-main mb-8 leading-tight">Panel Wiring & <br/><span className="text-[#1B9B34]">Design.</span></h2>
            <p className="text-muted text-lg leading-relaxed mb-10 italic">
              "Practical training in industrial cabinet assembly, relay logic integration, and international electrical safety standards."
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { l: "Automation Engineer", v: "Career path" },
                { l: "PLC Programmer", v: "Expert role" },
                { l: "SCADA Engineer", v: "Specialist" },
                { l: "Maintenance", v: "Industrial" }
              ].map((stat, sidx) => (
                <div key={sidx} className="glass p-5 rounded-2xl border-[#1B9B34]/20">
                  <div className="flex items-center space-x-2 text-[#1B9B34] mb-1">
                    <Briefcase size={14}/>
                    <div className="text-lg font-black">{stat.v}</div>
                  </div>
                  <div className="text-[9px] font-bold text-muted uppercase tracking-widest">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 glass p-10 rounded-[3rem] border-[#1B9B34]/10 relative z-10">
             <div className="flex items-center space-x-3 text-[#1B9B34] mb-8">
                <ShieldCheck size={24} />
                <span className="text-xs font-black uppercase tracking-[0.2em]">Online & Offline Options</span>
             </div>
             <div className="space-y-6">
                <p className="text-sm font-medium text-main">SGA supports students and professionals worldwide with flexible training delivery:</p>
                <ul className="space-y-4">
                  {["Live Interactive Online Sessions", "Hands-on Equipment Access (Offline)", "Face-to-Face Technical Mentorship", "Real Industrial Case Studies"].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-xs text-muted">
                      <div className="w-1 h-1 bg-[#1B9B34] rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                   <button onClick={() => setPage('contact')} className="w-full py-4 bg-[#1B9B34] text-white font-black rounded-xl text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all">
                      Request Training Brochure
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Training FAQ Section */}
      <section className="py-24 reveal">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-main mb-4 italic">Academy <span className="text-[#1B9B34] underline decoration-[#1B9B34]/20">FAQs.</span></h2>
            <p className="text-muted text-[10px] uppercase tracking-[0.2em] font-bold">Frequently Asked Training Queries</p>
          </div>
          <div className="flex items-center space-x-3 glass px-4 py-2 rounded-xl border-[#1B9B34]/10">
            <Clock size={12} className="text-[#1B9B34] animate-pulse" />
            <span className="text-[10px] font-black text-main uppercase tracking-widest">Admissions Open</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-[2rem] border border-[#1B9B34]/10 overflow-hidden transition-all duration-300 hover:border-[#1B9B34]/30">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-7 flex items-center justify-between text-left group"
              >
                <span className={`text-sm md:text-base font-bold tracking-wide transition-colors ${openFaq === i ? 'text-[#1B9B34]' : 'text-main'}`}>
                  {faq.q}
                </span>
                <div className={`p-2 rounded-full transition-all duration-300 ${openFaq === i ? 'bg-[#1B9B34] text-white rotate-180' : 'bg-[#1B9B34]/10 text-[#1B9B34]'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-96 opacity-100 border-t border-[#1B9B34]/5' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 py-8 text-muted text-sm leading-relaxed bg-[#1B9B34]/[0.02]">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
