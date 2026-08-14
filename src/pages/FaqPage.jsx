import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqPage({ onOpenBuyModal }) {
  return (
    <section id="faq" className="py-20 bg-dark-surface border-t border-dark-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <h1 className="font-display font-black text-3xl sm:text-4xl text-white">PERGUNTAS FREQUENTES</h1>
          <p className="text-gray-400 text-sm mt-2">Tudo o que você precisa saber antes de adquirir seu Yluma</p>
        </div>

        <div className="space-y-4">
          
          <details className="glass-panel rounded-xl border border-dark-border p-5 group cursor-pointer">
            <summary className="font-bold text-white text-base flex justify-between items-center list-none">
              <span>O controle Yluma funciona no meu console ou PC?</span>
              <ChevronDown className="w-5 h-5 text-neon-green group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Sim! O Yluma possui suporte nativo plug & play para PC (Windows 10/11, Steam), PlayStation 5, PS4, Xbox Series X|S, Xbox One, Nintendo Switch, bem como dispositivos móveis (Android e iOS).
            </p>
          </details>

          <details className="glass-panel rounded-xl border border-dark-border p-5 group cursor-pointer">
            <summary className="font-bold text-white text-base flex justify-between items-center list-none">
              <span>O que é a tecnologia de analógicos Hall Effect?</span>
              <ChevronDown className="w-5 h-5 text-neon-green group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Diferente dos controles tradicionais que usam potenciômetros físicos sujeitos a desgaste mecânico (causando o famoso "drift"), os analógicos Hall Effect utilizam sensores eletromagnéticos. Isso garante precisão milimétrica e zero drift para sempre.
            </p>
          </details>

          <details className="glass-panel rounded-xl border border-dark-border p-5 group cursor-pointer">
            <summary className="font-bold text-white text-base flex justify-between items-center list-none">
              <span>Qual é o prazo de entrega e garantia?</span>
              <ChevronDown className="w-5 h-5 text-neon-green group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Enviamos com Frete Grátis Express para todo o Brasil. O prazo médio de entrega é de 2 a 5 dias úteis. Oferecemos 2 Anos de Garantia Oficial do Fabricante com troca direta sem burocracia.
            </p>
          </details>

          <details className="glass-panel rounded-xl border border-dark-border p-5 group cursor-pointer">
            <summary className="font-bold text-white text-base flex justify-between items-center list-none">
              <span>Como funciona o remapeamento das pás traseiras?</span>
              <ChevronDown className="w-5 h-5 text-neon-green group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              O remapeamento é instantâneo e feito direto no próprio controle através do botão dedicado 'Profile'. Você não precisa instalar nenhum software pesado no seu PC ou videogame.
            </p>
          </details>

        </div>

      </div>
    </section>
  );
}
