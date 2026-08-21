import { Users } from 'lucide-react';

const TEAM = [
  {
    name: 'Mike Warner',
    role: 'Master Plumber',
    roleColor: '#3B82F6',
    bio: '15+ years of experience in residential and commercial plumbing.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Guy Hawkins',
    role: 'Plumbing Technician',
    roleColor: '#3B82F6',
    bio: 'Specialist in leak detection and pipe repair systems.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Cheryl Russell',
    role: 'Senior Plumber',
    roleColor: '#3B82F6',
    bio: 'Expert in water heater installations and drain cleaning.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Jake Cooper',
    role: 'Emergency Specialist',
    roleColor: '#3B82F6',
    bio: 'On-call 24/7 for urgent plumbing emergencies across the city.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80&auto=format&fit=crop',
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      style={{
        background: '#0C1829',
        padding: '96px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '60%', height: '50%',
        background: 'radial-gradient(ellipse at center top, rgba(37,99,235,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          {/* Eyebrow pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(37,99,235,0.12)',
            border: '1px solid rgba(37,99,235,0.25)',
            borderRadius: 100, padding: '6px 16px',
            marginBottom: 22,
          }}>
            <Users size={13} color="#3B82F6" />
            <span style={{
              fontSize: 11, fontWeight: 700, color: '#60A5FA',
              letterSpacing: '0.16em', textTransform: 'uppercase',
            }}>
              Our Team
            </span>
          </div>

          <h2
            id="team-heading"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800, color: '#F1F5F9',
              lineHeight: 1.05, letterSpacing: '-1px', marginBottom: 14,
            }}
          >
            Meet Our Professional Team
          </h2>

          <p style={{
            fontSize: 16, color: 'rgba(148,175,210,0.75)',
            lineHeight: 1.7, maxWidth: 500, margin: '0 auto',
          }}>
            Licensed, insured, and background-checked professionals who take pride in every job.
          </p>
        </div>

        {/* Team grid */}
        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
        >
          {TEAM.map(member => (
            <div
              key={member.name}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                overflow: 'hidden',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-5px)';
                el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.45)';
                el.style.borderColor = 'rgba(37,99,235,0.3)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
                el.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              {/* Photo */}
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center top',
                    display: 'block',
                    filter: 'brightness(0.88) saturate(0.9)',
                    transition: 'transform 0.45s ease',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.04)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                />
                {/* Bottom gradient */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
                  background: 'linear-gradient(to top, rgba(8,14,28,0.92) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Name + role overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 16px 16px' }}>
                  <p style={{
                    fontSize: 15.5, fontWeight: 700, color: '#F1F5F9',
                    lineHeight: 1.2, marginBottom: 4,
                  }}>
                    {member.name}
                  </p>
                  <p style={{
                    fontSize: 12, fontWeight: 600,
                    color: member.roleColor,
                    letterSpacing: '0.02em',
                  }}>
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div style={{ padding: '14px 16px 18px' }}>
                <p style={{
                  fontSize: 13, color: 'rgba(148,175,210,0.72)',
                  lineHeight: 1.6,
                }}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px)  { .team-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px)  { .team-grid { grid-template-columns: repeat(2,1fr) !important; gap: 12px !important; } }
      `}</style>
    </section>
  );
}
