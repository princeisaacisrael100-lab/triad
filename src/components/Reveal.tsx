'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  dir?: 'up' | 'left' | 'right'
  delay?: number
}

export default function Reveal({ children, className = '', dir = 'up', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') return
    const el = ref.current
    const cls = dir === 'left' ? 'reveal-l' : dir === 'right' ? 'reveal-r' : 'reveal'
    el.classList.add(cls)
    if (delay) el.style.transitionDelay = delay + 'ms'
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in'); obs.disconnect() } },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [dir, delay])

  return <div ref={ref} className={className}>{children}</div>
}
