import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { team, photoStrip } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description: 'Sandlip-Oasis was founded in 2014 by three creatives from Lagos, Amsterdam, and New York. Eleven years of cross-continental creative work.',
}

const values = [
  { num: '01', ey: 'Principle One', title: 'Cultural Honesty', body: 'We never flatten a culture to make it easier to sell. African patterns, Dutch typography, American rhythm — each is honoured on its own terms, then woven into something larger.' },
  { num: '02', ey: 'Principle Two', title: 'Craft Without Compromise', body: 'Three continents, one standard: extraordinary. We don\'t ship work we\'re not proud of, regardless of deadline, budget, or timezone pressure.' },
  { num: '03', ey: 'Principle Three', title: 'The Friction Is the Feature', body: 'Disagreement between our studios is not a problem to be managed — it\'s the engine. The tension between perspectives is where original work is made.' },
  { num: '04', ey: 'Principle Four', title: 'Outcomes Over Awards', body: 'We\'ve won awards. What matters more: the client who doubles revenue, the brand that enters a new market, the product that changes behaviour. That\'s why we exist.' },
]

export default function About() {
  return (
    <>
      {/* ── CINEMA SPLIT ─────────────────────── */}
      <div className="about-cinema">
        <Reveal dir="left" className="about-cinema-img">
          <Image
            src="https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=1000&q=80&auto=format&fit=crop"
            alt="Sandlip-Oasis co-founder and creative director at work in Lagos studio"
            fill sizes="50vw" />
        </Reveal>
        <Reveal dir="right" className="about-cinema-text">
          <p className="eyebrow">Our Story</p>
          <h1 className="display-title">Born from<br /><em>Collision.</em></h1>
          <p className="about-manifesto">
            Sandlip-Oasis was founded in 2014 by three creatives who met at a design conference in
            Rotterdam — a Nigerian type designer, a Dutch brand strategist, and an American
            filmmaker. They disagreed about everything. <strong>That&rsquo;s why it worked.</strong>
          </p>
          <p style={{ fontSize: '.95rem', color: 'var(--ink2)', lineHeight: '1.85', marginBottom: '2rem' }}>
            Eleven years later, we&rsquo;re a 38-person collective operating across Amsterdam, New
            York, and Lagos — unified by a single belief: that creative work which honours multiple
            cultural traditions simultaneously is not compromise. It&rsquo;s{' '}
            <em style={{ fontFamily: 'var(--editorial)', fontStyle: 'italic' }}>elevation</em>.
          </p>
          <div className="about-counters">
            <div className="ac"><div className="ac-n">320+</div><div className="ac-l">Projects</div></div>
            <div className="ac"><div className="ac-n">38</div><div className="ac-l">Creatives</div></div>
            <div className="ac"><div className="ac-n">11yr</div><div className="ac-l">Established</div></div>
          </div>
        </Reveal>
      </div>

      {/* ── TEAM ─────────────────────────────── */}
      <section className="sec wrap">
        <Reveal><p className="eyebrow">The Collective</p></Reveal>
        <Reveal delay={100}><h2 className="section-title">People Behind <em>Sandlip-Oasis</em></h2></Reveal>
        <div className="team-grid">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={i * 80}>
              <div className="team-card" data-h>
                <Image src={m.img} alt={m.alt} fill sizes="33vw" />
                <div className="team-ov">
                  <p className="team-cont">{m.continent}</p>
                  <h3 className="team-name">{m.name}</h3>
                  <p className="team-role">{m.role}</p>
                </div>
                <div className="team-detail">
                  <p className="td-name">{m.name}</p>
                  <p className="td-role">{m.role}</p>
                  <p className="td-bio">{m.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PHOTO STRIP ──────────────────────── */}
      <div className="photo-strip">
        {photoStrip.map((p, i) => (
          <div key={i} className="ps-item">
            <Image src={p.img} alt={p.alt} fill sizes="20vw" />
          </div>
        ))}
      </div>

      <div className="rule" />

      {/* ── VALUES ───────────────────────────── */}
      <section className="sec wrap">
        <Reveal><p className="eyebrow">What We Stand For</p></Reveal>
        <Reveal delay={100}><h2 className="section-title">The Sandlip-Oasis <em>Code</em></h2></Reveal>
        <div className="val-grid">
          {values.map((v, i) => (
            <Reveal key={v.num} delay={i * 80}>
              <div className="vcell" data-h>
                <span className="vcell-n" aria-hidden="true">{v.num}</span>
                <p className="vcell-ey">{v.ey}</p>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <div className="cta-strip">
        <div className="cta-bg" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=80&auto=format&fit=crop"
            alt="Sandlip-Oasis team" fill sizes="100vw" />
        </div>
        <div className="cta-inner">
          <Reveal><h2>Ready to <em>Collide?</em></h2></Reveal>
          <Reveal delay={150}><p>Tell us about your project. We&rsquo;ll tell you which studio — or combination of studios — is right for it.</p></Reveal>
          <Reveal delay={300}><Link href="/contact" className="btn btn-accent">Start a Conversation →</Link></Reveal>
        </div>
      </div>
    </>
  )
}
