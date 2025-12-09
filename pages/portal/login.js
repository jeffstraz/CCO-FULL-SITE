import {useState} from 'react';
import {useRouter} from 'next/router';
export default function Login(){
  const [err,setErr]=useState('');
  const router=useRouter();
  async function submit(e){
    e.preventDefault();
    const fd=new FormData(e.target);
    const body=Object.fromEntries(fd);
    const res=await fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
    const j=await res.json();
    if(res.ok){ localStorage.setItem('cco_token', j.token); router.push('/portal/dashboard'); }
    else setErr(j.error||'Login failed');
  }
  return (
    <div className="portal-box">
      <h2>Client Portal Login</h2>
      <form onSubmit={submit}>
        <label>Email<input name="email" required /></label>
        <label>Password<input name="password" type="password" required /></label>
        <button className="cta" type="submit">Login</button>
      </form>
      <p style={{color:'red'}}>{err}</p>
    </div>
  );
}