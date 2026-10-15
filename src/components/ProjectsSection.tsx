import React, { useState } from 'react';
import { PROJECTS, NETWORK_LAB_SAMPLES, ProjectItem } from '../data/portfolioData';
import { 
  ExternalLink, 
  Github, 
  Terminal, 
  Check, 
  Copy, 
  Maximize2, 
  X,
  Sparkles
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeLabSample, setActiveLabSample] = useState(NETWORK_LAB_SAMPLES[0]);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const handleCopyCode = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <section id="projects" className="py-20 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>06. Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5] mt-1">
            Projects &amp; Technical Labs
          </h2>
          <p className="text-[#B8B8C0] mt-2 text-sm sm:text-base">
            Academic software solutions, Cisco Packet Tracer network topologies, and open-source GitHub repositories.
          </p>
        </div>

        {/* 3 Core Showcase Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#1C1C20] border border-[#5C4A1F] rounded-2xl overflow-hidden hover:border-[#D4AF37] transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-[#D4AF37]/10"
            >
              <div>
                {/* Visual Thumbnail Frame */}
                <div className="relative aspect-video w-full bg-[#0B0B0D] overflow-hidden border-b border-[#5C4A1F]/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center bg-[#151518] text-[#B8B8C0] p-4 text-center">
                            <span class="text-[#D4AF37] font-mono text-xs mb-1">[PROJECT SHOWCASE]</span>
                            <span class="font-bold text-[#F5F5F5] text-sm">${project.title}</span>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category marker */}
                  <div className="absolute top-3 left-3 text-[11px] font-mono text-[#FFD700] bg-[#0B0B0D]/90 px-2.5 py-1 rounded-md border border-[#5C4A1F] shadow-sm">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  {/* Technologies tags in restrained gold */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#D4AF37] font-mono mb-2.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tech} className="inline-flex items-center">
                        <span className="text-[#F3E5AB]">{tech}</span>
                        {tIdx < project.technologies.length - 1 && <span className="text-[#5C4A1F] ml-2" aria-hidden="true">·</span>}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F5F5] group-hover:text-[#FFD700] transition-colors tracking-tight mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B8B8C0] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#5C4A1F]/50 mt-auto flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#FFD700] transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>

                {project.linkUrl && (
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151518] hover:bg-[#24242A] text-xs font-semibold text-[#F3E5AB] hover:text-[#FFD700] border border-[#5C4A1F] hover:border-[#D4AF37] transition-all shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{project.linkText || 'GitHub Repo'}</span>
                    <ExternalLink className="w-3 h-3 text-[#8E8E98]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Cisco & Linux Lab Configuration Inspector */}
        <div className="bg-[#151518] border border-[#5C4A1F] rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#5C4A1F]/50">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-1">
                <Terminal className="w-4 h-4 text-[#FFD700]" />
                <span>Hands-on Lab Evidence</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                Cisco Packet Tracer &amp; Linux Configuration Inspector
              </h3>
              <p className="text-xs sm:text-sm text-[#B8B8C0] mt-1">
                Explore actual command scripts, switch VLAN trunking, MAC port security, ACL defense, and Linux diagnostics practiced in lab coursework.
              </p>
            </div>

            {/* Segmented control to switch sample */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#1C1C20] border border-[#5C4A1F] rounded-xl self-start">
              {NETWORK_LAB_SAMPLES.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => setActiveLabSample(sample)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    activeLabSample.id === sample.id
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0D] font-bold shadow-sm'
                      : 'text-[#B8B8C0] hover:text-[#FFD700] hover:bg-[#24242A]'
                  }`}
                >
                  {sample.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Lab Sample Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Terminal Code Display */}
            <div className="lg:col-span-8 bg-[#0B0B0D] border border-[#5C4A1F] rounded-xl overflow-hidden font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#1C1C20] border-b border-[#5C4A1F]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5C4A1F]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD700]" />
                  <span className="ml-2 text-[#F3E5AB] font-sans text-xs font-medium">{activeLabSample.device}</span>
                </div>

                <button
                  onClick={() => handleCopyCode(activeLabSample.id, activeLabSample.syntax)}
                  className="flex items-center gap-1.5 text-[11px] text-[#F3E5AB] hover:text-[#FFD700] px-2.5 py-1 rounded bg-[#151518] hover:bg-[#24242A] border border-[#5C4A1F]/60 cursor-pointer transition-colors"
                  title="Copy command syntax"
                >
                  {copiedCodeId === activeLabSample.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#FFD700]" />
                      <span className="text-[#FFD700]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Copy CLI</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 sm:p-5 text-[#F5F5F5] overflow-x-auto leading-relaxed select-all">
                <code>{activeLabSample.syntax}</code>
              </pre>
            </div>

            {/* Explanation & Technical Context */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-[#1C1C20] border border-[#5C4A1F] space-y-2">
                <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block">Lab Configuration Topic</span>
                <h4 className="text-base font-semibold text-[#F5F5F5]">
                  {activeLabSample.name}
                </h4>
                <p className="text-xs text-[#B8B8C0] leading-relaxed">
                  {activeLabSample.notes}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1C1C20] border border-[#5C4A1F] space-y-2 text-xs">
                <span className="text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider block">Target Outcomes</span>
                <ul className="space-y-1.5 text-[#B8B8C0]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Cisco CLI syntax precision &amp; device password safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Isolation of vulnerable broadcasts and attack vectors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700]">✓</span>
                    <span>Real-world verification using Packet Tracer simulation</span>
                  </li>
                </ul>
              </div>

              <a
                href={PROJECTS[2].linkUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-[#F3E5AB] bg-[#1C1C20] border border-[#5C4A1F] rounded-xl hover:border-[#D4AF37] hover:text-[#FFD700] hover:bg-[#D4AF37]/10 transition-all shadow-sm"
              >
                <Github className="w-4 h-4 text-[#D4AF37]" />
                <span>Browse All Repositories on GitHub</span>
              </a>
            </div>

          </div>
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-[#1C1C20] border border-[#D4AF37] text-[#F5F5F5] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-5">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 text-[#B8B8C0] hover:text-[#FFD700] rounded-lg hover:bg-[#24242A] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                <span>{selectedProject.category} Case Study</span>
                <span aria-hidden="true">·</span>
                <span>Alagie Bah Portfolio</span>
              </div>

              <h3 className="text-2xl font-bold text-[#F5F5F5]">
                {selectedProject.title}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#B8B8C0]">
                <span className="text-[#8E8E98] font-mono">Tech Stack:</span>
                {selectedProject.technologies.map((t, idx) => (
                  <span key={t} className="inline-flex items-center text-[#F3E5AB] font-semibold">
                    {t}
                    {idx < selectedProject.technologies.length - 1 && <span className="text-[#5C4A1F] ml-2" aria-hidden="true">·</span>}
                  </span>
                ))}
              </div>

              <p className="text-sm text-[#B8B8C0] leading-relaxed">
                {selectedProject.extendedSummary}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">Key Features &amp; Architecture Highlights</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#B8B8C0]">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-2 shadow-[0_0_6px_#D4AF37]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.cloneCommand && (
                <div className="p-3.5 rounded-xl bg-[#0B0B0D] border border-[#5C4A1F] space-y-1.5 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#8E8E98] text-[11px]">
                    <span>Git Clone Command</span>
                    <button
                      onClick={() => handleCopyCode('clone-cmd', selectedProject.cloneCommand!)}
                      className="inline-flex items-center gap-1 text-[#D4AF37] hover:text-[#FFD700] cursor-pointer"
                    >
                      {copiedCodeId === 'clone-cmd' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#FFD700]" />
                          <span className="text-[#FFD700]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-[#F3E5AB] overflow-x-auto select-all py-1">
                    <code>{selectedProject.cloneCommand}</code>
                  </pre>
                </div>
              )}

              {selectedProject.linkUrl && (
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={selectedProject.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#0B0B0D] bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#F3E5AB] rounded-lg shadow-md transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4 text-[#0B0B0D]" />
                    <span>View Repository on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#0B0B0D]" />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
