import React, { useState } from 'react';
import { 
  Leaf, 
  Pickaxe, 
  Microscope, 
  Zap as PowerIcon, 
  Package, 
  Droplets, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight, 
  ArrowRight,
  Target,
  Cpu,
  Zap,
  Activity,
  Workflow
} from 'lucide-react';
import { ParallaxCard } from './Components';

export const ExpertisePage: React.FC<{ setPage: (p: string) => void; theme?: string }> = ({ setPage, theme = 'dark' }) => {
  const [active, setActive] = useState(0);

  const sectors = [
    {
      id: "agri",
      name: "Agriculture 4.0",
      icon: <Leaf />,
      title: "Sustainable Agritech & Automated Cultivation",
      description: "We modernize the farm-to-table ecosystem by deploying mesh-networked sensor arrays and precision irrigation logic. Our systems ensure that resource consumption is minimized while yield consistency is maximized through deterministic control.",
      impact: "By implementing closed-loop automation, we reduce water waste by 40% and increase crop throughput via optimized nutrient delivery schedules.",
      keywords: ["Smart Irrigation", "LoRaWAN Sensors", "Greenhouse Climate Control", "Automated Fertigation"],
      stats: { oee: "+28%", waste: "-42%", yield: "+15%" },
      color: "emerald"
    },
    {
      id: "mining",
      name: "Smart Mining",
      icon: <Pickaxe />,
      title: "Critical Safety Robotics & Deep-Shaft Telemetry",
      description: "Mining environments demand zero-failure infrastructure. SGA integrates ruggedized PLC architectures and high-bandwidth fiber backbones to monitor toxic gas levels, structural integrity, and autonomous hauling fleets in real-time.",
      impact: "Eliminating human presence in high-risk zones through remote robotics reduces LTI (Lost Time Injury) rates to zero while maintaining 24/7 production cycles.",
      keywords: ["ATEX Compliance", "Autonomous Haulage", "Ventilation On Demand", "Gas Sensing"],
      stats: { safety: "100%", uptime: "+18%", energy: "-22%" },
      color: "orange"
    },
    {
      id: "pharma",
      name: "Life Sciences & Pharma",
      icon: <Microscope />,
      title: "Ultra-Compliant Batching & Sterile Process Control",
      description: "Precision is non-negotiable in pharmaceutical manufacturing. We design GAMP 5 compliant control systems that manage complex chemical reactions with milligram accuracy, ensuring full traceability and regulatory alignment.",
      impact: "Our automated batch reporting reduces audit preparation time by 80% and ensures that product quality remains within tight standard deviations.",
      keywords: ["21 CFR Part 11", "GAMP 5", "Batch Engine", "Cleanroom Automation"],
      stats: { audit: "100%", quality: "99.9%", time: "-35%" },
      color: "blue"
    },
    {
      id: "energy",
      name: "Energy & Utilities",
      icon: <PowerIcon />,
      title: "Grid Resilience & Substation Digitalization",
      description: "The transition to renewables requires a smarter grid. SGA provides self-healing substation automation and microgrid control logic that balances intermittent solar/wind inputs with industrial demand.",
      impact: "Improving grid stability through automated load-shedding prevents costly blackout events and optimizes the lifespan of high-value transformer assets.",
      keywords: ["IEC 61850", "Smart Grid", "Microgrid Controller", "Power Quality"],
      stats: { reliability: "99.99%", cost: "-15%", carbon: "-20%" },
      color: "sky"
    },
    {
      id: "fmcg",
      name: "FMCG & Packaging",
      icon: <Package />,
      title: "High-Speed Logistics & Predictive Sorting",
      description: "In the world of FMCG, speed is the only metric that matters. We deploy 6-axis robotics and vision-guided sorting systems that handle thousands of units per hour with zero manual intervention.",
      impact: "Predictive maintenance algorithms identify motor wear before failure, preventing unplanned downtime that costs thousands per minute in lost production.",
      keywords: ["Vision Systems", "High-Speed Sorting", "Predictive PdM", "Palletizing Robotics"],
      stats: { ppm: "+250", downtime: "-50%", roi: "14mo" },
      color: "indigo"
    }
  ];

  const isDark = theme === 'dark';
  const accentText = isDark ? 'text-sky-400' : 'text-sky-700';
  const labelText = isDark ? 'text-muted' : 'text-slate-500 font-bold';
  const containerBg = isDark ? 'bg-main/10' : 'bg-white/90';
  const cardBg = isDark ? 'bg-main/20' : 'bg-slate-50 shadow-lg';
  const quoteBg = isDark ? 'bg-sky-500/5' : 'bg-sky-50 border-sky-200';

  return (
    <div className="pt-32 pb-20 animate-reveal container mx-auto px-6">
      {/* Header Section */}
      <div className="max-w-4xl mb-16 reveal">
        <div className="inline-flex items-center space-x-2 text-sky-500 mb-6 bg-sky-500/10 px-4 py-1 rounded-full border border-sky-500/20">
          <Target size={14} className="animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Industry-Leading Specialization</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-main mb-8 leading-tight tracking-tighter">
          Domain <span className={accentText}>Mastery.</span>
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-2xl">
          At SGA, we don't just provide generic code. We provide deep-sector engineering expertise that understands the unique physics, regulations, and financial drivers of your industry.
        </p>
      </div>

      {/* Sector Navigation - Interactive Tabs */}
      <div className="flex flex-wrap gap-3 mb-12 reveal">
        {sectors.map((s, i) => (
          <button 
            key={i} 
            onClick={() => setActive(i)} 
            className={`px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center space-x-3 transition-all duration-500 border ${
              active === i 
                ? 'bg-sky-500 text-white border-sky-400 shadow-[0_10px_30px_-10px_rgba(14,165,233,0.5)] scale-105' 
                : 'glass text-muted border-sky-500/10 hover:border-sky-500/30'
            }`}
          >
            <span className={active === i ? 'text-white' : 'text-sky-500'}>{s.icon}</span>
            <span>{s.name}</span>
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative min-h-[600px] reveal">
        {sectors.map((s, i) => (
          active === i && (
            <div key={i} className="animate-reveal">
              <div className={`glass p-10 md:p-20 rounded-[4rem] border-sky-500/10 ${containerBg} relative overflow-hidden shadow-2xl transition-colors duration-500`}>
                {/* Decorative Background Icon */}
                <div className="absolute -right-20 -bottom-20 opacity-[0.03] text-main transform rotate-12 scale-[3]">
                  {s.icon}
                </div>

                <div className="grid lg:grid-cols-12 gap-16 relative z-10">
                  {/* Left: Detailed Info */}
                  <div className="lg:col-span-7 space-y-10">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-black text-main mb-6 leading-tight">{s.title}</h2>
                      <p className="text-muted text-lg leading-relaxed mb-6 font-medium">{s.description}</p>
                      <div className={`p-8 ${quoteBg} rounded-3xl border italic ${accentText} text-sm font-bold shadow-sm leading-relaxed`}>
                        " {s.impact} "
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted">Technical Framework</h4>
                      <div className="flex flex-wrap gap-2">
                        {s.keywords.map((kw, kIdx) => (
                          <span key={kIdx} className={`px-4 py-2 ${isDark ? 'bg-main/20' : 'bg-slate-200/50'} rounded-xl text-[10px] font-black ${isDark ? 'text-sky-400' : 'text-sky-700'} border border-sky-500/10 uppercase tracking-widest`}>
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <button 
                        onClick={() => setPage('contact')} 
                        className="px-10 py-5 bg-sky-500 text-white font-black rounded-2xl flex items-center space-x-4 shadow-xl hover:bg-sky-400 transition-all uppercase tracking-[0.2em] text-[10px]"
                      >
                        <span>Deploy {s.name} Solution</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Right: Stats & Telemetry */}
                  <div className="lg:col-span-5 space-y-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted text-center lg:text-left">Performance Metrics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                      {Object.entries(s.stats).map(([key, value], idx) => (
                        <ParallaxCard key={idx} className={`p-8 rounded-3xl border border-sky-500/10 ${cardBg} group transition-all duration-500`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className={`text-[10px] uppercase tracking-[0.3em] mb-1 ${labelText}`}>{key} Improvement</div>
                              <div className={`text-4xl font-black ${accentText} group-hover:scale-110 transition-transform origin-left`}>{value}</div>
                            </div>
                            <div className="p-3 bg-sky-500/10 text-sky-500 rounded-xl">
                              <TrendingUp size={24} />
                            </div>
                          </div>
                          {/* Animated "data" bar */}
                          <div className={`mt-6 h-1.5 w-full ${isDark ? 'bg-main/10' : 'bg-slate-200'} rounded-full overflow-hidden`}>
                             <div 
                               className="h-full bg-sky-500 animate-[flowLine_2s_linear_infinite]" 
                               style={{ width: '70%', backgroundSize: '20px 100%' }}
                             />
                          </div>
                        </ParallaxCard>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Global Capability Section */}
      <section className="mt-48 reveal">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black text-main mb-6">Cross-Sector <span className={accentText}>Engineering.</span></h2>
          <p className="text-muted font-bold text-sm uppercase tracking-widest">Universal principles of safety, efficiency, and reliability.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              i: <Cpu />, 
              t: "Universal PLC Logic", 
              d: "Hardware-agnostic programming that ensures your logic remains consistent even if your hardware vendor changes." 
            },
            { 
              i: <Activity />, 
              t: "Real-Time Telemetry", 
              d: "Ultra-low latency data pipelines that provide sub-millisecond visibility into your process state." 
            },
            { 
              i: <Workflow />, 
              t: "Compliant Architecture", 
              d: "Systems built from the ground up to meet international standards (ISO, IEC, ISA) by default." 
            }
          ].map((feat, idx) => (
            <div key={idx} className={`glass p-12 rounded-[3rem] border-sky-500/10 hover:border-sky-500/30 transition-all text-center group ${isDark ? 'bg-main/5' : 'bg-white/60'} shadow-xl`}>
              <div className="inline-flex p-5 bg-sky-500/10 text-sky-400 rounded-2xl mb-8 group-hover:bg-sky-500 group-hover:text-white transition-all">
                {feat.i}
              </div>
              <h3 className="text-xl font-bold text-main mb-4 uppercase tracking-widest">{feat.t}</h3>
              <p className="text-muted text-sm leading-relaxed font-medium">{feat.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className={`mt-40 p-12 md:p-24 rounded-[4rem] glass border-sky-500/10 ${isDark ? 'bg-sky-500/5' : 'bg-sky-100/30'} text-center reveal overflow-hidden relative shadow-2xl`}>
         <div className="absolute top-0 left-0 w-full h-[2px] bg-sky-500/20 animate-[auditScan_5s_linear_infinite]" />
         <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-main mb-8 leading-tight">Ready to Optimize Your <br/><span className={accentText}>Industrial Output?</span></h2>
            <p className="text-muted text-lg mb-12 max-w-2xl mx-auto font-bold uppercase tracking-widest text-[11px]">
               Connect with our Hyderabad center of excellence for a specialized technical audit.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <button onClick={() => setPage('contact')} className="px-12 py-5 bg-sky-500 text-white font-black rounded-2xl shadow-2xl hover:bg-sky-400 transition-all uppercase tracking-[0.3em] text-[10px]">
                  Book Technical Audit
               </button>
               <button onClick={() => setPage('services')} className="px-12 py-5 glass text-main font-black rounded-2xl border-sky-500/20 hover:border-sky-500 transition-all uppercase tracking-[0.3em] text-[10px]">
                  Explore Solutions
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};
