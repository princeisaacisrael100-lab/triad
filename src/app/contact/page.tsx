import type { Metadata } from 'next'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { offices } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Sandlip-Oasis. Studios in Amsterdam, New York, and Lagos — hello@sandlip-oasis.com',
}

export default function Contact() {
  return (
    <section className="contact-hero">
      <div className="contact-bg-img" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=80&auto=format&fit=crop"
          alt="Sandlip-Oasis diverse global creative team" fill sizes="100vw" />
      </div>
      <div className="wrap">
        <div className="contact-grid">

          {/* Left */}
          <Reveal dir="left" className="cleft">
            <p className="eyebrow">Start a Project</p>
            <h1>Let&rsquo;s Build<br />Something<br /><em>Extraordinary.</em></h1>
            <p>
              We&rsquo;re selective about the work we take on. Three studios means three times the
              perspective — and three times the responsibility to get it right. Tell us what
              you&rsquo;re building.
            </p>
            <div className="offices-mini">
              {offices.map(o => (
                <div key={o.id} className="omini" data-h>
                  <span className="omini-flag" aria-hidden="true">{o.flag}</span>
                  <div>
                    <p className="omini-city">{o.city}, {o.country.split('—')[0].trim()}</p>
                    <p className="omini-addr">{o.address} · {o.email}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="mailto:hello@sandlip-oasis.com" className="btn btn-accent">
              hello@sandlip-oasis.com →
            </a>
          </Reveal>

          {/* Right — form */}
          <Reveal dir="right">
            <div className="formbox">
              <h2 className="form-title">Tell Us About Your Project</h2>
              <ContactForm />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
