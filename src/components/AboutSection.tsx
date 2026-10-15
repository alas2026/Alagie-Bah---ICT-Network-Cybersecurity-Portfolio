import React from 'react';
import { 
  PERSONAL_INFO, 
  CAREER_INTERESTS, 
  SPOKEN_LANGUAGES 
} from '../data/portfolioData';
import { 
  ShieldCheck, 
  Tv, 
  Headset, 
  Users, 
  Languages, 
  Compass, 
  Sparkles
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#151518] border-y border-[#5C4A1F]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>01. Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5] mt-1">
            About Me
          </h2>
          <p className="text-[#B8B8C0] mt-2 text-sm sm:text-base">
            Bridging technical precision, enterprise network operations, and people-first communication.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Narrative Professional Summary */}
          <div className="lg:col-span-7 space-y-6 text-[#B8B8C0] leading-relaxed text-sm sm:text-base">
            <p>
              I am an energetic ICT professional, Programs Assistant, and Network &amp; Cybersecurity enthusiast 
              based in <span className="text-[#F3E5AB] font-semibold">Brufut, The Gambia</span>. Having completed a 
              <span className="text-[#F5F5F5] font-semibold"> National Diploma in Computer Science at the Management Development Institute (MDI)</span>, 
              I pair structured computer science theory with hands-on networking and comprehensive PC repair and maintenance—covering both hardware assembly, diagnostics, component servicing, and system software troubleshooting—acquired through specialized training at the 
              <span className="text-[#F5F5F5] font-semibold"> Indian Institute of Hardware and Technology (IIHT)</span> and the 
              <span className="text-[#F5F5F5] font-semibold"> QuantumNet Institute of Technology</span>.
            </p>

            <p className="text-[#F3E5AB] font-medium">
              My professional journey spans three distinct operational domains:
            </p>

            <div className="space-y-3.5 pl-1">
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#1C1C20] border border-[#5C4A1F]/60 shadow-sm hover:border-[#D4AF37] transition-colors">
                <div className="p-2 rounded-lg bg-[#151518] border border-[#5C4A1F] text-[#D4AF37] shrink-0 mt-0.5">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[#F5F5F5] font-semibold text-sm">Broadcast Media Operations at QTV Gambia</h4>
                  <p className="text-xs sm:text-sm text-[#B8B8C0] mt-0.5">
                    Managing program schedules, broadcast asset ingest, digital video archiving, and playout technical coordination in a high-tempo live television environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#1C1C20] border border-[#5C4A1F]/60 shadow-sm hover:border-[#D4AF37] transition-colors">
                <div className="p-2 rounded-lg bg-[#151518] border border-[#5C4A1F] text-[#FFD700] shrink-0 mt-0.5">
                  <Headset className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[#F5F5F5] font-semibold text-sm">Customer Care &amp; Technical Support at Qcell Ltd</h4>
                  <p className="text-xs sm:text-sm text-[#B8B8C0] mt-0.5">
                    Resolving mobile, voice, and data connectivity challenges with rapid active troubleshooting, empathy, and disciplined SLA compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#1C1C20] border border-[#5C4A1F]/60 shadow-sm hover:border-[#D4AF37] transition-colors">
                <div className="p-2 rounded-lg bg-[#151518] border border-[#5C4A1F] text-[#F3E5AB] shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[#F5F5F5] font-semibold text-sm">Grassroots Community Engagement with NSGA</h4>
                  <p className="text-xs sm:text-sm text-[#B8B8C0] mt-0.5">
                    Spearheading educational outreach, Magnet Theatre sessions, and field mobilization across the Lower River Region under UNFPA and UNICEF-supported developmental projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#5C4A1F]/50">
              <h4 className="text-[#F5F5F5] font-semibold text-base mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Professional Vision &amp; Career Focus</span>
              </h4>
              <p className="text-sm text-[#B8B8C0] leading-relaxed">
                With a strong grounding across Cisco network configurations, packet inspection, Linux system administration, and computer hardware maintenance, 
                I am committed to advancing excellence in <span className="text-[#F3E5AB] font-semibold">Network Administration</span> and <span className="text-[#F3E5AB] font-semibold">Cybersecurity</span>. 
                My goal is to architect secure digital infrastructure, troubleshoot complex network environments, and ensure high systems availability for modern organizations.
              </p>
            </div>
          </div>

          {/* Right Column: Career Interests, Languages, Quick Profile Specs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Career Interests Card */}
            <div className="bg-[#1C1C20] border border-[#5C4A1F] rounded-xl p-5 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-[#F5F5F5] font-semibold text-base">
                <Compass className="w-4 h-4 text-[#D4AF37]" />
                <span>Career Interests</span>
              </div>
              <p className="text-xs text-[#B8B8C0]">
                Primary technical areas targeted for professional practice and enterprise infrastructure roles:
              </p>
              
              <ul className="space-y-2 text-sm">
                {CAREER_INTERESTS.map((interest) => (
                  <li key={interest} className="flex items-center justify-between py-1.5 border-b border-[#5C4A1F]/40 last:border-0">
                    <span className="text-[#F5F5F5] font-medium">{interest}</span>
                    <span className="text-xs font-mono text-[#D4AF37] font-semibold">Active Focus</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages Card */}
            <div className="bg-[#1C1C20] border border-[#5C4A1F] rounded-xl p-5 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-[#F5F5F5] font-semibold text-base">
                <Languages className="w-4 h-4 text-[#FFD700]" />
                <span>Languages</span>
              </div>
              <p className="text-xs text-[#B8B8C0]">
                Fluent multilingual communication enabling cross-cultural team collaboration and community dialogue:
              </p>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                {SPOKEN_LANGUAGES.map((lang) => (
                  <div key={lang.language} className="p-2.5 rounded-lg bg-[#151518] border border-[#5C4A1F]/60">
                    <span className="block font-semibold text-[#F5F5F5]">{lang.language}</span>
                    <span className="text-xs text-[#F3E5AB] font-medium">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Snapshot */}
            <div className="bg-[#1C1C20] border border-[#5C4A1F] rounded-xl p-5 text-xs text-[#B8B8C0] space-y-2.5 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-[#8E8E98]">Location:</span>
                <span className="text-[#F5F5F5] font-medium">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8E8E98]">Email:</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#D4AF37] hover:text-[#FFD700] hover:underline font-semibold">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8E8E98]">Academic Status:</span>
                <span className="text-[#F5F5F5] font-medium">ND Graduate (MDI)</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
