'use client'
import { FormEvent, useState } from 'react'

const types=['Birthday','Event','Wedding Pre-Shoot','Kimono','Tokyo Night','Couple','Family','Portrait','Other']
export function InquiryForm({compact=false}:{compact?:boolean}){
 const [state,setState]=useState<'idle'|'sending'|'success'|'error'>('idle')
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault(); setState('sending')
  const form=e.currentTarget; const data=Object.fromEntries(new FormData(form).entries())
  const endpoint=process.env.NEXT_PUBLIC_INQUIRY_URL
  if(!endpoint){setState('error'); return}
  try {
   const res=await fetch(endpoint,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)})
   if(res.ok){setState('success'); form.reset()} else setState('error')
  } catch {
   setState('error')
  }
 }
 if(state==='success') return <div className="rounded-3xl border border-black/10 bg-white p-8"><h3 className="text-3xl">Thank you.</h3><p className="mt-3 body-copy">I’ll get back to you shortly to discuss your photoshoot.</p></div>
 return <form onSubmit={submit} className="grid gap-4" aria-label="Photoshoot enquiry form">
  <div className={`grid gap-4 ${compact?'':'sm:grid-cols-2'}`}>
   <Field label="Name" name="name" required />
   <Field label="Email or preferred messaging contact" name="contact" required />
   <label className="grid gap-2 text-sm font-medium">Photoshoot type<select name="type" required className="min-h-12 rounded-2xl border bg-white px-4 text-base"><option value="">Choose one</option>{types.map(t=><option key={t}>{t}</option>)}</select></label>
   <Field label="Preferred date" name="date" type="date" />
   <Field label="Number of people" name="people" type="number" min="1" />
   <Field label="Preferred area / location" name="location" />
   <Field label="Instagram username (optional)" name="instagram" />
  </div>
  <label className="grid gap-2 text-sm font-medium">Message<textarea name="message" rows={compact?4:5} className="rounded-2xl border bg-white px-4 py-3 text-base" placeholder="Tell me what you’re planning." /></label>
  <p className="text-xs leading-5 text-muted">For events, include the venue, date, duration and approximate guest count if you know them.</p>
  <button disabled={state==='sending'} className="btn-primary w-full sm:w-fit" type="submit">{state==='sending'?'Sending…':'Reserve a Photoshoot'}</button>
  {state==='error'&&<p className="text-sm text-brand">The form could not be sent. Please try again or use your preferred direct-message channel.</p>}
 </form>
}
function Field({label,name,type='text',required=false,min}:{label:string;name:string;type?:string;required?:boolean;min?:string}){return <label className="grid gap-2 text-sm font-medium">{label}<input name={name} type={type} required={required} min={min} className="min-h-12 rounded-2xl border bg-white px-4 text-base" /></label>}
