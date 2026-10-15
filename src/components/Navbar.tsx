import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0B0D]/95 backdrop-blur-md border-b border-[#5C4A1F]/60 shadow-lg shadow-black/40' 
          : 'bg-[#0B0B0D]/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Identity / Monogram in Gold */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 group text-left"
            aria-label="Alagie Bah - Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1C1C20] border border-[#5C4A1F] flex items-center justify-center text-[#D4AF37] font-mono font-bold text-sm group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/15 transition-all shadow-sm">
              AB
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#F5F5F5] group-hover:text-[#FFD700] transition-colors block">
                Alagie Bah
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#F3E5AB]/80 block leading-none">
                ICT &amp; Cybersecurity
              </span>
            </div>
          </a>

          {/* Navigation links with refined gold underlines */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#B8B8C0]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#FFD700] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Luxury Gold Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-[#F3E5AB] bg-[#1C1C20] border border-[#5C4A1F] rounded-lg hover:border-[#D4AF37] hover:text-[#FFD700] hover:bg-[#D4AF37]/10 transition-all whitespace-nowrap cursor-pointer shadow-sm"
              title="Open printable CV"
            >
              <Download className="w-4 h-4 text-[#D4AF37]" />
              <span>Download CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-[#0B0B0D] bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#F3E5AB] rounded-lg transition-all whitespace-nowrap shadow-md shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#0B0B0D]" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenCV}
              className="px-2.5 py-1.5 text-xs font-medium text-[#F3E5AB] bg-[#1C1C20] border border-[#5C4A1F] rounded-md hover:border-[#D4AF37] transition-colors"
              title="Open CV"
            >
              <Download className="w-3.5 h-3.5 text-[#D4AF37] inline mr-1" />
              CV
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#B8B8C0] hover:text-[#FFD700] rounded-lg border border-[#5C4A1F]/50 bg-[#1C1C20] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#FFD700]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#5C4A1F] bg-[#151518]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-[#F5F5F5] hover:text-[#FFD700] hover:bg-[#1C1C20] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#5C4A1F]/60 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#F3E5AB] bg-[#1C1C20] border border-[#5C4A1F] rounded-lg hover:border-[#D4AF37]"
            >
              <Download className="w-4 h-4 text-[#D4AF37]" />
              <span>View &amp; Download CV</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-[#0B0B0D] bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-lg"
            >
              <Mail className="w-4 h-4 text-[#0B0B0D]" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
