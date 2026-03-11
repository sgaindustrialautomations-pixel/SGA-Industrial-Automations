import React from 'react';
import { 
  SearchCode, 
  Workflow, 
  Binary, 
  Activity, 
  Users, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  ArrowRight,
  Terminal,
  Database,
  Cpu as Processor,
  Network
} from 'lucide-react';
import { ParallaxCard, RoboticHandIllustration } from './Components';

export const AboutPage: React.FC = () => {
  const lifecycle = [
    { 
      s: "01", 
      t: "Industrial Audit", 
      d: "Exhaustive telemetry mapping and bottleneck identification across your legacy infrastructure.", 
      i: <SearchCode />,
      detail: "OT/IT Gap Analysis"
    },
    { 
      s: "02", 
      t: "Logic Architecture", 
      d: "Architecting deterministic control paths, fail-safe logic, and multi-tier safety layers.", 
      i: <Binary />,
      detail: "IEC 61131-3 Compliant"
    },
    { 
      s: "03", 
      t: "Rapid Deployment", 
      d: "Zero-downtime integration of hardware (PLC/SCADA) and software (UNS/MQTT) layers.", 
      i: <Workflow />,
      detail: "Hardware Agnostic"
    },
    { 
      s: "04", 
      t: "System Advance", 
      d: "Applying machine learning for autonomous optimization and predictive health monitoring.", 
      i: <Activity />,
      detail: "AI-Driven OEE"
    }
  ];

  const standards = [
    { l: "IEC 61131-3", d: "Global standard for PLC programming and logic interoperability.", icon: <Processor size={20}/> },
    { l: "ISA-95", d: "Framework for seamless enterprise-to-control system integration.", icon: <Database size={20}/> },
    { l: "IEC 62443", d: "Leading cybersecurity protocol for industrial control systems.", icon: <ShieldCheck size={20}/> },
    { l: "ISO 9001:2015", d: "Certified quality management for operational and engineering excellence.", icon: <Network size={20}/> }
  ];

  return (
    <div className="pt-32 pb-20 animate-reveal">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32 reveal">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 text-sky-400 mb-6 bg-sky-500/10 px-4 py-1 rounded-full border border-sky-500/20 backdrop-blur-sm">
            <Globe size={14} className="animate-spin-slow" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Hyderabad Hub | Global Deployment</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-main mb-8 leading-tight tracking-tighter">
            Engineering the <br/><span className="text-sky-400">Next Frontier.</span>
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-2xl">
            SGA Industrial Automations isn't just a system integrator; we are the bridge between mechanical legacy and digital autonomy. We harmonize high-speed industrial physics with cloud-tier intelligence.
          </p>
        </div>
      </section>

      {/* Section 1: Lifecycle of Excellence - Kinetic Flow */}
      <section className="py-40 relative overflow-hidden border-y border-sky-500/5 reveal bg-main/5">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-main mb-4 italic tracking-tight">Lifecycle of <span className="text-sky-400 underline decoration-sky-500/30">Excellence.</span></h2>
              <p className="text-muted text-sm uppercase tracking-[0.2em] font-bold">A deterministic path to industrial optimization.</p>
            </div>
            <div className="flex items-center space-x-4 glass px-6 py-3 rounded-2xl border-sky-500/10">
              <div className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
              <span className="text-[10px] font-black text-main uppercase tracking-widest">Active Methodology v4.0</span>
            </div>
          </div>
          
          <div className="relative grid md:grid-cols-4 gap-8">
            {/* Animated Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-sky-500/10 -translate-y-1/2 overflow-hidden">
               <div className="h-full w-1/4 bg-sky-400/40 animate-[flowLine_4s_linear_infinite]" />
            </div>
            
            {lifecycle.map((step, i) => (
              <div key={i} className="relative group">
                <ParallaxCard className="glass p-10 rounded-[2.5rem] border-sky-500/10 bg-main/10 hover:border-sky-500/40 transition-all duration-700 shadow-xl">
                  <div className="absolute -right-4 -top-4 text-7xl font-black text-sky-500/5 select-none transition-all group-hover:text-sky-500/10">
                    {step.s}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-8 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-inner">
                    {step.i}
                  </div>
                  <h3 className="text-2xl font-black text-main mb-4 group-hover:text-sky-400 transition-colors">{step.t}</h3>
                  <p className="text-muted text-xs leading-relaxed mb-8 font-medium">{step.d}</p>
                  
                  <div className="flex items-center space-x-2 text-[9px] font-black uppercase tracking-[0.2em] text-sky-500/60 group-hover:text-sky-400 transition-colors">
                    <Terminal size={12} />
                    <span>{step.detail}</span>
                  </div>
                </ParallaxCard>
                {/* Visual Step Indicator */}
                <div className="hidden md:flex absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-main border border-sky-500/20 -translate-y-1/2 items-center justify-center z-20 group-last:hidden group-hover:border-sky-500 transition-colors">
                   <ArrowRight size={14} className="text-sky-500/40 group-hover:text-sky-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Industry 4.0 to 5.0 - Holographic Comparison */}
      <section className="py-48 container mx-auto px-6 reveal">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-block p-2 px-4 bg-sky-500/5 border border-sky-500/10 rounded-xl text-sky-400 text-[10px] font-black uppercase tracking-[0.3em]">
               Evolutionary Paradigm
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-main leading-tight tracking-tighter">
              Transcending <br/><span className="text-sky-400 underline decoration-sky-500/20">Industry 4.0.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              While Industry 4.0 focused on the massive interconnection of assets, **Industry 5.0** shifts the focus back to the human element—integrating human creativity with machine reliability for personalized, sustainable, and resilient manufacturing.
            </p>
            
            <div className="grid gap-6">
              {[
                { i: <Users />, t: "Collaborative Robotics", d: "SGA designs environments where cobots amplify human skill rather than replacing it.", c: "emerald" },
                { i: <Zap />, t: "Hyper-Efficiency", d: "Minimizing energy waste through deterministic logic and AI-driven load management.", c: "sky" }
              ].map((item, idx) => (
                <div key={idx} className={`flex items-start space-x-6 p-8 glass rounded-3xl border-${item.c}-500/10 bg-main/5 group hover:bg-${item.c}-500/10 transition-all shadow-md`}>
                  <div className={`p-4 bg-${item.c}-500/10 text-${item.c}-400 rounded-2xl group-hover:scale-110 transition-transform`}>
                    {item.i}
                  </div>
                  <div>
                    <div className={`text-xs font-black text-${item.c}-400 uppercase tracking-widest mb-2`}>{item.t}</div>
                    <div className="text-sm text-main leading-relaxed font-medium opacity-90">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-sky-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="glass p-10 md:p-14 rounded-[4rem] border-sky-500/10 bg-main/5 overflow-hidden relative shadow-2xl">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/[0.03] to-transparent animate-[auditScan_8s_linear_infinite] pointer-events-none" />
              
              <div className="flex flex-col space-y-12 relative z-10">
                <div className="flex items-center justify-between border-b border-sky-500/10 pb-8">
                   <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Conventional 4.0</div>
                   <div className="text-xs font-black text-sky-400 uppercase tracking-[0.3em] flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"/>
                      <span>SGA Vision 5.0</span>
                   </div>
                </div>

                <div className="space-y-6">
                  {[
                    { l: "Efficiency", v4: "Mass Output", v5: "Personalized Yield", p: 85 },
                    { l: "Architecture", v4: "Centralized", v5: "Decentralized / UNS", p: 92 },
                    { l: "Sustainability", v4: "Secondary", v5: "Core Requirement", p: 78 }
                  ].map((row, i) => (
                    <div key={i} className="group/row">
                      <div className="flex justify-between text-[9px] font-black uppercase text-muted tracking-widest mb-3 px-1">
                        <span>{row.l}</span>
                        <span className="text-sky-400">{row.v5}</span>
                      </div>
                      <div className="h-2 w-full bg-main/10 rounded-full overflow-hidden border border-sky-500/5">
                        <div className="h-full bg-sky-500/40 group-hover/row:bg-sky-400 transition-all duration-1000" style={{ width: `${row.p}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 flex justify-center">
                   <div className="w-32 h-32 opacity-20 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-110">
                      <RoboticHandIllustration />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Governance & Technical Rigor - The Grid */}
      <section className="py-40 relative reveal bg-main/5">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-sky-500/10" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5">
               <h2 className="text-4xl font-black text-main mb-6 tracking-tighter">Governance & <br/><span className="text-sky-400">Technical Rigor.</span></h2>
               <p className="text-muted leading-relaxed font-medium">
                  Every line of logic deployed by SGA undergoes a rigorous verification protocol. We operate in zero-failure environments where technical precision is a moral obligation.
               </p>
               <div className="mt-10 flex flex-wrap gap-4">
                  <div className="px-4 py-2 glass rounded-xl border-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase tracking-widest">Fail-Safe Certified</div>
                  <div className="px-4 py-2 glass rounded-xl border-sky-500/20 text-sky-400 text-[9px] font-black uppercase tracking-widest">Industry 5.0 Ready</div>
               </div>
            </div>
            
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
              {standards.map((std, i) => (
                <div key={i} className="glass p-8 rounded-3xl border-sky-500/10 hover:border-sky-500/50 transition-all group cursor-default relative overflow-hidden bg-main/5 shadow-lg">
                  <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    {std.icon}
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                      {std.icon}
                    </div>
                    <h4 className="text-lg font-black text-main tracking-tighter">{std.l}</h4>
                  </div>
                  <p className="text-[11px] text-muted leading-relaxed uppercase font-black tracking-[0.1em]">{std.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Status Bar */}
          <div className="p-8 md:p-12 glass rounded-[3.5rem] border-sky-500/10 bg-gradient-to-r from-sky-500/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-12 group overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-sky-500/5 pointer-events-none" />
            <div className="flex items-center space-x-8 relative z-10">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-sky-500/20 flex items-center justify-center group-hover:border-sky-500 transition-colors duration-500">
                  <ShieldCheck size={36} className="text-sky-500 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-main flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"/>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-main group-hover:text-sky-400 transition-colors">Rigorous Technical Audit</h3>
                <p className="text-muted text-sm font-bold">Verify your industrial safety protocols with our Hyderabad specialists.</p>
              </div>
            </div>
            <button className="relative z-10 px-12 py-5 bg-sky-500 text-white font-black rounded-2xl flex items-center space-x-4 uppercase tracking-[0.3em] text-[10px] hover:bg-sky-400 transition-all shadow-[0_20px_40px_-10px_rgba(14,165,233,0.5)] active:scale-95">
              <span>Schedule Technical Consultation</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
