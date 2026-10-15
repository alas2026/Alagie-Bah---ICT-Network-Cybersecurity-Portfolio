/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0B0B0D] text-[#F5F5F5] flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#FFD700]">
        {/* Top Navigation Bar */}
        <Navbar onOpenCV={() => setIsCVModalOpen(true)} />

        {/* Main Portfolio Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero onOpenCV={() => setIsCVModalOpen(true)} />

          {/* 2. About Me, Languages, and Career Interests */}
          <AboutSection />

          {/* 3. Technical Skills and Competencies */}
          <SkillsSection />

          {/* 4. Education & Qualifications */}
          <EducationSection />

          {/* 5. Cisco & Cybersecurity Training / Certifications */}
          <CertificationsSection />

          {/* 6. Work Experience (QTV, Qcell, NSGA) */}
          <ExperienceSection />

          {/* 7. Projects & Interactive Lab Configuration Inspector */}
          <ProjectsSection />

          {/* 8. Contact & Professional Inquiries */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onOpenCV={() => setIsCVModalOpen(true)} />

        {/* Curriculum Vitae Modal for Viewing, Copying, and Printing/Exporting to PDF */}
        <CVModal 
          isOpen={isCVModalOpen} 
          onClose={() => setIsCVModalOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}
