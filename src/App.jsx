import { useState } from 'react'
import KickersCard from './components/KickersCard.jsx'
import { brands, cards, twinPacks, licensingSteps, specs, faqs } from './data.js'

function Announce() {
  return (
    <a href="#waitlist" className="announce">
      <span className="sq" /> Series 01 waitlist is open. Collectors and brands welcome <span aria-hidden="true">&rarr;</span>
    </a>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Exact match', '#match'],
    ['Series 01', '#collection'],
    ['Licensing', '#licensing'],
    ['FAQ', '#faq'],
  ]
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          <img src="/kickers-logo.png" alt="Kickers" />
        </a>
        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#waitlist" className="btn btn-red" onClick={() => setOpen(false)}>
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
    <section className="hero grid-bg" id="top">
      <span className="crop crop-tl" />
      <span className="crop crop-tr" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="pill">
            <span className="sq" /> The first licensed sneaker die-cast
          </p>
          <h1>
            Your grails,
            <br />
            <em>die-cast.</em>
          </h1>
          <p className="lead">
            Officially licensed 1:6 metal replicas of real sneakers. Each one is engraved with the exact style code of
            the original pair and built with the brands you collect.
          </p>
          <div className="hero-actions">
            <a href="#waitlist" className="btn btn-red">Get early access</a>
            <a href="#collection" className="btn btn-ghost">See the cards</a>
          </div>
        </div>

        <div className="hero-stack">
          <KickersCard item={cards[1]} index={2} className="hero-card-back" />
          <KickersCard item={cards[0]} index={1} className="hero-card-front" />
        </div>
      </div>

      <div className="container">
        <dl className="hero-facts">
          <div>
            <dt>Scale</dt>
            <dd>1:6 die-cast</dd>
          </div>
          <div>
            <dt>Licensing</dt>
            <dd>Brand-approved</dd>
          </div>
          <div>
            <dt>Serial</dt>
            <dd>Real style code</dd>
          </div>
          <div>
            <dt>Run</dt>
            <dd>Numbered packs</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

function BrandStrip() {
  return (
    <section className="brandstrip">
      <div className="container brandstrip-inner">
        <span className="label">Built for licensed partnerships with</span>
        <div className="brandstrip-names">
          <span>NIKE</span>
          <span>JORDAN</span>
          <span>SACAI</span>
          <span>FRAGMENT</span>
          <span>NIKE SB</span>
        </div>
      </div>
    </section>
  )
}

function ExactMatch() {
  const shoe = cards[3]
  return (
    <section className="section" id="match">
      <div className="container">
        <div className="section-head">
          <p className="label">
            <span className="sq" /> Exact match
          </p>
          <h2>
            Same shoe. Same code.
            <br />
            <span className="dim">One sixth the size.</span>
          </h2>
        </div>

        <div className="match-grid">
          <div className="match-stage grid-bg">
            <span className="crop crop-tl" />
            <span className="crop crop-br" />
            <img src={shoe.img} alt={`${shoe.model} reference`} />
            <span className="callout callout-a">
              <i />Colourway matched to brand standard
            </span>
            <span className="callout callout-b">
              <i />Real fabric laces
            </span>
            <span className="callout callout-c">
              <i />Tread scanned from the original sole
            </span>
          </div>

          <div className="match-copy">
            <p>
              Every sneaker ships with a manufacturer style code on its box label. Each Kickers die-cast carries
              the <strong>exact same code</strong> as the real pair it replicates, engraved into its base next to
              its own unit number.
            </p>
            <div className="plate">
              <div className="plate-head">
                <span>Base plate</span>
                <span className="chip">Matched</span>
              </div>
              <dl>
                <div>
                  <dt>Licensor</dt>
                  <dd>{brands[shoe.brand].name}</dd>
                </div>
                <div>
                  <dt>Model</dt>
                  <dd>{shoe.model}</dd>
                </div>
                <div>
                  <dt>Style code</dt>
                  <dd>{shoe.style}</dd>
                </div>
                <div>
                  <dt>Unit</dt>
                  <dd>No. 0001 / {shoe.edition.toLocaleString('en-US')}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Collection() {
  const [filter, setFilter] = useState('all')
  const tabs = [
    ['all', 'All'],
    ['nike', 'Nike'],
    ['jordan', 'Jordan'],
  ]
  const shown = cards
    .map((c, i) => ({ ...c, index: i + 1 }))
    .filter((c) => filter === 'all' || c.brand === filter)

  return (
    <section className="section" id="collection">
      <div className="container">
        <div className="section-head section-head-row">
          <div>
            <p className="label">
              <span className="sq" /> Series 01 &middot; Concept cards
            </p>
            <h2>Eight cards. One chase.</h2>
          </div>
          <div className="tabs" role="tablist">
            {tabs.map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={filter === key}
                className={filter === key ? 'is-active' : ''}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="card-grid">
          {shown.map((c) => (
            <div className="card-cell" key={c.id}>
              <KickersCard item={c} index={c.index} total={cards.length} />
              <div className="card-caption">
                <span>{brands[c.brand].name}</span>
                <span>{c.edition.toLocaleString('en-US')} units</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TwinPacks() {
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="section-head">
          <p className="label">
            <span className="sq" /> Twin packs
          </p>
          <h2>
            Left and right.
            <br />
            <span className="dim">Boxed as a pair.</span>
          </h2>
        </div>
        <div className="twin-grid">
          {twinPacks.map((t) => (
            <article className="twin" key={t.id}>
              <div className="twin-stage">
                <img src={t.img} alt={`${t.model} twin pack`} />
              </div>
              <div className="twin-info">
                <div>
                  <strong>{t.model}</strong>
                  <span>Style {t.style}</span>
                </div>
                <span className="twin-brand">{brands[t.brand].name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Licensing() {
  return (
    <section className="section section-light" id="licensing">
      <div className="container">
        <div className="section-head section-head-row">
          <div>
            <p className="label">
              <span className="sq" /> How licensing works
            </p>
            <h2>Built with the brands, not around them.</h2>
          </div>
          <a href="#waitlist" className="btn btn-dark">Partner with Kickers</a>
        </div>
        <ol className="steps">
          {licensingSteps.map((s) => (
            <li className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
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
    <section className="section grid-bg">
      <div className="container why-grid">
        <div>
          <p className="label">
            <span className="sq" /> Why Kickers
          </p>
          <h2>
            Cars got die-cast.
            <br />
            <em>Sneakers never did.</em>
          </h2>
        </div>
        <div className="why-body">
          <p>
            Die-cast cars have been collected for decades, often as officially licensed replicas of real models.
            Sneaker culture has the same obsession with drops, colourways and grails, yet nobody makes a licensed
            metal collectible for it.
          </p>
          <div className="stats">
            <div>
              <strong>0</strong>
              <span>Companies making licensed shoe die-cast today</span>
            </div>
            <div>
              <strong>1:1</strong>
              <span>Style code match with the real pair</span>
            </div>
            <div>
              <strong>250</strong>
              <span>Chase cards in Series 01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Waitlist() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('Collector')
  const [done, setDone] = useState(false)

  function submit(e) {
    e.preventDefault()
    if (email.trim()) setDone(true)
  }

  return (
    <section className="waitlist" id="waitlist">
      <div className="container waitlist-inner">
        <div>
          <p className="label label-dark">
            <span className="sq sq-dark" /> Waitlist
          </p>
          <h2>Be first in line for Series 01.</h2>
        </div>
        {done ? (
          <p className="waitlist-done">
            You&rsquo;re on the list as a {role.toLowerCase()}. We&rsquo;ll email {email} before the drop.
          </p>
        ) : (
          <form className="waitlist-form" onSubmit={submit}>
            <div className="roles" role="radiogroup" aria-label="I am a">
              {['Collector', 'Brand', 'Retailer'].map((r) => (
                <button
                  type="button"
                  key={r}
                  role="radio"
                  aria-checked={role === r}
                  className={role === r ? 'is-active' : ''}
                  onClick={() => setRole(r)}
                >
                  {r}
                </button>
              ))}
            </div>
            <div className="waitlist-row">
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-dark">Join waitlist</button>
            </div>
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
          <p className="label">
            <span className="sq" /> FAQ
          </p>
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
      <div className="container">
        <div className="footer-inner">
          <img src="/kickers-logo.png" alt="Kickers" className="footer-logo" />
          <span className="dim">Licensed die-cast sneakers.</span>
          <span className="dim">&copy; {new Date().getFullYear()} Kickers</span>
        </div>
        <p className="disclaimer">
          Concept renders. Product names, logos and images belong to their respective owners. Kickers is pursuing
          licensing partnerships and is not currently affiliated with or endorsed by the brands shown.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Announce />
      <Nav />
      <main>
        <Hero />
        <BrandStrip />
        <ExactMatch />
        <Collection />
        <TwinPacks />
        <Licensing />
        <Why />
        <Waitlist />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
