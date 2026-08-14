import React from 'react';
import { Check, X, ShieldCheck, ShoppingBag, ArrowRight } from 'lucide-react';

export default function ComparisonPage({ onOpenBuyModal }) {
  const comparisonData = [
    { feature: 'Sensores de Analógicos', yluma: 'Hall Effect (Zero Drift)', dualsense: 'Potenciômetro Físico', elite: 'Potenciômetro Físico', basic: 'Potenciômetro Físico' },
    { feature: 'Polling Rate (Latência)', yluma: '1000Hz (1ms)', dualsense: '250Hz - 500Hz', elite: '250Hz - 500Hz', basic: '125Hz - 250Hz' },
    { feature: 'Autonomia da Bateria', yluma: '40 Horas Contínuas', dualsense: '5 a 8 Horas', elite: '30 a 40 Horas', basic: '8 a 12 Horas' },
    { feature: 'Base Magnética RGB Inclusa', yluma: 'SIM (Grátis)', dualsense: 'NÃO', elite: 'NÃO (Vendido à parte)', basic: 'NÃO' },
    { feature: 'Trava Hair Trigger Mecânica', yluma: '3 Estágios Magnéticos', dualsense: '2 Estágios', elite: '3 Estágios', basic: 'NÃO' },
    { feature: 'Pás Traseiras Programáveis', yluma: '4 Pás Inoxidáveis', dualsense: '2 Pás', elite: '4 Pás', basic: 'NÃO' },
    { feature: 'Garantia Oficial sem burocracia', yluma: '2 Anos de Fábrica', dualsense: '1 Ano', elite: '1 Ano', basic: '3 Meses' },
    { feature: 'Switches dos Botões', yluma: 'Omron Mecânicos (80M)', dualsense: 'Membrana de Borracha', elite: 'Membrana de Borracha', basic: 'Membrana Simples' },
    { feature: 'Preço Médio no Brasil', yluma: 'R$ 509,15 (PIX)', dualsense: 'R$ 1.499,00', elite: 'R$ 1.299,00', basic: 'R$ 350,00' },
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-neon-orange">
          COMPARATIVO IMPARCIAL
        </span>
        <h1 className="font-display font-black text-4xl sm:text-6xl text-white">
          YLUMA PRO VS CONCORRENTES
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Veja por que o Yluma Pro entrega performance superior a uma fração do preço dos controles pro tradicionais.
        </p>
      </div>

      {/* COMPARISON TABLE CONTAINER */}
      <div className="glass-panel rounded-3xl overflow-x-auto border border-dark-border">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-dark-border bg-dark-card/80">
              <th className="p-5 font-display font-bold text-sm text-gray-300">Recurso / Especificação</th>
              <th className="p-5 font-display font-black text-base text-neon-green bg-neon-green/10 border-x border-neon-green/30 text-center">
                YLUMA PRO ULTIMATE
              </th>
              <th className="p-5 font-display font-bold text-xs text-gray-400 text-center">PS5 DualSense Edge</th>
              <th className="p-5 font-display font-bold text-xs text-gray-400 text-center">Xbox Elite Series 2</th>
              <th className="p-5 font-display font-bold text-xs text-gray-400 text-center">Controles Básicos</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-border text-xs sm:text-sm">
            {comparisonData.map((row, idx) => (
              <tr key={idx} className="hover:bg-dark-hover/50 transition-colors">
                <td className="p-5 font-semibold text-white">{row.feature}</td>
                <td className="p-5 font-bold text-neon-green bg-neon-green/5 border-x border-neon-green/20 text-center">
                  {row.yluma}
                </td>
                <td className="p-5 text-gray-300 text-center">{row.dualsense}</td>
                <td className="p-5 text-gray-300 text-center">{row.elite}</td>
                <td className="p-5 text-gray-400 text-center">{row.basic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FINAL VERDICT BOX */}
      <div className="glass-panel p-8 rounded-3xl border border-dark-border text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="font-display font-bold text-2xl text-white">VEREDITO: A ESCOLHA MAIS INTELIGENTE DO MERCADO GAMER</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Com o Yluma Pro você garante analógicos de Efeito Hall imunes a drift, polling rate de 1000Hz e bateria de 40 horas economizando mais de R$ 800 em relação aos concorrentes.
        </p>
        <button
          onClick={onOpenBuyModal}
          className="px-10 py-5 rounded-2xl font-display font-black text-base uppercase bg-neon-green text-black hover:bg-neon-green/90 shadow-glow-green inline-flex items-center gap-3"
        >
          <span>Garantir Meu Yluma Pro Agora</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
