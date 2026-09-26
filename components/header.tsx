'use client'

import Image from 'next/image'
import { assetPath } from '@/lib/site-config'
import Link from 'next/link'
import { useState } from 'react'
import { CloseIcon, MenuIcon } from './icons'

const nav = [
  ['Home','/'], ['Portfolio','/portfolio'], ['Services','/services'], ['About','/#about'], ['FAQ','/#faq'], ['Contact','/contact']
]

export function Header() {
  const [open,setOpen] = useState(false)
  return <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/90 backdrop-blur-xl">
    <div className="container-page flex h-[74px] items-center justify-between gap-5">
      <Link href="/" className="relative h-12 w-40 shrink-0" aria-label="TINA Photo Solutions home">
        <Image src={assetPath('/images/tina-logo.jpeg')} alt="TINA Photo Solutions" fill sizes="160px" className="object-contain object-left mix-blend-multiply" priority />
      </Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
        {nav.map(([label,href]) => <Link key={label} href={href} className="text-sm font-medium text-ink/75 transition hover:text-brand">{label}</Link>)}
      </nav>
      <div className="flex items-center gap-2">
        <Link href="/book" className="btn-primary hidden sm:inline-flex">Reserve a Photoshoot</Link>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white lg:hidden" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu">
          {open ? <CloseIcon/> : <MenuIcon/>}
        </button>
      </div>
    </div>
    {open && <div id="mobile-menu" className="border-t border-black/5 bg-cream px-5 py-5 lg:hidden">
      <nav className="container-page flex flex-col gap-1" aria-label="Mobile navigation">
        {nav.map(([label,href]) => <Link key={label} href={href} onClick={()=>setOpen(false)} className="rounded-2xl px-4 py-3 text-base font-medium hover:bg-white">{label}</Link>)}
        <Link href="/book" onClick={()=>setOpen(false)} className="btn-primary mt-3 sm:hidden">Reserve a Photoshoot</Link>
      </nav>
    </div>}
  </header>
}
