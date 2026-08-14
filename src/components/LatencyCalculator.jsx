import React, { useState } from 'react';
import { Zap, Clock, Tv, Monitor, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function LatencyCalculator() {
  const [displayHz, setDisplayHz] = useState(144);
  const [connectionType, setConnectionType] = useState('usb1000'); // usb1000 | bluetooth | basic250

  const connectionSpeeds = {
    usb1000: { name: 'Yluma USB-C 1000Hz (Nativo)', latency: 1.0, icon: '⚡' },
    bluetooth: { name: 'Yluma Wireless 2.4GHz RF', latency: 2.0, icon: '📡' },
    basic250: { name: 'Controle Comum Bluetooth (125Hz-250Hz)', latency: 14.5, icon: '⚠️' },
  };

  const displayLag = 1000 / displayHz;
  const currentConn = connectionSpeeds[connectionType];
  const totalInputLag = displayLag + currentConn.latency;

  const framesSaved60fps = Math.round((14.5 - currentConn.latency) / (1000 / 60) * 10) / 10;

  return (
    <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-dark-border space-y-8">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-dark-border">
        <div>
          <span className="text-xs font-mono font-bold text-neon-green uppercase tracking-widest flex items-center gap-1.5">
            <Zap className="w-4 h-4" />
            SIMULADOR DE VANTAGEM COMPETITIVA
          </span>
          <h3 className="font-display font-bold text-2xl text-white mt-1">CALCULADORA DE LATÊNCIA & INPUT LAG</h3>
        </div>
        <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-dark-card border border-dark-border text-neon-green">
          ALGORITMO DE MEDIÇÃO 1000HZ
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* INPUT CONTROLS */}
        <div className="lg:col-span-6 space-y-6">
          
          <div>
            <label className="block text-xs font-mono uppercase text-gray-300 mb-2">Taxa de Atualização do seu Monitor/TV:</label>
            <div className="grid grid-cols-4 gap-2">
              {[60, 120, 144, 240].map((hz) => (
                <button
                  key={hz}
                  onClick={() => setDisplayHz(hz)}
                  className={`p-3 rounded-xl border text-xs font-bold font-mono transition-all ${
                    displayHz === hz 
                      ? 'border-neon-green bg-neon-green/20 text-neon-green shadow-glow-green' 
                      : 'border-dark-border bg-dark-card text-gray-400'
                  }`}
                >
                  {hz}Hz
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-gray-300 mb-2">Modo de Conexão do Controle:</label>
            <div className="space-y-2">
              {Object.keys(connectionSpeeds).map((key) => (
                <button
                  key={key}
                  onClick={() => setConnectionType(key)}
                  className={`w-full p-3.5 rounded-xl border text-xs font-bold flex items-center justify-between transition-all ${
                    connectionType === key 
                      ? 'border-neon-green bg-neon-green/10 text-white' 
                      : 'border-dark-border bg-dark-card text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{connectionSpeeds[key].icon}</span>
                    <span>{connectionSpeeds[key].name}</span>
                  </span>
                  <span className="font-mono text-neon-green">{connectionSpeeds[key].latency}ms</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* RESULTS CARD */}
        <div className="lg:col-span-6 p-8 rounded-2xl bg-dark-bg border border-dark-border space-y-6 text-center">
          <div className="text-xs text-gray-400 font-mono">LATÊNCIA TOTAL DE PROCESSAMENTO + TELA:</div>
          
          <div className="font-display font-black text-5xl text-neon-green">
            {totalInputLag.toFixed(2)} <span className="text-xl text-gray-400 font-normal">ms</span>
          </div>

          <div className="p-4 rounded-xl bg-dark-card border border-dark-border text-xs text-gray-300 space-y-2">
            <div className="flex justify-between">
              <span>Atraso de Transmissão do Controle:</span>
              <span className="font-mono font-bold text-neon-green">{currentConn.latency}ms</span>
            </div>
            <div className="flex justify-between">
              <span>Atraso do Quadro de Imagem ({displayHz}Hz):</span>
              <span className="font-mono font-bold text-white">{displayLag.toFixed(2)}ms</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-neon-green/10 border border-neon-green/30 text-xs font-bold text-neon-green">
            ⚡ Vantagem Yluma: Você ganha {framesSaved60fps} quadro(s) de antecipação em relação a controles normais!
          </div>
        </div>

      </div>

    </div>
  );
}
