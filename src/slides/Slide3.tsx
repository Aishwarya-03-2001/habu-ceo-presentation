import { useEffect, useState } from 'react'

const zones = [
  {
    num: '①', badge: 'Connect', title: 'API & Integration',
    examples: ['Sales API', 'Invoice API', 'Customer API', 'Inventory API'],
    desc: 'Odoo exposes the business information.',
    color: '#1e40af',
  },
  {
    num: '②', badge: 'Orchestrate', title: 'Workflow Engine',
    examples: ['Revenue < Target → Get opportunities', 'Check delayed deals', 'Calculate exposure', 'Send forward'],
    desc: 'Determines what to retrieve, what to check, and what happens next.',
    color: '#6d28d9',
  },
  {
    num: '③', badge: 'Understand', title: 'AI / LLM',
    examples: ['"Revenue risk detected."', '"₹72L exposure across 3 opportunities."'],
    desc: 'Receives processed context — not the raw ERP. Turns data into executive language.',
    color: '#0e7490',
  },
]

export default function Slide3() {
  const [step, setStep] = useState(0)
  const [activeZone, setActiveZone] = useState(0)

  useEffect(() => {
    const t = [
      setTimeout(() => setStep(1), 150),
      setTimeout(() => setStep(2), 500),
      setTimeout(() => setStep(3), 900),
    ]
    const cycle = setInterval(() => setActiveZone(z => (z + 1) % 3), 1400)
    return () => { t.forEach(clearTimeout); clearInterval(cycle) }
  }, [])

  return (
    <div className="slide-bg w-full h-full flex flex-col p-10 overflow-hidden">
      {/* Header */}
      <div style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? 'none' : 'translateY(14px)', transition: 'all 0.7s ease', marginBottom: 24 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', color: '#1e40af', textTransform: 'uppercase', marginBottom: 6 }}>03 — Inside the VinBytes AI Engine</div>
        <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', lineHeight: 1.1 }}>
          How Habu Turns Data<br /><span style={{ color: '#1e40af' }}>Into Intelligence.</span>
        </h2>
      </div>

      {/* Flow header: CONNECT → ORCHESTRATE → UNDERSTAND */}
      <div style={{ opacity: step >= 2 ? 1 : 0, transition: 'opacity 0.6s ease 0.1s', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        {zones.map((z, i) => (
          <div key={z.badge} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="rounded-xl px-4 py-2 transition-all duration-500" style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              background: activeZone === i ? z.color : 'rgba(255,255,255,0.6)',
              color: activeZone === i ? '#fff' : z.color,
              border: `1px solid ${z.color}30`,
              boxShadow: activeZone === i ? `0 4px 16px ${z.color}30` : 'none',
              backdropFilter: 'blur(12px)',
            }}>
              {z.badge}
            </div>
            {i < 2 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 28, height: 1, background: 'rgba(148,163,220,0.4)' }} />
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                  <path d="M0 0l6 4-6 4V0z" fill="rgba(99,120,200,0.35)" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* One large glass engine with three zones */}
      <div className="flex-1 glass-engine rounded-3xl overflow-hidden flex flex-col" style={{
        opacity: step >= 2 ? 1 : 0,
        transform: step >= 2 ? 'scale(1)' : 'scale(0.97)',
        transition: 'all 0.8s cubic-bezier(0.34,1.1,0.64,1) 0.1s',
      }}>
        {/* Engine label bar */}
        <div style={{ background: 'rgba(30,64,175,0.06)', borderBottom: '1px solid rgba(148,163,220,0.2)', padding: '10px 24px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', color: '#1e40af', textTransform: 'uppercase' }}>VinBytes</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>AI Engine</div>
          </div>
          {/* Particle lane */}
          <div className="flex-1 relative overflow-hidden rounded-xl" style={{ height: 22, background: 'rgba(219,234,254,0.5)', marginLeft: 8 }}>
            {step >= 3 && Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="absolute rounded-full" style={{
                width: i % 3 === 0 ? 5 : 3, height: i % 3 === 0 ? 5 : 3,
                background: i % 2 === 0 ? '#3b82f6' : '#818cf8',
                top: `${28 + (i % 2) * 28}%`,
                animation: `orbitX ${1.0 + i * 0.15}s ease-in-out ${i * 0.17}s infinite`, opacity: 0.75,
              }} />
            ))}
          </div>
        </div>

        {/* Three zones */}
        <div className="flex-1 flex">
          {zones.map((zone, i) => {
            const isActive = activeZone === i
            return (
              <div key={zone.badge} className="flex-1 p-5 flex flex-col transition-all duration-500" style={{
                borderRight: i < 2 ? '1px solid rgba(148,163,220,0.18)' : 'none',
                background: isActive ? `${zone.color}08` : 'transparent',
              }}>
                {/* Zone header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    background: isActive ? zone.color : 'rgba(148,163,220,0.2)',
                    transition: 'all 0.5s ease',
                    boxShadow: isActive ? `0 4px 14px ${zone.color}35` : 'none',
                  }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: isActive ? '#fff' : '#94a3b8' }}>{zone.num}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: zone.color, marginBottom: 1 }}>{zone.badge}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>{zone.title}</div>
                  </div>
                </div>

                <div style={{ fontSize: 12, color: '#64748b', marginBottom: 12, lineHeight: 1.5 }}>{zone.desc}</div>

                <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 6 }}>Example</div>
                <div className="flex flex-col gap-2 flex-1">
                  {zone.examples.map((ex, j) => (
                    <div key={j} className="rounded-xl px-3 py-2" style={{
                      fontSize: 12, fontWeight: j === 0 ? 600 : 400,
                      color: j === 0 ? '#334155' : '#64748b',
                      background: isActive ? `${zone.color}06` : 'rgba(248,250,252,0.7)',
                      border: `1px solid ${isActive ? `${zone.color}18` : 'rgba(148,163,220,0.15)'}`,
                      fontFamily: zone.num === '③' && j > 0 ? 'inherit' : 'inherit',
                      fontStyle: zone.num === '③' ? 'italic' : 'normal',
                    }}>
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
