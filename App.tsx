
import React, { useEffect, useState } from 'react';
import { Menu, Sun, Moon, ChevronDown, MessageCircle, GraduationCap } from 'lucide-react';
import { BackgroundRobotics, TestimonialCarousel, Footer, SGALogo } from './Components.tsx';
import { HomePage } from './Home.tsx';
import { AboutPage } from './About.tsx';
import { ExpertisePage } from './Expertise.tsx';
import { ServicesPage } from './Services.tsx';
import { ContactPage } from './Contact.tsx';
import { ProductsPage, ProductsDeltaPage, ProductsAutonicsPage, ProductsSwastikPage } from './Products.tsx';
import { TrainingPage } from './Training.tsx';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('sga-theme') || 'dark');
  const [page, setPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prefill, setPrefill] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(e => e.forEach(entry => entry.isIntersecting && entry.target.classList.add('active')), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [page]);

  useEffect(() => { 
    document.body.className = `${theme}-mode`; 
    localStorage.setItem('sga-theme', theme); 
  }, [theme]);

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const nav = [ 
    {id:'home',l:'Home'}, 
    {id:'about',l:'About'}, 
    {id:'expertise',l:'Expertise'}, 
    {id:'services',l:'Services'}, 
    {id:'products',l:'Products'},
    {id:'training',l:'Training'},
    {id:'contact',l:'Contact'} 
  ];

  const handleRequestQuote = (productName: string) => {
    setPrefill(productName);
    setPage('contact');
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello SGA Industrial Automations, I am interested in your technical solutions and would like to discuss a project.");
    window.open(`https://wa.me/917673902729?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-main text-main selection:bg-[#1B9B34] selection:text-white overflow-x-hidden">
      <BackgroundRobotics theme={theme} />
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2 glass border-b border-[#1B9B34]/20 shadow-lg' : 'py-4 bg-transparent border-b border-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={() => setPage('home')} className="flex items-center transition-transform hover:scale-[1.02] active:scale-95">
            <SGALogo className={isScrolled ? 'h-7 md:h-8' : 'h-8 md:h-10'} scrolled={isScrolled} />
          </button>
          
          <div className="hidden lg:flex items-center space-x-8">
            {nav.map(n => (
              <div key={n.id} className="relative group">
                <button 
                  onClick={() => setPage(n.id)} 
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative flex items-center space-x-1 ${page.startsWith(n.id) ? 'text-[#1B9B34]' : 'text-main hover:text-[#1B9B34]'}`}
                >
                  <span>{n.l}</span>
                  {n.id === 'products' && <ChevronDown size={10} className="group-hover:rotate-180 transition-transform" />}
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#1B9B34] transition-all ${page.startsWith(n.id) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
                
                {n.id === 'products' && (
                  <div className="absolute top-full left-0 mt-2 w-56 glass border border-[#1B9B34]/10 rounded-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 overflow-hidden">
                    <button onClick={() => setPage('products-delta')} className="w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-[#1B9B34] hover:bg-[#1B9B34]/5 transition-colors">DELTA Products</button>
                    <button onClick={() => setPage('products-autonics')} className="w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-[#1B9B34] hover:bg-[#1B9B34]/5 transition-colors">Autonics Products</button>
                    <button onClick={() => setPage('products-swastik')} className="w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-[#1B9B34] hover:bg-[#1B9B34]/5 transition-colors">Swastik Automation</button>
                  </div>
                )}
              </div>
            ))}
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 glass rounded-full hover:scale-110 transition-transform ml-4">
              {theme === 'dark' ? <Sun size={18} className="text-[#1B9B34]" /> : <Moon size={18} className="text-[#1B9B34]" />}
            </button>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-main hover:text-[#1B9B34] transition-colors"><Menu size={24} /></button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass border-t border-[#1B9B34]/10 p-6 flex flex-col space-y-4 animate-reveal">
            {nav.map(n => (
              <div key={n.id} className="space-y-2">
                <button onClick={() => { setPage(n.id); setIsMobileMenuOpen(false); }} className={`text-[11px] font-bold uppercase tracking-[0.2em] ${page === n.id ? 'text-[#1B9B34]' : 'text-main'}`}>{n.l}</button>
                {n.id === 'products' && (
                  <div className="pl-4 flex flex-col space-y-2 border-l border-[#1B9B34]/10">
                    <button onClick={() => { setPage('products-delta'); setIsMobileMenuOpen(false); }} className="text-[9px] font-bold uppercase tracking-widest text-muted">DELTA Products</button>
                    <button onClick={() => { setPage('products-autonics'); setIsMobileMenuOpen(false); }} className="text-[9px] font-bold uppercase tracking-widest text-muted">Autonics Products</button>
                    <button onClick={() => { setPage('products-swastik'); setIsMobileMenuOpen(false); }} className="text-[9px] font-bold uppercase tracking-widest text-muted">Swastik Automation</button>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-[#1B9B34]/10 flex justify-center">
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 glass rounded-full">
                {theme === 'dark' ? <Sun size={18} className="text-[#1B9B34]" /> : <Moon size={18} className="text-[#1B9B34]" />}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp Hub */}
      <div className="fixed bottom-8 right-8 z-[100] group flex flex-col items-end">
        <div className="mb-4 glass px-4 py-2 rounded-xl border-[#1B9B34]/20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
          <span className="text-[10px] font-black text-[#1B9B34] uppercase tracking-widest">Let's connect</span>
        </div>
        <button 
          onClick={openWhatsApp}
          className="w-16 h-16 glass bg-[#1B9B34]/10 rounded-full flex items-center justify-center text-[#1B9B34] border border-[#1B9B34]/20 shadow-[0_0_30px_rgba(27,155,52,0.2)] hover:shadow-[0_0_50px_rgba(27,155,52,0.4)] hover:scale-110 active:scale-95 transition-all duration-500 animate-[glow_3s_infinite]"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      </div>

      <main className="relative z-10">
        {page === 'home' && <HomePage setPage={setPage} />}
        {page === 'about' && <AboutPage theme={theme} />}
        {page === 'expertise' && <ExpertisePage setPage={setPage} theme={theme} />}
        {page === 'services' && <ServicesPage setPage={setPage} theme={theme} />}
        {page === 'products' && <ProductsPage setPage={setPage} />}
        {page === 'products-delta' && <ProductsDeltaPage setPage={setPage} onRequestQuote={handleRequestQuote} />}
        {page === 'products-autonics' && <ProductsAutonicsPage setPage={setPage} onRequestQuote={handleRequestQuote} />}
        {page === 'products-swastik' && <ProductsSwastikPage setPage={setPage} onRequestQuote={handleRequestQuote} />}
        {page === 'training' && <TrainingPage setPage={setPage} theme={theme} />}
        {page === 'contact' && <ContactPage theme={theme} prefill={prefill} clearPrefill={() => setPrefill(null)} />}
        <TestimonialCarousel />
      </main>
      <Footer />
    </div>
  );
}
