import React from 'react';
import { ArrowDown, Download, Mail, Github, ExternalLink, MapPin, Shield, Network, Server } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import heroPortrait from '../assets/images/alagiebahprofile.jpg';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0B0B0D]">
      {/* Background ambient gold tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#5C4A1F18_1px,transparent_1px),linear-gradient(to_bottom,#5C4A1F18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Ambient gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Status Line */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#B8B8C0]">
              <span className="inline-flex items-center gap-1.5 text-[#F3E5AB] font-medium bg-[#1C1C20] px-3 py-1 rounded-full border border-[#5C4A1F]/60">
                <span className="w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700] animate-pulse" />
                Available for Technical &amp; Network Roles
              </span>
              <span aria-hidden="true" className="text-[#5C4A1F]">·</span>
              <span className="inline-flex items-center gap-1 text-[#B8B8C0]">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Candidate Identity with Gold Typography */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-tight text-balance">
                <span className="text-gold-gradient">Alagie</span> Bah
              </h1>
              <p className="text-base sm:text-lg font-semibold tracking-wide text-[#F3E5AB] leading-relaxed">
                ICT Professional | Networking &amp; Cybersecurity
              </p>
            </div>

            {/* Key Hero Headline Quote with Executive Gold Accent */}
            <div className="border-l-2 border-[#D4AF37] pl-4 py-2 bg-[#1C1C20]/40 rounded-r-lg">
              <blockquote className="text-xl sm:text-2xl font-semibold text-[#F5F5F5] tracking-tight leading-snug">
                “Building Secure Networks. Solving Technical Problems. Creating Digital Solutions.”
              </blockquote>
            </div>

            {/* Concise overview */}
            <p className="text-sm sm:text-base text-[#B8B8C0] leading-relaxed max-w-2xl">
              National Diploma graduate in Computer Science from MDI with hands-on networking and PC repair &amp; maintenance (hardware and software) from IIHT and QuantumNet. 
              Bringing practical experience across broadcast operations at <span className="text-[#F3E5AB] font-semibold">QTV Gambia</span>, 
              telecom support at <span className="text-[#F3E5AB] font-semibold">Qcell</span>, and grassroots community advocacy with <span className="text-[#F3E5AB] font-semibold">NSGA</span> (UNFPA &amp; UNICEF-backed). 
              Dedicated to solving technical challenges and maintaining secure enterprise network environments.
            </p>

            {/* Action Buttons: Styled with Luxury Gold System */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#0B0B0D] bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#F3E5AB] rounded-lg transition-all shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/45 hover:scale-[1.02] whitespace-nowrap cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 text-[#0B0B0D]" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#F3E5AB] bg-[#1C1C20] border border-[#5C4A1F] hover:border-[#D4AF37] hover:text-[#FFD700] hover:bg-[#D4AF37]/10 rounded-lg transition-all whitespace-nowrap cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-[#D4AF37]" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#F5F5F5] bg-[#151518] border border-[#5C4A1F]/70 hover:border-[#D4AF37] hover:text-[#FFD700] hover:bg-[#D4AF37]/10 rounded-lg transition-all whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>Contact Me</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#B8B8C0] hover:text-[#FFD700] border border-[#5C4A1F]/60 hover:border-[#D4AF37] bg-[#1C1C20] rounded-lg transition-all whitespace-nowrap shadow-sm"
                title="View GitHub profile"
              >
                <Github className="w-4 h-4 text-[#D4AF37]" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8E8E98]" />
              </a>
            </div>

            {/* Editorial highlights bar with gold dividers */}
            <div className="pt-4 border-t border-[#5C4A1F]/50 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-2 rounded-lg bg-[#151518]/60 border border-[#5C4A1F]/30">
                <span className="block text-[#8E8E98] font-mono text-[11px] uppercase tracking-wider">Academic Track</span>
                <span className="font-semibold text-[#F5F5F5] block mt-0.5">ND Computer Science</span>
                <span className="block text-[#F3E5AB]/90 text-[11px]">Completed (MDI)</span>
              </div>
              <div className="p-2 rounded-lg bg-[#151518]/60 border border-[#5C4A1F]/30">
                <span className="block text-[#8E8E98] font-mono text-[11px] uppercase tracking-wider">Network Track</span>
                <span className="font-semibold text-[#F5F5F5] block mt-0.5">CCNA &amp; Security</span>
                <span className="block text-[#F3E5AB]/90 text-[11px]">IIHT &amp; Cisco Training</span>
              </div>
              <div className="p-2 rounded-lg bg-[#151518]/60 border border-[#5C4A1F]/30">
                <span className="block text-[#8E8E98] font-mono text-[11px] uppercase tracking-wider">Operations</span>
                <span className="font-semibold text-[#F5F5F5] block mt-0.5">Programs Assistant</span>
                <span className="block text-[#F3E5AB]/90 text-[11px]">QTV Gambia</span>
              </div>
              <div className="p-2 rounded-lg bg-[#151518]/60 border border-[#5C4A1F]/30">
                <span className="block text-[#8E8E98] font-mono text-[11px] uppercase tracking-wider">Field Experience</span>
                <span className="font-semibold text-[#F5F5F5] block mt-0.5">Community Outreach</span>
                <span className="block text-[#F3E5AB]/90 text-[11px]">NSGA · UNICEF/UNFPA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Portrait and Technical Card with Gold Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer soft gold glow border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#D4AF37]/30 via-[#FFD700]/15 to-transparent blur-md" />

              <div className="relative rounded-2xl bg-[#1C1C20] border border-[#5C4A1F] p-3 overflow-hidden shadow-2xl">
                
                {/* Photo container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0B0B0D] border border-[#5C4A1F]/60">
                  <img
                    src={heroPortrait}
                    alt="Alagie Bah - ICT and Cybersecurity Professional"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center bg-[#151518] text-[#F5F5F5] p-6 text-center">
                            <div class="w-16 h-16 rounded-full bg-[#1C1C20] border border-[#5C4A1F] flex items-center justify-center text-[#FFD700] mb-3 font-bold text-xl">AB</div>
                            <span class="font-bold text-lg text-[#F5F5F5]">Alagie Bah</span>
                            <span class="text-xs text-[#F3E5AB] mt-1">ICT &amp; Cybersecurity Professional</span>
                            <span class="text-xs text-[#8E8E98] mt-2">Brufut, The Gambia</span>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Photo Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFD700] block">Brufut, The Gambia</span>
                    <p className="text-sm font-semibold text-[#F5F5F5]">Alagie Bah</p>
                  </div>
                </div>

                {/* Technical Focus Badge Row in Luxury Charcoal & Gold */}
                <div className="mt-3 pt-3 border-t border-[#5C4A1F]/60 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-[#151518] border border-[#5C4A1F]/50 hover:border-[#D4AF37] transition-colors">
                    <Network className="w-4 h-4 mx-auto text-[#D4AF37] mb-1" />
                    <span className="block font-medium text-[#F5F5F5]">Networking</span>
                    <span className="text-[10px] text-[#8E8E98]">Cisco / Labs</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#151518] border border-[#5C4A1F]/50 hover:border-[#D4AF37] transition-colors">
                    <Shield className="w-4 h-4 mx-auto text-[#FFD700] mb-1" />
                    <span className="block font-medium text-[#F5F5F5]">Cybersecurity</span>
                    <span className="text-[10px] text-[#8E8E98]">Defense &amp; ACLs</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#151518] border border-[#5C4A1F]/50 hover:border-[#D4AF37] transition-colors">
                    <Server className="w-4 h-4 mx-auto text-[#F3E5AB] mb-1" />
                    <span className="block font-medium text-[#F5F5F5]">Systems &amp; IT</span>
                    <span className="text-[10px] text-[#8E8E98]">Linux / Hardware</span>
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
