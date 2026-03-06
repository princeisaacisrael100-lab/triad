import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="ftop">
          <div>
            <div className="f-logo">Sandlip-Oasis</div>
            <div className="f-sub">Global Creative Collective · Est. 2014</div>
            <p className="f-tagline">&ldquo;The best creative work doesn&rsquo;t come from one place. It comes from collision.&rdquo;</p>
            <div className="f-tags">
              <span className="f-tag ftag-eu">Amsterdam</span>
              <span className="f-tag ftag-us">New York</span>
              <span className="f-tag ftag-af">Lagos</span>
            </div>
            <div className="f-socials">
              <a href="#" className="f-soc" aria-label="LinkedIn">in</a>
              <a href="#" className="f-soc" aria-label="Instagram">ig</a>
              <a href="#" className="f-soc" aria-label="Twitter/X">𝕏</a>
              <a href="#" className="f-soc" aria-label="Behance">be</a>
            </div>
          </div>
          <div className="fcol">
            <p className="fcol-h">Collective</p>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/journal">Journal</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Careers</Link></li>
            </ul>
          </div>
          <div className="fcol">
            <p className="fcol-h">Services</p>
            <ul>
              <li><Link href="/services">Brand Identity</Link></li>
              <li><Link href="/services">Web &amp; Product</Link></li>
              <li><Link href="/services">Campaign Creative</Link></li>
              <li><Link href="/services">Motion &amp; Film</Link></li>
            </ul>
          </div>
          <div className="fcol">
            <p className="fcol-h">Offices</p>
            <ul>
              <li><Link href="/contact">Amsterdam, NL</Link></li>
              <li><Link href="/contact">New York, USA</Link></li>
              <li><Link href="/contact">Lagos, Nigeria</Link></li>
              <li><a href="mailto:hello@sandlip-oasis.com">hello@sandlip-oasis.com</a></li>
            </ul>
          </div>
        </div>
        <div className="fbot">
          <p className="fcopy">© 2025 Sandlip-Oasis. All rights reserved. Amsterdam · New York · Lagos.</p>
          <p className="fmade">Made across <span>three continents</span></p>
        </div>
      </div>
    </footer>
  )
}
