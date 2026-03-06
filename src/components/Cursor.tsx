'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cx = 0, cy = 0, rx = 0, ry = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      cx = e.clientX; cy = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = cx + 'px'
        dotRef.current.style.top  = cy + 'px'
      }
    }

    const loop = () => {
      rx += (cx - rx) * 0.12
      ry += (cy - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    document.addEventListener('mousemove', onMove, { passive: true })

    const big = (e: Event) => {
      const t = e.currentTarget as HTMLElement
      if (t.closest('a,button,[data-h]')) {
        dotRef.current?.classList.add('big')
        ringRef.current?.classList.add('big')
      }
    }
    const sm = () => {
      dotRef.current?.classList.remove('big')
      ringRef.current?.classList.remove('big')
    }

    const els = document.querySelectorAll('a, button, [data-h]')
    els.forEach(el => { el.addEventListener('mouseenter', big); el.addEventListener('mouseleave', sm) })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      els.forEach(el => { el.removeEventListener('mouseenter', big); el.removeEventListener('mouseleave', sm) })
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor"      aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
