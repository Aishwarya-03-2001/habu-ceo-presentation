import { useEffect, useState } from 'react'

function HabuPhone() {
  const [showNotif, setShowNotif] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShowNotif(true), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{
      width: 288, height: 576,
      background: '#15152a',
      borderRadius: 48, padding: 5,
      boxShadow: '0 40px 100px rgba(0,0,0,0.24), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.05)',
    }}>
      {/* Side button */}
      <div style={{ position: 'absolute', right: -3, top: 130, width: 3, height: 48, background: '#2a2a3e', borderRadius: '0 2px 2px 0' }} />

      <div style={{
        width: '100%', height: '100%', borderRadius: 44, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column',
        background: 'linear-gradient(165deg, #dbeafe 0%, #e0f2fe 45%, #f0f4ff 100%)',
      }}>
        {/* Dynamic island */}
        <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', width: 96, height: 28, background: '#0a0a18', borderRadius: 20, zIndex: 20 }} />

        {/* Status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '12px 22px 6px', flexShrink: 0 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#334155', paddingTop: 28 }}>9:41</span>
          <span style={{ fontSize: 10, color: '#64748b', paddingTop: 28 }}>Thu, Aug 13</span>
        </div>

        {/* App content */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '0 14px 10px' }}>
          {/* Greeting */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 12, color: '#64748b', fontWeight: 500 }}>Good Morning,</div>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' }}>CEO</div>
          </div>

          {/* Executive Pulse */}
          <div style={{
            borderRadius: 20, padding: '10px 12px', marginBottom: 12, flexShrink: 0,
            background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(148,163,220,0.25)', boxShadow: '0 4px 16px rgba(30,64,175,0.07)',
          }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: '#94a3b8', textTransform: 'uppercase', marginBottom: 10 }}>Executive Pulse</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { n: '2', label: 'Critical', dot: '#dc2626' },
                { n: '4', label: 'Attention', dot: '#ea580c' },
                { n: '8', label: 'Healthy', dot: '#16a34a' },
              ].map(s => (
                <div key={s.label} style={{
                  flex: 1, borderRadius: 14, padding: '8px 4px', textAlign: 'center',
                  background: 'rgba(248,250,252,0.8)', border: '1px solid rgba(148,163,220,0.15)',
                }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: s.dot, margin: '0 auto 5px' }} />
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>{s.n}</div>
                  <div style={{ fontSize: 8, fontWeight: 600, color: '#94a3b8' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Attention required label */}
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: '#94a3b8', textTransform: 'uppercase', marginBottom: 8 }}>Attention Required</div>

          {/* Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, overflow: 'hidden' }}>
            {[
              { dot: '#dc2626', title: 'Revenue Risk', amount: '₹72L potential exposure', action: 'View Insight →' },
              { dot: '#ea580c', title: 'Executive Follow-up', amount: 'ABC Corp — no update received', action: 'Review →' },
              { dot: '#16a34a', title: 'Operations', amount: 'All critical inventory stable', action: '' },
            ].map(card => (
              <div key={card.title} style={{
                borderRadius: 18, padding: '10px 12px', flexShrink: 0,
                background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(148,163,220,0.2)', boxShadow: '0 2px 10px rgba(30,64,175,0.05)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}>
                  <div style={{ width: 9, height: 9, borderRadius: '50%', background: card.dot, flexShrink: 0, boxShadow: card.dot !== '#16a34a' ? `0 0 7px ${card.dot}55` : 'none' }} />
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', flex: 1 }}>{card.title}</div>
                </div>
                <div style={{ fontSize: 10, color: '#64748b', paddingLeft: 16, marginBottom: card.action ? 6 : 0 }}>{card.amount}</div>
                {card.action && <div style={{ fontSize: 10, fontWeight: 600, color: '#1e40af', paddingLeft: 16 }}>{card.action}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div style={{
          height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 10px 6px',
          background: 'rgba(255,255,255,0.78)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(148,163,220,0.18)', flexShrink: 0,
        }}>
          {[
            { label: 'Home', active: true },
            { label: 'Insights' },
            { label: 'AI' },
            { label: 'Alerts' },
          ].map(nav => (
            <div key={nav.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <div style={{ width: 18, height: 3, borderRadius: 2, background: nav.active ? '#1e40af' : 'transparent' }} />
              <div style={{ fontSize: 9, fontWeight: 700, color: nav.active ? '#1e40af' : '#94a3b8' }}>{nav.label}</div>
            </div>
          ))}
        </div>

        {/* Notification */}
        {showNotif && (
          <div style={{
            position: 'absolute', top: 52, left: 10, right: 10, zIndex: 30,
            background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(24px)',
            border: '1px solid rgba(148,163,220,0.28)', borderRadius: 22,
            padding: '10px 12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
            animation: 'notificationDrop 0.5s cubic-bezier(0.34,1.2,0.64,1) both',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{ width: 34, height: 34, borderRadius: 12, background: '#1e40af', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a' }}>Habu · Revenue Alert</div>
              <div style={{ fontSize: 10, color: '#64748b', marginTop: 1 }}>₹72L potential exposure detected.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Slide7() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = [setTimeout(() => setStep(1), 150), setTimeout(() => setStep(2), 500)]
    return () => t.forEach(clearTimeout)
  }, [])

  return (
    <div className="slide-bg w-full h-full flex items-center gap-14 p-12 overflow-hidden">
      {/* Left */}
      <div style={{ flex: 1, opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? 'none' : 'translateX(-20px)', transition: 'all 0.7s ease' }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', color: '#1e40af', textTransform: 'uppercase', marginBottom: 16 }}>07 — Habu Mobile App</div>
        <h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', lineHeight: 1.1, marginBottom: 12 }}>
          Your business,<br /><span style={{ color: '#1e40af' }}>wherever you are.</span>
        </h2>
        <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.65, marginBottom: 32 }}>
          Habu surfaces only what deserves attention — prioritised, plain-language, and immediately actionable.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { dot: '#dc2626', title: 'Critical alerts first', desc: 'Revenue risk, overdue receivables — surfaced immediately.' },
            { dot: '#ea580c', title: 'Executive follow-ups', desc: 'Habu tracks what the CEO asks for, and follows up when required.' },
            { dot: '#1e40af', title: 'AI on demand', desc: 'Ask anything. Get an executive-grade answer instantly.' },
            { dot: '#16a34a', title: 'Full business visibility', desc: 'One place. No noise. No manual checking.' },
          ].map(f => (
            <div key={f.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: f.dot, marginTop: 4, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>{f.title}</div>
                <div style={{ fontSize: 13, color: '#64748b', marginTop: 2 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phone */}
      <div style={{
        flexShrink: 0,
        opacity: step >= 2 ? 1 : 0, transform: step >= 2 ? 'translateY(0)' : 'translateY(24px)',
        transition: 'all 0.8s cubic-bezier(0.34,1.1,0.64,1) 0.1s',
        animation: step >= 2 ? 'float 4.5s ease-in-out infinite' : 'none',
      }}>
        <HabuPhone />
      </div>
    </div>
  )
}
