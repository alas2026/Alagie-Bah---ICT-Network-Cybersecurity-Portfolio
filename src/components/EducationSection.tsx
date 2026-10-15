import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#151518] border-y border-[#5C4A1F]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>03. Academic Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5] mt-1">
            Education &amp; Qualifications
          </h2>
          <p className="text-[#B8B8C0] mt-2 text-sm sm:text-base">
            Structured educational milestones spanning computer science diplomas, specialized Cisco network security certification, and hardware foundations.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {EDUCATION.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#1C1C20] border border-[#5C4A1F] rounded-xl p-6 sm:p-7 hover:border-[#D4AF37] transition-all shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#D4AF37] font-semibold bg-[#151518] px-2 py-0.5 rounded border border-[#5C4A1F]/50">
                      Phase 0{EDUCATION.length - index}
                    </span>
                    <span aria-hidden="true" className="text-[#5C4A1F]">·</span>
                    <span className="text-xs text-[#B8B8C0] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FFD700]" />
                      {item.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
                    {item.credential}
                  </h3>
                  
                  <div className="text-sm font-semibold text-[#F3E5AB]">
                    {item.institution}
                  </div>
                </div>

                {item.location && (
                  <div className="flex items-center gap-1.5 text-xs text-[#B8B8C0] whitespace-nowrap self-start bg-[#151518] px-2.5 py-1 rounded-md border border-[#5C4A1F]/40">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>

              <p className="text-sm text-[#B8B8C0] leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Key Study Areas */}
              <div className="pt-3 border-t border-[#5C4A1F]/50 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#B8B8C0]">
                <span className="font-mono text-[#8E8E98] uppercase tracking-wider text-[11px]">Core Coverage:</span>
                {item.keyAreas.map((area, aIdx) => (
                  <span key={area} className="inline-flex items-center">
                    <span className="text-[#F5F5F5] font-medium">{area}</span>
                    {aIdx < item.keyAreas.length - 1 && <span className="text-[#5C4A1F] ml-2" aria-hidden="true">·</span>}
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
