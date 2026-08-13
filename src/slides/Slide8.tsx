import { useEffect, useState } from 'react'

function MiniPhone({ index, currentStep, title, children }: {
  index: number; currentStep: number; title: string; children: React.ReactNode
}) {
  const visible = currentStep >= index + 2
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, flex: 1,
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: `all 0.65s cubic-bezier(0.34,1.1,0.64,1) ${index * 0.16}s`,
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: '#1e40af', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#64748b', marginTop: 1 }}>{title}</div>
      </div>

      <div style={{
        width: 155, height: 296, background: '#15152a', borderRadius: 28, padding: 4,
        boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.06)',
        animation: visible ? `float ${3.5 + index * 0.3}s ease-in-out ${index * 0.35}s infinite` : 'none',
      }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 25, background: 'linear-gradient(155deg,#dbeafe 0%,#eff6ff 100%)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          {/* Dynamic island */}
          <div style={{ position: 'absolute', width: 52, height: 13, background: '#0a0a18', borderRadius: 10, top: 8, left: '50%', transform: 'translateX(-50%)', zIndex: 5 }} />
          {/* Header */}
          <div style={{ background: 'rgba(30,64,175,0.07)', borderBottom: '1px solid rgba(148,163,220,0.18)', padding: '22px 12px 8px', flexShrink: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#1e40af' }}>Habu</div>
          </div>
          {/* Body */}
          <div style={{ flex: 1, overflow: 'hidden', padding: '10px 10px 8px', display: 'flex', flexDirection: 'column', gap: 7 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function GCard({ children, red }: { children: React.ReactNode; red?: boolean }) {
  return (
    <div style={{
      borderRadius: 14, padding: '9px 10px',
      background: red ? 'rgba(220,38,38,0.06)' : 'rgba(255,255,255,0.68)',
      border: `1px solid ${red ? 'rgba(220,38,38,0.2)' : 'rgba(148,163,220,0.2)'}`,
      backdropFilter: 'blur(12px)',
    }}>
      {children}
    </div>
  )
}

function Arrow({ visible }: { visible: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: 60, width: 28, opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease 0.3s' }}>
      <div style={{ width: 1, height: 44, background: 'rgba(148,163,220,0.38)' }} />
      <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
        <path d="M4 7L0 0h8z" fill="rgba(99,120,200,0.38)" />
      </svg>
    </div>
  )
}

export default function Slide8() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = [
      setTimeout(() => setStep(1), 150),
      setTimeout(() => setStep(2), 350),
      setTimeout(() => setStep(3), 650),
      setTimeout(() => setStep(4), 950),
      setTimeout(() => setStep(5), 1250),
    ]
    return () => t.forEach(clearTimeout)
  }, [])

  return (
    <div className="slide-bg w-full h-full flex flex-col p-10 overflow-hidden">
      {/* Header */}
      <div style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? 'none' : 'translateY(14px)', transition: 'all 0.7s ease', marginBottom: 22 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', color: '#1e40af', textTransform: 'uppercase', marginBottom: 6 }}>08 — The CEO + AI</div>
        <h2 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', lineHeight: 1.1 }}>
          Don't just receive the answer.<br /><span style={{ color: '#1e40af' }}>Ask why.</span>
        </h2>
      </div>

      {/* 4 phones + connectors */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', gap: 0, minHeight: 0, justifyContent: 'center' }}>

        <MiniPhone index={0} currentStep={step} title="Attention">
          <GCard red>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#dc2626', boxShadow: '0 0 8px rgba(220,38,38,0.5)', flexShrink: 0 }} />
              <div style={{ fontSize: 10, fontWeight: 700, color: '#7f1d1d' }}>Revenue Risk</div>
            </div>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#dc2626', letterSpacing: '-0.01em' }}>₹72L</div>
            <div style={{ fontSize: 9, color: '#b91c1c', marginTop: 2 }}>Potential exposure</div>
          </GCard>
          <div style={{ padding: '7px 10px', borderRadius: 12, background: '#1e40af', color: '#fff', fontSize: 10, fontWeight: 600, textAlign: 'center' }}>
            View Insight →
          </div>
        </MiniPhone>

        <Arrow visible={step >= 3} />

        <MiniPhone index={1} currentStep={step} title="Understand">
          <GCard>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#0f172a', marginBottom: 5 }}>Why is this happening?</div>
            <div style={{ fontSize: 10, color: '#475569', lineHeight: 1.5 }}>
              3 high-value opportunities are delayed.
            </div>
          </GCard>
          <GCard>
            <div style={{ fontSize: 9, fontWeight: 600, color: '#94a3b8', marginBottom: 3 }}>Largest Exposure</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a' }}>ABC Corp</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#dc2626' }}>₹28L</div>
          </GCard>
          <div style={{ padding: '6px 10px', borderRadius: 12, background: 'rgba(30,64,175,0.08)', border: '1px solid rgba(30,64,175,0.18)', color: '#1e40af', fontSize: 10, fontWeight: 600, textAlign: 'center' }}>
            Ask AI →
          </div>
        </MiniPhone>

        <Arrow visible={step >= 4} />

        <MiniPhone index={2} currentStep={step} title="AI Assistant">
          <div style={{ marginLeft: 'auto', background: '#1e40af', color: '#fff', borderRadius: '12px 12px 3px 12px', padding: '6px 10px', fontSize: 9, fontWeight: 500, maxWidth: '85%' }}>
            What should I do about ABC Corp?
          </div>
          <GCard>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#1e40af', marginBottom: 4 }}>Habu</div>
            <div style={{ fontSize: 10, color: '#334155', lineHeight: 1.5 }}>
              Opportunity delayed by 12 days. Review revised closure date with the sales manager.
            </div>
          </GCard>
          <div style={{
            padding: '5px 8px', borderRadius: 10,
            background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(148,163,220,0.2)',
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#94a3b8' }} />
            <span style={{ fontSize: 9, color: '#94a3b8' }}>Ask a question…</span>
          </div>
        </MiniPhone>

        <Arrow visible={step >= 5} />

        <MiniPhone index={3} currentStep={step} title="Action">
          <GCard>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#64748b', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>Recommended</div>
            <div style={{ fontSize: 10, color: '#334155', lineHeight: 1.5 }}>Review ABC Corp with the sales manager.</div>
          </GCard>
          {[
            { label: 'Schedule Meeting', primary: true },
            { label: 'Contact Owner', primary: false },
            { label: 'View Opportunity', primary: false },
          ].map(btn => (
            <div key={btn.label} style={{
              padding: '7px 10px', borderRadius: 12, textAlign: 'center', fontSize: 9, fontWeight: 600,
              background: btn.primary ? '#1e40af' : 'rgba(255,255,255,0.68)',
              color: btn.primary ? '#fff' : '#475569',
              border: btn.primary ? 'none' : '1px solid rgba(148,163,220,0.22)',
            }}>
              {btn.label}
            </div>
          ))}
          <div style={{ marginTop: 'auto', fontSize: 8, color: '#94a3b8', textAlign: 'center' }}>
            Logged to Odoo CRM
          </div>
        </MiniPhone>
      </div>

      {/* Closing line */}
      <div style={{ opacity: step >= 5 ? 1 : 0, transition: 'opacity 0.7s ease 0.5s', marginTop: 14, textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#94a3b8', fontStyle: 'italic', fontWeight: 500 }}>
          Odoo stores the business · VinBytes AI Engine understands the business · Habu brings what matters to the CEO
        </p>
      </div>
    </div>
  )
}
