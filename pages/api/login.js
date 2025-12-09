import {sign} from './_auth';
export default function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  const {email,password} = req.body||{};
  // Simple demo auth: compare to env vars
  if(email===process.env.PORTAL_USER && password===process.env.PORTAL_PASS){
    const token = sign({email});
    // set cookie (optional) - here we return token
    return res.json({ok:true,token});
  }
  return res.status(401).json({error:'Unauthorized'});
}