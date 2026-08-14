import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';

import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import SpecsPage from './pages/SpecsPage';
import ReviewsPage from './pages/ReviewsPage';
import FaqPage from './pages/FaqPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'features' | 'specs' | 'reviews' | 'faq'
  const [selectedTheme, setSelectedTheme] = useState('green'); // 'green' | 'orange'
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            selectedTheme={selectedTheme} 
            setSelectedTheme={setSelectedTheme} 
            onOpenBuyModal={() => setIsModalOpen(true)} 
            setCurrentPage={setCurrentPage}
          />
        );
      case 'features':
        return <FeaturesPage onOpenBuyModal={() => setIsModalOpen(true)} />;
      case 'specs':
        return <SpecsPage onOpenBuyModal={() => setIsModalOpen(true)} />;
      case 'reviews':
        return <ReviewsPage onOpenBuyModal={() => setIsModalOpen(true)} />;
      case 'faq':
        return <FaqPage onOpenBuyModal={() => setIsModalOpen(true)} />;
      default:
        return (
          <HomePage 
            selectedTheme={selectedTheme} 
            setSelectedTheme={setSelectedTheme} 
            onOpenBuyModal={() => setIsModalOpen(true)} 
            setCurrentPage={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 flex flex-col relative selection:bg-neon-green selection:text-black">
      
      {/* TOP ANNOUNCEMENT BAR */}
      <AnnouncementBar />

      {/* NAVBAR WITH MULTI-PAGE ROUTING */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        onOpenBuyModal={() => setIsModalOpen(true)}
      />

      {/* ACTIVE PAGE CONTENT */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* FOOTER */}
      <Footer 
        selectedTheme={selectedTheme} 
        setCurrentPage={setCurrentPage}
      />

      {/* CHECKOUT MODAL */}
      <CheckoutModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      />

    </div>
  );
}
