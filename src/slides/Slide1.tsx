import { useEffect, useState } from 'react'

export default function Slide1() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = [
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 700),
      setTimeout(() => setStep(3), 1300),
      setTimeout(() => setStep(4), 2100),
      setTimeout(() => setStep(5), 2900),
    ]
    return () => t.forEach(clearTimeout)
  }, [])

  return (
    <div className="slide-bg w-full h-full flex flex-col items-center justify-center overflow-hidden relative">
      {/* Large ambient center glow */}
      <div className="absolute pointer-events-none" style={{
        width: 800, height: 500, top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 65%)',
      }} />

      {/* Brand label */}
      <div style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? 'none' : 'translateY(12px)', transition: 'all 0.6s ease', textAlign: 'center', marginBottom: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.32em', color: '#1e40af', textTransform: 'uppercase' }}>Habu</span>
      </div>

      {/* Headline */}
      <div style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? 'none' : 'translateY(16px)', transition: 'all 0.7s ease 0.1s', textAlign: 'center', marginBottom: 8 }}>
        <h1 style={{ fontSize: 62, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08, color: '#0f172a' }}>
          Executive Intelligence,<br /><span style={{ color: '#1e40af' }}>Delivered.</span>
        </h1>
      </div>

      {/* Subtitle */}
      <div style={{ opacity: step >= 1 ? 1 : 0, transition: 'opacity 0.7s ease 0.3s', textAlign: 'center', marginBottom: 56 }}>
        <p style={{ fontSize: 17, color: '#64748b', fontWeight: 500 }}>
          Turning everyday business activity into timely executive action.
        </p>
      </div>

      {/* Three-part visual: Odoo | Engine | Phone */}
      <div className="flex items-center justify-center gap-8" style={{ opacity: step >= 2 ? 1 : 0, transition: 'opacity 0.8s ease 0.1s' }}>

        {/* Left: faint Odoo data */}
        <div style={{ opacity: step >= 2 ? 0.55 : 0, transition: 'opacity 0.7s ease', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end', minWidth: 110 }}>
          {['CRM', 'Sales', 'Finance', 'Inventory'].map((m, i) => (
            <div key={m} className="glass rounded-xl px-3 py-1.5 text-right" style={{
              fontSize: 11, fontWeight: 600, color: '#64748b',
              opacity: step >= 2 ? 1 : 0,
              transition: `opacity 0.5s ease ${i * 0.08}s`,
            }}>
              {m}
            </div>
          ))}
        </div>

        {/* Left connector */}
        <div style={{ opacity: step >= 3 ? 1 : 0, transition: 'opacity 0.5s ease' }}>
          <div className="relative" style={{ width: 64, height: 2, background: 'rgba(99,120,200,0.2)', borderRadius: 2 }}>
            {step >= 3 && [0, 0.7, 1.4].map((d, i) => (
              <div key={i} className="absolute top-1/2 -translate-y-1/2 rounded-full"
                style={{ width: 6, height: 6, background: '#3b82f6', animation: `orbitX 1.8s ease-in-out ${d}s infinite` }} />
            ))}
          </div>
        </div>

        {/* Center: Glass Engine */}
        <div style={{ opacity: step >= 3 ? 1 : 0, transform: step >= 3 ? 'scale(1)' : 'scale(0.93)', transition: 'all 0.8s cubic-bezier(0.34,1.1,0.64,1) 0.1s' }}>
          <div className="glass-engine rounded-3xl overflow-hidden" style={{ width: 240, boxShadow: '0 16px 56px rgba(30,64,175,0.14), 0 0 0 1px rgba(148,163,220,0.2)' }}>
            <div style={{ background: 'rgba(30,64,175,0.06)', borderBottom: '1px solid rgba(148,163,220,0.2)', padding: '14px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', color: '#1e40af', textTransform: 'uppercase', marginBottom: 2 }}>VinBytes</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>AI Engine</div>
            </div>
            {/* Particle lane */}
            <div className="relative overflow-hidden" style={{ height: 44, margin: '12px 16px', borderRadius: 12, background: 'rgba(219,234,254,0.5)' }}>
              {step >= 3 && Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="absolute rounded-full" style={{
                  width: i % 3 === 0 ? 6 : 3, height: i % 3 === 0 ? 6 : 3,
                  background: i % 2 === 0 ? '#3b82f6' : '#818cf8',
                  top: `${22 + (i % 3) * 22}%`,
                  animation: `orbitX ${1.1 + i * 0.2}s ease-in-out ${i * 0.19}s infinite`,
                  opacity: 0.75,
                }} />
              ))}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700, color: 'rgba(30,64,175,0.35)', letterSpacing: '0.22em' }}>
                PROCESSING
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 16px 14px' }}>
              {['Connect', 'Orchestrate', 'Understand'].map((z, i) => (
                <div key={z} style={{ textAlign: 'center' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3b82f6', margin: '0 auto 4px', animation: step >= 3 ? `pulse 2s ease ${i * 0.45}s infinite` : 'none' }} />
                  <div style={{ fontSize: 8, fontWeight: 700, color: '#1e40af', letterSpacing: '0.06em' }}>{z}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right connector */}
        <div style={{ opacity: step >= 4 ? 1 : 0, transition: 'opacity 0.5s ease' }}>
          <div className="relative" style={{ width: 64, height: 2, background: 'rgba(99,120,200,0.2)', borderRadius: 2 }}>
            {step >= 4 && [0.35, 1.05].map((d, i) => (
              <div key={i} className="absolute top-1/2 -translate-y-1/2 rounded-full"
                style={{ width: 6, height: 6, background: '#3b82f6', animation: `orbitX 1.8s ease-in-out ${d}s infinite` }} />
            ))}
          </div>
        </div>

        {/* Right: Phone silhouette */}
        <div style={{ opacity: step >= 4 ? 1 : 0, transform: step >= 4 ? 'none' : 'translateY(12px)', transition: 'all 0.7s ease', animation: step >= 4 ? 'float 4s ease-in-out infinite' : 'none' }}>
          <div style={{
            width: 80, height: 148, background: '#1a1a2e', borderRadius: 18, padding: 3,
            boxShadow: '0 16px 48px rgba(0,0,0,0.16), 0 0 0 1px rgba(255,255,255,0.06)',
          }}>
            <div style={{ width: '100%', height: '100%', borderRadius: 15, background: 'linear-gradient(160deg,#dbeafe,#eff6ff)', overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', width: 28, height: 8, background: '#0a0a18', borderRadius: 8 }} />
              <div style={{ padding: '22px 8px 8px', display: 'flex', flexDirection: 'column', gap: 6, height: '100%' }}>
                <div className="glass rounded-lg px-2 py-1.5" style={{ opacity: 0.7 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#dc2626', marginBottom: 3 }} />
                  <div style={{ height: 4, width: '70%', background: '#cbd5e1', borderRadius: 2 }} />
                </div>
                <div className="glass rounded-lg px-2 py-1.5" style={{ opacity: 0.5 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ea580c', marginBottom: 3 }} />
                  <div style={{ height: 4, width: '55%', background: '#cbd5e1', borderRadius: 2 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insight card emerges */}
      {step >= 5 && (
        <div className="glass-strong rounded-2xl flex items-center gap-5 mt-10"
          style={{ padding: '16px 28px', animation: 'fadeUp 0.7s ease both' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#dc2626', boxShadow: '0 0 12px rgba(220,38,38,0.5)', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>Revenue Risk Detected</div>
            <div style={{ fontSize: 13, color: '#64748b', marginTop: 2 }}>₹72L potential exposure · 3 opportunities at risk</div>
          </div>
          <div style={{ marginLeft: 20, padding: '8px 16px', borderRadius: 12, background: '#1e40af', color: '#fff', fontSize: 12, fontWeight: 600, boxShadow: '0 4px 14px rgba(30,64,175,0.3)' }}>
            View Insight →
          </div>
        </div>
      )}
    </div>
  )
}
