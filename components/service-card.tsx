import Image from 'next/image'
import Link from 'next/link'
import { ArrowIcon } from './icons'

type Props={title:string;copy:string;image:string;href:string;slug:string}
export function ServiceCard({title,copy,image,href,slug}:Props){return <article className="group overflow-hidden rounded-4xl border border-black/5 bg-white">
  <div className="relative aspect-[4/5] overflow-hidden bg-[#33292c]">
    {image ? <Image src={image} alt={`${title} by TINA Photo Solutions in Tokyo`} fill sizes="(min-width:1024px) 20vw,(min-width:640px) 45vw,90vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" /> : <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(201,22,29,.35),transparent_28%),linear-gradient(140deg,#161114,#3b242a_50%,#171215)] p-8 text-center text-white"><div><p className="eyebrow !text-rose-200">Tokyo after dark</p><p className="mt-3 font-serif text-3xl">Night portfolio image ready to add</p><p className="mt-3 text-sm text-white/65">A dedicated night photograph is intentionally not fabricated.</p></div></div>}
  </div>
  <div className="p-6"><h3 className="text-2xl">{title}</h3><p className="mt-2 min-h-14 text-sm leading-6 text-muted">{copy}</p><Link href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">{slug==='night'?'Enquire':'View details'} <ArrowIcon/></Link></div>
</article>}
