import { brands } from '../data.js'

// Retail blister card: Kickers logo up top, big shoe art, the die-cast in a
// blister below, and the licensing brand's badge in the corner.
// Everything inside is sized in container units so the card scales as one piece.

export default function KickersCard({ item, index = 1, total = 8, className = '' }) {
  const brand = brands[item.brand]
  return (
    <article
      className={`kcard ${className}`}
      style={{ '--card': item.card ?? '#2B59FF' }}
      aria-label={`${brand.name} ${item.model} Kickers die-cast card`}
    >
      <div className="kcard-body">
        <span className="kcard-slot" />
        <span className="kcard-num">
          {String(index).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </span>

        <svg className="kcard-stripes" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="0,18 100,6 100,10 0,24" />
          <polygon points="0,62 100,40 100,46 0,70" />
          <polygon points="0,80 100,56 100,58 0,83" />
        </svg>

        <div className="kcard-band">
          <img src="/kickers-logo.png" alt="Kickers" />
        </div>

        {item.chase && <span className="kcard-chase">Chase</span>}

        <img className="kcard-art" src={item.img} alt="" />

        <div className="kcard-side">
          <span>{brand.name} &middot; S01</span>
          <b>{index}/{total}</b>
        </div>

        <div className="kcard-base" />
        <div className="kcard-blister">
          <img src={item.img} alt="" />
        </div>

        <div className="kcard-meta">
          <strong>{item.model}</strong>
          <span>Style {item.style} &middot; 1:6</span>
        </div>

        <span className="kcard-brand" style={{ background: brand.bg, color: brand.ink }}>
          {brand.name}
        </span>
      </div>
    </article>
  )
}
