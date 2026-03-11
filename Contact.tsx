
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Navigation, CheckCircle, RefreshCw, Send, Radio, Terminal, Users, ExternalLink, Activity, ShieldCheck, History } from 'lucide-react';
import { RoboticHandIllustration } from './Components';

interface ContactPageProps {
  theme?: string;
  prefill?: string | null;
  clearPrefill?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ theme = 'dark', prefill, clearPrefill }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Consultation', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [signalStrength, setSignalStrength] = useState(98);

  const isDark = theme === 'dark';

  useEffect(() => {
    if (prefill) {
      setFormData(prev => ({
        ...prev,
        subject: 'Consultation',
        message: `I would like to request a formal quote for the following product: ${prefill}. Please provide pricing and availability for our facility in...`
      }));
      if (clearPrefill) clearPrefill();
    }
  }, [prefill, clearPrefill]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength(prev => Math.min(100, Math.max(95, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const contactInfo = [
    { 
      i: <Mail className="w-5 h-5" />, 
      l: "Data Endpoint", 
      v: "sgaindustrialautomations@zohomail.in", 
      a: "mailto:sgaindustrialautomations@zohomail.in",
      desc: "Encrypted direct mail link"
    },
    { 
      i: <Phone className="w-5 h-5" />, 
      l: "Voice Uplink", 
      v: "+91 7673902729", 
      a: "tel:+917673902729",
      desc: "Direct engineering support line"
    },
    { 
      i: <Navigation className="w-5 h-5" />, 
      l: "HQ Coordinates", 
      v: "Plot no 1-9-202/29/15A, EC complex, kushaiguda, Hyderabad, 500062", 
      a: "https://maps.google.com/?q=SGA+Industrial+Automations+Hyderabad",
      desc: "Global Operations Center"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailToAddress = "sgaindustrialautomations@zohomail.in";
    const subject = encodeURIComponent(`Industrial Inquiry: ${formData.subject} - from ${formData.name}`);
    const body = encodeURIComponent(
      `SGA Technical Uplink Request\n` +
      `----------------------------\n` +
      `From: ${formData.name}\n` +
      `Contact Email: ${formData.email}\n` +
      `Category: ${formData.subject}\n\n` +
      `Technical Requirements:\n` +
      `${formData.message}\n\n` +
      `----------------------------\n` +
      `Transmission Date: ${new Date().toLocaleString()}`
    );

    window.location.href = `mailto:${mailToAddress}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: 'Consultation', message: '' });
    }, 1500);
  };

  // Theme-aware styles
  const containerStyle = isDark 
    ? "glass bg-slate-950/60 border-sky-500/10 shadow-[0_0_100px_rgba(14,165,233,0.05)]" 
    : "glass bg-white border-sky-500/20 shadow-2xl shadow-sky-900/10";
  
  const labelStyle = isDark 
    ? "text-muted font-black" 
    : "text-slate-900 font-extrabold";
  
  const inputStyle = isDark 
    ? "bg-slate-900/40 border-sky-500/10 focus:border-sky-500/60 text-main placeholder:text-slate-700" 
    : "bg-slate-50 border-slate-200 focus:border-sky-500 text-slate-900 placeholder:text-slate-400";

  return (
    <div className="pt-32 pb-20 animate-reveal container mx-auto px-6">
      <div className="max-w-4xl mb-24 reveal">
        <div className="inline-flex items-center space-x-3 text-sky-400 mb-6 bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20 backdrop-blur-md">
          <Radio size={14} className="animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Signal Strength: {signalStrength}% Operational</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-main mb-8 leading-tight tracking-tighter">
          Connect with <span className="text-sky-400">Intelligence.</span>
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-2xl">
          Our specialized engineering units are ready for deployment. Use this secure terminal to transmit your industrial requirements directly to our Hyderabad HQ.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 reveal">
          <div className={`${containerStyle} p-10 md:p-16 rounded-[3.5rem] relative overflow-hidden group transition-all duration-500`}>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-sky-500/20 group-hover:animate-[auditScan_4s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100" />
            
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">Link Active</span>
              </div>
              <div className="text-[8px] font-bold text-muted uppercase tracking-[0.3em] flex items-center space-x-2">
                <ShieldCheck size={10} className="text-sky-500" />
                <span>End-to-End Encryption v2.5</span>
              </div>
            </div>

            {isSuccess ? (
              <div className="py-24 text-center animate-reveal">
                <div className="inline-flex p-6 bg-emerald-500/20 rounded-full text-emerald-400 mb-8 animate-bounce">
                  <CheckCircle size={56} />
                </div>
                <h2 className={`text-4xl font-black ${isDark ? 'text-main' : 'text-slate-900'} mb-4`}>Uplink Established</h2>
                <p className="text-muted max-w-sm mx-auto mb-10">Data packets received. An automation architect will respond within 4 business hours.</p>
                <button 
                  onClick={() => setIsSuccess(false)} 
                  className="px-8 py-3 glass bg-sky-500/10 text-sky-400 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all"
                >
                  Start New Transmission
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className={`text-[10px] uppercase tracking-widest ${labelStyle} ml-1 flex items-center space-x-2`}>
                      <Users size={12} /><span>Authorized Identity</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        placeholder="Project Manager / Engineer" 
                        className={`w-full glass rounded-2xl p-5 border outline-none transition-all ${inputStyle}`} 
                      />
                      {activeField === 'name' && <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-sky-400/50 animate-pulse" />}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className={`text-[10px] uppercase tracking-widest ${labelStyle} ml-1 flex items-center space-x-2`}>
                      <Terminal size={12} /><span>Data Endpoint</span>
                    </label>
                    <input 
                      type="email" required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="work@enterprise.com" 
                      className={`w-full glass rounded-2xl p-5 border outline-none transition-all ${inputStyle}`} 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className={`text-[10px] uppercase tracking-widest ${labelStyle} ml-1`}>Transmission Category</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className={`w-full glass rounded-2xl p-5 border outline-none appearance-none cursor-pointer transition-all ${inputStyle}`}
                  >
                    <option value="Consultation">Technical Consultation</option>
                    <option value="Audit">On-Site Industrial Audit</option>
                    <option value="Retrofit">Legacy System Retrofitting</option>
                    <option value="Digitalization">Industry 5.0 Transformation</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className={`text-[10px] uppercase tracking-widest ${labelStyle} ml-1`}>Technical Requirements</label>
                  <textarea 
                    rows={5} required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Briefly describe your hardware logic or digital networking challenges..." 
                    className={`w-full glass rounded-2xl p-5 border outline-none resize-none transition-all ${inputStyle}`} 
                  />
                </div>

                <button 
                  disabled={isSubmitting} 
                  className="w-full py-6 bg-sky-500 text-white font-black rounded-2xl shadow-[0_20px_40px_-10px_rgba(14,165,233,0.5)] hover:scale-[1.01] hover:bg-sky-400 active:scale-95 transition-all uppercase tracking-[0.4em] text-[10px] flex items-center justify-center space-x-4 group"
                >
                  {isSubmitting ? (
                    <><RefreshCw className="animate-spin" size={18} /><span>Encrypting Data...</span></>
                  ) : (
                    <><Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} /><span>Transmit Data</span></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-12 reveal">
          <div className="glass p-12 rounded-[3.5rem] border-sky-500/10 bg-sky-500/5 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="w-24 h-24 mb-10 transform group-hover:scale-110 transition-transform duration-700">
                <RoboticHandIllustration />
              </div>
              <h3 className="text-2xl font-black text-main mb-4 tracking-tight">The <span className="text-sky-400">Human-Machine</span> Link.</h3>
              <p className="text-muted text-sm leading-relaxed mb-10">
                Our infrastructure in Hyderabad is optimized for rapid response. We provide direct access to senior automation architects for immediate technical appraisal.
              </p>
              <div className="flex items-center space-x-6">
                 <div className="flex items-center space-x-2">
                   <Activity size={14} className="text-emerald-500 animate-pulse" />
                   <span className="text-[10px] font-bold text-main uppercase tracking-widest">Real-time Support</span>
                 </div>
                 <div className="flex items-center space-x-2">
                   <History size={14} className="text-sky-500" />
                   <span className="text-[10px] font-bold text-main uppercase tracking-widest">&lt; 4hr Latency</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted ml-2">Official Coordinates</h4>
            <div className="space-y-4">
              {contactInfo.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.a} 
                  target={item.a.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="glass p-6 rounded-3xl border-sky-500/10 flex items-center space-x-6 hover:bg-sky-500/10 hover:border-sky-500/40 transition-all group"
                >
                  <div className="p-4 bg-sky-500/10 text-sky-400 rounded-2xl group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.i}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] uppercase font-black text-muted tracking-widest">{item.l}</span>
                      <ExternalLink size={10} className="text-slate-700 group-hover:text-sky-400 transition-colors" />
                    </div>
                    <div className={`text-sm font-bold ${isDark ? 'text-main' : 'text-slate-800'} leading-tight mb-0.5`}>{item.v}</div>
                    <div className="text-[10px] text-slate-500 italic">{item.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border-sky-500/5 bg-slate-900/20 flex items-center justify-between">
             <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <div>
                   <div className="text-xs font-black text-main uppercase tracking-widest">Global Ops Active</div>
                   <div className="text-[9px] text-muted uppercase tracking-widest">SGA Command Center | Hyderabad</div>
                </div>
             </div>
             <div className="font-mono text-[10px] text-sky-400 font-bold">17.4851° N, 78.4411° E</div>
          </div>
        </div>
      </div>

      <section className="mt-40 pt-20 border-t border-sky-500/10 reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-main mb-12">Protocol Standard <span className="text-sky-400">Assurance</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { l: "ISO 9001", d: "Quality Mgmt" },
              { l: "IEC 61508", d: "Functional Safety" },
              { l: "ISA-95", d: "System Integration" },
              { l: "24/7", d: "Emergency Link" }
            ].map((badge, i) => (
              <div key={i} className="glass p-6 rounded-2xl border-sky-500/5">
                <div className="text-sky-400 font-black text-xl mb-1">{badge.l}</div>
                <div className="text-[9px] font-bold text-muted uppercase tracking-widest">{badge.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
