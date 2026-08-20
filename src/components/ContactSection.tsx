import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react';

const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const SERVICE_OPTIONS = [
  'Emergency Plumbing', 'Drain Cleaning', 'Leak Detection & Repair',
  'Water Heater Services', 'Pipe Repair & Replacement',
  'Bathroom & Kitchen Plumbing', 'Sewer Line Services',
  'Commercial Plumbing', 'General Inquiry',
];

const URGENCY_OPTIONS = [
  { val: 'emergency', label: '🚨 Emergency — Right Now' },
  { val: 'today',     label: '⚡ Today if Possible'     },
  { val: 'scheduled', label: '📅 Schedule for Later'    },
  { val: 'quote',     label: '💬 Just a Quote'          },
];

type FormState = 'idle' | 'submitting' | 'success';

export default function ContactSection() {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', service: '', description: '' });
  const [urgency, setUrgency] = useState('');
  const [state, setState]     = useState<FormState>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('submitting');
    await new Promise(r => setTimeout(r, 1100));
    setState('success');
  };

  return (
    <section id="contact" style={{ background: '#fff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <div style={{ width: 32, height: 2, background: '#111' }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: '#999', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Book a Service
          </span>
        </div>
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#111', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: 8 }}>
            Request a Service or Free Quote
          </h2>
          <p style={{ fontSize: 15, color: '#666', maxWidth: 500 }}>
            Fill out the form and we'll be in touch quickly. For emergencies, call us directly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }} className="contact-grid">

          {/* LEFT — contact info */}
          <div>
            {/* Big phone card */}
            <a
              href={PHONE_HREF}
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                background: '#1B6FDB', color: '#fff',
                padding: '20px 24px', textDecoration: 'none',
                marginBottom: 16,
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1560C0')}
              onMouseLeave={e => (e.currentTarget.style.background = '#1B6FDB')}
            >
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Phone size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 10, fontWeight: 700, opacity: 0.7, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 3 }}>Call Now — 24/7</p>
                <p style={{ fontSize: 20, fontWeight: 800, lineHeight: 1 }}>{PHONE}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: 10, fontWeight: 700, opacity: 0.6, letterSpacing: '0.1em' }}>EMERGENCY</p>
                <p style={{ fontSize: 11, opacity: 0.8 }}>Available Now</p>
              </div>
            </a>

            {/* Info rows */}
            {[
              { icon: Mail,   label: 'Email',        val: 'service@flowrightplumbing.com', sub: 'Response within a few hours' },
              { icon: Clock,  label: 'Office Hours',  val: 'Mon–Fri  7 AM – 7 PM',          sub: '24/7 for emergencies'       },
              { icon: MapPin, label: 'Service Area',  val: 'Your City & Surrounding Areas',  sub: 'Replace with your area'     },
            ].map(({ icon: Icon, label, val, sub }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '16px 0', borderBottom: '1px solid #F0F0F0',
              }}>
                <div style={{ width: 40, height: 40, background: '#EBF3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={16} color="#1B6FDB" />
                </div>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, color: '#999', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 2 }}>{label}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>{val}</p>
                  <p style={{ fontSize: 11, color: '#999' }}>{sub}</p>
                </div>
              </div>
            ))}

            {/* Expect list */}
            <div style={{ marginTop: 28 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#999', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>You can expect</p>
              {[
                'A response within a few hours (immediately for emergencies)',
                'Upfront pricing before any work begins',
                'Licensed and insured technicians',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                  <CheckCircle size={14} style={{ color: '#1B6FDB', flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 13, color: '#444', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <div style={{ background: '#F7F9FC', padding: '32px' }}>
            {state === 'success' ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: 56, height: 56, background: '#DCFCE7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <CheckCircle size={26} color="#16A34A" />
                </div>
                <p style={{ fontSize: 20, fontWeight: 800, color: '#111', marginBottom: 8 }}>Request Received!</p>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, maxWidth: 280, margin: '0 auto 20px' }}>
                  We'll be in touch shortly. For urgent issues, call us directly.
                </p>
                <a href={PHONE_HREF} style={{ fontSize: 15, fontWeight: 700, color: '#1B6FDB' }}>{PHONE}</a>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#111', marginBottom: 20 }}>Tell Us About Your Issue</p>

                {/* Urgency grid */}
                <p style={{ fontSize: 11, fontWeight: 600, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>How urgent is this?</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
                  {URGENCY_OPTIONS.map(o => (
                    <button
                      key={o.val} type="button"
                      onClick={() => setUrgency(o.val)}
                      style={{
                        textAlign: 'left', fontSize: 12, fontWeight: 500,
                        padding: '10px 12px',
                        border: urgency === o.val ? '2px solid #1B6FDB' : '1.5px solid #E0E0E0',
                        background: urgency === o.val ? '#EBF3FF' : '#fff',
                        color: urgency === o.val ? '#1B6FDB' : '#555',
                        cursor: 'pointer', transition: 'all 0.12s',
                        borderRadius: 0,
                      }}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>

                {/* Name + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                  {[
                    { id: 'c-name', name: 'name', label: 'Full name *', type: 'text', ph: 'Jane Smith',       req: true, auto: 'name' },
                    { id: 'c-phone',name: 'phone', label: 'Phone *',     type: 'tel', ph: '(555) 000-0000',   req: true, auto: 'tel'  },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#666', marginBottom: 5, letterSpacing: '0.05em' }}>{f.label}</label>
                      <input
                        id={f.id} name={f.name} type={f.type} required={f.req}
                        autoComplete={f.auto} placeholder={f.ph}
                        value={form[f.name as keyof typeof form]} onChange={onChange}
                        style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #E0E0E0', borderRadius: 0, fontSize: 13, color: '#111', fontFamily: 'inherit', outline: 'none', background: '#fff', transition: 'border-color 0.15s' }}
                        onFocus={e => (e.target.style.borderColor = '#1B6FDB')}
                        onBlur={e  => (e.target.style.borderColor = '#E0E0E0')}
                      />
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div style={{ marginBottom: 12 }}>
                  <label htmlFor="c-email" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#666', marginBottom: 5, letterSpacing: '0.05em' }}>Email address</label>
                  <input
                    id="c-email" name="email" type="email" autoComplete="email" placeholder="jane@email.com"
                    value={form.email} onChange={onChange}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #E0E0E0', borderRadius: 0, fontSize: 13, color: '#111', fontFamily: 'inherit', outline: 'none', background: '#fff', transition: 'border-color 0.15s' }}
                    onFocus={e => (e.target.style.borderColor = '#1B6FDB')}
                    onBlur={e  => (e.target.style.borderColor = '#E0E0E0')}
                  />
                </div>

                {/* Service */}
                <div style={{ marginBottom: 12 }}>
                  <label htmlFor="c-svc" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#666', marginBottom: 5, letterSpacing: '0.05em' }}>Service needed</label>
                  <select
                    id="c-svc" name="service" value={form.service} onChange={onChange}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #E0E0E0', borderRadius: 0, fontSize: 13, color: form.service ? '#111' : '#999', fontFamily: 'inherit', outline: 'none', background: '#fff', appearance: 'none', cursor: 'pointer', transition: 'border-color 0.15s' }}
                    onFocus={e => (e.target.style.borderColor = '#1B6FDB')}
                    onBlur={e  => (e.target.style.borderColor = '#E0E0E0')}
                  >
                    <option value="">Select a service...</option>
                    {SERVICE_OPTIONS.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                {/* Description */}
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="c-desc" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#666', marginBottom: 5, letterSpacing: '0.05em' }}>Describe the problem *</label>
                  <textarea
                    id="c-desc" name="description" required rows={3}
                    placeholder="Tell us what's happening — the more detail the better..."
                    value={form.description} onChange={onChange}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #E0E0E0', borderRadius: 0, fontSize: 13, color: '#111', fontFamily: 'inherit', outline: 'none', background: '#fff', resize: 'none', transition: 'border-color 0.15s' }}
                    onFocus={e => (e.target.style.borderColor = '#1B6FDB')}
                    onBlur={e  => (e.target.style.borderColor = '#E0E0E0')}
                  />
                </div>

                <button
                  type="submit" disabled={state === 'submitting'}
                  style={{
                    width: '100%', background: '#F57C2B', color: '#fff',
                    border: 'none', borderRadius: 0, fontSize: 14, fontWeight: 700,
                    padding: '15px', cursor: state === 'submitting' ? 'not-allowed' : 'pointer',
                    opacity: state === 'submitting' ? 0.7 : 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => { if (state !== 'submitting') e.currentTarget.style.background = '#E06820'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#F57C2B'; }}
                >
                  {state === 'submitting'
                    ? <><span style={{ width: 16, height: 16, border: '2.5px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'inline-block' }} /> Sending...</>
                    : 'Send Service Request'
                  }
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
