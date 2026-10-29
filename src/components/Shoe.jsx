// Angular side-profile sneaker, drawn from straight-edged polygons only.
// Heel on the left, toe on the right. viewBox is 240 x 120.

const LOW = {
  upper: '16,92 16,48 28,40 62,40 76,48 92,26 108,24 116,36 150,52 190,62 216,70 228,82 230,92',
  heel: '16,92 16,48 28,40 40,40 46,92',
  collar: '28,40 62,40 76,48 66,50 36,46',
}

const HIGH = {
  upper: '16,92 16,20 30,12 62,12 72,22 92,18 108,20 116,36 150,52 190,62 216,70 228,82 230,92',
  heel: '16,92 16,20 30,12 40,12 46,92',
  collar: '30,12 62,12 72,22 62,24 36,18',
}

export default function Shoe({
  upper = '#F4F1EA',
  accent = '#FF4D00',
  sole = '#111111',
  lace = '#111111',
  high = false,
  title = 'Die-cast sneaker',
  ...rest
}) {
  const p = high ? HIGH : LOW
  const laces = high
    ? [[94, 26], [104, 32], [114, 38], [124, 44], [134, 49]]
    : [[100, 32], [110, 38], [120, 43], [130, 48], [140, 52]]

  return (
    <svg viewBox="0 0 240 120" role="img" aria-label={title} {...rest}>
      {/* outsole */}
      <polygon points="12,104 232,104 228,112 16,112" fill={sole} />
      {/* midsole */}
      <polygon points="12,92 232,92 232,104 12,104" fill="#FFFFFF" stroke={sole} strokeWidth="2" />
      <polygon points="60,96 180,96 180,100 60,100" fill={accent} />
      {/* upper */}
      <polygon points={p.upper} fill={upper} stroke={sole} strokeWidth="2" strokeLinejoin="miter" />
      <polygon points={p.heel} fill={accent} stroke={sole} strokeWidth="2" />
      <polygon points={p.collar} fill={sole} />
      {/* toe cap */}
      <polygon points="190,62 216,70 228,82 230,92 196,92 184,74" fill={accent} stroke={sole} strokeWidth="2" />
      {/* side stripe */}
      <polygon points="66,84 150,58 166,64 82,90" fill={accent} stroke={sole} strokeWidth="2" />
      {/* lace eyelets */}
      {laces.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x - 3} y={y - 2} width="8" height="4" fill={lace} />
      ))}
      {high && <rect x="22" y="30" width="14" height="14" fill={sole} />}
    </svg>
  )
}
