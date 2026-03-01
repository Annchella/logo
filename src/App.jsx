// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SolutionsSection from './components/SolutionsSection';
import AboutUsSection from './components/AboutUsSection';
import PortfolioSection from './components/PortfolioSection';
import WorkflowSection from './components/WorkflowSection';
import ServicesWeProvideSection from './components/ServicesWeProvideSection';
import TeamSection from './components/TeamSection';
import CreativeAndReviewsSection from './components/CreativeAndReviewsSection';
import Footer from './components/Footer'; // Import the Footer component
import CoreServicesSection from './components/CoreServicesSection';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a1a1a] text-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <SolutionsSection />
              <AboutUsSection />
              <PortfolioSection />
              <WorkflowSection />
              <CoreServicesSection />
              <ServicesWeProvideSection />
              <TeamSection />
              <CreativeAndReviewsSection />
            </main>
          } />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;