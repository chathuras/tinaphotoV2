import Image from 'next/image'
import Link from 'next/link'
import { assetPath, siteConfig } from '@/lib/site-config'
import { InstagramIcon } from './icons'

export function Footer() {
  return <footer className="border-t border-black/5 bg-white">
    <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
      <div>
        <div className="relative h-16 w-52"><Image src={assetPath('/images/tina-logo-transparent.png')} alt="TINA Photo Solutions" fill sizes="208px" className="object-contain object-left" /></div>
        <p className="mt-4 max-w-sm text-sm leading-6 text-muted">Personal and event photography in Tokyo for visitors, couples, families and special occasions.</p>
        <p className="mt-4 text-sm font-medium">Tokyo, Japan</p>
      </div>
      <div><h3 className="font-sans text-sm font-semibold">Explore</h3><div className="mt-4 flex flex-col gap-3 text-sm text-muted"><Link href="/portfolio">Portfolio</Link><Link href="/services">Services</Link><Link href="/book">Reserve a Photoshoot</Link><Link href="/contact">Contact</Link></div></div>
      <div><h3 className="font-sans text-sm font-semibold">Connect</h3><div className="mt-4 flex flex-col gap-3 text-sm text-muted">
        {siteConfig.instagramUrl ? <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2"><InstagramIcon/>Instagram</a> : <span>Instagram link ready to configure</span>}
        <Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms</Link>
      </div></div>
    </div>
    <div className="border-t border-black/5 py-5 text-center text-xs text-muted">© {new Date().getFullYear()} TINA Photo Solutions. All rights reserved.</div>
  </footer>
}
