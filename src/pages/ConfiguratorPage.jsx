import React, { useState } from 'react';
import { Sliders, RotateCw, Check, Sparkles, ShoppingBag, ShieldCheck, Cpu, RefreshCw } from 'lucide-react';

export default function ConfiguratorPage({ onOpenBuyModal }) {
  const [ledColor, setLedColor] = useState('green');
  const [stickHeight, setStickHeight] = useState('standard');
  const [weightModule, setWeightModule] = useState('245g');
  const [paddleP1, setPaddleP1] = useState('A / X');
  const [paddleP2, setPaddleP2] = useState('B / O');
  const [paddleP3, setPaddleP3] = useState('L3');
  const [paddleP4, setPaddleP4] = useState('R3');

  const ledColorMap = {
    green: { name: 'Cyber Neon Emerald', hex: '#00ff66', glow: 'shadow-glow-green', text: 'text-neon-green' },
    orange: { name: 'Volcanic Electric Orange', hex: '#ff5500', glow: 'shadow-glow-orange', text: 'text-neon-orange' },
    violet: { name: 'Cyberpunk Violet', hex: '#a855f7', glow: 'shadow-[0_0_25px_rgba(168,85,247,0.5)]', text: 'text-purple-400' },
    cyan: { name: 'Ice Cyan RGB', hex: '#06b6d4', glow: 'shadow-[0_0_25px_rgba(6,182,212,0.5)]', text: 'text-cyan-400' },
    red: { name: 'Phantom Red', hex: '#ef4444', glow: 'shadow-[0_0_25px_rgba(239,68,68,0.5)]', text: 'text-red-400' },
  };

  const currentColor = ledColorMap[ledColor];

  const toggleQuickColor = () => {
    setLedColor(prev => prev === 'green' ? 'orange' : 'green');
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex justify-center items-center gap-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-neon-green inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            STUDIO DE CUSTOMIZAÇÃO PRO
          </span>
          <button
            onClick={toggleQuickColor}
            className="px-3 py-1 rounded-full bg-neon-green/20 text-neon-green border border-neon-green/40 text-xs font-mono font-bold flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Alternar Cor Única</span>
          </button>
        </div>

        <h1 className="font-display font-black text-4xl sm:text-6xl text-white">
          PERSONALIZE SEU YLUMA PRO
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Monte o controle exatamente como você precisa para o seu estilo de jogo. Escolha cores LED, altura de analógicos e perfil de peso.
        </p>
      </div>

      {/* CONFIGURATOR STUDIO MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* INTERACTIVE CONTROLLER STAGE (PREVIEW) */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-dark-border relative flex flex-col items-center justify-center min-h-[500px] overflow-hidden">
          
          <div 
            className="absolute w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-40 transition-colors duration-500"
            style={{ backgroundColor: currentColor.hex }}
          ></div>

          <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-dark-bg/80 border border-dark-border text-xs font-mono uppercase text-white font-bold">
              PREVIEW INTERATIVO 360°
            </span>
          </div>

          <div className="relative z-10 w-full max-w-lg transition-transform duration-500 hover:scale-105">
            <img 
              src="/assets/yluma_hero.webp" 
              alt="Yluma Controller Custom" 
              className={`w-full h-auto object-cover rounded-2xl transition-all duration-500 ${currentColor.glow}`}
            />
          </div>

          <div className="mt-8 z-10 grid grid-cols-3 gap-4 w-full max-w-md text-center text-xs">
            <div className="p-3 rounded-xl bg-dark-card border border-dark-border">
              <div className="text-gray-400 font-mono">ILUMINAÇÃO:</div>
              <div className={`font-bold mt-0.5 ${currentColor.text}`}>{currentColor.name}</div>
            </div>
            <div className="p-3 rounded-xl bg-dark-card border border-dark-border">
              <div className="text-gray-400 font-mono">ANALÓGICOS:</div>
              <div className="font-bold text-white mt-0.5 uppercase">{stickHeight}</div>
            </div>
            <div className="p-3 rounded-xl bg-dark-card border border-dark-border">
              <div className="text-gray-400 font-mono">MÓDULO DE PESO:</div>
              <div className="font-bold text-white mt-0.5">{weightModule}</div>
            </div>
          </div>

        </div>

        {/* CUSTOMIZATION OPTIONS CONTROL PANEL */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-dark-border space-y-8">
          
          <h2 className="font-display font-bold text-2xl text-white pb-4 border-b border-dark-border flex items-center justify-between">
            <span>PAINEL DE MONTAGEM</span>
            <button onClick={toggleQuickColor} className="text-xs font-mono text-neon-green hover:underline">
              ⚡ TROCAR COR RÁPIDO
            </button>
          </h2>

          {/* 1. LED COLOR PICKER */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase text-gray-300">1. Iluminação RGB dos Botões & LED Accent:</label>
            <div className="grid grid-cols-5 gap-2">
              {Object.keys(ledColorMap).map((colorKey) => (
                <button
                  key={colorKey}
                  onClick={() => setLedColor(colorKey)}
                  className={`h-12 rounded-xl border flex items-center justify-center transition-all ${
                    ledColor === colorKey ? 'scale-110 border-white ring-2 ring-white/50' : 'border-dark-border opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: ledColorMap[colorKey].hex }}
                >
                  {ledColor === colorKey && <Check className="w-5 h-5 text-black stroke-[3]" />}
                </button>
              ))}
            </div>
          </div>

          {/* 2. STICK HEIGHT */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase text-gray-300">2. Altura dos Analógicos (Hall Effect):</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'standard', name: 'Padrão (10mm)' },
                { id: 'tall', name: 'Alto FPS (13mm)' },
                { id: 'domed', name: 'Côncavo (11mm)' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setStickHeight(item.id)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                    stickHeight === item.id 
                      ? 'border-neon-green bg-neon-green/10 text-neon-green' 
                      : 'border-dark-border bg-dark-card text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* 3. WEIGHT MODULE */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase text-gray-300">3. Ajuste de Peso do Corpo:</label>
            <div className="grid grid-cols-3 gap-2">
              {['225g (Leve)', '245g (Balanceado)', '265g (Firme)'].map((w) => {
                const val = w.split(' ')[0];
                return (
                  <button
                    key={val}
                    onClick={() => setWeightModule(val)}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                      weightModule === val 
                        ? 'border-neon-green bg-neon-green/10 text-neon-green' 
                        : 'border-dark-border bg-dark-card text-gray-400 hover:text-white'
                    }`}
                  >
                    {w}
                  </button>
                );
              })}
            </div>
          </div>

          {/* FINAL ORDER CUSTOMIZED CTA */}
          <div className="pt-4 border-t border-dark-border space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Preço do Modelo Customizado:</span>
              <span className="font-display font-black text-2xl text-neon-green">R$ 509,15 <span className="text-xs font-mono text-gray-400 font-normal">no PIX</span></span>
            </div>
            
            <button
              onClick={onOpenBuyModal}
              className="w-full py-4 rounded-xl font-display font-black text-sm uppercase bg-neon-green text-black hover:bg-neon-green/90 shadow-glow-green flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Garantir Minha Configuração</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
