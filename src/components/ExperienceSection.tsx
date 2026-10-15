import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Tv, PhoneCall, Users, Calendar, MapPin, Briefcase, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const getRoleIcon = (id: string) => {
    switch (id) {
      case 'qtv':
        return <Tv className="w-5 h-5 text-[#D4AF37]" />;
      case 'qcell':
        return <PhoneCall className="w-5 h-5 text-[#FFD700]" />;
      case 'nsga':
        return <Users className="w-5 h-5 text-[#F3E5AB]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#151518] border-y border-[#5C4A1F]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>05. Professional Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5] mt-1">
            Work Experience
          </h2>
          <p className="text-[#B8B8C0] mt-2 text-sm sm:text-base">
            Demonstrated reliability across broadcast television operations, high-tempo telecommunications support, and international NGO community projects.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#1C1C20] border border-[#5C4A1F] rounded-2xl p-6 sm:p-8 hover:border-[#D4AF37] transition-all shadow-md hover:shadow-xl hover:shadow-[#D4AF37]/10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#151518] border border-[#5C4A1F] shrink-0 text-[#D4AF37] shadow-sm">
                    {getRoleIcon(exp.id)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#8E8E98] mb-1">
                      <span className="font-semibold text-[#D4AF37]">{exp.company}</span>
                      <span aria-hidden="true" className="text-[#5C4A1F]">·</span>
                      <span className="flex items-center gap-1 text-[#B8B8C0]">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#F3E5AB] bg-[#151518] px-3 py-1.5 rounded-lg border border-[#5C4A1F] self-start shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-[#FFD700]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-[#B8B8C0] leading-relaxed mb-5">
                {exp.summary}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2 mb-6">
                <span className="block text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider mb-2">Key Responsibilities &amp; Contributions:</span>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-xs sm:text-sm text-[#B8B8C0] flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-2 shadow-[0_0_6px_#D4AF37]" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applied Skills */}
              <div className="pt-4 border-t border-[#5C4A1F]/50 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#B8B8C0]">
                <span className="font-mono text-[#8E8E98] uppercase tracking-wider text-[11px]">Applied Skills:</span>
                {exp.skillsApplied.map((skill, sIdx) => (
                  <span key={skill} className="inline-flex items-center">
                    <span className="text-[#F5F5F5] font-semibold">{skill}</span>
                    {sIdx < exp.skillsApplied.length - 1 && <span className="text-[#5C4A1F] ml-2" aria-hidden="true">·</span>}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
