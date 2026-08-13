import { useEffect, useState } from 'react'

const odooModules = ['CRM', 'Sales', 'Finance', 'Inventory', 'Projects', 'HR', 'Operations']

export default function Slide2() {
  const [step, setStep] = useState(0)
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const t = [
      setTimeout(() => setStep(1), 150),
      setTimeout(() => setStep(2), 500),
      setTimeout(() => setStep(3), 950),
      setTimeout(() => setStep(4), 1400),
      setTimeout(() => setStep(5), 1900),
    ]
    const cycle = setInterval(() => setPulse(p => (p + 1) % odooModules.length), 600)
    return () => { t.forEach(clearTimeout); clearInterval(cycle) }
  }, [])

  const show = (n: number, delay = 0): React.CSSProperties => ({
    opacity: step >= n ? 1 : 0,
    transform: step >= n ? 'none' : 'translateY(14px)',
    transition: `all 0.6s ease ${delay}s`,
  })

  return (
    <div className="slide-bg w-full h-full flex flex-col p-8 overflow-hidden">
      {/* Header */}
      <div style={{ ...show(1), marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', color: '#1e40af', textTransform: 'uppercase', marginBottom: 4 }}>02 — The Habu Ecosystem</div>
        <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', lineHeight: 1.1 }}>
          From Odoo Data to <span style={{ color: '#1e40af' }}>CEO Action.</span>
        </h2>
      </div>

      {/* Main 3-column architecture */}
      <div className="flex gap-4 items-stretch" style={{ flex: '0 0 auto', height: 220, ...show(2, 0.1) }}>

        {/* Left: Odoo cluster */}
        <div style={{ width: 180, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: '#64748b', textTransform: 'uppercase', marginBottom: 2 }}>Odoo ERP</div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
            {odooModules.map((m, i) => (
              <div key={m} className="glass rounded-xl px-3 py-1.5 flex items-center gap-2 transition-all duration-300"
                style={{
                  fontSize: 11, fontWeight: 600,
                  color: pulse === i ? '#1e40af' : '#475569',
                  background: pulse === i ? 'rgba(30,64,175,0.07)' : 'rgba(255,255,255,0.55)',
                  border: `1px solid ${pulse === i ? 'rgba(30,64,175,0.22)' : 'rgba(148,163,220,0.2)'}`,
                  opacity: step >= 2 ? 1 : 0,
                  transition: `all 0.35s ease ${i * 0.05}s`,
                }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: pulse === i ? '#3b82f6' : '#cbd5e1', flexShrink: 0, transition: 'background 0.3s' }} />
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* Left connector */}
        <div className="flex items-center" style={{ width: 60, opacity: step >= 3 ? 1 : 0, transition: 'opacity 0.5s ease 0.2s' }}>
          <div className="relative" style={{ width: '100%', height: 2, background: 'rgba(99,120,200,0.2)' }}>
            {step >= 3 && [0, 0.8, 1.6].map((d, i) => (
              <div key={i} className="absolute top-1/2 -translate-y-1/2 rounded-full"
                style={{ width: 5, height: 5, background: '#3b82f6', animation: `orbitX 2s ease-in-out ${d}s infinite` }} />
            ))}
          </div>
        </div>

        {/* Center: Engine */}
        <div className="flex-1 glass-engine rounded-3xl overflow-hidden flex flex-col" style={{ ...show(3, 0.15) }}>
          <div style={{ background: 'rgba(30,64,175,0.06)', borderBottom: '1px solid rgba(148,163,220,0.2)', padding: '10px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', color: '#1e40af', textTransform: 'uppercase' }}>VinBytes</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>AI Engine</div>
          </div>
          {/* Particle lane */}
          <div className="relative overflow-hidden mx-4 my-2 rounded-xl" style={{ height: 28, background: 'rgba(219,234,254,0.5)' }}>
            {step >= 3 && Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="absolute rounded-full" style={{
                width: 4, height: 4, background: i % 2 === 0 ? '#3b82f6' : '#818cf8',
                top: `${25 + (i % 3) * 22}%`,
                animation: `orbitX ${1.0 + i * 0.18}s ease-in-out ${i * 0.2}s infinite`, opacity: 0.7,
              }} />
            ))}
          </div>
          <div className="flex gap-0 flex-1 px-4 pb-3">
            {[
              { badge: 'Connect', title: 'API & Integration', sub: 'Connects to business data' },
              { badge: 'Orchestrate', title: 'Workflow Engine', sub: 'Decides what needs to happen' },
              { badge: 'Understand', title: 'AI / LLM', sub: 'Understands and communicates' },
            ].map((z, i) => (
              <div key={z.badge} style={{
                flex: 1, padding: '6px 8px',
                borderLeft: i > 0 ? '1px solid rgba(148,163,220,0.18)' : 'none',
              }}>
                <div style={{ fontSize: 8, fontWeight: 700, color: '#1e40af', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 3 }}>{z.badge}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a', marginBottom: 2 }}>{z.title}</div>
                <div style={{ fontSize: 10, color: '#64748b', lineHeight: 1.4 }}>{z.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right connector */}
        <div className="flex items-center" style={{ width: 60, opacity: step >= 4 ? 1 : 0, transition: 'opacity 0.5s ease 0.2s' }}>
          <div className="relative" style={{ width: '100%', height: 2, background: 'rgba(99,120,200,0.2)' }}>
            {step >= 4 && [0.4, 1.2].map((d, i) => (
              <div key={i} className="absolute top-1/2 -translate-y-1/2 rounded-full"
                style={{ width: 5, height: 5, background: '#3b82f6', animation: `orbitX 2s ease-in-out ${d}s infinite` }} />
            ))}
          </div>
        </div>

        {/* Right: Phone preview */}
        <div style={{ width: 130, ...show(4, 0.1), animation: step >= 4 ? 'float 4s ease-in-out infinite' : 'none' }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: '#64748b', textTransform: 'uppercase', marginBottom: 6 }}>Habu Mobile</div>
          <div style={{
            width: '100%', height: 192, background: '#1a1a2e', borderRadius: 24, padding: 4,
            boxShadow: '0 16px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.05)',
          }}>
            <div style={{ width: '100%', height: '100%', borderRadius: 20, background: 'linear-gradient(155deg,#dbeafe,#eff6ff)', overflow: 'hidden', padding: '24px 10px 10px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { dot: '#dc2626', title: 'Attention Required', sub: 'Revenue risk detected.' },
                { dot: '#ea580c', title: 'Follow-up Due', sub: 'ABC Corp — no update.' },
              ].map(card => (
                <div key={card.title} className="glass rounded-xl p-2.5">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: card.dot, flexShrink: 0 }} />
                    <div style={{ fontSize: 9, fontWeight: 700, color: '#0f172a' }}>{card.title}</div>
                  </div>
                  <div style={{ fontSize: 8, color: '#64748b', paddingLeft: 13 }}>{card.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Two journeys below */}
      <div className="flex gap-4 mt-4" style={{ opacity: step >= 5 ? 1 : 0, transition: 'opacity 0.7s ease 0.2s', flex: 1 }}>
        {[
          {
            num: '01', label: 'Business Risk',
            color: '#dc2626', bgColor: 'rgba(220,38,38,0.04)',
            steps: ['Odoo detects business signals', '→ Engine processes them', '→ CEO receives early warning'],
          },
          {
            num: '02', label: 'Executive Follow-up',
            color: '#1e40af', bgColor: 'rgba(30,64,175,0.04)',
            steps: ['CEO gives an instruction', '→ Engine creates & tracks workflow', '→ CEO gets follow-up when required'],
          },
        ].map(j => (
          <div key={j.num} className="flex-1 rounded-2xl p-4" style={{
            background: j.bgColor,
            border: `1px solid ${j.color === '#dc2626' ? 'rgba(220,38,38,0.14)' : 'rgba(30,64,175,0.14)'}`,
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: j.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: '#fff' }}>{j.num}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Journey {j.num} — {j.label}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {j.steps.map((s, i) => (
                <div key={i} style={{ fontSize: 13, color: i === 0 ? '#334155' : '#64748b', fontWeight: i === 0 ? 600 : 400, paddingLeft: i > 0 ? 8 : 0 }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex-1 glass rounded-2xl p-5 flex flex-col justify-center" style={{ background: 'rgba(30,64,175,0.05)', border: '1px solid rgba(30,64,175,0.12)' }}>
          <div style={{ fontSize: 13, color: '#64748b', fontStyle: 'italic', lineHeight: 1.6 }}>
            "Habu doesn't only read the ERP.<br />It also <strong style={{ color: '#1e40af' }}>acts on behalf of the executive.</strong>"
          </div>
        </div>
      </div>
    </div>
  )
}
