import { useState } from 'react'
import Shoe from './components/Shoe.jsx'
import { collection, steps, specs, faqs } from './data.js'

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Collection', '#collection'],
    ['How it’s made', '#process'],
    ['Why Kickers', '#why'],
    ['FAQ', '#faq'],
  ]
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo">
          KICKERS<span className="logo-mark">1:6</span>
        </a>
        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#waitlist" className="btn btn-dark" onClick={() => setOpen(false)}>
            Join waitlist
          </a>
        </nav>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Series 01 &middot; Now in prototyping</p>
          <h1>
            Sneakers,
            <br />
            die-cast.
          </h1>
          <p className="lead">
            The world&rsquo;s first collectible die-cast shoes. Metal body, rubber-touch sole,
            1:6 scale. Made to be collected the way you collected cars as a kid.
          </p>
          <div className="hero-actions">
            <a href="#waitlist" className="btn btn-accent">Get early access</a>
            <a href="#collection" className="btn btn-outline">See Series 01</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <span className="card-hole" />
            <span>KICKERS</span>
            <span>K-001</span>
          </div>
          <div className="card-window">
            <Shoe className="hero-shoe" title="Apex Runner die-cast sneaker" />
          </div>
          <div className="card-bottom">
            <div>
              <strong>Apex Runner</strong>
              <span>Series 01 &middot; No. 0001 / 2500</span>
            </div>
            <span className="stamp">1:6</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Ticker() {
  const words = ['Die-cast metal', 'Collect them all', '1:6 scale', 'Chase variants', 'Numbered packs', 'First of its kind']
  const row = [...words, ...words]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row.map((w, i) => (
          <span key={i}>
            {w}
            <i className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}

function Collection() {
  return (
    <section className="section" id="collection">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Series 01 &mdash; Street Origins</p>
          <h2>Six silhouettes. One chase.</h2>
        </div>
        <div className="grid-3">
          {collection.map((item) => (
            <article className="product" key={item.id}>
              <div className="product-stage" style={{ background: item.bg }}>
                <span className="product-id">{item.id}</span>
                <Shoe {...item.shoe} title={`${item.name} die-cast sneaker`} />
              </div>
              <div className="product-info">
                <div>
                  <h3>{item.name}</h3>
                  <span className="muted">{item.tag}</span>
                </div>
                <span className="edition">
                  {item.edition}
                  <small>units</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section section-dark" id="process">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow-accent">How it&rsquo;s made</p>
          <h2>From sketch to shelf.</h2>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <div className="specs">
          {specs.map(([k, v]) => (
            <div className="spec" key={k}>
              <span>{k}</span>
              <strong>{v}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="section" id="why">
      <div className="container why-grid">
        <div>
          <p className="eyebrow">Why Kickers</p>
          <h2>Cars got die-cast. Sneakers never did.</h2>
        </div>
        <div className="why-body">
          <p>
            Die-cast cars have been collected for decades. Sneaker culture is just as obsessive,
            with drops, colourways, grails, yet there has never been a metal collectible for it.
          </p>
          <p>We are building that category from zero.</p>
          <div className="stats">
            <div>
              <strong>0</strong>
              <span>Brands making shoe die-cast today</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Models in Series 01</span>
            </div>
            <div>
              <strong>250</strong>
              <span>Chase Gold pieces, ever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Waitlist() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function submit(e) {
    e.preventDefault()
    if (email.trim()) setDone(true)
  }

  return (
    <section className="waitlist" id="waitlist">
      <div className="container waitlist-inner">
        <h2>Be first in line for Series 01.</h2>
        {done ? (
          <p className="waitlist-done">You&rsquo;re on the list. We&rsquo;ll email {email} before the drop.</p>
        ) : (
          <form className="waitlist-form" onSubmit={submit}>
            <input
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-dark">Join waitlist</button>
          </form>
        )}
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="faq">
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2>Questions.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq ${open === i ? 'is-open' : ''}`} key={f.q}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <span className="faq-sign">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p>{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="logo">
          KICKERS<span className="logo-mark">1:6</span>
        </span>
        <span className="muted">The first die-cast sneaker collectibles.</span>
        <span className="muted">&copy; {new Date().getFullYear()} Kickers</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Collection />
        <Process />
        <Why />
        <Waitlist />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
