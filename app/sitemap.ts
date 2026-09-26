import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
export const dynamic = 'force-static'
export default function sitemap():MetadataRoute.Sitemap{
 const paths=['','/portfolio','/services','/book','/contact','/tokyo-photographer','/kimono-photoshoot-tokyo','/tokyo-couple-photographer','/tokyo-pre-wedding-photographer','/tokyo-event-photographer','/tokyo-night-photoshoot']
 return paths.map(path=>({url:`${siteConfig.siteUrl}${path}`,lastModified:new Date(),changeFrequency:path===''?'weekly':'monthly',priority:path===''?1:path==='/book'?0.9:0.8}))
}
