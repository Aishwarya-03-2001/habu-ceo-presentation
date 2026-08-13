import { useEffect, useState } from 'react'

const instructions = [
  'Follow up with ABC Corp.',
  'Get the updated sales numbers.',
  'Check Project X status.',
  'Ask Finance about the payment.',
]

const followups = [
  { dot: '#dc2626', label: 'ABC Corp', sub: 'No update received', level: 'red' },
  { dot: '#ea580c', label: 'Project X', sub: 'Status: Delayed', level: 'orange' },
  { dot: '#ea580c', label: 'Customer payment', sub: 'Status: Pending', level: 'orange' },
]

export default function Slide6() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = [
      setTimeout(() => setStep(1), 150),
      setTimeout(() => setStep(2), 600),
      setTimeout(() => setStep(3), 1100),
      setTimeout(() => setStep(4), 1700),
      setTimeout(() => setStep(5), 2400),
    ]
    return () => t.forEach(clearTimeout)
  }, [])

  return (
    <div className="slide-bg w-full h-full flex flex-col p-10 overflow-hidden">
      {/* Header */}
      <div style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? 'none' : 'translateY(14px)', transition: 'all 0.7s ease', marginBottom: 22 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', color: '#1e40af', textTransform: 'uppercase', marginBottom: 6 }}>06 — The Follow-Up Problem</div>
        <h2 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', lineHeight: 1.1 }}>
          "I asked for it yesterday.<br />
          <span style={{ color: '#1e40af' }}>What happened?"</span>
        </h2>
      </div>

      <div className="flex-1 flex gap-6 min-h-0">
        {/* Left: CEO instruction cards */}
        <div style={{ width: 210, opacity: step >= 2 ? 1 : 0, transform: step >= 2 ? 'none' : 'translateX(-14px)', transition: 'all 0.7s ease', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: '#64748b', textTransform: 'uppercase', marginBottom: 4 }}>CEO Instructions</div>
          {instructions.map((ins, i) => (
            <div key={i} className="glass rounded-2xl px-4 py-3 transition-all duration-300" style={{
              fontSize: 12, fontWeight: 500, color: '#475569',
              opacity: step >= 2 ? 1 : 0,
              transition: `all 0.5s ease ${i * 0.1}s`,
            }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#1e40af', marginBottom: 6, opacity: 0.6 }} />
              {ins}
            </div>
          ))}
          <div style={{ fontSize: 11, color: '#94a3b8', fontStyle: 'italic', paddingLeft: 4, paddingTop: 4, opacity: step >= 2 ? 1 : 0, transition: 'opacity 0.5s ease 0.4s' }}>
            These instructions enter a pending state…
          </div>
        </div>

        {/* Center: Habu remembers */}
        <div style={{ width: 160, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, opacity: step >= 3 ? 1 : 0, transition: 'opacity 0.7s ease 0.1s' }}>
          <div className="glass-engine rounded-2xl text-center" style={{ padding: '14px 16px', width: '100%', boxShadow: '0 8px 28px rgba(30,64,175,0.12)' }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.22em', color: '#1e40af', textTransform: 'uppercase', marginBottom: 3 }}>VinBytes</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>Habu Remembers.</div>
            <div className="relative overflow-hidden rounded-lg" style={{ height: 20, background: 'rgba(219,234,254,0.5)' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="absolute rounded-full" style={{
                  width: 3, height: 3, background: '#3b82f6',
                  top: `${25 + (i % 2) * 30}%`,
                  animation: `orbitX ${1.2 + i * 0.2}s ease-in-out ${i * 0.22}s infinite`, opacity: 0.7,
                }} />
              ))}
            </div>
          </div>

          <svg viewBox="0 0 30 40" style={{ width: 30, height: 36 }} fill="none">
            <line x1="15" y1="0" x2="15" y2="30" stroke="rgba(148,163,220,0.45)" strokeWidth="1.5" />
            <polygon points="8,22 15,34 22,22" fill="rgba(99,120,200,0.32)" />
          </svg>

          {/* ABC Corp follow-up card */}
          {step >= 3 && (
            <div className="glass-strong rounded-2xl w-full" style={{ padding: '10px 12px', animation: 'scaleIn 0.5s ease both' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: '#1e40af', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>Tracked by Habu</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a', marginBottom: 2 }}>ABC Corp</div>
              <div style={{ fontSize: 10, color: '#64748b', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span>₹28L opportunity</span>
                <span>Owner: Sales Manager</span>
                <span style={{ color: '#dc2626', fontWeight: 600 }}>Due: Tomorrow</span>
              </div>
            </div>
          )}
        </div>

        {/* Right: Notification + CEO query */}
        <div style={{ flex: 1, opacity: step >= 4 ? 1 : 0, transform: step >= 4 ? 'none' : 'translateX(14px)', transition: 'all 0.7s ease 0.2s', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Notification */}
          {step >= 4 && (
            <div className="glass-strong rounded-2xl" style={{ padding: '14px 18px', animation: 'notificationDrop 0.5s ease both', borderLeft: '3px solid #dc2626' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#dc2626', boxShadow: '0 0 10px rgba(220,38,38,0.45)', flexShrink: 0 }} />
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Executive Follow-up</div>
              </div>
              <div style={{ fontSize: 12, color: '#475569', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span>No update received.</span>
                <span style={{ color: '#dc2626', fontWeight: 600 }}>Opportunity: ₹28L · Status: Delayed</span>
              </div>
              <div style={{ marginTop: 10, paddingLeft: 20 }}>
                <div style={{ display: 'inline-block', padding: '6px 14px', borderRadius: 10, background: '#1e40af', color: '#fff', fontSize: 11, fontWeight: 600 }}>
                  Follow Up →
                </div>
              </div>
            </div>
          )}

          {/* CEO query + Habu response */}
          {step >= 5 && (
            <div className="glass-strong rounded-2xl flex-1 flex flex-col" style={{ padding: '14px 18px', animation: 'fadeUp 0.6s ease 0.2s both' }}>
              {/* CEO query */}
              <div style={{ marginLeft: 'auto', background: '#1e40af', color: '#fff', borderRadius: '16px 16px 4px 16px', padding: '8px 14px', fontSize: 12, fontWeight: 500, marginBottom: 10, maxWidth: '80%' }}>
                "Show me everything I'm waiting for."
              </div>

              {/* Habu response */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#1e40af', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>3 Executive Follow-ups</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {followups.map((f, i) => (
                    <div key={f.label} className="rounded-xl px-3 py-2.5 flex items-center gap-3" style={{
                      background: 'rgba(248,250,252,0.7)',
                      border: '1px solid rgba(148,163,220,0.16)',
                      animation: `fadeUp 0.4s ease ${i * 0.1}s both`,
                    }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: f.dot, flexShrink: 0, boxShadow: `0 0 6px ${f.dot}50` }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a' }}>{f.label}</div>
                        <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 1 }}>{f.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: 10, borderTop: '1px solid rgba(148,163,220,0.18)' }}>
                <p style={{ fontSize: 12, color: '#64748b', fontStyle: 'italic' }}>
                  "Habu doesn't just tell the CEO what happened. It <strong style={{ color: '#1e40af' }}>remembers what the CEO asked to happen.</strong>"
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
