import nodemailer from 'nodemailer';
import validator from 'validator';
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  const {name,email,phone,message} = req.body||{};
  if(!name||!email||!phone) return res.status(400).json({error:'Missing fields'});
  if(!validator.isEmail(email)) return res.status(400).json({error:'Invalid email'});
  // Log request
  console.log('Contact request', {name,email,phone,message});
  // Optional: send email if SMTP env configured
  if(process.env.SMTP_HOST){
    try{
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT||587),
        secure: Number(process.env.SMTP_PORT)===465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      });
      await transporter.sendMail({
        from: process.env.SITE_FROM_EMAIL||'no-reply@contractorcommandops.com',
        to: process.env.ADMIN_EMAIL||'jeff@contractorcommandops.com',
        subject:`Contact request from ${name}`,
        text:`${name} (${email}, ${phone})\n\n${message||''}`
      });
    }catch(e){
      console.error('Email send failed', e);
    }
  }
  return res.json({ok:true});
}