import type { Metadata } from 'next'
import Link from 'next/link'
import { InquiryForm } from '@/components/inquiry-form'
import { SectionHeading } from '@/components/section-heading'
import { siteConfig } from '@/lib/site-config'
export const metadata:Metadata={title:'Contact',description:'Contact TINA Photo Solutions about photography in Tokyo.'}
export default function Contact(){return <div className="container-page py-16 sm:py-24"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><SectionHeading eyebrow="Contact" title="Tell me about your photoshoot." copy="Use the short form for bookings, pricing, custom portraits or other photography requests in Tokyo."/><div id="direct-message" className="mt-8 rounded-3xl border bg-white p-6 text-sm leading-7 text-muted"><p className="font-semibold text-ink">Direct message options</p>{siteConfig.instagramUrl?<a href={siteConfig.instagramUrl}>Instagram</a>:<p>Instagram URL: configure in environment settings.</p>}{siteConfig.whatsappUrl?<a href={siteConfig.whatsappUrl}>WhatsApp</a>:<p>WhatsApp URL: configure when available.</p>}<p className="mt-4">Prefer the dedicated social landing page? <Link href="/book" className="font-semibold text-brand">Open /book</Link>.</p></div></div><div className="card p-6 sm:p-9"><InquiryForm/></div></div></div>}
