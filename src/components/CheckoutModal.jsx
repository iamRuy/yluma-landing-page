import React, { useState } from 'react';
import { X, ShieldCheck, Shield } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, selectedTheme, setSelectedTheme }) {
  const [cartCount, setCartCount] = useState(1);

  if (!isOpen) return null;

  const themeBgClass = selectedTheme === 'green' 
    ? 'bg-neon-green text-black hover:bg-neon-green/90 shadow-glow-green' 
    : 'bg-neon-orange text-black hover:bg-neon-orange/90 shadow-glow-orange';

  const basePrice = 599.00;
  const totalPrice = basePrice * cartCount;
  const pixPrice = totalPrice * 0.85;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-dark-surface border border-dark-border rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-dark-card border border-dark-border text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* MODAL HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-lg ${selectedTheme === 'green' ? 'bg-neon-green text-black' : 'bg-neon-orange text-black'}`}>
            Y
          </div>
          <div>
            <h3 className="font-display font-black text-xl text-white">CHECKOUT OFICIAL YLUMA PRO</h3>
            <p className="text-xs text-gray-400">Finalize seu pedido com Frete Grátis e 2 Anos de Garantia</p>
          </div>
        </div>

        {/* PRODUCT SUMMARY CARD */}
        <div className="glass-panel rounded-2xl p-4 border border-dark-border mb-6 flex items-center gap-4">
          <img 
            src="assets/yluma_hero.webp" 
            alt="Yluma Controller" 
            className="w-20 h-20 object-cover rounded-xl border border-dark-border"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-base">Controle Yluma Pro Ultimate</span>
              <span className="font-mono font-bold text-neon-green text-lg">R$ {basePrice.toFixed(2).replace('.', ',')}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Edição: <strong className="text-white">{selectedTheme === 'green' ? 'Cyber Neon Emerald' : 'Volcanic Electric Orange'}</strong>
            </p>

            {/* QUANTITY CONTROL */}
            <div className="flex items-center gap-3 mt-3">
              <span className="text-xs text-gray-400">Quantidade:</span>
              <div className="flex items-center gap-2 bg-dark-card border border-dark-border rounded-lg px-2 py-1 text-xs">
                <button 
                  onClick={() => setCartCount(Math.max(1, cartCount - 1))}
                  className="px-2 font-bold text-gray-400 hover:text-white"
                >-</button>
                <span className="font-mono text-white font-bold">{cartCount}</span>
                <button 
                  onClick={() => setCartCount(cartCount + 1)}
                  className="px-2 font-bold text-gray-400 hover:text-white"
                >+</button>
              </div>
            </div>
          </div>
        </div>

        {/* COLOR SELECTION SWITCHER IN MODAL */}
        <div className="mb-6">
          <label className="block text-xs font-mono uppercase text-gray-400 mb-2">Escolha a cor do acabamento LED:</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSelectedTheme('green')}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${selectedTheme === 'green' ? 'border-neon-green bg-neon-green/10 text-neon-green shadow-glow-green' : 'border-dark-border bg-dark-card text-gray-400'}`}
            >
              <span className="w-3 h-3 rounded-full bg-neon-green"></span>
              Cyber Green
            </button>
            <button
              type="button"
              onClick={() => setSelectedTheme('orange')}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${selectedTheme === 'orange' ? 'border-neon-orange bg-neon-orange/10 text-neon-orange shadow-glow-orange' : 'border-dark-border bg-dark-card text-gray-400'}`}
            >
              <span className="w-3 h-3 rounded-full bg-neon-orange"></span>
              Neon Orange
            </button>
          </div>
        </div>

        {/* FORM FIELDS */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Nome Completo</label>
            <input 
              type="text" 
              placeholder="Ex: Gabriel Toledo" 
              className="w-full px-4 py-2.5 rounded-xl bg-dark-bg border border-dark-border text-white text-sm focus:outline-none focus:border-neon-green"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">E-mail</label>
              <input 
                type="email" 
                placeholder="seu.email@gamer.com" 
                className="w-full px-4 py-2.5 rounded-xl bg-dark-bg border border-dark-border text-white text-sm focus:outline-none focus:border-neon-green"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">CEP para entrega</label>
              <input 
                type="text" 
                placeholder="00000-000" 
                className="w-full px-4 py-2.5 rounded-xl bg-dark-bg border border-dark-border text-white text-sm focus:outline-none focus:border-neon-green"
              />
            </div>
          </div>
        </div>

        {/* TOTAL PRICE CALCULATION */}
        <div className="p-4 rounded-xl bg-dark-card border border-dark-border mb-6 space-y-2 text-xs">
          <div className="flex justify-between text-gray-400">
            <span>Subtotal ({cartCount}x):</span>
            <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="flex justify-between text-neon-green font-semibold">
            <span>Frete Express:</span>
            <span>GRÁTIS</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Desconto PIX (15%):</span>
            <span>- R$ {(totalPrice * 0.15).toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="pt-2 border-t border-dark-border flex justify-between items-center text-sm">
            <span className="font-bold text-white">Total no PIX:</span>
            <span className="font-display font-black text-xl text-neon-green">
              R$ {pixPrice.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>

        {/* SUBMIT ORDER BUTTON */}
        <button
          onClick={() => {
            alert('🎉 Pedido demonstrativo realizado com sucesso! O Yluma Pro será enviado para seu endereço.');
            onClose();
          }}
          className={`w-full py-4 rounded-xl font-display font-black text-base uppercase tracking-wider transition-all duration-300 shadow-xl ${themeBgClass}`}
        >
          Concluir Compra Segura
        </button>

        <p className="text-[11px] text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
          <Shield className="w-3.5 h-3.5 text-neon-green" />
          Garantia incondicional de devolução em 30 dias.
        </p>

      </div>
    </div>
  );
}
