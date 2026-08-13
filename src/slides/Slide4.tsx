import { useEffect, useState } from 'react'

const nodes = [
  { id: 0, label: 'Business Event', sub: 'Revenue falls below target', type: 'trigger' },
  { id: 1, label: 'Get Sales Data', sub: 'Sales API called', type: 'api' },
  { id: 2, label: 'Open Opportunities', sub: 'Pipeline retrieved', type: 'api' },
  { id: 3, label: 'Identify Delayed Deals', sub: 'Conditions evaluated', type: 'condition' },
  { id: 4, label: 'Calculate Impact', sub: 'Is it significant?  YES', type: 'yes' },
  { id: 5, label: 'AI Generates Insight', sub: 'Executive explanation', type: 'ai' },
  { id: 6, label: 'CEO Notified', sub: 'Attention required', type: 'output' },
]

const typeColor: Record<string, string> = {
  trigger: '#475569', api: '#1e40af', condition: '#d97706', yes: '#16a34a', ai: '#6d28d9', output: '#dc2626',
}

export default function Slide4() {
  const [step, setStep] = useState(0)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = [
      setTimeout(() => setStep(1), 150),
      setTimeout(() => setStep(2), 600),
    ]
    const cycle = setInterval(() => setActive(a => (a + 1) % nodes.length), 650)
    return () => { t.forEach(clearTimeout); clearInterval(cycle) }
  }, [])

  return (
    <div className="slide-bg w-full h-full flex flex-col p-10 overflow-hidden">
      {/* Header */}
      <div style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? 'none' : 'translateY(14px)', transition: 'all 0.7s ease', marginBottom: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', color: '#1e40af', textTransform: 'uppercase', marginBottom: 6 }}>04 — The Workflow Engine</div>
        <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', lineHeight: 1.1 }}>
          Business Rules <span style={{ color: '#1e40af' }}>Turned Into Action.</span>
        </h2>
        <p style={{ fontSize: 15, color: '#64748b', marginTop: 6 }}>Example: Revenue Risk</p>
      </div>

      {/* Horizontal workflow */}
      <div className="flex-1 flex flex-col justify-center" style={{ opacity: step >= 2 ? 1 : 0, transition: 'opacity 0.7s ease 0.1s' }}>
        <div className="flex items-start gap-0 w-full">
          {nodes.map((node, i) => {
            const isPast = i < active
            const isCurrent = i === active
            const color = typeColor[node.type]

            return (
              <div key={node.id} className="flex items-center flex-1">
                {/* Node card */}
                <div className="flex flex-col items-center" style={{ flex: '0 0 auto', width: 110 }}>
                  {/* Card */}
                  <div className="rounded-2xl transition-all duration-500 w-full" style={{
                    padding: '12px 10px',
                    background: isCurrent ? `${color}0d` : 'rgba(255,255,255,0.55)',
                    border: `1.5px solid ${isCurrent ? `${color}50` : 'rgba(148,163,220,0.2)'}`,
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: isCurrent ? `0 8px 28px ${color}20` : '0 2px 8px rgba(30,64,175,0.04)',
                    transform: isCurrent ? 'translateY(-6px)' : 'translateY(0)',
                    opacity: i > active ? 0.4 : 1,
                    position: 'relative',
                  }}>
                    {/* Step number */}
                    <div style={{ fontSize: 8, fontWeight: 700, color: isCurrent ? color : '#94a3b8', letterSpacing: '0.14em', marginBottom: 4, textTransform: 'uppercase' }}>
                      Step {String(i + 1).padStart(2, '0')}
                    </div>
                    {/* Active pulse */}
                    {isCurrent && (
                      <div style={{
                        position: 'absolute', top: 8, right: 8,
                        width: 7, height: 7, borderRadius: '50%', background: color,
                        animation: 'pulse 1.1s ease infinite',
                      }} />
                    )}
                    <div style={{ fontSize: 11, fontWeight: 700, color: isCurrent ? '#0f172a' : '#334155', lineHeight: 1.3, marginBottom: 4 }}>
                      {node.label}
                    </div>
                    <div style={{ fontSize: 9, color: '#94a3b8', lineHeight: 1.3 }}>{node.sub}</div>
                  </div>

                  {/* Dot indicator */}
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%', marginTop: 8,
                    background: isCurrent ? color : isPast ? '#93c5fd' : '#e2e8f0',
                    boxShadow: isCurrent ? `0 0 10px ${color}60` : 'none',
                    transition: 'all 0.4s ease',
                  }} />
                </div>

                {/* Connector */}
                {i < nodes.length - 1 && (
                  <div className="flex-1 relative mx-1" style={{ height: 2, background: 'rgba(148,163,220,0.2)', marginBottom: 28 }}>
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: typeColor[nodes[i + 1]?.type] || '#3b82f6',
                      opacity: isPast ? 0.45 : 0,
                      transition: 'opacity 0.4s ease',
                    }} />
                    {isCurrent && (
                      <div style={{
                        position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                        width: 8, height: 8, borderRadius: '50%',
                        background: typeColor[nodes[i + 1]?.type] || '#3b82f6',
                        animation: 'orbitX 0.6s ease-in-out 0.1s 1 both',
                        boxShadow: `0 0 8px ${color}60`,
                      }} />
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Side panel */}
      <div style={{ opacity: step >= 2 ? 1 : 0, transition: 'opacity 0.7s ease 0.4s', marginTop: 20 }}>
        <div className="glass-strong rounded-2xl p-5 flex items-start gap-5">
          <div style={{ width: 3, alignSelf: 'stretch', borderRadius: 4, background: '#1e40af', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#1e40af', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>Think of it as</div>
            <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.6 }}>
              A digital set of instructions that knows what to retrieve, what to check, and what to do next. This is what differentiates Habu from simply connecting an LLM to Odoo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
