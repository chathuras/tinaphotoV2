import type { Metadata } from 'next'
import Link from 'next/link'
import { PortfolioGrid } from '@/components/portfolio-grid'
import { SectionHeading } from '@/components/section-heading'
export const metadata:Metadata={title:'Tokyo Photography Portfolio',description:'Explore couples, kimono, family, event and portrait photography by TINA Photo Solutions in Tokyo.'}
export default function Portfolio(){return <div className="container-page py-16 sm:py-24"><SectionHeading eyebrow="Portfolio" title="People, celebrations and Tokyo moments." copy="A focused selection of real work supplied by TINA Photo Solutions. More galleries can be added without loading every full-resolution image on the first page."/><div className="mt-10"><PortfolioGrid/></div><div className="mt-12 text-center"><Link href="/book" className="btn-primary">Reserve a Photoshoot</Link></div></div>}
