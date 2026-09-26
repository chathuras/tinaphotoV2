import type { Metadata } from 'next'
import { ServiceLanding } from '@/components/service-landing'

export const metadata: Metadata = {
  title: 'Tokyo Proposal Photographer',
  description: 'Plan discreet surprise proposal photography in Tokyo, followed by natural newly engaged portraits.',
  alternates: { canonical: '/tokyo-proposal-photographer' }
}

export default function Page() {
  return <ServiceLanding
    eyebrow="Proposal photography"
    title="Your proposal, captured without spoiling the surprise."
    description="Plan a discreet proposal photoshoot in Tokyo, with the timing, meeting point and photographer position arranged in advance. After the moment, continue with relaxed portraits as a newly engaged couple."
    bullets={['Discreet planning before the day','Surprise proposal coverage','Newly engaged couple portraits','Tokyo location planning around your idea']}
    note="Share your preferred date, location and proposal plan in your enquiry so the details can be coordinated discreetly."
  />
}
