import { useState, useEffect, useCallback } from 'react'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import SlideProcurement from './slides/SlideProcurement'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'
import Slide8 from './slides/Slide8'

const slides = [
  { Component: Slide1, label: 'Executive Intelligence' },
  { Component: Slide2, label: 'Business Challenge' },
  { Component: Slide3, label: 'VinBytes Engine' },
  { Component: Slide4, label: 'Workflow Engine' },
  { Component: SlideProcurement, label: 'Procurement Risk' },
  { Component: Slide5, label: 'Morning Problem' },
  { Component: Slide6, label: 'Executive Communication' },
  { Component: Slide7, label: 'Habu Mobile App' },
  { Component: Slide8, label: 'CEO Journey' },
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [mountKey, setMountKey] = useState(0)

  const go = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return
    setCurrent(index)
    setMountKey(k => k + 1)
  }, [])

  const prev = useCallback(() => go(current - 1), [current, go])
  const next = useCallback(() => go(current + 1), [current, go])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  const { Component } = slides[current]

  return (
    <div
      className="w-screen h-screen flex flex-col overflow-hidden select-none"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden min-h-0">
        <Component key={mountKey} />
      </div>

      {/* Navigation bar */}
      <div className="h-14 border-t flex items-center justify-between px-8 shrink-0" style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(16px)', borderColor: 'rgba(148,163,220,0.25)' }}>
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 disabled:opacity-25 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Prev
        </button>

        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              title={`${String(i + 1).padStart(2, '0')} — ${s.label}`}
              className="transition-all duration-200 rounded-full"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? '#1e40af' : '#cbd5e1',
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="font-bold text-slate-700 tabular-nums">{String(current + 1).padStart(2, '0')}</span>
            <span>/</span>
            <span>{slides.length}</span>
            <span className="text-slate-300 mx-1">·</span>
            <span>{slides[current].label}</span>
          </div>
          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 disabled:opacity-25 transition-colors"
          >
            Next
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
