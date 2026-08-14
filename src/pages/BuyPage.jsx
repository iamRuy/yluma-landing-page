import React, { useState } from 'react';
import { ShieldCheck, Truck, Lock, CheckCircle2, Star, ShoppingBag, Shield, Plus, Check } from 'lucide-react';

export default function BuyPage({ selectedTheme, setSelectedTheme, onOpenBuyModal }) {
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');
  const [shippingCalculated, setShippingCalculated] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const basePrice = 599.00;

  const addonsList = [
    { id: 'case', name: 'Case Rígido de Viagem Yluma Armor', price: 79.90 },
    { id: 'sticks', name: 'Kit com 4 Thumbsticks Extras (Caps FPS & Domes)', price: 39.90 },
    { id: 'grip', name: 'Grip Tape Antissuor de Alta Aderência 3M', price: 29.90 },
  ];

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = addonsList.find(a => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const subtotal = (basePrice * quantity) + addonsTotal;
  const pixPrice = subtotal * 0.85;

  const themeBgClass = selectedTheme === 'green' 
    ? 'bg-neon-green text-black hover:bg-neon-green/90 shadow-glow-green' 
    : 'bg-neon-orange text-black hover:bg-neon-orange/90 shadow-glow-orange';

  const toggleTheme = () => {
    setSelectedTheme(prev => prev === 'green' ? 'orange' : 'green');
  };

  const handleCalcShipping = (e) => {
    e.preventDefault();
    if (cep.length >= 8) {
      setShippingCalculated(true);
    } else {
      alert('Digite um CEP válido com 8 dígitos.');
    }
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* PAGE HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-neon-green">
          LOJA OFICIAL YLUMA
        </span>
        <h1 className="font-display font-black text-4xl sm:text-6xl text-white">
          GARANTA SEU YLUMA PRO
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          Edição Limitada de Lançamento com Base Magnética RGB Inclusa + Frete Grátis Express para todo o Brasil.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* PRODUCT GALLERY */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel p-4 rounded-3xl border border-dark-border relative overflow-hidden">
            <img 
              src="/assets/yluma_hero.webp" 
              alt="Yluma Controller Pro" 
              className="w-full h-[400px] object-cover rounded-2xl"
            />
            <div className="absolute top-8 left-8 px-3 py-1 rounded-lg bg-dark-bg/80 border border-dark-border text-xs font-mono font-bold text-neon-green">
              GARANTIA DE 2 ANOS
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="glass-panel p-2 rounded-xl border border-dark-border">
              <img src="/assets/yluma_ergonomics.webp" alt="Grip Ergonomia" className="w-full h-24 object-cover rounded-lg" />
            </div>
            <div className="glass-panel p-2 rounded-xl border border-dark-border">
              <img src="/assets/yluma_haptics.webp" alt="Gatilhos Adaptativos" className="w-full h-24 object-cover rounded-lg" />
            </div>
            <div className="glass-panel p-2 rounded-xl border border-dark-border">
              <img src="/assets/yluma_battery.webp" alt="Base Magnética RGB" className="w-full h-24 object-cover rounded-lg" />
            </div>
          </div>

          {/* ACCESSORIES ADD-ONS BUNDLE */}
          <div className="glass-panel p-6 rounded-3xl border border-dark-border space-y-4">
            <h3 className="font-display font-bold text-lg text-white">MONTE SEU BUNDLE GAMER (ACESSÓRIOS COM DESCONTO)</h3>
            <div className="space-y-3">
              {addonsList.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      isSelected ? 'border-neon-green bg-neon-green/10 text-white' : 'border-dark-border bg-dark-card text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded flex items-center justify-center border ${isSelected ? 'bg-neon-green border-neon-green text-black' : 'border-gray-600'}`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-semibold">{addon.name}</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-neon-green">+ R$ {addon.price.toFixed(2).replace('.', ',')}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* BUY BOX & OPTIONS */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-dark-border space-y-6">
          
          <div className="flex items-center justify-between border-b border-dark-border pb-4">
            <div>
              <h2 className="font-display font-bold text-2xl text-white">Yluma Pro Ultimate</h2>
              <div className="flex items-center gap-1 text-xs text-neon-green mt-1 font-semibold">
                <Star className="w-3.5 h-3.5 fill-neon-green" />
                <span>4.98 (1.420 avaliações de pro gamers)</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded bg-neon-green/20 text-neon-green text-xs font-mono font-bold">
              EM ESTOQUE
            </span>
          </div>

          {/* PRICE SECTION */}
          <div className="space-y-1">
            <div className="text-xs text-gray-400 font-mono">PREÇO TOTAL (COM DESCONTO PIX):</div>
            <div className="flex items-baseline gap-3">
              <span className="font-display font-black text-3xl sm:text-4xl text-neon-green">
                R$ {pixPrice.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-xs font-mono text-gray-400">no PIX (-15% OFF)</span>
            </div>
            <div className="text-xs text-gray-400">
              Ou em até <strong className="text-white">12x de R$ {(subtotal / 12).toFixed(2).replace('.', ',')}</strong> no cartão
            </div>
          </div>

          {/* INSTANT COLOR TOGGLE BUTTON */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono text-gray-300">
              <span>EDIÇÃO LED SELECIONADA:</span>
              <button onClick={toggleTheme} className="text-neon-green hover:underline">
                ⚡ Alternar Cor ({selectedTheme === 'green' ? 'Verde' : 'Laranja'})
              </button>
            </div>
            <button
              onClick={toggleTheme}
              className={`w-full p-3.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold font-mono transition-all ${
                selectedTheme === 'green' ? 'border-neon-green bg-neon-green/10 text-neon-green shadow-glow-green' : 'border-neon-orange bg-neon-orange/10 text-neon-orange shadow-glow-orange'
              }`}
            >
              <span className={`w-3 h-3 rounded-full ${selectedTheme === 'green' ? 'bg-neon-green' : 'bg-neon-orange'}`}></span>
              <span>{selectedTheme === 'green' ? 'Edição Cyber Neon Emerald RGB' : 'Edição Volcanic Electric Orange RGB'}</span>
            </button>
          </div>

          {/* SHIPPING CALCULATOR */}
          <form onSubmit={handleCalcShipping} className="space-y-2 pt-2">
            <label className="block text-xs font-mono uppercase text-gray-300">Calcular Prazo de Entrega (CEP):</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="Ex: 01001-000"
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-dark-bg border border-dark-border text-xs text-white focus:outline-none focus:border-neon-green font-mono"
              />
              <button type="submit" className="px-4 py-2.5 bg-dark-card border border-dark-border text-xs font-bold text-white rounded-xl">
                Calcular
              </button>
            </div>
            {shippingCalculated && (
              <div className="p-3 rounded-xl bg-neon-green/10 border border-neon-green/30 text-xs font-semibold text-neon-green flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span>Frete Express GRÁTIS! Entrega estimada em 2 a 4 dias úteis.</span>
              </div>
            )}
          </form>

          {/* BUY NOW BUTTON */}
          <button
            onClick={onOpenBuyModal}
            className={`w-full py-4 rounded-xl font-display font-black text-base uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 ${themeBgClass}`}
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Finalizar Compra Segura</span>
          </button>

          <div className="flex items-center justify-center gap-4 text-[11px] text-gray-400 pt-2 border-t border-dark-border">
            <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-neon-green" /> Pagamento 100% Seguro</span>
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-neon-green" /> Devolução em 30 Dias</span>
          </div>

        </div>

      </div>

    </div>
  );
}
