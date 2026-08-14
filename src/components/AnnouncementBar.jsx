import React from 'react';

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-dark-surface via-dark-card to-dark-surface border-b border-dark-border py-2 px-4 text-xs font-semibold text-center flex items-center justify-center gap-2">
      <span className="inline-flex items-center gap-1 text-neon-green">
        <span className="w-2 h-2 rounded-full bg-neon-green animate-ping"></span>
        EDITION LAUNCH:
      </span>
      <span className="text-gray-300">Frete Grátis para todo o Brasil + 2 Anos de Garantia Elite</span>
      <span className="hidden md:inline text-gray-500">|</span>
      <span className="hidden md:inline text-neon-orange font-mono">14 unidades restantes nesta remessa</span>
    </div>
  );
}
