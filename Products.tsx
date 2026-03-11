import React, { useState } from 'react';
import { 
  Cpu, 
  Settings, 
  Activity, 
  Zap, 
  ArrowRight, 
  ChevronRight, 
  Box, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  HelpCircle,
  BarChart3,
  Thermometer,
  Layers,
  RefreshCw,
  Target,
  ShieldAlert,
  Award,
  Terminal,
  ChevronsUpDown,
  Maximize2,
  Database,
  Search,
  FlaskConical,
  Gauge,
  Microchip,
  Shield,
  Hammer,
  Layout
} from 'lucide-react';
import { ParallaxCard } from './Components';

// --- Technical Illustrations ---

const PLCBlueprint = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/40">
    <rect x="40" y="40" width="120" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
    <rect x="50" y="50" width="30" height="100" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
    <rect x="85" y="50" width="30" height="100" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
    <rect x="120" y="50" width="30" height="100" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
    <circle cx="65" cy="65" r="2" fill="currentColor" className="animate-pulse" />
    <circle cx="65" cy="80" r="2" fill="currentColor" />
    <circle cx="100" cy="140" r="3" fill="currentColor" className="animate-ping" />
    <path d="M40 80 H160 M40 120 H160" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
  </svg>
);

const ServoBlueprint = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/40">
    <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 4" className="animate-[spin_10s_linear_infinite]" />
    <circle cx="100" cy="100" r="40" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <rect x="95" y="20" width="10" height="40" fill="currentColor" />
    <path d="M100 100 L140 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M100 40 A60 60 0 0 1 160 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="5" fill="currentColor" />
  </svg>
);

const SensorBlueprint = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/40">
    <path d="M40 100 H160" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" className="animate-[flowLine_2s_linear_infinite]" />
    <rect x="30" y="80" width="20" height="40" fill="currentColor" />
    <rect x="150" y="80" width="20" height="40" fill="currentColor" fillOpacity="0.2" />
    <path d="M80 60 Q100 100 120 60" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
    <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
  </svg>
);

const PIDBlueprint = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/40">
    <rect x="40" y="40" width="120" height="120" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M60 80 Q100 30 140 80 T140 130" stroke="currentColor" strokeWidth="1.5" fill="none" className="animate-pulse" />
    <rect x="60" y="100" width="30" height="10" fill="currentColor" />
    <rect x="110" y="100" width="30" height="10" fill="currentColor" />
    <text x="100" y="150" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold">PID ADAPTIVE</text>
  </svg>
);

// --- FAQ Component ---
const FAQSection: React.FC<{ faqs: { q: string; a: string }[] }> = ({ faqs }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="glass rounded-2xl border border-[#1B9B34]/10 overflow-hidden">
          <button 
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#1B9B34]/5 transition-colors"
          >
            <span className="text-sm font-bold text-main uppercase tracking-wider">{faq.q}</span>
            <HelpCircle size={18} className={`text-[#1B9B34] transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-8 pb-6 text-muted text-sm leading-relaxed">
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Main Products Page ---
export const ProductsPage: React.FC<{ setPage: (p: string) => void }> = ({ setPage }) => {
  return (
    <div className="pt-32 pb-20 animate-reveal container mx-auto px-6">
      <div className="max-w-4xl mb-24 reveal">
        <div className="inline-flex items-center space-x-2 text-[#1B9B34] mb-6 bg-[#1B9B34]/10 px-4 py-1 rounded-full border border-[#1B9B34]/20">
          <Box size={14} className="animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Authorized Technical Supplier</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-main mb-8 leading-tight tracking-tighter">
          Engineered <span className="text-[#1B9B34]">Inventory.</span>
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-2xl">
          SGA Industrial Automations maintains a critical inventory of Industry-leading hardware. We don't just supply parts; we provide the architectural backbone for your industrial enterprise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32 reveal">
        <ParallaxCard className="glass p-1 rounded-[3.5rem] border-[#1B9B34]/10 bg-slate-950/40 group overflow-hidden">
          <div className="p-12 h-full flex flex-col relative">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity">
              <PLCBlueprint />
            </div>
            <div className="w-20 h-20 bg-[#1B9B34]/10 rounded-2xl flex items-center justify-center text-[#1B9B34] mb-8 group-hover:bg-[#1B9B34] group-hover:text-white transition-all shadow-[0_0_20px_rgba(27,155,52,0.1)]">
              <Cpu size={40} />
            </div>
            <h2 className="text-4xl font-black text-main mb-4 italic z-10">DELTA <span className="text-[#1B9B34]">Products</span></h2>
            <p className="text-muted text-sm leading-relaxed mb-10 z-10">Advanced PLC, HMI, AC Drives, and Servo Systems designed for deterministic high-speed control.</p>
            <div className="mt-auto">
              <button 
                onClick={() => setPage('products-delta')}
                className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-[#1B9B34] hover:text-white transition-colors group/btn"
              >
                <span>Explore Delta Catalog</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </ParallaxCard>

        <ParallaxCard className="glass p-1 rounded-[3.5rem] border-[#1B9B34]/10 bg-slate-950/40 group overflow-hidden">
          <div className="p-12 h-full flex flex-col relative">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity">
              <SensorBlueprint />
            </div>
            <div className="w-20 h-20 bg-[#1B9B34]/10 rounded-2xl flex items-center justify-center text-[#1B9B34] mb-8 group-hover:bg-[#1B9B34] group-hover:text-white transition-all shadow-[0_0_20px_rgba(27,155,52,0.1)]">
              <Activity size={40} />
            </div>
            <h2 className="text-4xl font-black text-main mb-4 italic z-10">AUTONICS <span className="text-[#1B9B34]">Products</span></h2>
            <p className="text-muted text-sm leading-relaxed mb-10 z-10">Precision sensing and control instruments—proximity sensors, encoders, and thermal management.</p>
            <div className="mt-auto">
              <button 
                onClick={() => setPage('products-autonics')}
                className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-[#1B9B34] hover:text-white transition-colors group/btn"
              >
                <span>Explore Autonics Catalog</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </ParallaxCard>

        <ParallaxCard className="glass p-1 rounded-[3.5rem] border-[#1B9B34]/10 bg-slate-950/40 group overflow-hidden">
          <div className="p-12 h-full flex flex-col relative">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity">
              <PIDBlueprint />
            </div>
            <div className="w-20 h-20 bg-[#1B9B34]/10 rounded-2xl flex items-center justify-center text-[#1B9B34] mb-8 group-hover:bg-[#1B9B34] group-hover:text-white transition-all shadow-[0_0_20px_rgba(27,155,52,0.1)]">
              <Database size={40} />
            </div>
            <h2 className="text-4xl font-black text-main mb-4 italic z-10">SWASTIK <span className="text-[#1B9B34]">Automation</span></h2>
            <p className="text-muted text-sm leading-relaxed mb-10 z-10">Industrial instrumentation, PID controllers, thyristors, and scientific control systems for extreme process environments.</p>
            <div className="mt-auto">
              <button 
                onClick={() => setPage('products-swastik')}
                className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-[#1B9B34] hover:text-white transition-colors group/btn"
              >
                <span>Explore Swastik Catalog</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </ParallaxCard>
      </div>

      <div className="p-12 md:p-24 rounded-[4rem] glass bg-[#1B9B34]/5 border border-[#1B9B34]/10 text-center reveal relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <h3 className="text-3xl font-black text-main mb-6 relative z-10">Need a Technical Consultation?</h3>
        <p className="text-muted max-w-2xl mx-auto mb-10 italic relative z-10">"Selecting the right hardware is the difference between an asset and a liability. Our engineers help you architect the correct BOM for your specific industrial environment."</p>
        <button onClick={() => setPage('contact')} className="px-12 py-5 bg-[#1B9B34] text-white font-black rounded-2xl shadow-[0_20px_40px_-10px_rgba(27,155,52,0.5)] hover:bg-emerald-600 transition-all uppercase tracking-[0.3em] text-[10px] relative z-10">
          Request Hardware Audit
        </button>
      </div>
    </div>
  );
};

// --- DELTA Products Page ---
export const ProductsDeltaPage: React.FC<{ setPage: (p: string) => void; onRequestQuote?: (p: string) => void }> = ({ setPage, onRequestQuote }) => {
  const deltaFaqs = [
    { q: "What makes Delta PLCs a better choice for high-speed manufacturing?", a: "Delta PLCs offer exceptional processing speeds and built-in high-speed I/O. They support versatile communication protocols like Ethernet/IP and EtherCAT, allowing for seamless integration in complex high-speed motion control environments." },
    { q: "Are Delta HMI units compatible with other PLC brands?", a: "Yes, Delta HMIs support over 300 communication protocols, making them universally compatible with major brands like Siemens, Rockwell, and Mitsubishi, ensuring effortless data visualization across multi-vendor plants." },
    { q: "What is the typical lifespan of a Delta AC Drive?", a: "With proper maintenance and within specified environmental conditions, Delta AC Drives are engineered for a service life exceeding 10 years. They feature advanced thermal management and diagnostic capabilities." },
    { q: "Does SGA provide programming support for Delta hardware?", a: "Absolutely. SGA is not just a supplier; we are system integrators. we provide full logic development, HMI screen design, and drive parameterization services." },
    { q: "Are Delta Servo Drives suitable for precise CNC applications?", a: "Yes, Delta's high-resolution encoder technology and low-cogging motor designs make them ideal for CNC, milling, and high-precision pick-and-place robotics." }
  ];

  const deltaProducts = [
    { 
      t: "Programmable Logic Controllers (PLC)", 
      d: "Delta's PLC range offers high-speed execution and stable reliability. From compact DVP series to high-end AH series for complex large-scale applications.",
      app: "Widely used in water treatment facilities, chemical processing plants, and high-speed automotive assembly lines for centralized or distributed control.",
      diff: "Exceptional cost-to-performance ratio with built-in high-speed I/O and support for open protocols like Modbus and EtherNet/IP.",
      why: "SGA provides certified IEC 61131-3 logic development, ensuring your Delta PLC architecture is modular, scalable, and fail-safe.",
      f: ["EtherNet/IP & EtherCAT support", "Built-in high-speed counters", "Dual-core processing", "Hot-swappable I/O units"],
      visual: <PLCBlueprint/>
    },
    { 
      t: "Human Machine Interfaces (HMI)", 
      d: "Intuitive touch screens that provide clear visualization and control. Featuring high-resolution displays and versatile communication ports.",
      app: "Crucial for pharmaceutical sterile environments and food & beverage packaging where operator situational awareness is critical.",
      diff: "Rugged design with IP65/66 protection and native support for over 300 communication protocols across multi-vendor environments.",
      why: "We design HMIs following ISA-101 high-performance standards, creating interfaces that minimize cognitive load and maximize uptime.",
      f: ["Multilingual support", "Data logging & Trending", "VNC remote monitoring", "IP65/66 protection"],
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/40">
          <rect x="30" y="50" width="140" height="100" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="40" y="60" width="120" height="80" fill="currentColor" fillOpacity="0.1" />
          <circle cx="155" cy="135" r="5" fill="currentColor" className="animate-pulse" />
          <path d="M40 100 Q100 80 160 100" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
        </svg>
      )
    },
    { 
      t: "AC Motor Drives (VFD)", 
      d: "Maximize energy efficiency and motor control with Delta's versatile drive series. Precision frequency control for pumps, fans, and conveyors.",
      app: "Standard for infrastructure projects like municipal pumping stations and industrial conveyor networks requiring soft-starts and energy saving.",
      diff: "Advanced vector control algorithms and built-in PLC functions that allow for localized logic execution without a master controller.",
      why: "SGA performs detailed energy audits and harmonic mitigation analysis to ensure your VFD deployment delivers maximum ROI and grid stability.",
      f: ["Advanced vector control", "Built-in PLC functions", "STO Safety function", "Energy-saving operation"],
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/40">
          <rect x="60" y="30" width="80" height="140" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M70 50 H130 M70 150 H130" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M80 70 L120 130 M120 70 L80 130" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
          <rect x="90" y="160" width="20" height="10" fill="currentColor" />
        </svg>
      )
    },
    { 
      t: "Servo Systems", 
      d: "Unmatched motion precision. Delta's AC Servo Motors and Drives provide high torque-to-inertia ratios and millisecond response times.",
      app: "Ideal for high-precision CNC machinery, 6-axis robotic arms, and complex pick-and-place electronic assembly lines.",
      diff: "Industry-leading 24-bit resolution encoders and advanced auto-tuning algorithms that compensate for mechanical resonance automatically.",
      why: "Our motion specialists optimize every PID loop and coordinate every axis, transforming raw hardware into a synchronized ballet of precision.",
      f: ["24-bit resolution encoders", "Dynamic braking", "Auto-tuning algorithms", "EtherCAT/CANopen"],
      visual: <ServoBlueprint />
    }
  ];

  return (
    <div className="pt-32 pb-20 animate-reveal container mx-auto px-6">
      <div className="max-w-4xl mb-24 reveal">
        <button onClick={() => setPage('products')} className="text-[#1B9B34] text-[10px] font-black uppercase tracking-widest mb-6 flex items-center space-x-2 group">
          <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </button>
        <h1 className="text-5xl md:text-8xl font-black text-main mb-8 leading-tight tracking-tighter">
          DELTA <span className="text-[#1B9B34]">Mastery.</span>
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-2xl">
          High-performance industrial control solutions. From the logic layer of PLCs to the physical precision of Servo Drives, Delta provides the reliability demanded by mission-critical environments.
        </p>
      </div>

      <div className="space-y-48 mb-48 reveal">
        {deltaProducts.map((item, i) => (
          <div key={i} className="grid lg:grid-cols-12 gap-16 items-start">
            <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-px w-8 bg-[#1B9B34]/40" />
                <span className="text-[10px] font-black text-[#1B9B34] uppercase tracking-widest">Component Category {i + 1}</span>
              </div>
              <h2 className="text-4xl font-black text-main mb-6 uppercase tracking-tight">{item.t}</h2>
              <p className="text-muted leading-relaxed mb-8 text-lg">{item.d}</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="glass p-6 rounded-2xl border-[#1B9B34]/10 hover:bg-[#1B9B34]/5 transition-colors">
                  <div className="flex items-center space-x-2 text-[#1B9B34] mb-3">
                    <Target size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Applications</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{item.app}</p>
                </div>
                <div className="glass p-6 rounded-2xl border-[#1B9B34]/10 hover:bg-[#1B9B34]/5 transition-colors">
                  <div className="flex items-center space-x-2 text-[#1B9B34] mb-3">
                    <Award size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Differentiators</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{item.diff}</p>
                </div>
              </div>

              <div className="bg-[#1B9B34]/5 p-8 rounded-3xl border border-[#1B9B34]/10 mb-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Maximize2 size={64} className="text-[#1B9B34]" />
                </div>
                <div className="flex items-center space-x-2 text-[#1B9B34] mb-4">
                  <ShieldCheck size={18} />
                  <span className="text-xs font-black uppercase tracking-[0.2em]">The SGA Advantage</span>
                </div>
                <p className="text-sm text-main font-medium italic mb-6 relative z-10">"{item.why}"</p>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {item.f.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center space-x-2 text-[10px] font-bold text-main">
                      <CheckCircle2 size={14} className="text-[#1B9B34] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => onRequestQuote?.(`DELTA ${item.t}`)}
                className="px-12 py-5 bg-[#1B9B34] text-white font-black rounded-2xl text-xs uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all flex items-center space-x-3 shadow-[0_20px_40px_-10px_rgba(27,155,52,0.5)] group/quote"
              >
                <span>Request Quotation</span>
                <ChevronRight size={18} className="group-hover/quote:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="lg:col-span-5 aspect-square glass rounded-[4rem] border-[#1B9B34]/10 bg-slate-950/40 flex items-center justify-center relative group overflow-hidden sticky top-32 shadow-[0_0_80px_rgba(27,155,52,0.05)]">
               <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
               <div className="w-3/4 h-3/4 transform group-hover:scale-110 transition-transform duration-1000">
                {item.visual}
               </div>
               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 glass px-6 py-2 rounded-full border-[#1B9B34]/10 flex items-center space-x-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                  <Terminal size={12} className="text-[#1B9B34]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-main">Technical Schematic v1.0</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-main mb-4">Frequently Asked <span className="text-[#1B9B34]">Queries</span></h2>
          <p className="text-muted text-sm uppercase tracking-widest font-bold">Technical Guidance for Delta Hardware</p>
        </div>
        <FAQSection faqs={deltaFaqs} />
      </div>
    </div>
  );
};

// --- Autonics Products Page ---
export const ProductsAutonicsPage: React.FC<{ setPage: (p: string) => void; onRequestQuote?: (p: string) => void }> = ({ setPage, onRequestQuote }) => {
  const autonicsFaqs = [
    { q: "Which Autonics proximity sensor is best for metal detection?", a: "The PR series is the industry standard for reliable metal detection, available in various diameters and sensing distances with robust IP67 protection." },
    { q: "What is the benefit of using high-resolution rotary encoders?", a: "High-resolution encoders provide more pulses per revolution (PPR), allowing for sub-millimeter positioning accuracy in linear systems and precise speed control in rotating assets." },
    { q: "Can Autonics temperature controllers handle PID logic?", a: "Yes, Autonics temperature controllers (like the TK series) feature high-speed sampling and advanced PID control algorithms for precise thermal stabilization." },
    { q: "How do photoelectric sensors handle transparent objects?", a: "Autonics offers specialized polarized retro-reflective sensors that can accurately detect transparent glass or plastics without false triggers." }
  ];

  const categories = [
    { 
      t: "Proximity Sensors", 
      i: <Zap/>, 
      d: "Inductive and capacitive sensors for non-contact detection of metal and non-metal objects.",
      app: "Metal detection in automotive assembly and non-metal presence in bottling lines.",
      diff: "Superior noise immunity and IP67-rated ruggedness for oily environments.",
      why: "SGA optimizes mounting brackets and sensitivity for zero-miss detection.",
      blueprint: <SensorBlueprint />
    },
    { 
      t: "Photoelectric Sensors", 
      i: <Layers />, 
      d: "Reliable object sensing in varied lighting using through-beam and retro-reflective logic.",
      app: "Parcel sorting in high-speed logistics and level detection in translucent containers.",
      diff: "Polarized lenses that eliminate false triggers from shiny or transparent surfaces.",
      why: "We integrate these into vision-guided sorting workflows for maximum throughput.",
      blueprint: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <path d="M40 100 L160 100" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" className="animate-pulse" />
          <rect x="30" y="80" width="20" height="40" fill="currentColor" />
          <path d="M100 60 V140" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
        </svg>
      )
    },
    { 
      t: "Rotary Encoders", 
      i: <RefreshCw />, 
      d: "Incremental and absolute encoders providing precise feedback for speed and position control.",
      app: "Critical for linear positioning in textile machinery and speed feedback in pumps.",
      diff: "Diverse mounting options and high-resolution output for sub-millimeter precision.",
      why: "SGA ensures perfect coupling and protocol synchronization with your master PLC.",
      blueprint: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" className="animate-[spin_15s_linear_infinite]" />
          <rect x="90" y="100" width="20" height="10" fill="currentColor" />
          <circle cx="100" cy="100" r="10" fill="currentColor" fillOpacity="0.2" />
        </svg>
      )
    },
    { 
      t: "Temperature Controllers", 
      i: <Thermometer />, 
      d: "High-accuracy PID controllers with dual-display and multi-input support.",
      app: "Injection molding and climate-controlled chemical storage environments.",
      diff: "High-speed 50ms sampling rate and advanced PID self-tuning capabilities.",
      why: "We tune thermal PID loops for zero-overshoot stability in sensitive processes.",
      blueprint: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <rect x="50" y="50" width="100" height="100" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="65" y="65" width="70" height="30" fill="currentColor" fillOpacity="0.1" />
          <rect x="65" y="105" width="70" height="30" fill="currentColor" fillOpacity="0.1" />
        </svg>
      )
    },
    { 
      t: "Panel / Pulse Meters", 
      i: <BarChart3 />, 
      d: "Digital meters for monitoring current, voltage, speed, and production throughput.",
      app: "Real-time OEE monitoring on factory floors and power quality supervision.",
      diff: "Clear multi-segment displays and isolated analog outputs for remote SCADA logging.",
      why: "SGA bridges these local displays with your centralized UNS for enterprise-wide visibility.",
      blueprint: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <path d="M40 160 Q100 40 160 160" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" className="animate-pulse" />
          <line x1="40" y1="160" x2="160" y2="160" stroke="currentColor" />
        </svg>
      )
    },
    { 
      t: "Counters & Timers", 
      i: <Clock />, 
      d: "Digital precision for batch counting and time-based automation cycles.",
      app: "Batching processes in food production and maintenance cycle tracking for heavy assets.",
      diff: "Non-volatile memory and ultra-long battery life for critical counting integrity.",
      why: "We automate entire batch workflows using Autonics' preset output capabilities.",
      blueprint: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="100" x2="100" y2="50" stroke="currentColor" strokeWidth="2" className="animate-[spin_60s_linear_infinite]" />
          <line x1="100" y1="100" x2="140" y2="100" stroke="currentColor" strokeWidth="1" className="animate-[spin_5s_linear_infinite]" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-32 pb-20 animate-reveal container mx-auto px-6">
      <div className="max-w-4xl mb-24 reveal">
        <button onClick={() => setPage('products')} className="text-[#1B9B34] text-[10px] font-black uppercase tracking-widest mb-6 flex items-center space-x-2 group">
          <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </button>
        <h1 className="text-5xl md:text-8xl font-black text-main mb-8 leading-tight tracking-tighter">
          AUTONICS <span className="text-[#1B9B34]">Precision.</span>
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-2xl">
          The industry's leading sensors and controllers. Autonics products are synonymous with precision telemetry, providing the raw data needed for intelligent industrial decision-making.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-48 reveal">
        {categories.map((cat, i) => (
          <ParallaxCard key={i} className="glass p-1 rounded-[2.5rem] border-[#1B9B34]/10 bg-slate-950/40 group hover:border-[#1B9B34]/40 transition-all duration-500 flex flex-col overflow-hidden">
            <div className="p-10 flex-1 flex flex-col">
              <div className="relative mb-10 group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 opacity-20 scale-150">
                  {cat.blueprint}
                </div>
                <div className="w-16 h-16 bg-[#1B9B34]/10 rounded-xl flex items-center justify-center text-[#1B9B34] group-hover:bg-[#1B9B34] group-hover:text-white transition-all shadow-[0_0_20px_rgba(27,155,52,0.1)] relative z-10">
                  {cat.i}
                </div>
              </div>

              <h3 className="text-xl font-bold text-main mb-4 group-hover:text-[#1B9B34] transition-colors uppercase tracking-tight">{cat.t}</h3>
              <p className="text-muted text-xs leading-relaxed mb-6">{cat.d}</p>
              
              <div className="space-y-4 mb-10 mt-auto">
                <div className="flex items-start space-x-3">
                   <Target size={12} className="text-[#1B9B34] mt-0.5 shrink-0" />
                   <div>
                      <div className="text-[9px] font-black text-[#1B9B34] uppercase tracking-widest mb-0.5">Application</div>
                      <p className="text-[10px] text-muted leading-tight">{cat.app}</p>
                   </div>
                </div>
                <div className="p-4 bg-[#1B9B34]/5 rounded-xl border border-[#1B9B34]/10 group-hover:bg-[#1B9B34]/10 transition-colors">
                   <div className="text-[9px] font-black text-[#1B9B34] uppercase tracking-widest mb-1 flex items-center space-x-1">
                      <ShieldCheck size={10} /><span>SGA Integration</span>
                   </div>
                   <p className="text-[10px] text-main font-medium italic leading-tight">{cat.why}</p>
                </div>
              </div>

              <button 
                onClick={() => onRequestQuote?.(`Autonics ${cat.t}`)}
                className="w-full py-4 glass bg-[#1B9B34]/5 text-[#1B9B34] rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border border-[#1B9B34]/10 hover:bg-[#1B9B34] hover:text-white hover:border-[#1B9B34] transition-all shadow-lg group/btn"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Request Quote</span>
                  <ChevronsUpDown size={12} className="group-hover/btn:rotate-90 transition-transform" />
                </span>
              </button>
            </div>
          </ParallaxCard>
        ))}
      </div>

      <div className="reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-main mb-4">Technical <span className="text-[#1B9B34]">FAQs</span></h2>
          <p className="text-muted text-sm uppercase tracking-widest font-bold">Autonics Implementation & Support</p>
        </div>
        <FAQSection faqs={autonicsFaqs} />
      </div>
    </div>
  );
};

// --- SWASTIK Automation Page ---
const Droplets = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  ></svg>);

export const ProductsSwastikPage: React.FC<{ setPage: (p: string) => void; onRequestQuote?: (p: string) => void }> = ({ setPage, onRequestQuote }) => {
  const swastikProducts = [
    {
      t: "Combo PLC HMI",
      icon: <Layout className="w-10 h-10" />,
      items: ["4.3\" PLC HMI", "7\" PLC HMI", "4.3\" HMI", "MPC Series PLC", "HPC Series PLC"],
      desc: "Integrated logic and visualization for space-constrained industrial control panels.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <rect x="40" y="60" width="120" height="80" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="50" y="70" width="100" height="60" fill="currentColor" fillOpacity="0.1" />
          <path d="M60 85 H140 M60 115 H140" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      )
    },
    {
      t: "Multi Channel PID Temperature Controller",
      icon: <Database className="w-10 h-10" />,
      items: ["8/4 Channel PID Temperature Module", "8/4 Channel Current Module", "8 Channel Relay Module", "8 Channel SCR Module", "8 Channel Analog Module"],
      desc: "High-density process monitoring and control modules for complex multi-zone environments.",
      visual: <PIDBlueprint />
    },
    {
      t: "Thyristor Power Regulator",
      icon: <Zap className="w-10 h-10" />,
      items: ["SCR Power Regulator", "TRK Thyristor Trigger Module"],
      desc: "Precision power control for heating elements and high-voltage industrial loads.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <path d="M60 140 V60 L140 140 V60" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
          <rect x="50" y="140" width="100" height="20" fill="currentColor" fillOpacity="0.2" />
          <line x1="100" y1="60" x2="100" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        </svg>
      )
    },
    {
      t: "Hot Runner Temperature Controller",
      icon: <Thermometer className="w-10 h-10" />,
      items: ["Hot Runner Controller Card", "Hot Runner Controller Panel"],
      desc: "Specialized thermal management for plastic injection molding and extrusion systems.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M100 60 V100 L140 100" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="100" r="10" fill="currentColor" className="animate-pulse" />
        </svg>
      )
    },
    {
      t: "Temperature Controller",
      icon: <Gauge className="w-10 h-10" />,
      items: ["GT8 / AK6 / AK3 Series", "GR818/858P Profile Controller", "Blind Digital / DTC / TC PID", "Push To Set / Knob Controllers", "Temperature Indicator with Ampere"],
      desc: "Universal thermal regulation from basic on-off to advanced profile-based ramp/soak control.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <rect x="50" y="50" width="100" height="100" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M70 120 L90 80 L110 100 L130 60" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" />
        </svg>
      )
    },
    {
      t: "Digital Counter",
      icon: <Activity className="w-10 h-10" />,
      items: ["Tablet / Batch / Preset Counter", "Length Counter", "Count Totaliser", "Thumbwheel Counter"],
      desc: "High-speed counting solutions for packaging, textile, and pharmaceutical production lines.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <text x="100" y="115" textAnchor="middle" fontSize="40" fill="currentColor" fontWeight="black" className="animate-pulse">8888</text>
          <rect x="40" y="70" width="120" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      t: "Power Analyser Meter",
      icon: <BarChart3 className="w-10 h-10" />,
      items: ["AC/DC Amp & Volt Meters", "AVF / 3-Phase Meters", "V+A+W DC Meter", "Multi Function & Energy Meters", "Current Controller"],
      desc: "Real-time electrical telemetry for power quality and consumption analytics.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <path d="M40 160 A80 80 0 0 1 160 160" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="100" y1="160" x2="140" y2="80" stroke="currentColor" strokeWidth="3" className="origin-bottom rotate-[-45deg] animate-pulse" />
        </svg>
      )
    },
    {
      t: "Digital Timer",
      icon: <Clock className="w-10 h-10" />,
      items: ["Sequential Timer", "Thumbwheel Timer (On-Delay/Universal)", "Universal Timer (Single/Dual Display)"],
      desc: "Precision time-based orchestration for sequential industrial processes.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M100 60 V100 L130 130" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-[spin_20s_linear_infinite] origin-center" />
        </svg>
      )
    },
    {
      t: "Scanner Cum Data Logger",
      icon: <Search className="w-10 h-10" />,
      items: ["Single/Dual Channel Data Logger", "8 Channel Temperature Scanner", "8 Channel Temperature Data Logger"],
      desc: "Archival process visibility for quality assurance and regulatory data compliance.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <path d="M40 160 V40 H160 V160 H40" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M50 80 H150 M50 110 H150 M50 140 H150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <rect x="60" y="50" width="80" height="20" fill="currentColor" fillOpacity="0.1" />
        </svg>
      )
    },
    {
      t: "Temperature Humidity Controller",
      icon: <Droplets className="w-10 h-10" />,
      items: ["Temperature + Humidity Controller", "Humidity Controller", "Humidity Sensor"],
      desc: "Environmental stabilization for HVAC, cleanrooms, and food storage facilities.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <path d="M100 40 Q130 90 100 140 Q70 90 100 40" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="140" r="10" fill="currentColor" className="animate-pulse" />
        </svg>
      )
    },
    {
      t: "Scientific Instruments",
      icon: <FlaskConical className="w-10 h-10" />,
      items: ["Autoclave / BOD Controller", "Laminar/Biosafety Controller", "Stability / Card Type Controllers", "Timer + RPM Card"],
      desc: "Ultra-precise specialized controls for laboratory and medical environments.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <path d="M80 40 H120 V80 L160 160 H40 L80 80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M60 160 Q100 130 140 160" fill="currentColor" fillOpacity="0.2" className="animate-pulse" />
        </svg>
      )
    },
    {
      t: "Process Indicator Cum Controller",
      icon: <Search className="w-10 h-10" />,
      items: ["RPM / MPM Indicator & Controller", "Process / Ratio / Hour Meters", "Signal Isolator / Jumbo Displays", "Head Mounted Transmitter", "Pressure Controller"],
      desc: "Universal process feedback and conversion for complex industrial field telemetry.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <rect x="40" y="70" width="120" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M60 100 H140" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      )
    },
    {
      t: "Customized Controller",
      icon: <Hammer className="w-10 h-10" />,
      items: ["Load Cell / Flow Rate Indicator", "Vibrator / Heat Press Controllers", "Clutch Break Controller", "Hydraulic Timer"],
      desc: "Bespoke logic solutions for non-standard industrial machinery and custom automation tasks.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <path d="M40 40 L160 160 M160 40 L40 160" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
          <rect x="80" y="80" width="40" height="40" fill="currentColor" className="animate-spin-slow" />
        </svg>
      )
    },
    {
      t: "Protection Relay",
      icon: <Shield className="w-10 h-10" />,
      items: ["Motor Protection Device", "Voltage Protection Relay", "Current Protection Relay", "SSR (Solid State Relay)"],
      desc: "Fail-safe protection layers for high-value industrial motors and power distribution networks.",
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1B9B34]/30">
          <path d="M100 40 L160 70 V130 L100 160 L40 130 V70 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M70 100 L90 120 L130 80" stroke="currentColor" strokeWidth="3" fill="none" className="animate-pulse" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-32 pb-20 animate-reveal container mx-auto px-6">
      <div className="max-w-4xl mb-24 reveal">
        <button onClick={() => setPage('products')} className="text-[#1B9B34] text-[10px] font-black uppercase tracking-widest mb-6 flex items-center space-x-2 group">
          <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </button>
        <h1 className="text-5xl md:text-8xl font-black text-main mb-8 leading-tight tracking-tighter">
          SWASTIK <span className="text-[#1B9B34]">Instrumentation.</span>
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-2xl">
          Swastik Automation specializes in precision instrumentation and adaptive process control. From medical-grade autoclave logic to high-power thyristor regulation, we deliver rugged reliability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-48 reveal">
        {swastikProducts.map((cat, i) => (
          <ParallaxCard key={i} className="glass p-1 rounded-[2.5rem] border-[#1B9B34]/10 bg-slate-950/40 group hover:border-[#1B9B34]/40 transition-all duration-500 flex flex-col overflow-hidden">
            <div className="p-10 flex-1 flex flex-col">
              <div className="relative mb-10 h-32 flex items-center justify-center">
                 <div className="absolute inset-0 opacity-20 scale-125">
                    {cat.visual}
                 </div>
                 <div className="relative z-10 p-5 bg-[#1B9B34]/10 text-[#1B9B34] rounded-2xl group-hover:bg-[#1B9B34] group-hover:text-white transition-all duration-500 shadow-xl">
                   {cat.icon}
                 </div>
              </div>

              <h3 className="text-xl font-bold text-main mb-4 group-hover:text-[#1B9B34] transition-colors uppercase tracking-tight h-14 overflow-hidden">{cat.t}</h3>
              <p className="text-muted text-[10px] leading-relaxed mb-6 uppercase tracking-widest font-bold opacity-70 italic">{cat.desc}</p>
              
              <div className="space-y-2 mb-10 mt-auto bg-[#1B9B34]/5 p-6 rounded-2xl border border-[#1B9B34]/10">
                <div className="text-[9px] font-black text-[#1B9B34] uppercase tracking-[0.2em] mb-2 flex items-center space-x-2">
                   <Box size={10} /><span>Product Listing</span>
                </div>
                {cat.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-[10px] font-bold text-main/80 hover:text-[#1B9B34] transition-colors cursor-default">
                    <div className="w-1 h-1 rounded-full bg-[#1B9B34] opacity-50" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onRequestQuote?.(`Swastik Automation - ${cat.t}`)}
                className="w-full py-4 glass bg-[#1B9B34]/5 text-[#1B9B34] rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border border-[#1B9B34]/10 hover:bg-[#1B9B34] hover:text-white transition-all shadow-lg group/btn"
              >
                <span>Request Quote</span>
              </button>
            </div>
          </ParallaxCard>
        ))}
      </div>

      <div className="p-12 md:p-24 rounded-[4rem] glass bg-[#1B9B34]/5 border border-[#1B9B34]/10 text-center reveal">
        <h3 className="text-3xl font-black text-main mb-6">Custom Swastik Implementation?</h3>
        <p className="text-muted max-w-2xl mx-auto mb-10">Our engineering team specializes in retrofitting Swastik instrumentation into modern SCADA and IIoT ecosystems. Ensure your precision data is accessible everywhere.</p>
        <button onClick={() => setPage('contact')} className="px-12 py-5 bg-[#1B9B34] text-white font-black rounded-2xl shadow-2xl hover:bg-emerald-600 transition-all uppercase tracking-[0.3em] text-[10px]">
          Schedule Instrumentation Audit
        </button>
      </div>
    </div>
  );
};

// const Droplets = ({ className, size }: { className?: string, size?: number }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M7 16.3c2.2 0 4-1.8 4-4 0-2.2-4-7-4-7s-4 4.8-4 7c0 2.2 1.8 4 4 4Z" />
//     <path d="M17 16.3c2.2 0 4-1.8 4-4 0-2.2-4-7-4-7s-4 4.8-4 7c0 2.2 1.8 4 4 4Z" />
//   </svg>
// );
