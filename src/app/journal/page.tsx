import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { journalPosts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Notes on design, culture, technology, and creative practice — from the Sandlip-Oasis studios in Amsterdam, New York, and Lagos.',
}

export default function Journal() {
  const featured = journalPosts.find(p => p.featured)!
  const rest = journalPosts.filter(p => !p.featured)

  return (
    <>
      {/* ── PAGE HERO ────────────────────────── */}
      <section className="page-hero">
        <div className="wrap">
          <Reveal><p className="eyebrow">Ideas from Three Continents</p></Reveal>
          <Reveal delay={100}><h1 className="display-title">The Sandlip-Oasis <em>Journal</em></h1></Reveal>
          <Reveal delay={200}>
            <p style={{ maxWidth: '500px', fontSize: '1rem', color: 'var(--ink2)', lineHeight: '1.8', marginTop: '1.5rem' }}>
              Notes on design, culture, technology, and creative practice — from Amsterdam, New York, and Lagos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── JOURNAL GRID ─────────────────────── */}
      <section className="sec wrap">
        <div className="journal-grid">
          {/* Featured */}
          <Reveal>
            <div className="jcard" data-h>
              <div className="jcard-img">
                <Image src={featured.img} alt={featured.alt} fill sizes="(max-width:768px)100vw,40vw" />
              </div>
              <div className="jcard-body">
                <p className="jcat">{featured.cat}</p>
                <h2>{featured.title}</h2>
                <p>{featured.desc}</p>
              </div>
              <div className="jcard-foot">
                <span className="jdate">{featured.date}</span>
                <span className="jread">Read →</span>
              </div>
            </div>
          </Reveal>

          {/* Rest */}
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <div className="jcard" data-h>
                <div className="jcard-img">
                  <Image src={p.img} alt={p.alt} fill sizes="(max-width:768px)100vw,30vw" />
                </div>
                <div className="jcard-body">
                  <p className="jcat">{p.cat}</p>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="jcard-foot">
                  <span className="jdate">{p.date}</span>
                  <span className="jread">Read →</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
