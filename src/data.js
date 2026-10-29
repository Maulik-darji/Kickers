// Model names and style codes are placeholders until each licence is signed.
// Replace `style` with the exact code from the original pair's box label.

export const brands = {
  nike: { name: 'NIKE', bg: '#0A0A0A', ink: '#FFFFFF' },
  jordan: { name: 'JORDAN', bg: '#E3242B', ink: '#FFFFFF' },
}

export const cards = [
  {
    id: 'jordan-1-low',
    model: 'Air Jordan 1 Low',
    brand: 'jordan',
    style: 'XX0000-001',
    img: '/shoes/jordan-1-low.webp',
    card: '#2B59FF',
    edition: 2500,
  },
  {
    id: 'nike-dunk-sb-futura',
    model: 'Dunk Low SB × Futura',
    brand: 'nike',
    style: 'XX0000-002',
    img: '/shoes/nike-dunk-sb-futura.webp',
    card: '#E3242B',
    edition: 1000,
  },
  {
    id: 'jordan-12',
    model: 'Air Jordan 12 Retro',
    brand: 'jordan',
    style: 'XX0000-003',
    img: '/shoes/jordan-12.webp',
    card: '#0E7C5A',
    edition: 2000,
  },
  {
    id: 'nike-sacai-ldwaffle',
    model: 'LDWaffle × sacai × fragment',
    brand: 'nike',
    style: 'XX0000-004',
    img: '/shoes/nike-sacai-ldwaffle.webp',
    card: '#F2B400',
    edition: 1500,
  },
  {
    id: 'jordan-1-mid',
    model: 'Air Jordan 1 Mid',
    brand: 'jordan',
    style: 'XX0000-005',
    img: '/shoes/jordan-1-mid.webp',
    card: '#7A3CFF',
    edition: 2500,
  },
  {
    id: 'nike-air-orange',
    model: 'Nike Air Orange',
    brand: 'nike',
    style: 'XX0000-006',
    img: '/shoes/nike-air-orange.webp',
    card: '#0A0A0A',
    edition: 1500,
  },
  {
    id: 'nike-air-zoom-blue',
    model: 'Nike Air Zoom Runner',
    brand: 'nike',
    style: 'XX0000-007',
    img: '/shoes/nike-air-zoom-blue.webp',
    card: '#FF6A1A',
    edition: 3000,
  },
  {
    id: 'nike-cleat',
    model: 'Mercurial Vapor FG',
    brand: 'nike',
    style: 'XX0000-008',
    img: '/shoes/nike-cleat.webp',
    card: '#1FBF5B',
    edition: 250,
    chase: true,
  },
]

export const twinPacks = [
  {
    id: 'nike-pegasus-pair',
    model: 'Nike Pegasus',
    brand: 'nike',
    style: 'XX0000-009',
    img: '/shoes/nike-pegasus-pair.webp',
  },
  {
    id: 'nike-dunk-gtx-pair',
    model: 'Dunk Low GORE-TEX',
    brand: 'nike',
    style: 'XX0000-010',
    img: '/shoes/nike-dunk-gtx-pair.webp',
  },
]

export const licensingSteps = [
  {
    n: '01',
    title: 'Partner',
    body: 'We sign an official licence with the shoe brand. No knock-offs, no "inspired by". Real names, real logos.',
  },
  {
    n: '02',
    title: 'Match',
    body: 'We work from the brand’s own tech pack and scan the original pair, so the die-cast carries the exact style code of the shoe it replicates.',
  },
  {
    n: '03',
    title: 'Approve',
    body: 'Every prototype, from paint and stitching to sole tread, goes back to the brand for sign-off before tooling.',
  },
  {
    n: '04',
    title: 'Drop',
    body: 'Co-branded, numbered cards release alongside the shoe drop, or as a retro for the grails that already have a following.',
  },
]

export const specs = [
  ['Scale', '1:6'],
  ['Body', 'Zinc alloy'],
  ['Sole', 'Rubber-touch'],
  ['Laces', 'Real fabric'],
  ['Base', 'Engraved style code'],
  ['Pack', 'Numbered card'],
]

export const faqs = [
  {
    q: 'Are these officially licensed?',
    a: 'That is the whole model. Kickers only produces a shoe once the brand has signed a licence and approved the prototype. The models shown here are concept cards for the partnerships we are building.',
  },
  {
    q: 'What does "exact style code" mean?',
    a: 'Every sneaker has a manufacturer style code on its box label, for example XX0000-000. Each Kickers die-cast is engraved with the same code as the real pair it replicates, plus its own unit number.',
  },
  {
    q: 'What is a chase card?',
    a: 'A rare model hidden in random packs. In Series 01 that is the Mercurial Vapor FG, limited to 250 pieces worldwide.',
  },
  {
    q: 'I work at a footwear brand. How do we partner?',
    a: 'Join the waitlist and select "Brand". We will reach out with our licensing deck, sample prototypes and revenue-share terms.',
  },
  {
    q: 'When do they ship?',
    a: 'Series 01 is in prototyping. Waitlist members get first access to the drop and the chase-card odds.',
  },
]
