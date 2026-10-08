import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, Mail, Palette, Check } from 'lucide-react';
import { useTheme, ThemeMode } from '../context/ThemeContext';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const themeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target as Node)) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ];

  const themes: { id: ThemeMode; label: string; dot: string }[] = [
    { id: 'light', label: 'Clean White (Default)', dot: 'bg-white border border-slate-300' },
    { id: 'navy', label: 'Deep Navy', dot: 'bg-blue-600' },
    { id: 'midnight', label: 'Obsidian Midnight', dot: 'bg-zinc-800' },
    { id: 'emerald', label: 'Cyber Emerald', dot: 'bg-emerald-500' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[var(--bg-overlay)] backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Zone 1: Single text element wordmark (Top Bar Contract) */}
          <a 
            href="#hero" 
            className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-main)] hover:text-sky-600 transition-colors whitespace-nowrap"
          >
            Alagie Bah
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--text-muted)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-sky-600 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions + theme selector */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme dropdown */}
            <div className="relative" ref={themeMenuRef}>
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg hover:border-[var(--border-active)] transition-colors cursor-pointer shadow-sm"
                title="Change background color palette"
                aria-label="Theme menu"
              >
                <Palette className="w-4 h-4 text-sky-600" />
                <span className="capitalize">{theme === 'light' ? 'White' : theme}</span>
              </button>

              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl p-1.5 z-50 text-xs">
                  <div className="px-2.5 py-1 text-[10px] font-mono uppercase text-[var(--text-dim)] tracking-wider">
                    Background Color
                  </div>
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                        theme === t.id
                          ? 'bg-sky-50 text-sky-700 font-semibold'
                          : 'text-[var(--text-muted)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-main)]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${t.dot}`} />
                        <span>{t.label}</span>
                      </div>
                      {theme === t.id && <Check className="w-3.5 h-3.5 text-sky-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-active)] transition-colors whitespace-nowrap cursor-pointer shadow-sm"
              title="Open printable CV"
            >
              <Download className="w-4 h-4 text-sky-600" />
              <span>Download CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors whitespace-nowrap shadow-sm shadow-sky-600/20"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Quick theme cycle for mobile */}
            <button
              onClick={() => {
                const next: Record<ThemeMode, ThemeMode> = {
                  navy: 'midnight',
                  midnight: 'emerald',
                  emerald: 'light',
                  light: 'navy',
                };
                setTheme(next[theme]);
              }}
              className="p-1.5 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-md hover:text-[var(--text-main)]"
              title="Cycle background color"
            >
              <Palette className="w-3.5 h-3.5 text-cyan-400" />
            </button>

            <button
              onClick={onOpenCV}
              className="px-2.5 py-1.5 text-xs font-medium text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-md hover:bg-[var(--bg-card-hover)]"
              title="Open CV"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400 inline mr-1" />
              CV
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-overlay)] backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-[var(--text-main)] hover:text-cyan-400 hover:bg-[var(--bg-card)] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Theme Selector Strip */}
          <div className="pt-2 border-t border-[var(--border-subtle)] space-y-1.5">
            <span className="block text-[10px] font-mono uppercase text-slate-400 tracking-wider px-1">
              Background Color Theme:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`flex items-center gap-2 p-2 rounded-lg text-xs transition-colors cursor-pointer ${
                    theme === t.id
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40'
                      : 'bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-subtle)]'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${t.dot}`} />
                  <span className="truncate">{t.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg hover:bg-[var(--bg-card-hover)]"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>View &amp; Download CV</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
