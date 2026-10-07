import React, { useState } from 'react';
import { PROJECTS, NETWORK_LAB_SAMPLES, ProjectItem } from '../data/portfolioData';
import { 
  ExternalLink, 
  Github, 
  Terminal, 
  Network, 
  Database, 
  Code, 
  Check, 
  Copy, 
  Maximize2, 
  X,
  FileCode2,
  Cpu
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
    <section id="projects" className="py-20 theme-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">06. Selected Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] mt-1">
            Projects & Technical Labs
          </h2>
          <p className="text-[var(--text-muted)] mt-2 text-sm sm:text-base">
            Academic software solutions, Cisco Packet Tracer network topologies, and open-source GitHub repositories.
          </p>
        </div>

        {/* 3 Core Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="theme-card border theme-border rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Thumbnail Frame with resilient CSS fallback */}
                <div className="relative aspect-video w-full bg-[var(--bg-primary)] overflow-hidden border-b border-[var(--border-subtle)]">
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
                          <div class="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-slate-400 p-4 text-center">
                            <span class="text-cyan-400 font-mono text-xs mb-1">[PROJECT ASSET]</span>
                            <span class="font-bold text-white text-sm">${project.title}</span>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category marker */}
                  <div className="absolute top-3 left-3 text-[11px] font-mono text-cyan-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  {/* Technologies (Zero-Pill: unboxed text with separators) */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-cyan-400 font-mono mb-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tech} className="inline-flex items-center">
                        <span>{tech}</span>
                        {tIdx < project.technologies.length - 1 && <span className="text-slate-600 ml-2" aria-hidden="true">·</span>}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-main)] group-hover:text-cyan-300 transition-colors tracking-tight mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[var(--border-subtle)] mt-auto flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>

                {project.linkUrl && (
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] text-xs font-medium text-[var(--text-main)] border border-[var(--border-subtle)] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{project.linkText || 'GitHub Repo'}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Cisco & Linux Lab Configuration Inspector */}
        <div className="theme-section-alt border theme-border rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[var(--border-subtle)]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <Terminal className="w-4 h-4" />
                <span>Hands-on Lab Evidence</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                Cisco Packet Tracer & Linux Configuration Inspector
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                Explore actual command scripts, switch VLAN trunking, MAC port security, ACL defense, and Linux diagnostics practiced in lab coursework.
              </p>
            </div>

            {/* Segmented control to switch sample */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg self-start">
              {NETWORK_LAB_SAMPLES.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => setActiveLabSample(sample)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    activeLabSample.id === sample.id
                      ? 'bg-cyan-500 text-slate-950 font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)]'
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
            <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400 font-sans text-xs">{activeLabSample.device}</span>
                </div>

                <button
                  onClick={() => handleCopyCode(activeLabSample.id, activeLabSample.syntax)}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-800 cursor-pointer"
                  title="Copy command syntax"
                >
                  {copiedCodeId === activeLabSample.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy CLI</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 sm:p-5 text-slate-200 overflow-x-auto leading-relaxed select-all">
                <code>{activeLabSample.syntax}</code>
              </pre>
            </div>

            {/* Explanation & Technical Context */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl theme-card border theme-border space-y-2">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">Lab Configuration Topic</span>
                <h4 className="text-base font-semibold text-[var(--text-main)]">
                  {activeLabSample.name}
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {activeLabSample.notes}
                </p>
              </div>

              <div className="p-4 rounded-xl theme-card border theme-border space-y-2 text-xs">
                <span className="text-[11px] font-mono text-[var(--text-dim)] uppercase tracking-wider block">Target Outcomes</span>
                <ul className="space-y-1.5 text-[var(--text-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Cisco CLI syntax precision & device password safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Isolation of vulnerable broadcasts and attack vectors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Real-world verification using Packet Tracer simulation</span>
                  </li>
                </ul>
              </div>

              <a
                href={PROJECTS[2].linkUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg hover:bg-[var(--bg-card-hover)] transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>Browse All Repositories on GitHub</span>
              </a>
            </div>

          </div>
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-main)] rounded-xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-5">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-lg hover:bg-[var(--bg-card-hover)]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span>{selectedProject.category} Case Study</span>
                <span aria-hidden="true">·</span>
                <span>Alagie Bah Portfolio</span>
              </div>

              <h3 className="text-2xl font-bold text-[var(--text-main)]">
                {selectedProject.title}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--text-muted)]">
                <span className="text-[var(--text-dim)] font-mono">Tech Stack:</span>
                {selectedProject.technologies.map((t, idx) => (
                  <span key={t} className="inline-flex items-center text-sky-600 font-semibold">
                    {t}
                    {idx < selectedProject.technologies.length - 1 && <span className="text-[var(--text-dim)] ml-2" aria-hidden="true">·</span>}
                  </span>
                ))}
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {selectedProject.extendedSummary}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-dim)]">Key Features &amp; Architecture Highlights</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)]">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-2" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.cloneCommand && (
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span>Git Clone Command</span>
                    <button
                      onClick={() => handleCopyCode('clone-cmd', selectedProject.cloneCommand!)}
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-white cursor-pointer"
                    >
                      {copiedCodeId === 'clone-cmd' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-slate-200 overflow-x-auto select-all py-1">
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
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
