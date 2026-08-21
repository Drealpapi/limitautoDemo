import { useState } from 'react';
import { Fa, Icons } from '../lib/icons';

const PHONE      = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

const SERVICES = [
  'Emergency Plumbing','Drain Cleaning','Leak Detection & Repair',
  'Water Heater Services','Pipe Repair & Replacement',
  'Bathroom & Kitchen Plumbing','Sewer Line Services',
  'Commercial Plumbing','General Inquiry',
];

const URGENCY = [
  { val: 'emergency', label: 'Emergency — Right Now', icon: Icons.alertCircle },
  { val: 'today',     label: 'Today if Possible',    icon: Icons.bolt         },
  { val: 'scheduled', label: 'Schedule for Later',   icon: Icons.calendar     },
  { val: 'quote',     label: 'Just a Quote',         icon: Icons.message      },
];

type State = 'idle' | 'submitting' | 'success';

const inp: React.CSSProperties = {
  width: '100%', padding: '11px 14px',
  border: '1.5px solid #DDE4F0', borderRadius: 7,
  fontSize: 13.5, color: '#1E2D45',
  fontFamily: 'inherit', outline: 'none',
  background: '#F6F8FC',
  transition: 'border-color 0.15s, box-shadow 0.15s, background 0.15s',
};

export default function ContactSection() {
  const [form, setForm]       = useState({ name:'', phone:'', email:'', service:'', description:'' });
  const [urgency, setUrgency] = useState('');
  const [state, setState]     = useState<State>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#4A6FA5';
    e.target.style.boxShadow   = '0 0 0 3px rgba(74,111,165,0.12)';
    e.target.style.background  = '#fff';
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#DDE4F0';
    e.target.style.boxShadow   = 'none';
    e.target.style.background  = '#F6F8FC';
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('submitting');
    await new Promise(r => setTimeout(r, 1100));
    setState('success');
  };

  return (
    <section id="contact" style={{ background: '#fff', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ width: 24, height: 2.5, background: '#4A6FA5', borderRadius: 2 }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#4A6FA5', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Book a Service
          </span>
        </div>
        <div style={{ marginBottom: 52 }}>
          <h2 style={{ fontSize: 'clamp(1.85rem,3.5vw,2.6rem)', fontWeight: 800, color: '#1E2D45', lineHeight: 1.08, letterSpacing: '-0.7px', marginBottom: 10 }}>
            Request a Service or Free Quote
          </h2>
          <p style={{ fontSize: 15, color: '#6B7A99', maxWidth: 480, lineHeight: 1.7 }}>
            Fill out the form and we'll get back to you quickly. For emergencies, call us directly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="contact-grid">

          {/* LEFT */}
          <div>
            <a href={PHONE_HREF} style={{
              display: 'flex', alignItems: 'center', gap: 16,
              background: '#1E2D45', borderRadius: 12, padding: '20px 24px',
              textDecoration: 'none', marginBottom: 18,
              boxShadow: '0 8px 28px rgba(30,45,69,0.28), inset 0 1px 0 rgba(255,255,255,0.08)',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 14px 36px rgba(30,45,69,0.36), inset 0 1px 0 rgba(255,255,255,0.08)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 8px 28px rgba(30,45,69,0.28), inset 0 1px 0 rgba(255,255,255,0.08)'; }}
              aria-label={`Call us at ${PHONE}`}
            >
              <div style={{ width: 46, height: 46, borderRadius: 10, flexShrink: 0, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Fa icon={Icons.phone} style={{ fontSize: 19, color: '#fff' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>
                  Call Now — 24/7
                </p>
                <p style={{ fontSize: 20, fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.4px' }}>{PHONE}</p>
              </div>
              <span style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, padding: '4px 10px', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '0.1em', flexShrink: 0 }}>
                EMERGENCY
              </span>
            </a>

            {[
              { icon: Icons.envelope, label: 'Email',        val: 'service@flowrightplumbing.com', sub: 'Response within a few hours' },
              { icon: Icons.clock,    label: 'Office Hours',  val: 'Mon–Fri  7:00 AM – 7:00 PM',   sub: '24/7 for emergencies'        },
              { icon: Icons.location, label: 'Service Area',  val: 'Greater Toronto Area, ON',      sub: 'And surrounding Ontario cities' },
            ].map(({ icon, label, val, sub }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '15px 0', borderBottom: '1px solid #F0F3FA' }}>
                <div style={{ width: 40, height: 40, borderRadius: 9, flexShrink: 0, background: '#EBF1FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Fa icon={icon} style={{ fontSize: 15, color: '#4A6FA5' }} />
                </div>
                <div>
                  <p style={{ fontSize: 10.5, fontWeight: 700, color: '#9CAABA', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 2 }}>{label}</p>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: '#1E2D45' }}>{val}</p>
                  <p style={{ fontSize: 12, color: '#9CAABA' }}>{sub}</p>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 26, background: '#EBF1FA', borderRadius: 10, padding: '18px 20px', border: '1px solid #D1DCF0' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#4A6FA5', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
                What to Expect
              </p>
              {[
                'Response within hours (immediate for emergencies)',
                'Upfront pricing before any work begins',
                'Licensed and insured technicians on every job',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, marginBottom: 9 }}>
                  <Fa icon={Icons.check} style={{ color: '#4A6FA5', flexShrink: 0, marginTop: 3, fontSize: 13 }} />
                  <span style={{ fontSize: 13.5, color: '#3D4F66', lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: form */}
          <div style={{ background: '#F6F8FC', borderRadius: 14, padding: '36px', border: '1px solid #E8EDF6', boxShadow: '0 4px 20px rgba(30,45,69,0.05)' }}>
            {state === 'success' ? (
              <div style={{ textAlign: 'center', padding: '52px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#EBF1FA', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 4px 16px rgba(74,111,165,0.2)' }}>
                  <Fa icon={Icons.check} style={{ fontSize: 26, color: '#4A6FA5' }} />
                </div>
                <p style={{ fontSize: 21, fontWeight: 800, color: '#1E2D45', marginBottom: 10 }}>Request Received!</p>
                <p style={{ fontSize: 14, color: '#6B7A99', lineHeight: 1.7, maxWidth: 280, margin: '0 auto 24px' }}>
                  We'll be in touch shortly. For urgent issues, call us directly.
                </p>
                <a href={PHONE_HREF} className="btn btn-navy"
                  style={{ textDecoration: 'none', padding: '12px 26px', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <Fa icon={Icons.phone} style={{ fontSize: 13 }} /> {PHONE}
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate aria-label="Service request">
                <p style={{ fontSize: 16, fontWeight: 700, color: '#1E2D45', marginBottom: 22, letterSpacing: '-0.2px' }}>
                  Tell Us About Your Issue
                </p>

                <p style={{ fontSize: 11, fontWeight: 700, color: '#9CAABA', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 9 }}>
                  How urgent?
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 22 }}>
                  {URGENCY.map(o => {
                    const isActive = urgency === o.val;
                    return (
                      <button key={o.val} type="button" onClick={() => setUrgency(o.val)} style={{
                        textAlign: 'left', fontSize: 12.5, fontWeight: 500,
                        padding: '10px 12px', borderRadius: 8,
                        border: isActive ? '2px solid #4A6FA5' : '1.5px solid #DDE4F0',
                        background: isActive ? '#EBF1FA' : '#fff',
                        color: isActive ? '#1E2D45' : '#6B7A99',
                        cursor: 'pointer', transition: 'all 0.14s ease',
                        display: 'flex', alignItems: 'center', gap: 7,
                        boxShadow: isActive ? '0 2px 8px rgba(74,111,165,0.12)' : 'none',
                      }}
                        onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.borderColor = '#B0C4DE'; (e.currentTarget as HTMLElement).style.background = '#F0F4FB'; } }}
                        onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.borderColor = '#DDE4F0'; (e.currentTarget as HTMLElement).style.background = '#fff'; } }}
                      >
                        <Fa icon={o.icon} style={{ flexShrink: 0, fontSize: 12, color: isActive ? '#4A6FA5' : '#9CAABA' }} />
                        {o.label}
                      </button>
                    );
                  })}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                  {[
                    { id:'c-name', name:'name',  label:'Full name *',  type:'text', ph:'Jane Smith',      req:true, auto:'name' },
                    { id:'c-phone',name:'phone', label:'Phone *',      type:'tel',  ph:'(555) 000-0000',  req:true, auto:'tel'  },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} style={{ display:'block', fontSize:11, fontWeight:600, color:'#7A8FA6', marginBottom:5, letterSpacing:'0.05em' }}>{f.label}</label>
                      <input id={f.id} name={f.name} type={f.type} required={f.req} autoComplete={f.auto} placeholder={f.ph}
                        value={form[f.name as keyof typeof form]} onChange={onChange}
                        style={inp} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 12 }}>
                  <label htmlFor="c-email" style={{ display:'block', fontSize:11, fontWeight:600, color:'#7A8FA6', marginBottom:5, letterSpacing:'0.05em' }}>Email address</label>
                  <input id="c-email" name="email" type="email" autoComplete="email" placeholder="jane@email.com"
                    value={form.email} onChange={onChange} style={inp} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div style={{ marginBottom: 12 }}>
                  <label htmlFor="c-svc" style={{ display:'block', fontSize:11, fontWeight:600, color:'#7A8FA6', marginBottom:5, letterSpacing:'0.05em' }}>Service needed</label>
                  <select id="c-svc" name="service" value={form.service} onChange={onChange}
                    style={{ ...inp, appearance:'none', cursor:'pointer', color: form.service ? '#1E2D45' : '#9CAABA' }}
                    onFocus={onFocus} onBlur={onBlur}>
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: 22 }}>
                  <label htmlFor="c-desc" style={{ display:'block', fontSize:11, fontWeight:600, color:'#7A8FA6', marginBottom:5, letterSpacing:'0.05em' }}>Describe the problem *</label>
                  <textarea id="c-desc" name="description" required rows={4}
                    placeholder="Tell us what's happening — more detail helps us respond faster..."
                    value={form.description} onChange={onChange}
                    style={{ ...inp, resize:'none', lineHeight:1.65 }}
                    onFocus={onFocus} onBlur={onBlur} />
                </div>

                <button type="submit" disabled={state === 'submitting'} className="btn btn-navy"
                  style={{ width: '100%', padding: '15px', fontSize: 14.5, borderRadius: 8, fontWeight: 700, opacity: state === 'submitting' ? 0.7 : 1, cursor: state === 'submitting' ? 'not-allowed' : 'pointer', justifyContent: 'center' }}>
                  {state === 'submitting' ? (
                    <>
                      <span style={{ width:16, height:16, border:'2.5px solid rgba(255,255,255,0.3)', borderTopColor:'#fff', borderRadius:'50%', animation:'spin 0.7s linear infinite', display:'inline-block' }} />
                      Sending…
                    </>
                  ) : (
                    <>Send Service Request <Fa icon={Icons.arrowRight} style={{ fontSize: 13 }} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        @media (max-width: 480px) { .contact-grid > div:last-child { padding: 22px !important; } }
      `}</style>
    </section>
  );
}
