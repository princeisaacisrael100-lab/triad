'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [done, setDone] = useState(false)
  const [err, setErr] = useState<Record<string, boolean>>({})

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const newErr: Record<string, boolean> = {}
    let ok = true
    for (const f of ['fn', 'ln', 'email']) {
      if (!(fd.get(f) as string)?.trim()) { newErr[f] = true; ok = false }
    }
    setErr(newErr)
    if (ok) setDone(true)
  }

  if (done) return (
    <div className="form-success" role="alert">
      ✦ Message received. The right studio will be in touch within 24 hours.
    </div>
  )

  return (
    <form onSubmit={submit} noValidate>
      <div className="frow">
        <div className="fg">
          <label htmlFor="fn">First Name</label>
          <input id="fn" name="fn" type="text" placeholder="Your first name"
            autoComplete="given-name"
            style={err.fn ? { borderColor: '#c05030' } : {}} />
        </div>
        <div className="fg">
          <label htmlFor="ln">Last Name</label>
          <input id="ln" name="ln" type="text" placeholder="Your last name"
            autoComplete="family-name"
            style={err.ln ? { borderColor: '#c05030' } : {}} />
        </div>
      </div>
      <div className="fg">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@company.com"
          autoComplete="email"
          style={err.email ? { borderColor: '#c05030' } : {}} />
      </div>
      <div className="fg">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" placeholder="Your organisation" autoComplete="organization" />
      </div>
      <div className="fg">
        <label htmlFor="studio">Preferred Studio</label>
        <select id="studio" name="studio">
          <option value="">Let Sandlip-Oasis recommend…</option>
          <option>Amsterdam (Europe focus)</option>
          <option>New York (Americas focus)</option>
          <option>Lagos (Africa focus)</option>
          <option>Multi-studio (global project)</option>
        </select>
      </div>
      <div className="fg">
        <label htmlFor="service">Service Needed</label>
        <select id="service" name="service">
          <option value="">Select a service…</option>
          <option>Brand Identity</option>
          <option>Web &amp; Product Design</option>
          <option>Campaign Creative</option>
          <option>Motion &amp; Film</option>
          <option>Design System</option>
          <option>Global Retainer</option>
          <option>Not sure — let&apos;s talk</option>
        </select>
      </div>
      <div className="fg">
        <label htmlFor="budget">Budget Range</label>
        <select id="budget" name="budget">
          <option value="">Select a range…</option>
          <option>$10k – $30k</option>
          <option>$30k – $80k</option>
          <option>$80k – $200k</option>
          <option>$200k+ / Enterprise</option>
        </select>
      </div>
      <div className="fg">
        <label htmlFor="message">About Your Project</label>
        <textarea id="message" name="message"
          placeholder="What are you building? What markets? What does success look like?" />
      </div>
      <button type="submit" className="btn btn-accent f-submit">Send to Sandlip-Oasis →</button>
    </form>
  )
}
