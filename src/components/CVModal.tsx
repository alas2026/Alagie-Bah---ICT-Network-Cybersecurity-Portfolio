import React, { useState } from 'react';
import { 
  PERSONAL_INFO, 
  EDUCATION, 
  TRAINING_CERTIFICATIONS, 
  WORK_EXPERIENCE, 
  PROJECTS, 
  TECHNICAL_SKILLS, 
  CAREER_INTERESTS, 
  SPOKEN_LANGUAGES 
} from '../data/portfolioData';
import { Printer, Copy, Check, X, Download, MapPin, Mail, Linkedin, Github } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
CURRICULUM VITAE: ALAGIE BAH
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedIn}
GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL HEADLINE
${PERSONAL_INFO.headline}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

CAREER INTERESTS
${CAREER_INTERESTS.join(', ')}

EDUCATION
${EDUCATION.map(e => `• ${e.credential} - ${e.institution} (${e.period})\n  ${e.description}`).join('\n\n')}

CISCO & CYBERSECURITY TRAINING
${TRAINING_CERTIFICATIONS.map(t => `• ${t.title}: ${t.focus}\n  ${t.details}`).join('\n\n')}

WORK EXPERIENCE
${WORK_EXPERIENCE.map(w => `• ${w.role} - ${w.company} (${w.period}, ${w.location})\n  Summary: ${w.summary}\n  Key Responsibilities:\n${w.responsibilities.map(r => `    - ${r}`).join('\n')}`).join('\n\n')}

KEY PROJECTS
${PROJECTS.map(p => `• ${p.title} (${p.technologies.join(', ')}) ${p.linkUrl ? `[${p.linkUrl}]` : ''}\n  ${p.description}\n  Highlights:\n${p.highlights.map(h => `    - ${h}`).join('\n')}`).join('\n\n')}

TECHNICAL SKILLS
• Networking & Infrastructure: Computer Networking, Cisco Networking, Cisco Packet Tracer, Network Administration, Network Security, Network Defense, IT Support
• Cybersecurity & Systems: Cybersecurity, Network Defense, Linux, Windows, Computer Hardware & Maintenance, Technical Support
• Software & Databases: Java, MySQL, HTML, CSS, JavaScript, Git & GitHub

LANGUAGES
${SPOKEN_LANGUAGES.map(l => `• ${l.language}: ${l.proficiency}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl my-6 flex flex-col max-h-[92vh]">
        
        {/* Modal Action Header (Excluded in print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 rounded-t-2xl">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Curriculum Vitae</span>
            <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)]">Alagie Bah — Official Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
              title="Print CV or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Copy plain text CV"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable CV Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[var(--bg-primary)] text-[var(--text-main)] font-sans print:p-0 print:bg-white print:text-black print:overflow-visible">
          
          {/* Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
              Alagie Bah
            </h1>
            <p className="text-sm sm:text-base font-semibold text-cyan-400 print:text-slate-800">
              {PERSONAL_INFO.headline}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 print:text-slate-700 pt-2 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400 print:hidden" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 print:text-black hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noreferrer" className="text-slate-300 print:text-black hover:underline">
                LinkedIn Profile
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-slate-300 print:text-black hover:underline">
                github.com/alas2026
              </a>
            </div>
          </div>

          {/* Statement / Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-slate-900 font-bold border-b border-slate-800 print:border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4 print-break-inside-avoid">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-slate-900 font-bold border-b border-slate-800 print:border-slate-300 pb-1">
              Education & Academic Qualifications
            </h2>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white print:text-black">{edu.credential}</span>
                    <span className="font-mono text-slate-400 print:text-slate-600 text-xs">{edu.period}</span>
                  </div>
                  <div className="text-xs font-medium text-cyan-400 print:text-slate-800">{edu.institution}</div>
                  <p className="text-xs text-slate-400 print:text-slate-700 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cisco & Cybersecurity Training */}
          <div className="space-y-3 print-break-inside-avoid">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-slate-900 font-bold border-b border-slate-800 print:border-slate-300 pb-1">
              Cisco & Cybersecurity Specialized Training
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {TRAINING_CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-2.5 rounded bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                  <span className="font-semibold text-white print:text-black block">{cert.title}</span>
                  <span className="text-[11px] text-cyan-400 print:text-slate-700 block font-mono">{cert.focus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4 print-break-inside-avoid">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-slate-900 font-bold border-b border-slate-800 print:border-slate-300 pb-1">
              Work Experience
            </h2>
            <div className="space-y-5">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white print:text-black">{exp.role} — {exp.company}</span>
                    <span className="font-mono text-slate-400 print:text-slate-600 text-xs">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700">{exp.summary}</p>
                  <ul className="list-disc list-inside text-xs text-slate-400 print:text-slate-600 space-y-1 pl-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Projects */}
          <div className="space-y-3 print-break-inside-avoid">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-slate-900 font-bold border-b border-slate-800 print:border-slate-300 pb-1">
              Featured Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white print:text-black">{proj.title}</span>
                    <span className="font-mono text-xs text-cyan-400 print:text-slate-600">{proj.technologies.join(', ')}</span>
                  </div>
                  {proj.linkUrl && (
                    <a 
                      href={proj.linkUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[11px] font-mono text-cyan-400 print:text-sky-700 hover:underline block"
                    >
                      {proj.linkUrl}
                    </a>
                  )}
                  <p className="text-xs text-slate-400 print:text-slate-700">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 print-break-inside-avoid">
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-slate-900 font-bold border-b border-slate-800 print:border-slate-300 pb-1">
                Technical Skills Inventory
              </h2>
              <ul className="text-xs text-slate-300 print:text-slate-800 space-y-1">
                <li><strong className="text-white print:text-black">Networking:</strong> Cisco Networking, Packet Tracer, Network Administration, Network Defense, Security</li>
                <li><strong className="text-white print:text-black">Systems:</strong> Linux, Windows, Hardware & Maintenance, Technical Support, IT Support</li>
                <li><strong className="text-white print:text-black">Programming:</strong> Java, MySQL, HTML, CSS, JavaScript, Git & GitHub</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-slate-900 font-bold border-b border-slate-800 print:border-slate-300 pb-1">
                Languages & Career Interests
              </h2>
              <div className="text-xs text-slate-300 print:text-slate-800 space-y-1">
                <p><strong className="text-white print:text-black">Languages:</strong> {SPOKEN_LANGUAGES.map(l => `${l.language} (${l.proficiency})`).join(', ')}</p>
                <p><strong className="text-white print:text-black">Interests:</strong> {CAREER_INTERESTS.join(', ')}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer (Excluded in print) */}
        <div className="no-print flex items-center justify-between px-6 py-3 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 rounded-b-2xl text-xs text-[var(--text-muted)]">
          <span>Prepared for professional opportunities and technical employment.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
