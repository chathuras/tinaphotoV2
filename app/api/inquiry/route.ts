import { NextResponse } from 'next/server'

export async function POST(req:Request){
  try{
    const data=await req.json()
    if(!data?.name || !data?.contact || !data?.type) return NextResponse.json({ok:false,error:'Missing required fields'},{status:400})
    const endpoint=process.env.INQUIRY_FORWARD_URL
    if(endpoint){
      const forwarded=await fetch(endpoint,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data),cache:'no-store'})
      if(!forwarded.ok) return NextResponse.json({ok:false,error:'Forwarding failed'},{status:502})
    } else {
      return NextResponse.json({ok:false,error:'Booking delivery is not configured yet'},{status:503})
    }
    return NextResponse.json({ok:true})
  }catch{return NextResponse.json({ok:false,error:'Invalid request'},{status:400})}
}
