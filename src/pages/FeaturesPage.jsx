import React from 'react';
import { Hand, Zap, BatteryCharging, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FeaturesPage({ onOpenBuyModal }) {
  return (
    <div className="py-24 relative bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-neon-green">
            TECNOLOGIA DE PONTA PARA PRO GAMERS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            DOMINE CADA PARTIDA COM ENGENHARIA DE PRECISÃO
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Desenvolvido em colaboração com atletas profissionais de eSports para entregar tempo de reação zero, conforto absoluto e durabilidade extrema.
          </p>
        </div>

        {/* THE 3 CORE MANDATORY FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* FEATURE 1: ERGONOMIA AVANÇADA */}
          <div className="glass-panel rounded-2xl overflow-hidden border border-dark-border hover:border-neon-green/40 transition-all duration-300 group flex flex-col justify-between">
            <div className="p-8 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center text-neon-green mb-2 group-hover:scale-110 transition-transform">
                <Hand className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-semibold text-neon-green uppercase tracking-wider">01. CONFORTO DE LONGA DURAÇÃO</span>
              <h2 className="font-display font-bold text-2xl text-white group-hover:text-neon-green transition-colors">
                Ergonomia Avançada
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Grip emborrachado com microtextura 3D antissuor de padrão militar. Design anatomicamente balanceado que reduz a fadiga muscular nos punhos durante maratonas competitivas de mais de 10 horas.
              </p>
              
              <ul className="text-xs text-gray-300 space-y-2 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green flex-shrink-0" />
                  <span>Empunhadura antideslizante de alta aderência</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green flex-shrink-0" />
                  <span>4 Pás Traseiras Programáveis (Remapeamento Instantâneo)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green flex-shrink-0" />
                  <span>Distribuição de peso ajustável com travas internas</span>
                </li>
              </ul>
            </div>

            <div className="relative h-56 overflow-hidden border-t border-dark-border">
              <img 
                src="/assets/yluma_ergonomics.webp" 
                alt="Ergonomia Avançada Yluma" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
            </div>
          </div>

          {/* FEATURE 2: RESPOSTA TÁTIL ADAPTATIVA */}
          <div className="glass-panel rounded-2xl overflow-hidden border border-dark-border hover:border-neon-orange/40 transition-all duration-300 group flex flex-col justify-between">
            <div className="p-8 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-neon-orange/10 border border-neon-orange/30 flex items-center justify-center text-neon-orange mb-2 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-semibold text-neon-orange uppercase tracking-wider">02. SENSAÇÃO ULTRA-REALISTA</span>
              <h2 className="font-display font-bold text-2xl text-white group-hover:text-neon-orange transition-colors">
                Resposta Tátil Adaptativa
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Gatilhos dinâmicos com motores de força magnética ajustáveis. Sinta a tensão de um arco tensionado, o coice realista de armas em FPS ou a aderência dos pneus em curvas de velocidade.
              </p>
              
              <ul className="text-xs text-gray-300 space-y-2 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-orange flex-shrink-0" />
                  <span>Travas de gatilho de 3 estágios (Hair Trigger para FPS)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-orange flex-shrink-0" />
                  <span>Motores hápticos duplos de frequência personalizável</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-orange flex-shrink-0" />
                  <span>Switches mecânicos Omron com ciclo de 80M de cliques</span>
                </li>
              </ul>
            </div>

            <div className="relative h-56 overflow-hidden border-t border-dark-border">
              <img 
                src="/assets/yluma_haptics.webp" 
                alt="Resposta Tátil Adaptativa Yluma" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
            </div>
          </div>

          {/* FEATURE 3: BATERIA DE LONGA DURAÇÃO */}
          <div className="glass-panel rounded-2xl overflow-hidden border border-dark-border hover:border-neon-green/40 transition-all duration-300 group flex flex-col justify-between">
            <div className="p-8 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center text-neon-green mb-2 group-hover:scale-110 transition-transform">
                <BatteryCharging className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-semibold text-neon-green uppercase tracking-wider">03. AUTONOMIA IMBATÍVEL</span>
              <h2 className="font-display font-bold text-2xl text-white group-hover:text-neon-green transition-colors">
                Bateria de Longa Duração
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Célula de íon-lítio de alta densidade com capacidade para até 40 horas ininterruptas de gameplay. Sistema Fast Charge USB-C que recarrega 80% em apenas 25 minutos.
              </p>
              
              <ul className="text-xs text-gray-300 space-y-2 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green flex-shrink-0" />
                  <span>40 horas com iluminação RGB ativada</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green flex-shrink-0" />
                  <span>Base Magnética de Carregamento Rápido inclusa</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green flex-shrink-0" />
                  <span>Modo Híbrido: Jogue sem fio ou via cabo trançado de 3m</span>
                </li>
              </ul>
            </div>

            <div className="relative h-56 overflow-hidden border-t border-dark-border">
              <img 
                src="/assets/yluma_battery.webp" 
                alt="Bateria de Longa Duração Yluma" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
            </div>
          </div>

        </div>

        <div className="text-center pt-16">
          <button
            onClick={onOpenBuyModal}
            className="px-10 py-5 rounded-2xl font-display font-black text-lg uppercase tracking-wider bg-neon-green text-black hover:bg-neon-green/90 shadow-glow-green inline-flex items-center gap-3 transition-transform hover:scale-105"
          >
            <span>Garantir Meu Yluma Agora</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>
  );
}
