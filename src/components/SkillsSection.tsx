import React, { useState } from 'react';
import { 
  Network, 
  ShieldAlert, 
  Database, 
  Sparkles
} from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skillDetails: Record<string, { desc: string; domain: string }> = {
    "Computer Networking": { desc: "OSI & TCP/IP models, packet routing, IPv4/IPv6 address planning and subnet calculations.", domain: "Networking" },
    "Cisco Networking": { desc: "Cisco Catalyst switch and router CLI configuration, IOS navigation, VLANs, and trunking.", domain: "Networking" },
    "Cisco Packet Tracer": { desc: "Hands-on virtual network topology simulation, ping/traceroute verification, and failure analysis.", domain: "Networking" },
    "Network Administration": { desc: "Configuring interfaces, default gateways, static routes, DHCP services, and device management.", domain: "Networking" },
    "Network Security": { desc: "Perimeter defense, device authentication, port security to prevent MAC spoofing, and ACL policies.", domain: "Security" },
    "Cybersecurity": { desc: "Core CIA security triad, threat modeling, malware defense principles, and enterprise security hygiene.", domain: "Security" },
    "Network Defense": { desc: "Extended and standard IP access lists (ACLs), ingress/egress filtering, and defensive architecture.", domain: "Security" },
    "Linux": { desc: "Bash shell command line, permissions (chmod/chown), networking tools (ip, netstat, ufw), and system services.", domain: "Systems" },
    "Windows": { desc: "Windows client and administrative utilities, device manager, network adapter configuration, and system maintenance.", domain: "Systems" },
    "Computer Hardware & Maintenance": { desc: "A+ level component assembly, power supply testing, RAM and storage diagnostics, preventive hardware servicing.", domain: "Systems" },
    "Technical Support": { desc: "First-contact incident diagnosis, structured root-cause isolation, hardware swaps, and user guidance.", domain: "Support" },
    "IT Support": { desc: "Telecom service support, SIM and APN configuration, peripheral setups, and ticket resolution.", domain: "Support" },
    "Java": { desc: "Object-oriented programming, data structures, application logic, and database connectivity (JDBC).", domain: "Software" },
    "MySQL": { desc: "Relational database schema design, normalized tables, SQL CRUD operations, joins, and integrity constraints.", domain: "Software" },
    "HTML": { desc: "Semantic HTML5 markup structure, accessible forms, document hierarchy, and web page layout.", domain: "Software" },
    "CSS": { desc: "Responsive styling, Flexbox, CSS Grid layouts, mobile-first responsive media queries, and modern interfaces.", domain: "Software" },
    "JavaScript": { desc: "DOM manipulation, client-side event handling, validation logic, and asynchronous web workflows.", domain: "Software" },
    "Git & GitHub": { desc: "Distributed version control, commits, branch management, remote repository synchronization, and code publishing.", domain: "Tools" }
  };

  const categories = [
    { id: 'all', label: 'All Technical Skills' },
    { id: 'Networking', label: 'Networking & Cisco' },
    { id: 'Security', label: 'Cybersecurity & Defense' },
    { id: 'Systems', label: 'Systems & Hardware' },
    { id: 'Software', label: 'Software & Databases' }
  ];

  const filteredSkills = Object.entries(skillDetails).filter(([, data]) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'Networking') return data.domain === 'Networking';
    if (activeCategory === 'Security') return data.domain === 'Security';
    if (activeCategory === 'Systems') return data.domain === 'Systems' || data.domain === 'Support';
    if (activeCategory === 'Software') return data.domain === 'Software' || data.domain === 'Tools';
    return true;
  });

  return (
    <section id="skills" className="py-20 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>02. Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5] mt-1">
              Technical Skills &amp; Competencies
            </h2>
            <p className="text-[#B8B8C0] mt-2 text-sm sm:text-base">
              A comprehensive toolkit developed across academic computing studies, Cisco certification tracks, and practical systems support.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#1C1C20] border border-[#5C4A1F]/70 rounded-xl shadow-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0D] font-bold shadow-sm'
                    : 'text-[#B8B8C0] hover:text-[#FFD700] hover:bg-[#24242A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Core Competency Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TECHNICAL_SKILLS.map((group, idx) => (
            <div 
              key={group.category}
              className="bg-[#1C1C20] border border-[#5C4A1F] rounded-xl p-6 transition-all hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-[#151518] border border-[#5C4A1F] text-[#D4AF37]">
                  {idx === 0 && <Network className="w-5 h-5 text-[#D4AF37]" />}
                  {idx === 1 && <ShieldAlert className="w-5 h-5 text-[#FFD700]" />}
                  {idx === 2 && <Database className="w-5 h-5 text-[#F3E5AB]" />}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider">Domain 0{idx + 1}</span>
                  <h3 className="text-base font-semibold text-[#F5F5F5]">{group.category}</h3>
                </div>
              </div>
              <p className="text-xs text-[#B8B8C0] leading-relaxed mb-4">
                {group.description}
              </p>
              
              <div className="pt-3 border-t border-[#5C4A1F]/50">
                <span className="block text-[11px] font-mono text-[#8E8E98] uppercase tracking-wider mb-2">Core Tools:</span>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#B8B8C0]">
                  {group.skills.map((skill, sIdx) => (
                    <span key={skill} className="inline-flex items-center">
                      <span className="text-[#F3E5AB] font-semibold">{skill}</span>
                      {sIdx < group.skills.length - 1 && <span className="text-[#5C4A1F] ml-2" aria-hidden="true">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Grid of All Skills */}
        <div className="bg-[#151518] border border-[#5C4A1F]/50 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#5C4A1F]/40">
            <div>
              <h3 className="text-base font-semibold text-[#F5F5F5]">Applied Technical Competencies</h3>
              <p className="text-xs text-[#B8B8C0]">Showing {filteredSkills.length} competencies under current filter</p>
            </div>
            <span className="text-xs font-mono text-[#D4AF37] hidden sm:inline-block">Hands-on Laboratory &amp; Field Validated</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map(([skillName, data]) => (
              <div
                key={skillName}
                className="p-4 rounded-xl bg-[#1C1C20] border border-[#5C4A1F]/60 hover:border-[#D4AF37] transition-all group hover:shadow-md hover:shadow-[#D4AF37]/10"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h4 className="text-sm font-semibold text-[#F5F5F5] group-hover:text-[#FFD700] transition-colors">
                    {skillName}
                  </h4>
                  <span className="text-[11px] font-mono text-[#D4AF37] bg-[#151518] px-2 py-0.5 rounded border border-[#5C4A1F]/40 whitespace-nowrap">
                    {data.domain}
                  </span>
                </div>
                <p className="text-xs text-[#B8B8C0] leading-relaxed">
                  {data.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
