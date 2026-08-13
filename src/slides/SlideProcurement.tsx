import { useEffect, useState } from 'react'

const erpCards = [
  {
    domain: 'Inventory',
    metric: '1,200 units',
    detail: 'Current stock on hand',
    sub: 'Req: 1,000 units / day',
    dot: '#ea580c',
  },
  {
    domain: 'Purchase Order',
    metric: 'ETA: 5 days',
    detail: 'PO #4821 — open',
    sub: 'Next delivery expected',
    dot: '#d97706',
  },
  {
    domain: 'Supplier',
    metric: '3 delays',
    detail: 'Historical performance',
    sub: 'Late deliveries on record',
    dot: '#dc2626',
  },
  {
    domain: 'Production',
    metric: '3 days',
    detail: 'Stock coverage',
    sub: 'At current usage rate',
    dot: '#dc2626',
  },
]

const chatMessages = [
  { from: 'ceo', text: 'Can we avoid the disruption?' },
  { from: 'habu', text: 'There is a 2-day delivery gap with the current supplier. I recommend expediting the existing PO or checking alternative suppliers available in Odoo.' },
  { from: 'ceo', text: 'Which supplier can deliver faster?' },
  { from: 'habu', text: 'Supplier B has the required material with an estimated 2-day delivery time.' },
]

export default function SlideProcurement() {
  const [step, setStep] = useState(0)
  const [chatStep, setChatStep] = useState(0)

  useEffect(() => {
    const t = [
      setTimeout(() => setStep(1), 150),
      setTimeout(() => setStep(2), 550),
      setTimeout(() => setStep(3), 1050),
      setTimeout(() => setStep(4), 1600),
      setTimeout(() => setStep(5), 2200),
    ]
    // Reveal chat messages progressively
    const c1 = setTimeout(() => setChatStep(1), 2800)
    const c2 = setTimeout(() => setChatStep(2), 3500)
    const c3 = setTimeout(() => setChatStep(3), 4200)
    const c4 = setTimeout(() => setChatStep(4), 5000)
    return () => [...t, c1, c2, c3, c4].forEach(clearTimeout)
  }, [])

  return (
    <div className="slide-bg w-full h-full flex flex-col p-9 overflow-hidden">
      {/* Header */}
      <div style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? 'none' : 'translateY(14px)', transition: 'all 0.7s ease', marginBottom: 18 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', color: '#1e40af', textTransform: 'uppercase', marginBottom: 5 }}>
          Use Case 01 — Procurement Risk Intelligence
        </div>
        <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', lineHeight: 1.1 }}>
          Tell me before an operational issue<br />
          <span style={{ color: '#1e40af' }}>becomes a business problem.</span>
        </h2>
      </div>

      {/* Main layout: ERP cards | Engine | Output + Chat */}
      <div className="flex-1 flex gap-5 min-h-0">

        {/* Left: 4 ERP domain cards */}
        <div style={{ width: 188, display: 'flex', flexDirection: 'column', gap: 8, opacity: step >= 2 ? 1 : 0, transform: step >= 2 ? 'none' : 'translateX(-14px)', transition: 'all 0.7s ease' }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: '#94a3b8', textTransform: 'uppercase', marginBottom: 2 }}>ERP Data · Odoo</div>
          {erpCards.map((card, i) => (
            <div
              key={card.domain}
              className="glass-strong rounded-2xl flex-1 flex flex-col justify-between"
              style={{
                padding: '10px 14px',
                opacity: step >= 2 ? 1 : 0,
                transition: `all 0.5s ease ${i * 0.09}s`,
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: card.dot, flexShrink: 0 }} />
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{card.domain}</div>
                </div>
                <div style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{card.metric}</div>
                <div style={{ fontSize: 11, color: '#475569', marginTop: 3 }}>{card.detail}</div>
              </div>
              <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 4, fontStyle: 'italic' }}>{card.sub}</div>
            </div>
          ))}
        </div>

        {/* Center: Engine + connecting lines */}
        <div style={{ width: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0, opacity: step >= 3 ? 1 : 0, transition: 'opacity 0.7s ease 0.15s', position: 'relative' }}>

          {/* SVG converging lines from left cards to engine */}
          <svg viewBox="0 0 100 260" style={{ width: 100, height: 220, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-90%, -52%)' }} fill="none">
            {[0, 1, 2, 3].map(i => {
              const y1 = 26 + i * 58
              return (
                <g key={i}>
                  <line x1="0" y1={y1} x2="90" y2="130"
                    stroke="rgba(148,163,220,0.35)" strokeWidth="1" strokeDasharray="4 3" />
                  {step >= 3 && (
                    <circle r="3" fill="#3b82f6" opacity="0.8">
                      <animateMotion
                        dur={`${1.4 + i * 0.2}s`}
                        begin={`${i * 0.3}s`}
                        repeatCount="indefinite"
                        path={`M0,${y1} L90,130`}
                      />
                    </circle>
                  )}
                </g>
              )
            })}
            <polygon points="82,124 92,130 82,136" fill="rgba(99,120,200,0.4)" />
          </svg>

          {/* Engine */}
          <div className="glass-engine rounded-2xl text-center" style={{
            padding: '12px 14px', width: 120, zIndex: 1,
            boxShadow: '0 10px 36px rgba(30,64,175,0.14)',
          }}>
            <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.24em', color: '#1e40af', textTransform: 'uppercase', marginBottom: 2 }}>VinBytes</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>AI Engine</div>

            {/* Particle lane */}
            <div className="relative overflow-hidden rounded-lg" style={{ height: 18, background: 'rgba(219,234,254,0.55)', marginBottom: 8 }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="absolute rounded-full" style={{
                  width: i % 2 === 0 ? 4 : 3, height: i % 2 === 0 ? 4 : 3,
                  background: '#3b82f6', top: `${22 + (i % 3) * 22}%`,
                  animation: `orbitX ${1.0 + i * 0.2}s ease-in-out ${i * 0.22}s infinite`, opacity: 0.75,
                }} />
              ))}
            </div>

            {/* Workflow check labels */}
            {['Coverage check', 'Vendor history', 'Risk threshold'].map((label, i) => (
              <div key={label} style={{
                fontSize: 9, fontWeight: 600, color: step >= 4 ? '#1e40af' : '#94a3b8',
                background: step >= 4 ? 'rgba(30,64,175,0.08)' : 'rgba(248,250,252,0.6)',
                borderRadius: 8, padding: '3px 6px', marginBottom: 4,
                border: `1px solid ${step >= 4 ? 'rgba(30,64,175,0.2)' : 'rgba(148,163,220,0.18)'}`,
                transition: `all 0.4s ease ${i * 0.15}s`,
              }}>
                {label}
              </div>
            ))}
          </div>

          {/* Right connector */}
          <div className="absolute" style={{ left: '100%', top: '50%', transform: 'translateY(-50%)', width: 24, display: 'flex', alignItems: 'center', opacity: step >= 4 ? 1 : 0, transition: 'opacity 0.5s ease' }}>
            <div style={{ width: '100%', height: 2, background: 'rgba(99,120,200,0.25)', position: 'relative' }}>
              {step >= 4 && [0, 0.7].map((d, i) => (
                <div key={i} className="absolute top-1/2 -translate-y-1/2 rounded-full"
                  style={{ width: 5, height: 5, background: '#3b82f6', animation: `orbitX 1.4s ease-in-out ${d}s infinite` }} />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Risk output + CEO chat */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, opacity: step >= 4 ? 1 : 0, transform: step >= 4 ? 'none' : 'translateX(14px)', transition: 'all 0.7s ease 0.15s' }}>

          {/* Risk card */}
          <div className="glass-strong rounded-3xl overflow-hidden" style={{ animation: step >= 4 ? 'scaleIn 0.6s cubic-bezier(0.34,1.1,0.64,1) both' : 'none' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(220,38,38,0.12)', background: 'rgba(220,38,38,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#dc2626', boxShadow: '0 0 12px rgba(220,38,38,0.5)', flexShrink: 0 }} />
                <div style={{ fontSize: 14, fontWeight: 800, color: '#7f1d1d', letterSpacing: '-0.01em' }}>Procurement Risk Detected</div>
              </div>
              <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.55, paddingLeft: 19 }}>
                Critical raw material is expected to run out in <strong style={{ color: '#dc2626' }}>3 days</strong>. The current purchase order arrives in <strong style={{ color: '#dc2626' }}>5 days</strong>. The supplier has a history of delivery delays.
              </p>
            </div>
            <div style={{ padding: '10px 18px 12px', display: 'flex', gap: 14 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 3 }}>Potential Impact</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Production disruption</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 3 }}>Recommended</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#1e40af' }}>Expedite PO or evaluate alternative supplier</div>
              </div>
            </div>
          </div>

          {/* CEO chat interaction */}
          <div className="glass-strong rounded-3xl flex-1 flex flex-col overflow-hidden" style={{ minHeight: 0 }}>
            <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(148,163,220,0.18)', background: 'rgba(30,64,175,0.04)', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1e40af' }} />
              <div style={{ fontSize: 11, fontWeight: 700, color: '#1e40af' }}>Habu AI · CEO Conversation</div>
            </div>

            <div style={{ flex: 1, overflow: 'hidden', padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {chatMessages.map((msg, i) => {
                if (i >= chatStep) return null
                return (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: msg.from === 'ceo' ? 'flex-end' : 'flex-start',
                      animation: 'fadeUp 0.4s ease both',
                    }}
                  >
                    <div style={{
                      maxWidth: '80%', padding: '8px 12px', borderRadius: msg.from === 'ceo' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      background: msg.from === 'ceo' ? '#1e40af' : 'rgba(248,250,252,0.85)',
                      color: msg.from === 'ceo' ? '#fff' : '#334155',
                      fontSize: 12, lineHeight: 1.5, fontWeight: 500,
                      border: msg.from === 'habu' ? '1px solid rgba(148,163,220,0.2)' : 'none',
                      boxShadow: msg.from === 'habu' ? '0 2px 8px rgba(30,64,175,0.06)' : '0 4px 14px rgba(30,64,175,0.25)',
                    }}>
                      {msg.text}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Action buttons */}
            {step >= 5 && (
              <div style={{ padding: '8px 14px 12px', borderTop: '1px solid rgba(148,163,220,0.16)', display: 'flex', gap: 6, flexShrink: 0, animation: 'fadeUp 0.5s ease 0.2s both' }}>
                {['View Purchase Order', 'Contact Procurement', 'Request Expedited Delivery'].map((btn, i) => (
                  <div key={btn} style={{
                    flex: 1, padding: '7px 4px', borderRadius: 12, textAlign: 'center', fontSize: 10, fontWeight: 600, cursor: 'pointer',
                    background: i === 0 ? '#1e40af' : 'rgba(255,255,255,0.7)',
                    color: i === 0 ? '#fff' : '#475569',
                    border: i === 0 ? 'none' : '1px solid rgba(148,163,220,0.22)',
                  }}>
                    {btn}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
