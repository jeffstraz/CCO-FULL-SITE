import jwt from 'jsonwebtoken';
const SECRET = process.env.AUTH_SECRET || 'dev-secret-change-me';
export function sign(payload){ return jwt.sign(payload, SECRET, {expiresIn:'8h'}); }
export function verify(token){ try{return jwt.verify(token, SECRET);}catch(e){return null;} }
