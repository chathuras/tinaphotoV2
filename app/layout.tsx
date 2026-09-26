import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileCTA } from '@/components/mobile-cta'
import { siteConfig } from '@/lib/site-config'


export const metadata: Metadata = {
 metadataBase:new URL(siteConfig.siteUrl),
 title:{default:'Tokyo Photographer | Couples, Kimono, Events & Portraits | TINA Photo Solutions',template:'%s | TINA Photo Solutions'},
 description:'Book a professional Tokyo photoshoot with TINA Photo Solutions. Photography for couples, families, kimono sessions, birthdays, events, wedding pre-shoots and Tokyo portraits.',
 alternates:{canonical:'/'},
 openGraph:{type:'website',locale:'en_US',siteName:'TINA Photo Solutions',title:'Tokyo Photographer | TINA Photo Solutions',description:'Professional photography for couples, families, visitors and special occasions across Tokyo.',images:[{url:'/images/couple-prewedding.jpeg',width:1363,height:2047,alt:'Tokyo couple photography by TINA Photo Solutions'}]},
 twitter:{card:'summary_large_image',title:'Tokyo Photographer | TINA Photo Solutions',description:'Professional photography for couples, families, visitors and events in Tokyo.',images:['/images/couple-prewedding.jpeg']}
}

export default function RootLayout({children}:{children:React.ReactNode}){
 const schema={
  '@context':'https://schema.org','@type':'ProfessionalService',name:'TINA Photo Solutions',areaServed:{'@type':'City',name:'Tokyo'},address:{'@type':'PostalAddress',addressLocality:'Tokyo',addressCountry:'JP'},url:siteConfig.siteUrl,image:`${siteConfig.siteUrl}/images/couple-prewedding.jpeg`,description:'Photography services in Tokyo for couples, families, visitors, birthdays, events, kimono sessions and pre-wedding shoots.'
 }
 return <html lang="en"><body className="pb-[72px] md:pb-0"><Header/><main>{children}</main><Footer/><MobileCTA/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>
}
