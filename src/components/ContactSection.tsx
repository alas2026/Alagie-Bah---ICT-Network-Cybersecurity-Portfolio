import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink, Info, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Network / IT Employment Opportunity',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please complete all required fields.');
      return;
    }
    setError(null);
    setIsSubmitting(true);

    try {
      // Send via FormSubmit AJAX endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject}`,
          subject: formData.subject,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        // Fallback: submit standard HTML form to FormSubmit
        if (formRef.current) {
          formRef.current.submit();
        } else {
          setIsSubmitting(false);
          setSubmitted(true);
        }
      }
    } catch (err) {
      console.warn('FormSubmit AJAX network exception, submitting via HTML form:', err);
      if (formRef.current) {
        formRef.current.submit();
      } else {
        setIsSubmitting(false);
        setSubmitted(true);
      }
    }
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 theme-section-alt border-t theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">07. Communication</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] mt-1">
            Contact & Professional Inquiries
          </h2>
          <p className="text-[var(--text-muted)] mt-2 text-sm sm:text-base">
            Reach out regarding technical roles in network engineering, systems administration, IT infrastructure support, or collaborative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct contact info & profile links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="theme-card border theme-border rounded-xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-[var(--text-main)] tracking-tight">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Email card */}
                <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--text-dim)] uppercase">Professional Email</span>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="block text-sm font-semibold text-[var(--text-main)] hover:text-cyan-300 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                {/* Location */}
                <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-1">
                  <span className="text-xs font-mono text-[var(--text-dim)] uppercase block">Location & Residence</span>
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-main)]">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-3">
                  <span className="text-xs font-mono text-[var(--text-dim)] uppercase block">Professional Networks</span>
                  
                  <div className="space-y-2">
                    <a
                      href={PERSONAL_INFO.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-2 rounded-md hover:bg-[var(--bg-card-hover)] transition-colors text-sm text-[var(--text-main)] group"
                    >
                      <span className="flex items-center gap-2.5">
                        <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                        <span>LinkedIn Profile</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                    </a>

                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-2 rounded-md hover:bg-[var(--bg-card-hover)] transition-colors text-sm text-[var(--text-main)] group"
                    >
                      <span className="flex items-center gap-2.5">
                        <Github className="w-4 h-4 text-slate-300" />
                        <span>GitHub (@alas2026)</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-2 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] leading-relaxed">
                <span className="text-[var(--text-main)] font-medium">Availability:</span> Open to professional roles, IT infrastructure positions, and technical consultations in The Gambia or abroad.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="theme-card border theme-border rounded-xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[var(--text-main)] tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6">
                Fill out the form below to initiate correspondence directly.
              </p>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-xl bg-slate-900 border border-cyan-500/40 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center mx-auto text-cyan-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Message Transmitted via FormSubmit!</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto">
                      Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. Your inquiry regarding "{formData.subject}" has been routed through FormSubmit to <span className="text-white font-mono">{PERSONAL_INFO.email}</span>.
                    </p>
                  </div>

                  {/* FormSubmit Activation Notice */}
                  <div className="p-4 rounded-lg bg-blue-950/40 border border-cyan-500/30 text-left space-y-2 text-xs text-slate-300 max-w-lg mx-auto">
                    <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                      <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>One-Time Form Activation Required</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      If this is the first submission to <strong className="text-white">{PERSONAL_INFO.email}</strong>, FormSubmit requires a one-time activation. A confirmation email from <strong className="text-cyan-300">FormSubmit</strong> has been dispatched to your Gmail.
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      Please open your inbox (or spam folder) and click <strong className="text-cyan-400">"Activate Form"</strong>. Once activated, every message submitted will land straight into your inbox without needing approval again.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: 'Network / IT Employment Opportunity', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <button
                      onClick={handleOpenMailto}
                      className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg cursor-pointer flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open Direct Mail Client</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  ref={formRef}
                  action={`https://formsubmit.co/${PERSONAL_INFO.email}`}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* FormSubmit Configuration Directives */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value={`New Inquiry from Portfolio: ${formData.subject}`} />
                  <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

                  {/* FormSubmit Security & Activation Badge */}
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>
                      Integrated with <strong className="text-[var(--text-main)] font-semibold">FormSubmit.co</strong> &mdash; submissions deliver directly to <span className="text-cyan-400 font-mono">{PERSONAL_INFO.email}</span>.
                    </span>
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-800/80 text-xs text-red-200">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. John Davies / Jane Smith"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-main)] text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder:text-slate-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-main)] text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-main)] text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="Network / IT Employment Opportunity">Network / IT Employment Opportunity</option>
                      <option value="Technical Consultation or Infrastructure Project">Technical Consultation or Infrastructure Project</option>
                      <option value="Systems Administration & Support">Systems Administration & Support</option>
                      <option value="General Professional Networking">General Professional Networking</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please write your inquiry or message here..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-main)] text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder:text-slate-600"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-[var(--text-dim)]">
                      Deliveries routed directly to <span className="text-cyan-400">{PERSONAL_INFO.email}</span>
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm shadow-cyan-500/20 disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
