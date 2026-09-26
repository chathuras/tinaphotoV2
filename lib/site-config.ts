export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`

export const siteConfig = {
  name: 'TINA Photo Solutions',
  location: 'Tokyo, Japan',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || '',
  email: '',
}

export const services = [
  {
    slug: 'birthday',
    title: 'Birthday Shoots',
    copy: 'Joyful, relaxed photography for children, adults and family celebrations.',
    image: assetPath('/images/birthday-family.jpeg'),
    href: '/services#birthday'
  },
  {
    slug: 'events',
    title: 'Events',
    copy: 'Candid moments and important group photographs for private and corporate events.',
    image: assetPath('/images/event-photography.jpeg'),
    href: '/tokyo-event-photographer'
  },
  {
    slug: 'pre-wedding',
    title: 'Wedding Pre-Shoots',
    copy: 'Natural, romantic portraits for engaged and destination couples in Tokyo.',
    image: assetPath('/images/couple-prewedding.jpeg'),
    href: '/tokyo-pre-wedding-photographer'
  },
  {
    slug: 'kimono',
    title: 'Kimono Shoots',
    copy: 'Beautiful Tokyo portraits for solo travellers, couples and families wearing kimono.',
    image: assetPath('/images/kimono-tokyo.jpeg'),
    href: '/kimono-photoshoot-tokyo'
  },
  {
    slug: 'proposal',
    title: 'Proposal Photoshoots',
    copy: 'Discreet photography for surprise proposals and newly engaged couples in Tokyo.',
    image: '',
    href: '/tokyo-proposal-photographer'
  }
] as const
