import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, selectedTheme, setSelectedTheme, onOpenBuyModal }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'features', label: 'Tecnologia' },
    { id: 'specs', label: 'Especificações' },
    { id: 'reviews', label: 'Pro Players' },
    { id: 'faq', label: 'Dúvidas' },
  ];

  const themeBgClass = selectedTheme === 'green' 
    ? 'bg-neon-green text-black hover:bg-neon-green/90 shadow-glow-green' 
    : 'bg-neon-orange text-black hover:bg-neon-orange/90 shadow-glow-orange';

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    setIsNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-dark-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <button onClick={() => navigateTo('home')} className="flex items-center gap-3 group text-left">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-xl bg-dark-card border transition-all duration-300 ${selectedTheme === 'green' ? 'border-neon-green/50 text-neon-green shadow-glow-green' : 'border-neon-orange/50 text-neon-orange shadow-glow-orange'}`}>
            Y
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-wider text-white group-hover:text-neon-green transition-colors">
              YLUMA<span className={selectedTheme === 'green' ? 'text-neon-green' : 'text-neon-orange'}>.</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-gray-400 -mt-1">PRO GAMING GEAR</span>
          </div>
        </button>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`transition-colors ${
                currentPage === item.id 
                  ? selectedTheme === 'green' ? 'text-neon-green font-bold' : 'text-neon-orange font-bold'
                  : 'hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* RIGHT CONTROLS: THEME PILL & COMPRAR AGORA BUTTON */}
        <div className="hidden md:flex items-center gap-5">
          {/* Theme Selector Pill */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-dark-card border border-dark-border text-xs font-semibold">
            <button 
              onClick={() => setSelectedTheme('green')}
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${selectedTheme === 'green' ? 'bg-neon-green/20 text-neon-green border border-neon-green/40 shadow-glow-green' : 'text-gray-400 hover:text-white'}`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-neon-green"></span>
              Cyber Green
            </button>
            <button 
              onClick={() => setSelectedTheme('orange')}
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${selectedTheme === 'orange' ? 'bg-neon-orange/20 text-neon-orange border border-neon-orange/40 shadow-glow-orange' : 'text-gray-400 hover:text-white'}`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-neon-orange"></span>
              Neon Pulse
            </button>
          </div>

          {/* BUY BUTTON */}
          <button
            onClick={onOpenBuyModal}
            className={`px-6 py-2.5 rounded-lg font-display font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95 ${themeBgClass}`}
          >
            Comprar Agora
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenBuyModal}
            className={`px-4 py-2 rounded-lg font-display font-bold text-xs uppercase ${themeBgClass}`}
          >
            Comprar
          </button>
          <button 
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="p-2 rounded-lg bg-dark-card border border-dark-border text-gray-300"
          >
            {isNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE NAV DRAWER */}
      {isNavOpen && (
        <div className="md:hidden border-b border-dark-border bg-dark-surface px-6 py-6 flex flex-col gap-4 text-base font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`py-1 text-left transition-colors ${
                currentPage === item.id ? 'text-neon-green font-bold' : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-dark-border flex items-center justify-between">
            <span className="text-xs text-gray-400">Escolha a Edição Neon:</span>
            <div className="flex gap-2">
              <button 
                onClick={() => setSelectedTheme('green')}
                className={`px-3 py-1 rounded-full text-xs font-bold ${selectedTheme === 'green' ? 'bg-neon-green text-black' : 'bg-dark-card text-gray-400'}`}
              >
                Verde
              </button>
              <button 
                onClick={() => setSelectedTheme('orange')}
                className={`px-3 py-1 rounded-full text-xs font-bold ${selectedTheme === 'orange' ? 'bg-neon-orange text-black' : 'bg-dark-card text-gray-400'}`}
              >
                Laranja
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
