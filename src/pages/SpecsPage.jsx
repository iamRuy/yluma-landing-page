import React from 'react';
import { Sliders, Activity, HardDrive, Check } from 'lucide-react';

export default function SpecsPage({ onOpenBuyModal }) {
  return (
    <section id="specs" className="py-20 bg-dark-surface border-y border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-mono font-bold text-neon-orange uppercase tracking-widest">ENGENHARIA E HARDWARE</span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-white">
              CADA MILÍMETRO CONSTRUÍDO PARA A VITÓRIA
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Livre-se de desculpas de lag e desvio de analógicos. O Yluma utiliza componentes de nível profissional que resistem aos torneios mais intensos do planeta.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-dark-card border border-dark-border flex items-start gap-4">
                <div className="p-2 rounded-lg bg-neon-green/10 text-neon-green">
                  <Sliders className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Sensoriais Hall Effect Anti-Drift</h4>
                  <p className="text-xs text-gray-400">Sensores magnéticos de efeito Hall que eliminam o desgaste por contato físico. 0% de drift garantia perpétua.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-dark-card border border-dark-border flex items-start gap-4">
                <div className="p-2 rounded-lg bg-neon-orange/10 text-neon-orange">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Processador Ultra-Low Latency 1ms</h4>
                  <p className="text-xs text-gray-400">Chipset dedicado de 32-bits que processa comandos em menos de 1 milissegundo de latência via receptor 2.4GHz ou cabo.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-dark-card border border-dark-border flex items-start gap-4">
                <div className="p-2 rounded-lg bg-neon-green/10 text-neon-green">
                  <HardDrive className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Memória Onboard para 5 Perfis</h4>
                  <p className="text-xs text-gray-400">Grave suas macros, zonas mortas e curvas de sensibilidade direto na memória interna do controle sem depender de softwares.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SPECS GRID TABLE */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-dark-border">
            <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center justify-between">
              <span>ESPECIFICAÇÕES TÉCNICAS OFICIAIS</span>
              <span className="text-xs font-mono text-neon-green font-normal">MODELO: YL-PRO-2026</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-dark-bg/60 border border-dark-border/80">
                <div className="text-xs text-gray-400 font-mono">CONECTIVIDADE</div>
                <div className="font-bold text-white mt-1">Wireless 2.4GHz, Bluetooth 5.3 & USB-C</div>
              </div>

              <div className="p-4 rounded-xl bg-dark-bg/60 border border-dark-border/80">
                <div className="text-xs text-gray-400 font-mono">POLLING RATE</div>
                <div className="font-bold text-neon-green mt-1">1000Hz (Cabo) / 500Hz (Wireless)</div>
              </div>

              <div className="p-4 rounded-xl bg-dark-bg/60 border border-dark-border/80">
                <div className="text-xs text-gray-400 font-mono">TECNOLOGIA DOS ANALÓGICOS</div>
                <div className="font-bold text-white mt-1">K-Silver Hall Effect 3D Joysticks</div>
              </div>

              <div className="p-4 rounded-xl bg-dark-bg/60 border border-dark-border/80">
                <div className="text-xs text-gray-400 font-mono">D-PAD & BOTÕES MENTAIS</div>
                <div className="font-bold text-white mt-1">Micro-Switches Mecânicos Tactile</div>
              </div>

              <div className="p-4 rounded-xl bg-dark-bg/60 border border-dark-border/80">
                <div className="text-xs text-gray-400 font-mono">BATERIA</div>
                <div className="font-bold text-neon-orange mt-1">1500mAh (Até 40h de Autonomia)</div>
              </div>

              <div className="p-4 rounded-xl bg-dark-bg/60 border border-dark-border/80">
                <div className="text-xs text-gray-400 font-mono">PESO TOTAL</div>
                <div className="font-bold text-white mt-1">245g (Ajustável com pesos de 10g)</div>
              </div>
            </div>

            {/* INCLUDED ITEMS */}
            <div className="mt-6 pt-6 border-t border-dark-border/80">
              <div className="text-xs font-mono font-bold text-gray-400 uppercase mb-3">O QUE VEM NA CAIXA:</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-300">
                <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-neon-green" /> 1x Controle Yluma Pro</div>
                <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-neon-green" /> 1x Base de Carga RGB</div>
                <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-neon-green" /> 4x Thumbsticks extras</div>
                <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-neon-green" /> 1x Cabo USB-C 3m</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
