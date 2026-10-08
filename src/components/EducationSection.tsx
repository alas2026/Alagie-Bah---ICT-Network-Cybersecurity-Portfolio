import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 theme-section-alt border-y theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-600">03. Academic Foundations</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] mt-1">
            Education & Qualifications
          </h2>
          <p className="text-[var(--text-muted)] mt-2 text-sm sm:text-base">
            Structured educational milestones spanning computer science diplomas, specialized Cisco network security certification, and hardware foundations.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-6">
          {EDUCATION.map((item, index) => (
            <div
              key={item.id}
              className="theme-card border theme-border rounded-xl p-6 sm:p-7 hover:border-sky-500/50 transition-colors shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-sky-600 font-semibold">
                      Phase 0{EDUCATION.length - index}
                    </span>
                    <span aria-hidden="true" className="text-[var(--text-dim)]">·</span>
                    <span className="text-xs text-[var(--text-dim)] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      {item.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight">
                    {item.credential}
                  </h3>
                  
                  <div className="text-sm font-semibold text-sky-600">
                    {item.institution}
                  </div>
                </div>

                {item.location && (
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] whitespace-nowrap self-start">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Key Study Areas (Zero-Pill: subtle text list with separators) */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--text-muted)]">
                <span className="font-mono text-[var(--text-dim)] uppercase tracking-wider text-[11px]">Core Coverage:</span>
                {item.keyAreas.map((area, aIdx) => (
                  <span key={area} className="inline-flex items-center">
                    <span className="text-[var(--text-main)]">{area}</span>
                    {aIdx < item.keyAreas.length - 1 && <span className="text-[var(--text-dim)] ml-2" aria-hidden="true">·</span>}
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
