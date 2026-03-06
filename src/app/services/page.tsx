import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { services, processSteps } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Brand identity, web & product design, campaign creative, motion & film, design systems, and global retainers — across Amsterdam, New York, and Lagos.',
}

export default function Services() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────── */}
      <section className="page-hero">
        <div className="wrap">
          <Reveal><p className="eyebrow">What We Offer</p></Reveal>
          <Reveal delay={100}>
            <h1 className="display-title">Six Disciplines.<br />Three Continents.<br /><em>One Standard.</em></h1>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ maxWidth: '520px', fontSize: '1rem', color: 'var(--ink2)', lineHeight: '1.85', marginTop: '1.5rem' }}>
              Every service is delivered by senior talent across all three studios simultaneously —
              or whichever combination makes the most sense for your project and market.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICE ROWS ─────────────────────── */}
      <section className="sec wrap">
        <div className="svc-list">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 60}>
              <div className="svc-row" data-h>
                <span className="srow-n">{s.num}</span>
                <div>
                  <h2 className="srow-title">{s.title}</h2>
                  <p className="srow-desc">{s.desc}</p>
                </div>
                <div className="srow-tags">
                  {s.tags.map(t => <span key={t} className="srow-tag">{t}</span>)}
                </div>
                <span className="srow-ico" aria-hidden="true">+</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────── */}
      <section className="sec" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--bord)' }}>
        <div className="wrap">
          <Reveal><p className="eyebrow">How We Work</p></Reveal>
          <Reveal delay={100}><h2 className="section-title">The Sandlip-Oasis <em>Process</em></h2></Reveal>
          <div className="process-steps">
            {processSteps.map((p, i) => (
              <Reveal key={p.num} delay={i * 80}>
                <div className="proc" data-h>
                  <span className="proc-bg-n" aria-hidden="true">{p.num}</span>
                  <p className="proc-n">{p.num} — {p.label}</p>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <div className="cta-strip">
        <div className="cta-inner">
          <Reveal><h2>Let&rsquo;s <em>Begin.</em></h2></Reveal>
          <Reveal delay={150}><p>Every project starts with a conversation. Tell us what you&rsquo;re building and we&rsquo;ll tell you exactly how Sandlip-Oasis can help.</p></Reveal>
          <Reveal delay={300}><Link href="/contact" className="btn btn-accent">Start a Project →</Link></Reveal>
        </div>
      </div>
    </>
  )
}
