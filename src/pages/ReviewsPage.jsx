import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewsPage({ onOpenBuyModal }) {
  return (
    <section id="reviews" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-neon-green uppercase tracking-widest">APROVADO NA ARENA COMPETITIVA</span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white mt-2">
            TESTADO POR QUEM VIVE DO ESPORT
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-panel p-8 rounded-2xl border border-dark-border flex flex-col justify-between gap-6 relative">
            <div className="flex items-center gap-1 text-neon-orange">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-neon-orange text-neon-orange" />)}
            </div>
            <p className="text-gray-300 text-sm italic leading-relaxed">
              "A resposta do gatilho no modo Hair Trigger é absurda. Ganhei milissegundos preciosos nas trocas de tiro do Warzone. O Yluma virou meu controle principal de campeonato."
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-dark-border">
              <div className="w-12 h-12 rounded-full bg-neon-green/20 border border-neon-green/40 flex items-center justify-center font-bold text-neon-green font-display">
                VR
              </div>
              <div>
                <div className="font-bold text-white text-sm">Victor 'Vortex' Rocha</div>
                <div className="text-xs text-gray-400">Pro Player de FPS (Top 3 BR)</div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-dark-border flex flex-col justify-between gap-6 relative">
            <div className="flex items-center gap-1 text-neon-green">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-neon-green text-neon-green" />)}
            </div>
            <p className="text-gray-300 text-sm italic leading-relaxed">
              "Já perdi mais de 4 controles comuns por causa de drift em analógicos. O sensor Hall Effect do Yluma continua 100% cravado no zero após 6 meses de uso diário pesado em live."
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-dark-border">
              <div className="w-12 h-12 rounded-full bg-neon-orange/20 border border-neon-orange/40 flex items-center justify-center font-bold text-neon-orange font-display">
                LN
              </div>
              <div>
                <div className="font-bold text-white text-sm">Lucas 'N3on' Mendes</div>
                <div className="text-xs text-gray-400">Streamer & Criador de Conteúdo</div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-dark-border flex flex-col justify-between gap-6 relative">
            <div className="flex items-center gap-1 text-neon-green">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-neon-green text-neon-green" />)}
            </div>
            <p className="text-gray-300 text-sm italic leading-relaxed">
              "A bateria realmente dura 40 horas! Passo a semana inteira treinando sem precisar plugar o cabo. A pegada emborrachada faz toda a diferença para quem transpire nas mãos."
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-dark-border">
              <div className="w-12 h-12 rounded-full bg-neon-green/20 border border-neon-green/40 flex items-center justify-center font-bold text-neon-green font-display">
                CR
              </div>
              <div>
                <div className="font-bold text-white text-sm">Camila 'Raven' Silva</div>
                <div className="text-xs text-gray-400">Campeã Sul-Americana de Fighting Games</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
