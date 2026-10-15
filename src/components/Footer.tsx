import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0D] border-t border-[#5C4A1F]/50 text-[#B8B8C0] text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#5C4A1F]/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-[#F5F5F5] tracking-tight">Alagie Bah</span>
              <span aria-hidden="true" className="text-[#5C4A1F]">·</span>
              <span className="text-[#D4AF37] font-mono text-[11px] font-semibold">ICT &amp; Cybersecurity</span>
            </div>
            <p className="text-[#B8B8C0] text-xs mt-1 max-w-md">
              Building secure networks, solving technical problems, and creating digital solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a href="#about" className="text-[#B8B8C0] hover:text-[#FFD700] transition-colors">About</a>
            <a href="#skills" className="text-[#B8B8C0] hover:text-[#FFD700] transition-colors">Skills</a>
            <a href="#education" className="text-[#B8B8C0] hover:text-[#FFD700] transition-colors">Education</a>
            <a href="#certifications" className="text-[#B8B8C0] hover:text-[#FFD700] transition-colors">Certifications</a>
            <a href="#experience" className="text-[#B8B8C0] hover:text-[#FFD700] transition-colors">Experience</a>
            <a href="#projects" className="text-[#B8B8C0] hover:text-[#FFD700] transition-colors">Projects</a>
            <button onClick={onOpenCV} className="text-[#D4AF37] hover:text-[#FFD700] hover:underline cursor-pointer">Curriculum Vitae</button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[#8E8E98]">
              © {new Date().getFullYear()} Alagie Bah. Brufut, The Gambia. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#B8B8C0] hover:text-[#FFD700] transition-colors"
              title="Email Alagie"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="text-[#B8B8C0] hover:text-[#FFD700] transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#B8B8C0] hover:text-[#FFD700] transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1C1C20] hover:bg-[#24242A] text-[#F3E5AB] hover:text-[#FFD700] transition-all cursor-pointer border border-[#5C4A1F] hover:border-[#D4AF37]"
              title="Return to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
