import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, ShieldCheck, Truck, Tag } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, selectedTheme, cartItems, setCartItems, onOpenCheckout }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = discountApplied ? subtotal * 0.10 : 0;
  const totalPrice = subtotal - discountAmount;
  const pixPrice = totalPrice * 0.85;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'YLUMAPRO' || promoCode.trim().toUpperCase() === 'GAMER10') {
      setDiscountApplied(true);
    } else {
      alert('Cupom inválido. Tente "YLUMAPRO" para 10% OFF extra!');
    }
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-dark-surface border-l border-dark-border shadow-2xl flex flex-col justify-between">
          
          {/* HEADER */}
          <div className="p-6 border-b border-dark-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold ${selectedTheme === 'green' ? 'bg-neon-green text-black' : 'bg-neon-orange text-black'}`}>
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">SEU CARRINHO GAMER</h3>
                <p className="text-xs text-gray-400">{cartItems.length} item(ns) selecionados</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg bg-dark-card border border-dark-border text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* FREE SHIPPING PROGRESS */}
          <div className="bg-dark-card p-3 px-6 border-b border-dark-border text-xs flex items-center gap-2 text-neon-green font-semibold">
            <Truck className="w-4 h-4 flex-shrink-0" />
            <span>Parabéns! Você ganhou **FRETE GRÁTIS EXPRESS** para todo o Brasil!</span>
          </div>

          {/* ITEMS LIST */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 text-gray-400 space-y-3">
                <ShoppingBag className="w-12 h-12 mx-auto text-gray-600" />
                <p className="text-sm font-medium">Seu carrinho está vazio.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="glass-panel p-4 rounded-2xl border border-dark-border flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl border border-dark-border" />
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-400 font-mono">{item.variant}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-dark-card border border-dark-border rounded-lg px-2 py-0.5 text-xs">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-white font-bold px-1">-</button>
                        <span className="text-white font-mono font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-400 hover:text-white font-bold px-1">+</button>
                      </div>
                      <span className="font-mono font-bold text-neon-green text-sm">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="p-2 text-gray-500 hover:text-red-400">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}

            {/* PROMO CODE FORM */}
            <form onSubmit={handleApplyPromo} className="pt-2">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 absolute left-3 top-3 text-gray-500" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Cupom de desconto (ex: YLUMAPRO)"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-dark-bg border border-dark-border text-white focus:outline-none focus:border-neon-green"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-dark-card border border-dark-border hover:bg-dark-hover text-xs font-bold text-white rounded-xl"
                >
                  Aplicar
                </button>
              </div>
              {discountApplied && (
                <p className="text-[11px] text-neon-green mt-1.5 font-semibold">✓ Cupom 'YLUMAPRO' aplicado (10% OFF extra)!</p>
              )}
            </form>
          </div>

          {/* FOOTER & CHECKOUT */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-dark-border bg-dark-card/50 space-y-4">
              <div className="space-y-1.5 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono text-white">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-neon-green">
                    <span>Desconto Cupom (10%):</span>
                    <span className="font-mono">- R$ {discountAmount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                <div className="flex justify-between text-neon-green font-semibold">
                  <span>Frete Express:</span>
                  <span>GRÁTIS</span>
                </div>
                <div className="pt-2 border-t border-dark-border flex justify-between items-center text-sm">
                  <span className="font-bold text-white">Total no PIX (-15%):</span>
                  <span className="font-display font-black text-xl text-neon-green font-mono">
                    R$ {pixPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className={`w-full py-4 rounded-xl font-display font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 ${
                  selectedTheme === 'green' ? 'bg-neon-green text-black hover:bg-neon-green/90 shadow-glow-green' : 'bg-neon-orange text-black hover:bg-neon-orange/90 shadow-glow-orange'
                }`}
              >
                <span>Finalizar Pedido</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
