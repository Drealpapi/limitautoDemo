import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle, ArrowRight, Zap, Calendar, MessageSquare, AlertTriangle } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const SERVICES = [
  'Emergency Plumbing', 'Drain Cleaning', 'Leak Detection & Repair',
  'Water Heater Services', 'Pipe Repair & Replacement',
  'Bathroom & Kitchen Plumbing', 'Sewer Line Services',
  'Commercial Plumbing', 'General Inquiry',
];

const URGENCY = [
  { val: 'emergency', label: 'Emergency — Right Now', icon: AlertTriangle, color: '#F57C2B' },
  { val: 'today',     label: 'Today if Possible',    icon: Zap,           color: '#1B6FDB' },
  { val: 'scheduled', label: 'Schedule for Later',   icon: Calendar,      color: '#1B6FDB' },
  { val: 'quote',     label: 'Just a Quote',         icon: MessageSquare, color: '#1B6FDB' },
];

type State = 'idle' | 'submitting' | 'success';

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '11px 14px',
  border: '1.5px solid #E5E7EB', borderRadius: 9,
  fontSize: 13.5, color: '#111',
  fontFamily: 'inherit', outline: 'none',
  background: '#FAFAFA',
  transition: 'border-color 0.15s, box-shadow 0.15s, background 0.15s',
};

export default function ContactSection() {
  const [form, setForm]   = useState({ name:'', phone:'', email:'', service:'', description:'' });
  const [urgency, setUrgency] = useState('');
  const [state, setState] = useState<State>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#1B6FDB';
    e.target.style.boxShadow = '0 0 0 3px rgba(27,111,219,0.1)';
    e.target.style.background = '#fff';
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#E5E7EB';
    e.target.style.boxShadow = 'none';
    e.target.style.background = '#FAFAFA';
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('submitting');
    await new Promise(r => setTimeout(r, 1100));
    setState('success');
  };

  return (
    <section id="contact" style={{ background: '#fff', padding: '96px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div style={{ width: 28, height: 2.5, background: '#1B6FDB', borderRadius: 2 }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#1B6FDB', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Book a Service
          </span>
        </div>
        <div style={{ marginBottom: 52 }}>
          <h2 style={{
            fontSize: 'clamp(1.85rem, 3.5vw, 2.7rem)',
            fontWeight: 800, color: '#111',
            lineHeight: 1.08, letterSpacing: '-0.8px', marginBottom: 10,
          }}>
            Request a Service or Free Quote
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', maxWidth: 480, lineHeight: 1.7 }}>
            Fill out the form and we'll get back to you quickly. For emergencies, call us directly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="contact-grid">

          {/* ── LEFT: info ── */}
          <div>
            {/* Phone CTA — glass primary */}
            <a
              href={PHONE_HREF}
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                background: 'linear-gradient(135deg,#1B6FDB 0%,#2480F0 100%)',
                borderRadius: 14, padding: '20px 24px',
                textDecoration: 'none', marginBottom: 18,
                boxShadow: '0 8px 28px rgba(27,111,219,0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
                transition: 'transform 0.18s ease, box-shadow 0.18s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(27,111,219,0.45), inset 0 1px 0 rgba(255,255,255,0.2)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(27,111,219,0.35), inset 0 1px 0 rgba(255,255,255,0.2)';
              }}
              aria-label={`Call us at ${PHONE}`}
            >
              <div style={{
                width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Phone size={21} color="#fff" />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 4 }}>
                  Call Now — 24/7
                </p>
                <p style={{ fontSize: 20, fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.5px' }}>
                  {PHONE}
                </p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.18)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: 20, padding: '4px 10px',
                  fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '0.1em',
                }}>EMERGENCY</span>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>Available Now</p>
              </div>
            </a>

            {/* Info rows */}
            {[
              { icon: Mail,   label: 'Email',        val: 'service@flowrightplumbing.com', sub: 'Response within a few hours' },
              { icon: Clock,  label: 'Office Hours',  val: 'Mon–Fri  7:00 AM – 7:00 PM',   sub: '24/7 for emergencies'        },
              { icon: MapPin, label: 'Service Area',  val: 'Your City & Surrounding Areas', sub: 'Replace with your area'      },
            ].map(({ icon: Icon, label, val, sub }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '16px 0', borderBottom: '1px solid #F3F4F6',
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                  background: 'linear-gradient(135deg,#EBF3FF,#D6E9FF)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(27,111,219,0.1)',
                }}>
                  <Icon size={17} color="#1B6FDB" />
                </div>
                <div>
                  <p style={{ fontSize: 10.5, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 2 }}>
                    {label}
                  </p>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: '#111' }}>{val}</p>
                  <p style={{ fontSize: 12, color: '#9CA3AF' }}>{sub}</p>
                </div>
              </div>
            ))}

            {/* Expect list */}
            <div style={{
              marginTop: 28, background: '#F4F7FB',
              borderRadius: 12, padding: '20px 22px',
              border: '1px solid rgba(27,111,219,0.08)',
            }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#1B6FDB', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 14 }}>
                What to Expect
              </p>
              {[
                'Response within hours (immediate for emergencies)',
                'Upfront pricing before any work begins',
                'Fully licensed and insured technicians',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10, lineHeight: 1 }}>
                  <CheckCircle size={14} style={{ color: '#1B6FDB', flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div style={{
            background: '#F4F7FB',
            borderRadius: 16, padding: '36px',
            border: '1px solid rgba(27,111,219,0.08)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
          }}>
            {state === 'success' ? (
              <div style={{ textAlign: 'center', padding: '52px 0' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#DCFCE7,#BBF7D0)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 4px 16px rgba(22,163,74,0.2)',
                }}>
                  <CheckCircle size={28} color="#16A34A" />
                </div>
                <p style={{ fontSize: 21, fontWeight: 800, color: '#111', marginBottom: 10 }}>Request Received!</p>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, maxWidth: 280, margin: '0 auto 24px' }}>
                  We'll be in touch shortly. For urgent issues, call us directly.
                </p>
                <a
                  href={PHONE_HREF}
                  className="btn-glass btn-primary"
                  style={{ textDecoration: 'none', padding: '12px 28px', fontSize: 14, borderRadius: 9, display: 'inline-flex' }}
                >
                  <Phone size={14} /> {PHONE}
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate aria-label="Service request">
                <p style={{ fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 24, letterSpacing: '-0.2px' }}>
                  Tell Us About Your Issue
                </p>

                {/* Urgency */}
                <p style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>
                  How urgent is this?
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
                  {URGENCY.map(o => {
                    const Icon = o.icon;
                    const isActive = urgency === o.val;
                    return (
                      <button
                        key={o.val} type="button"
                        onClick={() => setUrgency(o.val)}
                        style={{
                          textAlign: 'left', fontSize: 12.5, fontWeight: 500,
                          padding: '11px 13px', borderRadius: 10,
                          border: isActive
                            ? `2px solid ${o.val === 'emergency' ? '#F57C2B' : '#1B6FDB'}`
                            : '1.5px solid #E5E7EB',
                          background: isActive
                            ? (o.val === 'emergency' ? 'rgba(245,124,43,0.07)' : 'rgba(27,111,219,0.06)')
                            : '#fff',
                          color: isActive
                            ? (o.val === 'emergency' ? '#E06820' : '#1B6FDB')
                            : '#6B7280',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          display: 'flex', alignItems: 'center', gap: 8,
                          boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                        }}
                        onMouseEnter={e => {
                          if (!isActive) {
                            (e.currentTarget as HTMLElement).style.borderColor = '#CBD5E1';
                            (e.currentTarget as HTMLElement).style.background = '#F9FAFB';
                          }
                        }}
                        onMouseLeave={e => {
                          if (!isActive) {
                            (e.currentTarget as HTMLElement).style.borderColor = '#E5E7EB';
                            (e.currentTarget as HTMLElement).style.background = '#fff';
                          }
                        }}
                      >
                        <Icon size={13} style={{ flexShrink: 0 }} />
                        {o.label}
                      </button>
                    );
                  })}
                </div>

                {/* Name + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                  {[
                    { id:'c-name', name:'name', label:'Full name *', type:'text', ph:'Jane Smith', req:true, auto:'name' },
                    { id:'c-phone',name:'phone',label:'Phone *',     type:'tel', ph:'(555) 000-0000',req:true, auto:'tel' },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} style={{ display:'block', fontSize:11, fontWeight:600, color:'#6B7280', marginBottom:6, letterSpacing:'0.06em' }}>
                        {f.label}
                      </label>
                      <input
                        id={f.id} name={f.name} type={f.type} required={f.req}
                        autoComplete={f.auto} placeholder={f.ph}
                        value={form[f.name as keyof typeof form]} onChange={onChange}
                        style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label htmlFor="c-email" style={{ display:'block', fontSize:11, fontWeight:600, color:'#6B7280', marginBottom:6, letterSpacing:'0.06em' }}>
                    Email address
                  </label>
                  <input
                    id="c-email" name="email" type="email" autoComplete="email" placeholder="jane@email.com"
                    value={form.email} onChange={onChange}
                    style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                  />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label htmlFor="c-svc" style={{ display:'block', fontSize:11, fontWeight:600, color:'#6B7280', marginBottom:6, letterSpacing:'0.06em' }}>
                    Service needed
                  </label>
                  <select
                    id="c-svc" name="service" value={form.service} onChange={onChange}
                    style={{ ...inputStyle, appearance:'none', cursor:'pointer', color: form.service ? '#111' : '#9CA3AF' }}
                    onFocus={onFocus} onBlur={onBlur}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label htmlFor="c-desc" style={{ display:'block', fontSize:11, fontWeight:600, color:'#6B7280', marginBottom:6, letterSpacing:'0.06em' }}>
                    Describe the problem *
                  </label>
                  <textarea
                    id="c-desc" name="description" required rows={4}
                    placeholder="Tell us what's happening — the more detail the better..."
                    value={form.description} onChange={onChange}
                    style={{ ...inputStyle, resize:'none', lineHeight:1.65 }}
                    onFocus={onFocus} onBlur={onBlur}
                  />
                </div>

                <button
                  type="submit" disabled={state === 'submitting'}
                  className="btn-glass btn-orange"
                  style={{
                    width: '100%', padding: '15px', fontSize: 14.5,
                    borderRadius: 10, fontWeight: 700,
                    opacity: state === 'submitting' ? 0.7 : 1,
                    cursor: state === 'submitting' ? 'not-allowed' : 'pointer',
                    justifyContent: 'center',
                  }}
                >
                  {state === 'submitting' ? (
                    <>
                      <span style={{
                        width: 16, height: 16, border: '2.5px solid rgba(255,255,255,0.35)',
                        borderTopColor: '#fff', borderRadius: '50%',
                        animation: 'spin 0.7s linear infinite', display: 'inline-block',
                      }} />
                      Sending…
                    </>
                  ) : (
                    <>Send Service Request <ArrowRight size={15} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        @media (max-width: 480px) { .contact-grid > div:last-child { padding: 24px !important; } }
      `}</style>
    </section>
  );
}
