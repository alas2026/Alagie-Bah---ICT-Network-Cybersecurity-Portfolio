import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Tv, PhoneCall, Users, Calendar, MapPin, CheckCircle, Briefcase } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const getRoleIcon = (id: string) => {
    switch (id) {
      case 'qtv':
        return <Tv className="w-5 h-5 text-cyan-400" />;
      case 'qcell':
        return <PhoneCall className="w-5 h-5 text-blue-400" />;
      case 'nsga':
        return <Users className="w-5 h-5 text-emerald-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 theme-section-alt border-y theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-600">05. Professional Track</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] mt-1">
            Work Experience
          </h2>
          <p className="text-[var(--text-muted)] mt-2 text-sm sm:text-base">
            Demonstrated reliability across broadcast television operations, high-tempo telecommunications support, and international NGO community projects.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {WORK_EXPERIENCE.map((exp, index) => (
            <div
              key={exp.id}
              className="theme-card border theme-border rounded-xl p-6 sm:p-8 hover:border-sky-500/50 transition-colors shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] shrink-0 text-sky-600">
                    {getRoleIcon(exp.id)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-dim)] mb-1">
                      <span className="font-semibold text-sky-600">{exp.company}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[var(--text-dim)]" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-main)] bg-[var(--bg-primary)] px-3 py-1.5 rounded-md border border-[var(--border-subtle)] self-start shadow-xs">
                  <Calendar className="w-3.5 h-3.5 text-sky-600" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                {exp.summary}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2 mb-6">
                <span className="block text-[11px] font-mono text-[var(--text-dim)] uppercase tracking-wider mb-2">Key Responsibilities &amp; Contributions:</span>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-xs sm:text-sm text-[var(--text-muted)] flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-2" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applied Skills (Zero-Pill Rule: unboxed inline text with separators) */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--text-muted)]">
                <span className="font-mono text-[var(--text-dim)] uppercase tracking-wider text-[11px]">Applied Skills:</span>
                {exp.skillsApplied.map((skill, sIdx) => (
                  <span key={skill} className="inline-flex items-center">
                    <span className="text-[var(--text-main)] font-medium">{skill}</span>
                    {sIdx < exp.skillsApplied.length - 1 && <span className="text-[var(--text-dim)] ml-2" aria-hidden="true">·</span>}
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
