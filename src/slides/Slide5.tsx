import { useEffect, useState } from 'react'

const morning = [
  { time: '8:45', label: 'Sales update', from: 'Sales Manager' },
  { time: '9:10', label: 'Finance email', from: 'CFO Office' },
  { time: '9:30', label: 'Operations call', from: 'Ops Team' },
  { time: '10:00', label: 'Project update', from: 'PM' },
  { time: '10:30', label: 'Clarification requested', from: 'CEO' },
]

const briefing = [
  { dot: '#dc2626', label: 'Revenue', detail: '₹72L potential exposure', level: 'Critical' },
  { dot: '#ea580c', label: 'Collections', detail: '₹42L overdue', level: 'Attention' },
  { dot: '#ea580c', label: 'Operations', detail: 'Customer X delivery at risk', level: 'Attention' },
  { dot: '#16a34a', label: 'People', detail: 'No critical issues', level: 'Healthy' },
]

export default function Slide5() {
  const [step, setStep] = useState(0)
  const [activeMorning, setActiveMorning] = useState(-1)

  useEffect(() => {
    const t = [
      setTimeout(() => setStep(1), 150),
      setTimeout(() => setStep(2), 600),
      setTimeout(() => setStep(3), 1200),
      setTimeout(() => setStep(4), 2000),
      setTimeout(() => setStep(5), 2700),
    ]
    // Cycle through morning events
    let i = 0
    const cycle = setInterval(() => { setActiveMorning(i % morning.length); i++ }, 500)
    return () => { t.forEach(clearTimeout); clearInterval(cycle) }
  }, [])

  return (
    <div className="slide-bg w-full h-full flex flex-col p-10 overflow-hidden">
      {/* Header */}
      <div style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? 'none' : 'translateY(14px)', transition: 'all 0.7s ease', marginBottom: 22 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', color: '#1e40af', textTransform: 'uppercase', marginBottom: 6 }}>05 — The Morning Problem</div>
        <h2 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', lineHeight: 1.1 }}>
          "I shouldn't have to ask five people<br />
          <span style={{ color: '#1e40af' }}>what is happening in my business."</span>
        </h2>
      </div>

      {/* Three-column layout */}
      <div className="flex-1 flex gap-5 min-h-0">
        {/* Left: Morning timeline */}
        <div style={{ width: 220, opacity: step >= 2 ? 1 : 0, transform: step >= 2 ? 'none' : 'translateX(-14px)', transition: 'all 0.7s ease', display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: '#64748b', textTransform: 'uppercase', marginBottom: 8 }}>A normal CEO morning</div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {morning.map((m, i) => (
              <div key={m.time} className="rounded-xl px-3 py-2.5 transition-all duration-300 flex items-start gap-3" style={{
                background: activeMorning === i ? 'rgba(30,64,175,0.07)' : 'rgba(255,255,255,0.55)',
                border: `1px solid ${activeMorning === i ? 'rgba(30,64,175,0.22)' : 'rgba(148,163,220,0.18)'}`,
                backdropFilter: 'blur(12px)',
                opacity: step >= 2 ? 1 : 0,
                transition: `all 0.4s ease ${i * 0.07}s`,
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: activeMorning === i ? '#1e40af' : '#94a3b8', fontVariantNumeric: 'tabular-nums', flexShrink: 0, paddingTop: 1 }}>{m.time}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#334155' }}>{m.label}</div>
                  <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 1 }}>{m.from}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Engine + flow */}
        <div style={{ width: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0, opacity: step >= 3 ? 1 : 0, transition: 'opacity 0.6s ease 0.2s' }}>
          {/* Converging lines */}
          <svg viewBox="0 0 80 180" style={{ width: 80, height: 140 }} fill="none">
            {[0, 1, 2, 3, 4].map(i => (
              <line key={i} x1="0" y1={20 + i * 36} x2="80" y2="90"
                stroke={activeMorning === i ? '#3b82f6' : 'rgba(148,163,220,0.35)'}
                strokeWidth={activeMorning === i ? 2 : 1}
                strokeDasharray="4 3"
                style={{ transition: 'stroke 0.3s ease' }}
              />
            ))}
            <polygon points="72,85 80,90 72,95" fill="rgba(99,120,200,0.4)" />
          </svg>

          {/* Engine pill */}
          <div className="glass-engine rounded-2xl text-center" style={{ padding: '8px 14px', minWidth: 100 }}>
            <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.22em', color: '#1e40af', textTransform: 'uppercase', marginBottom: 2 }}>VinBytes</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a' }}>AI Engine</div>
            <div className="relative overflow-hidden rounded-lg mt-2" style={{ height: 16, background: 'rgba(219,234,254,0.5)' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="absolute rounded-full" style={{
                  width: 3, height: 3, background: '#3b82f6',
                  top: `${25 + (i % 2) * 30}%`,
                  animation: `orbitX ${1.2 + i * 0.2}s ease-in-out ${i * 0.24}s infinite`, opacity: 0.7,
                }} />
              ))}
            </div>
          </div>

          {/* Down arrow */}
          <svg viewBox="0 0 30 40" style={{ width: 30, height: 36 }} fill="none">
            <line x1="15" y1="0" x2="15" y2="30" stroke="rgba(148,163,220,0.45)" strokeWidth="1.5" />
            <polygon points="8,22 15,34 22,22" fill="rgba(99,120,200,0.32)" />
          </svg>
        </div>

        {/* Right: Executive Briefing */}
        <div style={{ flex: 1, opacity: step >= 4 ? 1 : 0, transform: step >= 4 ? 'none' : 'translateX(14px)', transition: 'all 0.7s ease 0.2s', display: 'flex', flexDirection: 'column' }}>
          <div className="glass-strong rounded-3xl overflow-hidden flex-1 flex flex-col">
            {/* Header */}
            <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(148,163,220,0.18)', background: 'rgba(30,64,175,0.05)' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#1e40af', marginBottom: 2 }}>Executive Briefing</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#0f172a' }}>Good Morning. Here's what needs your attention.</div>
            </div>

            {/* Briefing items */}
            <div style={{ flex: 1, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {step >= 5 && briefing.map((item, i) => (
                <div key={item.label} className="rounded-2xl px-4 py-3 flex items-center gap-3 transition-all" style={{
                  background: 'rgba(248,250,252,0.7)',
                  border: '1px solid rgba(148,163,220,0.16)',
                  opacity: step >= 5 ? 1 : 0,
                  transition: `all 0.5s ease ${i * 0.12}s`,
                  animation: `fadeUp 0.5s ease ${i * 0.12}s both`,
                }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.dot, flexShrink: 0, boxShadow: item.level !== 'Healthy' ? `0 0 8px ${item.dot}50` : 'none' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 1 }}>{item.detail}</div>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: item.level === 'Healthy' ? '#16a34a' : item.level === 'Critical' ? '#dc2626' : '#ea580c', letterSpacing: '0.08em' }}>
                    {item.level}
                  </div>
                </div>
              ))}
            </div>

            {/* Impact line */}
            {step >= 5 && (
              <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(148,163,220,0.18)', background: 'rgba(30,64,175,0.04)', animation: 'fadeIn 0.7s ease 0.6s both' }}>
                <p style={{ fontSize: 13, color: '#64748b', fontStyle: 'italic' }}>
                  Instead of collecting updates → <strong style={{ color: '#1e40af' }}>receive the business picture.</strong>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
