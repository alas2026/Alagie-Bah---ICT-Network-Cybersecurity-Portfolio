import React from 'react';
import { ArrowDown, Download, Mail, Github, ExternalLink, MapPin, Shield, Network, Server, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import heroPortrait from '../assets/images/alagiebahprofile.jpg';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background ambient tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a15_1px,transparent_1px),linear-gradient(to_bottom,#0f172a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Status Line (Zero-Pill Rule: unboxed text with separators) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-cyan-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Available for Technical & Network Roles
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Candidate Identity */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight text-balance">
                Alagie Bah
              </h1>
              <p className="text-base sm:text-lg font-medium text-cyan-300/90 leading-relaxed">
                {PERSONAL_INFO.headline}
              </p>
            </div>

            {/* Key Hero Headline Quote */}
            <div className="border-l-2 border-cyan-500/60 pl-4 py-1">
              <blockquote className="text-xl sm:text-2xl font-semibold text-slate-100 tracking-tight leading-snug">
                “Building Secure Networks. Solving Technical Problems. Creating Digital Solutions.”
              </blockquote>
            </div>

            {/* Concise overview */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              National Diploma graduate in Computer Science from MDI with hands-on networking and PC repair & maintenance (hardware and software) from IIHT and QuantumNet. 
              Bringing practical experience across broadcast operations at <span className="text-white font-medium">QTV Gambia</span>, 
              telecom support at <span className="text-white font-medium">Qcell</span>, and grassroots community advocacy with <span className="text-white font-medium">NSGA</span> (UNFPA & UNICEF-backed). 
              Dedicated to solving technical challenges and maintaining secure enterprise network environments.
            </p>

            {/* Action Buttons: 4 Required Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-md shadow-cyan-500/20 whitespace-nowrap cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 bg-slate-900/60 border border-slate-800 hover:bg-slate-800 hover:text-white rounded-lg transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-950 rounded-lg transition-colors whitespace-nowrap"
                title="View GitHub profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Editorial highlights bar with unboxed typography */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="block text-slate-500 font-mono">Academic Track</span>
                <span className="font-semibold text-slate-200">ND Computer Science</span>
                <span className="block text-slate-400">Completed (MDI)</span>
              </div>
              <div>
                <span className="block text-slate-500 font-mono">Network Specialization</span>
                <span className="font-semibold text-slate-200">CCNA & Security</span>
                <span className="block text-slate-400">IIHT & Cisco Training</span>
              </div>
              <div>
                <span className="block text-slate-500 font-mono">Operations</span>
                <span className="font-semibold text-slate-200">Programs Assistant</span>
                <span className="block text-slate-400">QTV Gambia</span>
              </div>
              <div>
                <span className="block text-slate-500 font-mono">Field Experience</span>
                <span className="font-semibold text-slate-200">Community Outreach</span>
                <span className="block text-slate-400">NSGA · UNICEF/UNFPA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Portrait and Technical Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer soft glow border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent blur-sm" />

              <div className="relative rounded-2xl theme-card border theme-border p-3 overflow-hidden shadow-2xl">
                
                {/* Photo container with fallback */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[var(--bg-primary)]">
                  <img
                    src={heroPortrait}
                    alt="Alagie Bah - ICT and Cybersecurity Professional"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Styled CSS fallback
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-300 p-6 text-center">
                            <div class="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-3 font-bold text-xl">AB</div>
                            <span class="font-bold text-lg text-white">Alagie Bah</span>
                            <span class="text-xs text-cyan-400 mt-1">ICT & Cybersecurity Professional</span>
                            <span class="text-xs text-slate-500 mt-2">Brufut, The Gambia</span>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Photo Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Brufut, The Gambia</span>
                    <p className="text-sm font-semibold text-white">Alagie Bah</p>
                  </div>
                </div>

                {/* Technical Focus Badge Row */}
                <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <Network className="w-4 h-4 mx-auto text-cyan-400 mb-1" />
                    <span className="block font-medium text-[var(--text-main)]">Networking</span>
                    <span className="text-[10px] text-[var(--text-dim)]">Cisco / Packet Tracer</span>
                  </div>
                  <div className="p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <Shield className="w-4 h-4 mx-auto text-cyan-400 mb-1" />
                    <span className="block font-medium text-[var(--text-main)]">Cybersecurity</span>
                    <span className="text-[10px] text-[var(--text-dim)]">Network Defense</span>
                  </div>
                  <div className="p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <Server className="w-4 h-4 mx-auto text-cyan-400 mb-1" />
                    <span className="block font-medium text-[var(--text-main)]">Systems &amp; IT</span>
                    <span className="text-[10px] text-[var(--text-dim)]">Linux / Hardware</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
