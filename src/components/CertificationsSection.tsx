import React, { useState } from 'react';
import { TRAINING_CERTIFICATIONS, TrainingItem } from '../data/portfolioData';
import { ShieldCheck, Network, Terminal, CheckCircle2, ChevronRight, X, Sparkles } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TrainingItem | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cisco':
        return <Network className="w-5 h-5 text-[#D4AF37]" />;
      case 'Cybersecurity':
        return <ShieldCheck className="w-5 h-5 text-[#FFD700]" />;
      case 'Systems':
        return <Terminal className="w-5 h-5 text-[#F3E5AB]" />;
      default:
        return <Network className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="certifications" className="py-20 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>04. Specialized Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5] mt-1">
            Cisco &amp; Cybersecurity Training
          </h2>
          <p className="text-[#B8B8C0] mt-2 text-sm sm:text-base">
            Verified technical modules completed across Cisco Networking Academy and cybersecurity curriculum tracks.
          </p>
        </div>

        {/* 7 Professional Certification / Training Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRAINING_CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedItem(cert)}
              className="bg-[#1C1C20] border border-[#5C4A1F] rounded-xl p-5 hover:border-[#D4AF37] transition-all cursor-pointer flex flex-col justify-between group hover:shadow-lg hover:shadow-[#D4AF37]/10"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-[#151518] border border-[#5C4A1F]">
                    {getCategoryIcon(cert.category)}
                  </div>
                  <span className="text-xs font-mono text-[#D4AF37] bg-[#151518] px-2 py-0.5 rounded border border-[#5C4A1F]/50">
                    Track 0{index + 1} · {cert.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#F5F5F5] group-hover:text-[#FFD700] transition-colors tracking-tight mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-[#F3E5AB] mb-3">
                  Focus: {cert.focus}
                </p>

                <p className="text-xs text-[#B8B8C0] leading-relaxed line-clamp-3">
                  {cert.details}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#5C4A1F]/50 flex items-center justify-between text-xs text-[#B8B8C0] group-hover:text-[#F5F5F5]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Curriculum Completed
                </span>
                <span className="inline-flex items-center gap-0.5 text-[#FFD700] group-hover:translate-x-0.5 transition-transform font-medium">
                  Details <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal in Luxury Black and Gold */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-lg bg-[#1C1C20] border border-[#D4AF37] rounded-2xl p-6 sm:p-7 shadow-2xl space-y-4 text-[#F5F5F5]">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-1.5 text-[#B8B8C0] hover:text-[#FFD700] rounded-lg hover:bg-[#24242A] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                <span>{selectedItem.category} Training</span>
                <span aria-hidden="true">·</span>
                <span>Verified Curriculum</span>
              </div>

              <h3 className="text-xl font-bold text-[#F5F5F5]">
                {selectedItem.title}
              </h3>

              <div className="p-3.5 rounded-xl bg-[#151518] border border-[#5C4A1F]">
                <span className="block text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider mb-1">Target Focus</span>
                <p className="text-sm font-semibold text-[#FFD700]">
                  {selectedItem.focus}
                </p>
              </div>

              <div className="space-y-2">
                <span className="block text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider">Competency Breakdown</span>
                <p className="text-sm text-[#B8B8C0] leading-relaxed">
                  {selectedItem.details}
                </p>
              </div>

              <div className="pt-4 border-t border-[#5C4A1F]/60 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2 text-xs font-bold text-[#0B0B0D] bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#F3E5AB] rounded-lg transition-all cursor-pointer shadow-md shadow-[#D4AF37]/20"
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
