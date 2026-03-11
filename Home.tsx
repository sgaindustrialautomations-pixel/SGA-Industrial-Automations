import React, { useState } from 'react';
import { Zap, ArrowRight, Layers, History, Target, Activity, TrendingUp, ShieldAlert, Award, Rocket, HelpCircle, ChevronDown, Clock } from 'lucide-react';
import { AnimatedCounter, ParallaxCard } from './Components';

export const HomePage: React.FC<{ setPage: (p: string) => void }> = ({ setPage }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does SGA approach Industry 5.0 transition?",
      a: "Our approach prioritizes the 'Human-Machine Link'. We don't just automate tasks; we design systems where high-speed robotics and AI amplify human creativity and decision-making, ensuring sustainability and resilience in your production line."
    },
    {
      q: "Can you integrate with my existing legacy PLCs?",
      a: "Yes. We specialize in 'Retro-Digitalization'. Using protocol converters and edge gateways (MQTT/OPC-UA), we bridge 20+ year old hardware into a modern Unified Namespace (UNS) without requiring a total rip-and-replace."
    },
    {
      q: "What is the typical ROI for an SGA automation project?",
      a: "Most clients see full capital recovery within 14 to 22 months. This is achieved through a combination of 20-35% OEE improvements, reduced energy consumption, and the elimination of unplanned downtime via predictive maintenance."
    },
    {
      q: "Do you provide on-site technical audits in Hyderabad?",
      a: "Absolutely. Our specialized engineering unit conducts exhaustive on-site telemetry mapping and OT/IT gap analysis to identify bottlenecks before we even write a single line of logic."
    },
    {
      q: "Is your 24/7 support purely remote?",
      a: "While we offer real-time remote telemetry monitoring and sub-4hr latency response, we also maintain local field engineering teams for critical on-site emergency support."
    }
  ];

  return (
    <div className="animate-reveal">
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 animate-grid opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1 rounded-full mb-8">
            <Zap className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500">Pioneering Industry 5.0</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight text-main max-w-5xl mx-auto">
            Bridging Conventional Engineering <br /><span className="text-gradient">with the Future of Technology</span>
          </h1>
          <p className="max-w-3xl mx-auto text-muted text-lg md:text-xl mb-12">Leading Industry 4.0 & 5.0 Automation System Integration & Digital Solutions.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <button onClick={() => setPage('services')} className="px-10 py-4 bg-[#1b9b34] text-white font-bold rounded-lg neon-glow uppercase tracking-widest text-sm hover:bg-emerald-600 transition-colors">Our Solutions</button>
            <button onClick={() => setPage('contact')} className="px-10 py-4 glass text-main font-bold rounded-lg uppercase tracking-widest text-sm hover:border-emerald-500 transition-all">Book Site Audit</button>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-900/10 border-y border-emerald-500/5">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          <AnimatedCounter value="150+" label="Projects Delivered" icon={<Layers size={24} />} />
          <AnimatedCounter value="15" label="Years Experience" icon={<History size={24} />} />
          <AnimatedCounter value="12" label="Industry Sectors" icon={<Target size={24} />} />
          <AnimatedCounter value="24/7" suffix="/7" label="Active Monitoring" icon={<Activity size={24} />} />
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 reveal">
        <div className="text-center mb-16"><h2 className="text-4xl font-black text-main">Why Partner with <span className="text-emerald-500">SGA?</span></h2></div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { t: "Proven ROI", d: "Quantifiable gains.", i: <TrendingUp /> },
            { t: "24/7 Support", d: "Zero-downtime monitoring.", i: <ShieldAlert /> },
            { t: "Expertise", d: "Decades of experience.", i: <Award /> },
            { t: "Future-Proof", d: "Industry 5.0 ready.", i: <Rocket /> }
          ].map((r, i) => (
            <div key={i} className="glass p-10 rounded-3xl border border-emerald-500/10 hover:border-emerald-500/40 transition-all group">
              <div className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform">{r.i}</div>
              <h3 className="text-xl font-bold text-main mb-4">{r.t}</h3>
              <p className="text-muted text-sm">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Realtime FAQ Section */}
      <section className="py-24 container mx-auto px-6 reveal">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-main mb-4 italic">Technical <span className="text-emerald-500 underline decoration-emerald-500/20">Uplink.</span></h2>
            <p className="text-muted text-[10px] uppercase tracking-[0.2em] font-bold">Frequently Asked Industrial Queries</p>
          </div>
          <div className="flex items-center space-x-3 glass px-4 py-2 rounded-xl border-emerald-500/10">
            <Clock size={12} className="text-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black text-main uppercase tracking-widest">Last Updated: Real-time</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-[2rem] border border-emerald-500/10 overflow-hidden transition-all duration-300 hover:border-emerald-500/30">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-7 flex items-center justify-between text-left group"
              >
                <span className={`text-sm md:text-base font-bold tracking-wide transition-colors ${openFaq === i ? 'text-emerald-500' : 'text-main'}`}>
                  {faq.q}
                </span>
                <div className={`p-2 rounded-full transition-all duration-300 ${openFaq === i ? 'bg-emerald-500 text-white rotate-180' : 'bg-emerald-500/10 text-emerald-500'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-96 opacity-100 border-t border-emerald-500/5' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 py-8 text-muted text-sm leading-relaxed bg-emerald-500/[0.02]">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass p-12 md:p-20 rounded-[4rem] border-emerald-500/10 bg-gradient-to-br from-emerald-500/5 to-transparent flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-5xl font-black text-main mb-8">The ROI of <span className="text-emerald-500">Intelligence.</span></h2>
              <p className="text-muted text-lg mb-10">We measure impact by your bottom line—bridging hardware precision with financial performance.</p>
              <button onClick={() => setPage('contact')} className="px-10 py-5 bg-[#1b9b34] text-white font-bold rounded-2xl flex items-center space-x-3 uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all">
                <span>Request site audit</span><ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6 flex-1 w-full">
              {[{l:"Energy",v:"20%"},{l:"OEE",v:"35%"},{l:"ROI",v:"18mo"},{l:"Uptime",v:"99.9%"}].map((s,i)=>(
                <div key={i} className="glass p-8 rounded-3xl text-center border-emerald-500/20">
                  <div className="text-3xl font-black text-emerald-500">{s.v}</div>
                  <div className="text-[10px] uppercase font-bold text-muted mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
