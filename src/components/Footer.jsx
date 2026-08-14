import React from 'react';
import { Lock } from 'lucide-react';

export default function Footer({ selectedTheme, setCurrentPage }) {
  return (
    <footer className="bg-dark-surface border-t border-dark-border py-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm ${selectedTheme === 'green' ? 'bg-neon-green text-black' : 'bg-neon-orange text-black'}`}>
              Y
            </div>
            <span className="font-display font-black text-xl text-white">YLUMA</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Engenharia de precisão para esports. Criado para gamers exigentes que buscam a vitória em alto nível.
          </p>
          <div className="text-gray-500 font-mono text-[11px] pt-2">
            &copy; {new Date().getFullYear()} Yluma Tech Inc. Todos os direitos reservados.
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase text-xs font-mono mb-3">Páginas</h4>
          <ul className="space-y-2">
            <li><button onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }} className="hover:text-white">Início</button></li>
            <li><button onClick={() => { setCurrentPage('features'); window.scrollTo(0,0); }} className="hover:text-white">Funcionalidades</button></li>
            <li><button onClick={() => { setCurrentPage('specs'); window.scrollTo(0,0); }} className="hover:text-white">Especificações</button></li>
            <li><button onClick={() => { setCurrentPage('reviews'); window.scrollTo(0,0); }} className="hover:text-white">Pro Players</button></li>
            <li><button onClick={() => { setCurrentPage('buy'); window.scrollTo(0,0); }} className="hover:text-white">Loja Oficial</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase text-xs font-mono mb-3">Suporte & Legal</h4>
          <ul className="space-y-2">
            <li><button onClick={() => { setCurrentPage('faq'); window.scrollTo(0,0); }} className="hover:text-white">Central de Ajuda & FAQ</button></li>
            <li><a href="#" className="hover:text-white">Política de Garantia (2 Anos)</a></li>
            <li><a href="#" className="hover:text-white">Rastrear Pedido</a></li>
            <li><a href="#" className="hover:text-white">Termos de Serviço</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase text-xs font-mono mb-3">Pagamento Seguro</h4>
          <div className="flex flex-wrap gap-2 text-gray-300 font-bold">
            <span className="px-2.5 py-1 rounded bg-dark-card border border-dark-border">PIX (-15%)</span>
            <span className="px-2.5 py-1 rounded bg-dark-card border border-dark-border">Cartão 12x</span>
            <span className="px-2.5 py-1 rounded bg-dark-card border border-dark-border">Boleto</span>
          </div>
          <div className="flex items-center gap-2 text-neon-green text-[11px] mt-4">
            <Lock className="w-4 h-4" />
            <span>Ambiente Protegido SSL 256-Bit</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
