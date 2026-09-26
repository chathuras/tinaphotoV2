'use client'
import Image from 'next/image'
import { assetPath } from '@/lib/site-config'
import { useState } from 'react'

const portfolioItems=[
 {src:assetPath('/images/couple-prewedding.jpeg'),alt:'Couple portrait photographed in a green Tokyo setting',category:'Couples'},
 {src:assetPath('/images/kimono-tokyo.jpeg'),alt:'Kimono portrait with a traditional Tokyo landmark in the background',category:'Kimono'},
 {src:assetPath('/images/cherry-blossom-portrait.jpeg'),alt:'Seasonal portrait among cherry blossoms in Tokyo',category:'Portraits'},
 {src:assetPath('/images/birthday-family.jpeg'),alt:'Baby birthday portrait at an indoor celebration',category:'Birthdays & Families'},
 {src:assetPath('/images/event-photography.jpeg'),alt:'Guests photographed during a dinner event',category:'Events'},
 {src:assetPath('/images/couple-prewedding.jpeg'),alt:'Tokyo couple portrait representing proposal photography sessions',category:'Proposals'},
]
export function PortfolioGrid({compact=false}:{compact?:boolean}){
 const [active,setActive]=useState<number|null>(null)
 const items=portfolioItems
 return <>
  <div className={`grid gap-4 ${compact?'sm:grid-cols-2 lg:mx-auto lg:max-w-[60%] lg:grid-cols-3':'sm:grid-cols-2 lg:grid-cols-3'}`}>
   {items.map((item,i)=><button key={item.category} onClick={()=>setActive(i)} className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-blush text-left" aria-label={`Open ${item.category} photograph`}>
    <Image src={item.src} alt={item.alt} fill sizes={compact?'(min-width:640px) 33vw,100vw':'(min-width:1024px) 33vw,50vw'} className="object-cover transition duration-700 group-hover:scale-[1.02]" loading={i>1?'lazy':'eager'} />
    <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">{item.category}</span>
   </button>)}
  </div>
  {active!==null&&<div className="fixed inset-0 z-[70] grid place-items-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label="Portfolio image viewer" onClick={()=>setActive(null)}>
   <button className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold" onClick={()=>setActive(null)}>Close</button>
   <div className="relative h-[82vh] w-[92vw] max-w-5xl" onClick={e=>e.stopPropagation()}><Image src={items[active].src} alt={items[active].alt} fill sizes="92vw" className="object-contain" /></div>
  </div>}
 </>
}
