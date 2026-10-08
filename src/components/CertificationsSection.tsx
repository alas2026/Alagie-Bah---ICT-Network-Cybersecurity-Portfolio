import React, { useState } from 'react';
import { TRAINING_CERTIFICATIONS, TrainingItem } from '../data/portfolioData';
import { ShieldCheck, Network, Terminal, CheckCircle2, ChevronRight, X, Lock } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TrainingItem | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cisco':
        return <Network className="w-5 h-5 text-cyan-400" />;
      case 'Cybersecurity':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Systems':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <Network className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 theme-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">04. Specialized Training</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] mt-1">
            Cisco & Cybersecurity Training
          </h2>
          <p className="text-[var(--text-muted)] mt-2 text-sm sm:text-base">
            Verified technical modules completed across Cisco Networking Academy and cybersecurity curriculum tracks.
          </p>
        </div>

        {/* 7 Professional Certification / Training Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRAINING_CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedItem(cert)}
              className="theme-card border theme-border rounded-xl p-5 hover:border-cyan-500/50 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                    {getCategoryIcon(cert.category)}
                  </div>
                  {/* Clean unboxed category label with separator */}
                  <span className="text-xs font-mono text-[var(--text-dim)]">
                    Track 0{index + 1} · {cert.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--text-main)] group-hover:text-cyan-300 transition-colors tracking-tight mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-cyan-400/90 mb-3">
                  Focus: {cert.focus}
                </p>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                  {cert.details}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)] group-hover:text-[var(--text-main)]">
                <span className="flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Curriculum Completed
                </span>
                <span className="inline-flex items-center gap-0.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                  Details <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl p-6 sm:p-7 shadow-2xl space-y-4 text-[var(--text-main)]">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-1.5 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-lg hover:bg-[var(--bg-card-hover)]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span>{selectedItem.category} Training</span>
                <span aria-hidden="true">·</span>
                <span>Verified Curriculum</span>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-main)]">
                {selectedItem.title}
              </h3>

              <div className="p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                <span className="block text-[11px] font-mono text-[var(--text-dim)] uppercase tracking-wider mb-1">Target Focus</span>
                <p className="text-sm font-semibold text-sky-600">
                  {selectedItem.focus}
                </p>
              </div>

              <div className="space-y-2">
                <span className="block text-[11px] font-mono text-[var(--text-dim)] uppercase tracking-wider">Competency Breakdown</span>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {selectedItem.details}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
