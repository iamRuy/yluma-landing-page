import React from 'react';
import { ShieldCheck, Truck, ArrowRight, Cpu, Monitor, Gamepad2, Box, Smartphone } from 'lucide-react';

export default function HomePage({ selectedTheme, setSelectedTheme, onOpenBuyModal, setCurrentPage }) {
  const themeTextClass = selectedTheme === 'green' ? 'text-neon-green text-glow-green' : 'text-neon-orange text-glow-orange';
  const themeBgClass = selectedTheme === 'green' ? 'bg-neon-green text-black hover:bg-neon-green/90 shadow-glow-green' : 'bg-neon-orange text-black hover:bg-neon-orange/90 shadow-glow-orange';

  return (
    <div className="flex flex-col relative">
      
      {/* HERO SECTION - MATCHING SCREENSHOT EXACTLY */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 overflow-hidden bg-grid-pattern">
        
        {/* NEON AMBIENT GLOW LIGHTS */}
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 opacity-30 ${selectedTheme === 'green' ? 'bg-neon-green' : 'bg-neon-orange'}`}></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* HERO TEXT COLUMN */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
              
              {/* HARDCORE BADGE */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-card/90 border border-dark-border text-xs font-bold uppercase tracking-wider text-gray-300">
                <span className={`w-2 h-2 rounded-full animate-pulse ${selectedTheme === 'green' ? 'bg-neon-green' : 'bg-neon-orange'}`}></span>
                PRO GAMING GEAR &bull; LATÊNCIA 1MS (ULTRA 1000HZ)
              </div>

              {/* MAIN HERO TITLE */}
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white">
                ELEVE SEU JOGO COM <br className="hidden sm:inline" />
                <span className={`bg-gradient-to-r ${selectedTheme === 'green' ? 'from-neon-green via-emerald-400 to-teal-200' : 'from-neon-orange via-amber-400 to-yellow-200'} bg-clip-text text-transparent`}>
                  YLUMA PRO
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
                O controle definitivo de nova geração projetado para eSports. Construído com travamento de gatilhos adaptativos, sticks analógicos de Efeito Hall com zera-drift e resposta tátil instantânea.
              </p>

              {/* KEY HARDCORE METRICS */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-lg py-4 border-y border-dark-border/80">
                <div>
                  <div className={`font-display font-black text-2xl sm:text-3xl ${themeTextClass}`}>1000Hz</div>
                  <div className="text-xs text-gray-400 font-medium">Polling Rate</div>
                </div>
                <div>
                  <div className={`font-display font-black text-2xl sm:text-3xl ${themeTextClass}`}>0 Drift</div>
                  <div className="text-xs text-gray-400 font-medium font-sans">Hall Effect Sticks</div>
                </div>
                <div>
                  <div className={`font-display font-black text-2xl sm:text-3xl ${themeTextClass}`}>40 Horas</div>
                  <div className="text-xs text-gray-400 font-medium">Bateria Contínua</div>
                </div>
              </div>

              {/* CTA BUTTONS GROUP */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <button
                  onClick={onOpenBuyModal}
                  className={`px-8 py-4 rounded-xl font-display font-bold text-base uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-3 ${themeBgClass}`}
                >
                  <span>Comprar Agora</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => { setCurrentPage('features'); window.scrollTo(0,0); }}
                  className="px-8 py-4 rounded-xl font-display font-semibold text-base text-gray-300 hover:text-white bg-dark-card/80 hover:bg-dark-hover border border-dark-border transition-all flex items-center justify-center gap-2"
                >
                  <Cpu className="w-5 h-5 text-gray-400" />
                  <span>Explorar Tecnologia</span>
                </button>
              </div>

              {/* STOCK & GUARANTEE STATUS */}
              <div className="flex items-center gap-3 text-xs text-gray-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-neon-green" />
                <span>Garantia oficial de 2 anos</span>
                <span>&bull;</span>
                <Truck className="w-4 h-4 text-neon-orange" />
                <span>Envio imediato em 24h</span>
              </div>

            </div>

            {/* HERO CONTROLLER DISPLAY */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              {/* GLOWING ORBIT RING */}
              <div className={`absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-dashed animate-spin ${selectedTheme === 'green' ? 'border-neon-green/30' : 'border-neon-orange/30'}`} style={{ animationDuration: '30s' }}></div>
              <div className={`absolute w-60 sm:w-80 h-60 sm:h-80 rounded-full border opacity-40 ${selectedTheme === 'green' ? 'border-neon-green/40' : 'border-neon-orange/40'}`}></div>

              {/* IMAGE CARD */}
              <div className="relative group w-full max-w-md sm:max-w-lg rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl transition-all duration-500 hover:border-neon-green/40">
                
                {/* Controller Badge Overlay */}
                <div className="absolute top-6 left-6 z-20 px-3 py-1 rounded-md bg-dark-bg/80 backdrop-blur-md border border-dark-border text-[11px] font-mono uppercase tracking-wider text-neon-green flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-neon-green animate-ping"></span>
                  EDITION PRO ULTIMATE
                </div>

                {/* Main Controller Render */}
                <img 
                  src="/assets/yluma_hero.webp" 
                  alt="Controle Gamer Yluma Pro" 
                  className="w-full h-auto object-cover rounded-2xl animate-float transition-transform duration-700 group-hover:scale-105"
                />

                {/* Interactive Color Indicator Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-xl glass-panel flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${selectedTheme === 'green' ? 'bg-neon-green shadow-glow-green' : 'bg-neon-orange shadow-glow-orange'}`}></div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase">EDITION SELECIONADA:</div>
                      <div className="text-xs text-gray-400 font-mono">
                        {selectedTheme === 'green' ? 'Cyber Neon Emerald RGB' : 'Volcanic Electric Orange RGB'}
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedTheme(selectedTheme === 'green' ? 'orange' : 'green')}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-dark-surface hover:bg-dark-hover border border-dark-border text-gray-300 hover:text-white transition-colors"
                  >
                    Trocar Cor
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* COMPATIBILITY BAR */}
      <section className="py-8 bg-dark-surface border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase font-mono">
            COMPATIBILIDADE MULTIPLATAFORMA PLUG & PLAY:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm font-semibold">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Monitor className="w-5 h-5 text-neon-green" />
              <span>PC Windows & Steam</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Gamepad2 className="w-5 h-5 text-neon-orange" />
              <span>PlayStation 5 / PS4</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Box className="w-5 h-5 text-neon-green" />
              <span>Xbox Series X|S</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Smartphone className="w-5 h-5 text-neon-orange" />
              <span>Android & iOS Mobile</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
