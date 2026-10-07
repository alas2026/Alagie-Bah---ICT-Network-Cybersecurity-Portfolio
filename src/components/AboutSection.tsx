import React from 'react';
import { 
  PERSONAL_INFO, 
  CAREER_INTERESTS, 
  SPOKEN_LANGUAGES 
} from '../data/portfolioData';
import { 
  ShieldCheck, 
  Network, 
  Wrench, 
  Tv, 
  Headset, 
  Users, 
  Languages, 
  Compass, 
  GraduationCap,
  MapPin,
  Mail
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 theme-section-alt border-y theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">01. Overview</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
            About Me
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Bridging technical precision, enterprise network operations, and people-first communication.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Narrative Professional Summary */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am an energetic ICT professional, Programs Assistant, and Network &amp; Cybersecurity enthusiast 
              based in <span className="text-white font-medium">Brufut, The Gambia</span>. Having completed a 
              <span className="text-white font-medium"> National Diploma in Computer Science at the Management Development Institute (MDI)</span>, 
              I pair structured computer science theory with hands-on networking and comprehensive PC repair and maintenance—covering both hardware assembly, diagnostics, component servicing, and system software configuration—acquired through specialized training at the 
              <span className="text-white font-medium"> Indian Institute of Hardware and Technology (IIHT)</span> and the 
              <span className="text-white font-medium"> QuantumNet Institute of Technology</span>.
            </p>

            <p>
              My professional journey spans three distinct operational domains:
            </p>

            <div className="space-y-3 pl-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-slate-800 text-cyan-400 shrink-0 mt-0.5">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Broadcast Media Operations at QTV Gambia</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Managing program schedules, broadcast asset ingest, digital video archiving, and playout technical coordination in a high-tempo live television environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-slate-800 text-cyan-400 shrink-0 mt-0.5">
                  <Headset className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Customer Care & Technical Support at Qcell Ltd</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Resolving mobile, voice, and data connectivity challenges with rapid active troubleshooting, empathy, and disciplined SLA compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-slate-800 text-cyan-400 shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Grassroots Community Engagement with NSGA</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Spearheading educational outreach, Magnet Theatre sessions, and field mobilization across the Lower River Region under UNFPA and UNICEF-supported developmental projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <h4 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Professional Vision & Career Focus
              </h4>
              <p className="text-sm text-slate-300">
                With a strong grounding across Cisco network configurations, packet inspection, Linux system administration, and computer hardware maintenance, 
                I am committed to advancing excellence in <span className="text-white font-medium">Network Administration</span> and <span className="text-white font-medium">Cybersecurity</span>. 
                My goal is to architect secure digital infrastructure, troubleshoot complex network environments, and ensure high systems availability for modern organizations.
              </p>
            </div>
          </div>

          {/* Right Column: Career Interests, Languages, Quick Profile Specs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Career Interests Card */}
            <div className="theme-card border theme-border rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-[var(--text-main)] font-semibold text-base">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Career Interests</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Primary technical areas targeted for professional practice and advanced university studies:
              </p>
              
              <ul className="space-y-2 text-sm">
                {CAREER_INTERESTS.map((interest) => (
                  <li key={interest} className="flex items-center justify-between py-1.5 border-b border-[var(--border-subtle)] last:border-0">
                    <span className="text-[var(--text-main)] font-medium">{interest}</span>
                    <span className="text-xs font-mono text-cyan-400">Active Focus</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages Card (Zero-Pill Rule) */}
            <div className="theme-card border theme-border rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-[var(--text-main)] font-semibold text-base">
                <Languages className="w-4 h-4 text-cyan-400" />
                <span>Languages</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Fluent multilingual communication enabling cross-cultural team collaboration and community dialogue:
              </p>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                {SPOKEN_LANGUAGES.map((lang) => (
                  <div key={lang.language} className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <span className="block font-semibold text-[var(--text-main)]">{lang.language}</span>
                    <span className="text-xs text-[var(--text-muted)]">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Snapshot */}
            <div className="theme-card border theme-border rounded-xl p-5 text-xs text-[var(--text-muted)] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="text-[var(--text-main)] font-medium">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Email:</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Academic Status:</span>
                <span className="text-[var(--text-main)]">ND Graduate (MDI)</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
