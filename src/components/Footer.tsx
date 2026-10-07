import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="theme-canvas border-t theme-border text-[var(--text-muted)] text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-[var(--text-main)] tracking-tight">Alagie Bah</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-cyan-400 font-mono text-[11px]">ICT &amp; Cybersecurity</span>
            </div>
            <p className="text-[var(--text-muted)] text-xs mt-1 max-w-md">
              Building secure networks, solving technical problems, and creating digital solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <button onClick={onOpenCV} className="text-cyan-400 hover:underline cursor-pointer">Curriculum Vitae</button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[var(--text-dim)]">
              © {new Date().getFullYear()} Alagie Bah. Brufut, The Gambia.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[var(--text-muted)] hover:text-cyan-400 transition-colors"
              title="Email Alagie"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-muted)] hover:text-[#0a66c2] transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-muted)] hover:text-cyan-400 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer border border-[var(--border-subtle)]"
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
