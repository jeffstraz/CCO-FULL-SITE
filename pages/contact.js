import Nav from '../components/Nav';
import {useState} from 'react';
export default function Contact(){
  const [status, setStatus] = useState('');
  async function submit(e){
    e.preventDefault();
    const fd = new FormData(e.target);
    const body = Object.fromEntries(fd);
    setStatus('Sending...');
    try{
      const res = await fetch('/api/contact', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)});
      const json = await res.json();
      if(res.ok) setStatus('Thanks—your message was sent.');
      else setStatus(json.error||'Error sending');
    }catch(err){ setStatus('Network error'); }
  }
  return (
    <>
      <Nav />
      <main className="container">
        <h1>Contact</h1>
        <form className="form" onSubmit={submit}>
          <label>Name<input name="name" required/></label>
          <label>Email<input name="email" type="email" required/></label>
          <label>Phone<input name="phone" required/></label>
          <label>Message<textarea name="message" rows="4"/></label>
          <button className="cta" type="submit">Send</button>
        </form>
        <p>{status}</p>
      </main>
    </>
  );
}