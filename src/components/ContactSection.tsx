import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionHeading from './SectionHeading';
import {
  Phone, Mail, Clock, CheckCircle2, ArrowRight,
  Wrench, AlertTriangle, DollarSign, Calendar
} from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

type FormState = 'idle' | 'submitting' | 'success';

const serviceOptions = [
  'Emergency Plumbing',
  'Drain Cleaning',
  'Leak Detection & Repair',
  'Water Heater Services',
  'Pipe Repair & Replacement',
  'Bathroom & Kitchen Plumbing',
  'Sewer Line Services',
  'Commercial Plumbing',
  'General Inquiry / Quote',
];

const urgencyOptions = [
  { value: 'emergency', label: '🚨 Emergency — ASAP', icon: AlertTriangle },
  { value: 'today', label: '⚡ Today if possible', icon: Clock },
  { value: 'scheduled', label: '📅 Schedule for later', icon: Calendar },
  { value: 'quote', label: '💬 Just need a quote', icon: DollarSign },
];

export default function ContactSection() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.08 });
  const [formState, setFormState] = useState<FormState>('idle');
  const [urgency, setUrgency] = useState('');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', description: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    await new Promise((r) => setTimeout(r, 1100));
    setFormState('success');
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={[
            'grid lg:grid-cols-2 gap-12 lg:gap-14 transition-all duration-700',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ].join(' ')}
        >
          {/* Left */}
          <div>
            <SectionHeading
              eyebrow="Book a Service"
              title="Request a Service or Free Quote"
              subtitle="Fill out the form and we'll be in touch quickly. For emergencies, call us directly for the fastest response."
              id="contact-heading"
            />

            {/* Contact cards */}
            <div className="mt-8 space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-4 bg-[#1B6FDB] text-white px-5 py-4 rounded-2xl hover:bg-[#1560C0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6FDB] focus-visible:ring-offset-2 group"
                aria-label={`Call us now at ${PHONE}`}
              >
                <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={20} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold text-white/60 tracking-widest uppercase mb-0.5">Call Now</p>
                  <p className="font-bold text-lg leading-none">{PHONE}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">24/7</span>
                  <p className="text-xs text-white/75 mt-0.5">Emergency Available</p>
                </div>
              </a>

              {[
                { icon: Mail, label: 'Email', value: 'service@flowrightplumbing.com', sub: 'We respond within a few hours' },
                { icon: Clock, label: 'Office Hours', value: 'Mon–Fri 7:00 AM – 7:00 PM', sub: '24/7 for emergencies' },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-center gap-4 bg-[#F1F5FD] px-5 py-4 rounded-2xl border border-[#E2EAF5]">
                  <div className="w-11 h-11 bg-[#EBF3FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#1B6FDB]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#8FA0BA] tracking-widest uppercase mb-0.5">{label}</p>
                    <p className="font-semibold text-[#0D1F3C] text-sm">{value}</p>
                    <p className="text-[#8FA0BA] text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="mt-7 pt-7 border-t border-[#E2EAF5]">
              <p className="text-[11px] font-semibold text-[#8FA0BA] tracking-widest uppercase mb-3">You can expect</p>
              <ul className="space-y-2.5">
                {[
                  'A response within a few hours (or immediately for emergencies)',
                  'Upfront pricing before any work begins',
                  'Fully licensed and insured technicians',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-[#2E4068]">
                    <CheckCircle2 size={14} className="text-[#1B6FDB] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[#F1F5FD] rounded-2xl p-6 lg:p-8 border border-[#E2EAF5]">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 gap-5">
                <div className="w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-[#16A34A]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#0D1F3C] text-xl mb-2">Request Received!</h3>
                  <p className="text-[#5A6A85] text-sm max-w-xs mx-auto leading-relaxed">
                    We'll be in touch shortly. For urgent issues, call us directly at{' '}
                    <a href={PHONE_HREF} className="text-[#1B6FDB] font-semibold">{PHONE}</a>.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate aria-label="Service request form">
                <h3 className="font-display font-bold text-[#0D1F3C] text-xl mb-6">
                  <Wrench size={18} className="inline mr-2 text-[#1B6FDB]" aria-hidden="true" />
                  Tell Us About Your Plumbing Issue
                </h3>

                {/* Urgency selector */}
                <div className="mb-5">
                  <p className="text-[12px] font-medium text-[#5A6A85] mb-2.5" id="urgency-label">
                    How urgent is this?
                  </p>
                  <div className="grid grid-cols-2 gap-2" role="group" aria-labelledby="urgency-label">
                    {urgencyOptions.map((o) => (
                      <button
                        key={o.value}
                        type="button"
                        onClick={() => setUrgency(o.value)}
                        aria-pressed={urgency === o.value}
                        className={[
                          'text-left text-[12.5px] font-medium px-3.5 py-3 rounded-xl border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6FDB]',
                          urgency === o.value
                            ? o.value === 'emergency'
                              ? 'bg-[#FEF0E4] border-[#F57C2B] text-[#E06820]'
                              : 'bg-[#EBF3FF] border-[#1B6FDB] text-[#1B6FDB]'
                            : 'bg-white border-[#E2EAF5] text-[#5A6A85] hover:border-[#C4DAFB]',
                        ].join(' ')}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name + Phone */}
                <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label htmlFor="c-name" className="block text-[12px] font-medium text-[#5A6A85] mb-1.5">
                      Full name <span className="text-[#1B6FDB]" aria-label="required">*</span>
                    </label>
                    <input
                      id="c-name" name="name" type="text" required autoComplete="name"
                      value={form.name} onChange={onChange} placeholder="Jane Smith"
                      className="w-full bg-white border border-[#E2EAF5] text-[#0D1F3C] text-sm px-4 py-3 rounded-xl placeholder-[#C4D4EC] focus:outline-none focus:ring-2 focus:ring-[#1B6FDB]/25 focus:border-[#1B6FDB] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-[12px] font-medium text-[#5A6A85] mb-1.5">
                      Phone <span className="text-[#1B6FDB]" aria-label="required">*</span>
                    </label>
                    <input
                      id="c-phone" name="phone" type="tel" required autoComplete="tel"
                      value={form.phone} onChange={onChange} placeholder="(555) 000-0000"
                      className="w-full bg-white border border-[#E2EAF5] text-[#0D1F3C] text-sm px-4 py-3 rounded-xl placeholder-[#C4D4EC] focus:outline-none focus:ring-2 focus:ring-[#1B6FDB]/25 focus:border-[#1B6FDB] transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3.5">
                  <label htmlFor="c-email" className="block text-[12px] font-medium text-[#5A6A85] mb-1.5">
                    Email address
                  </label>
                  <input
                    id="c-email" name="email" type="email" autoComplete="email"
                    value={form.email} onChange={onChange} placeholder="jane@email.com"
                    className="w-full bg-white border border-[#E2EAF5] text-[#0D1F3C] text-sm px-4 py-3 rounded-xl placeholder-[#C4D4EC] focus:outline-none focus:ring-2 focus:ring-[#1B6FDB]/25 focus:border-[#1B6FDB] transition-colors"
                  />
                </div>

                {/* Service */}
                <div className="mb-3.5">
                  <label htmlFor="c-service" className="block text-[12px] font-medium text-[#5A6A85] mb-1.5">
                    Service needed
                  </label>
                  <select
                    id="c-service" name="service" value={form.service} onChange={onChange}
                    className="w-full bg-white border border-[#E2EAF5] text-[#0D1F3C] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B6FDB]/25 focus:border-[#1B6FDB] transition-colors cursor-pointer appearance-none"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                {/* Description */}
                <div className="mb-5">
                  <label htmlFor="c-desc" className="block text-[12px] font-medium text-[#5A6A85] mb-1.5">
                    Describe the problem <span className="text-[#1B6FDB]" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="c-desc" name="description" required rows={3}
                    value={form.description} onChange={onChange}
                    placeholder="Tell us what's happening — the more detail, the better..."
                    className="w-full bg-white border border-[#E2EAF5] text-[#0D1F3C] text-sm px-4 py-3 rounded-xl placeholder-[#C4D4EC] focus:outline-none focus:ring-2 focus:ring-[#1B6FDB]/25 focus:border-[#1B6FDB] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="group w-full flex items-center justify-center gap-2.5 bg-[#F57C2B] text-white font-semibold py-4 rounded-xl text-[15px] hover:bg-[#E06820] disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F57C2B] focus-visible:ring-offset-2 shadow-[0_2px_12px_rgba(245,124,43,0.35)]"
                >
                  {formState === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Service Request
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
