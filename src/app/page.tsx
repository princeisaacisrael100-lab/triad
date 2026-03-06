import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { heroPanels, workItems, offices, testimonials } from '@/lib/data'

export default function Home() {
  const tickerItems = [
    'Brand Identity', 'Amsterdam — New York — Lagos', 'Afro-Futurist Design',
    'Swiss Editorial Precision', 'Digital Products', 'Campaign Creative',
    'Motion & Film', 'Est. 2014 — Global',
  ]

  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section className="hero" aria-label="Three continent hero">
        {heroPanels.map(p => (
          <div key={p.id} className="hero-panel" data-h>
            <Image src={p.img} alt={p.alt} fill sizes="33vw"
              className="hero-panel-img" priority />
            <div className="hero-overlay" aria-hidden="true" />
            <div className="hero-content">
              <p className="hp-flag">{p.flag}</p>
              <h2 className="hp-title">
                {p.title[0]}<em>{p.title[1]}</em><br />{p.title[2]}
              </h2>
              <p className="hp-desc">{p.desc}</p>
            </div>
          </div>
        ))}

        <div className="hero-vline vl-1" aria-hidden="true" />
        <div className="hero-vline vl-2" aria-hidden="true" />

        <div className="hero-center" aria-hidden="true">
          <div className="hero-logo-big">Sandlip-Oasis</div>
          <p className="hero-tagline">Sandlip Oasis is a tech company and community</p>
        </div>

        <div className="scroll-ind" aria-hidden="true">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────── */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              {item}<span className="ticker-dot"> ◆ </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── MANIFESTO ────────────────────────── */}
      <section className="manifesto">
        <div className="manifesto-glow" aria-hidden="true" />
        <Reveal className="manifesto-inner">
          <p className="manifesto-kicker">What We Believe</p>
          <div className="manifesto-line" aria-hidden="true" />
          <p className="manifesto-text">
            The best creative work doesn&rsquo;t come from one place, one culture, one aesthetic
            tradition. It comes from <strong>collision</strong>. From the friction between
            Amsterdam&rsquo;s restraint and Lagos&rsquo;s exuberance. From New York&rsquo;s hunger
            meeting European refinement. We built Sandlip-Oasis because we believe the world deserves work
            that is <em>truly global</em> — not global in reach, but global in <strong>soul</strong>.
          </p>
          <div className="manifesto-line" aria-hidden="true" />
        </Reveal>
      </section>

      {/* ── STATS ────────────────────────────── */}
      <Reveal>
        <div className="stats-bar">
          {[
            { n: '320+', l: 'Brands Built Worldwide' },
            { n: '3', l: 'Continents · 3 Studios' },
            { n: '11yr', l: 'In Business' },
            { n: '96%', l: 'Client Return Rate' },
          ].map(s => (
            <div key={s.l} className="stat-cell" data-h>
              <div className="stat-n"><span>{s.n}</span></div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ── WORK ─────────────────────────────── */}
      <section className="sec wrap">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <Reveal><p className="eyebrow">Selected Work</p></Reveal>
            <Reveal delay={100}><h2 className="section-title">Recent <em>Projects</em></h2></Reveal>
          </div>
          <Reveal delay={200}>
            <Link href="/journal" className="btn btn-ghost">View All Work →</Link>
          </Reveal>
        </div>
        <Reveal>
          <div className="work-collage">
            {workItems.map(w => (
              <div key={w.id} className="wc-item" data-h>
                <Image src={w.img} alt={w.alt} fill sizes="(max-width:768px)100vw,50vw" />
                <span className={`wc-badge ${w.badgeCls}`}>{w.badge}</span>
                <div className="wc-ov">
                  <div>
                    <p className="wc-tag">{w.tag}</p>
                    <p className="wc-title">{w.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── OFFICES ──────────────────────────── */}
      <section className="offices-section">
        <div className="wrap" style={{ marginBottom: '4rem' }}>
          <Reveal><p className="eyebrow">Where We Work</p></Reveal>
          <Reveal delay={100}>
            <h2 className="section-title">Three Cities.<br /><em>One Collective.</em></h2>
          </Reveal>
        </div>
        <div className="offices-track">
          {offices.map(o => (
            <div key={o.id} className="office-card" data-h>
              <Image src={o.img} alt={o.alt} fill sizes="33vw" />
              <div className="office-info">
                <div className="office-num" aria-hidden="true">{o.num}</div>
                <h3 className="office-city">{o.city}</h3>
                <p className="office-country">{o.country}</p>
                <p className="office-desc">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────── */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal><p className="eyebrow">Voices</p></Reveal>
          <Reveal delay={100}><h2 className="section-title">What Clients <em>Say</em></h2></Reveal>
          <div className="testi-grid">
            {testimonials.map(t => (
              <article key={t.id} className="te-card" data-h>
                <div className="te-num" aria-hidden="true">&ldquo;</div>
                <span className="te-continent">{t.continent}</span>
                <div className="te-stars" aria-label="5 stars">
                  {'★★★★★'.split('').map((s, i) => <span key={i} className="te-star">{s}</span>)}
                </div>
                <p className="te-text">&ldquo;{t.quote}&rdquo;</p>
                <div className="te-author">
                  <div className="te-av">
                    <Image src={t.img} alt={`Portrait of ${t.name}`} width={50} height={50} />
                  </div>
                  <div>
                    <p className="te-name">{t.name}</p>
                    <p className="te-role">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <div className="cta-strip">
        <div className="cta-bg" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=80&auto=format&fit=crop"
            alt="Diverse creative team" fill sizes="100vw" />
        </div>
        <div className="cta-inner">
          <Reveal><h2>Sandlip-Oasis.<br /><em>One Brief.</em></h2></Reveal>
          <Reveal delay={150}>
            <p>We take on a limited number of projects each quarter. If your project deserves a truly global perspective — we should talk.</p>
          </Reveal>
          <Reveal delay={300}>
            <Link href="/contact" className="btn btn-accent">Begin a Conversation →</Link>
          </Reveal>
        </div>
      </div>
    </>
  )
}
