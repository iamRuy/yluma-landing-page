import React, { useState } from 'react';
import { Cpu, Sliders, Zap, BatteryCharging, Shield, Check } from 'lucide-react';

export default function AnatomySection() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      title: "Chassi Superior Polycarbonate Blend",
      tech: "Polímero militar com acabamento fosco antiderrapante",
      desc: "Tratamento UV contra desbotamento e suor. Botões frontais gravados a laser com iluminação RGB individual por tecla.",
      icon: Shield,
    },
    {
      title: "Analógicos Magnéticos K-Silver Hall Effect 3.0",
      tech: "Ímãs Neodímio N52 + Sensores de Efeito Hall 0.001mm",
      desc: "Sem nenhum contato físico entre peças. Elimina completamente o drift mecânico e oferece 10 milhões de rotações de durabilidade.",
      icon: Sliders,
    },
    {
      title: "Placa-Mãe PCB com Processador ARM Cortex-M4 120MHz",
      tech: "Chipset 32-bits dedicado com resposta em 1ms",
      desc: "Processa 1000 pacotes de comandos por segundo (1000Hz Polling Rate) com memória flash onboard para 5 perfis de remapeamento.",
      icon: Cpu,
    },
    {
      title: "Módulo HaptiSync & Gatilhos Magnéticos Traseiros",
      tech: "LRAs duplos de 180Hz-250Hz + Trava Mecânica 3 Estágios",
      desc: "Motores de força variável que alteram a firmeza dos gatilhos e travas Hair Trigger de 1mm para tiros ultrarrápidos em jogos de tiro.",
      icon: Zap,
    },
    {
      title: "Bateria Li-Ion High Density 1500mAh + Base RGB",
      tech: "Gestão inteligente de energia IC com proteção térmica",
      desc: "Até 40 horas contínuas de autonomia. Recarga magnética sem fio em 25 minutos com pinos de contato banhados a ouro 24k.",
      icon: BatteryCharging,
    }
  ];

  return (
    <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-dark-border space-y-8">
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-green">
          ANATOMIA DE ENGENHARIA
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
          DESMONTAGEM TÉCNICA DO YLUMA PRO
        </h2>
        <p className="text-gray-400 text-sm">
          Clique nas camadas internas para explorar a tecnologia de cada componente.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LAYER SELECTOR BUTTONS */}
        <div className="lg:col-span-5 space-y-3">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveLayer(idx)}
                className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                  activeLayer === idx 
                    ? 'border-neon-green bg-neon-green/10 text-white shadow-glow-green' 
                    : 'border-dark-border bg-dark-card text-gray-400 hover:text-white'
                }`}
              >
                <div className={`p-2.5 rounded-xl border ${activeLayer === idx ? 'bg-neon-green text-black border-neon-green' : 'bg-dark-bg border-dark-border text-neon-green'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-neon-green font-bold">CAMADA 0{idx + 1}</div>
                  <div className="font-bold text-sm text-white">{layer.title}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE LAYER DETAIL DISPLAY */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-dark-border space-y-6 relative overflow-hidden">
          
          <div className="flex items-center justify-between border-b border-dark-border pb-4">
            <span className="text-xs font-mono text-neon-green font-bold uppercase">
              CAMADA 0{activeLayer + 1} SELECIONADA
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded bg-dark-card border border-dark-border text-gray-300">
              GRADE MILITAR
            </span>
          </div>

          <h3 className="font-display font-bold text-2xl text-white">
            {layers[activeLayer].title}
          </h3>

          <div className="p-4 rounded-xl bg-dark-card border border-dark-border text-xs font-mono text-neon-green">
            TECNOLOGIA: {layers[activeLayer].tech}
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            {layers[activeLayer].desc}
          </p>

          <div className="pt-4 border-t border-dark-border flex items-center justify-between text-xs text-gray-400 font-mono">
            <span>TOLERÂNCIA: 0.001MM</span>
            <span>CERTIFICAÇÃO ESPORTS</span>
          </div>

        </div>

      </div>

    </div>
  );
}
