import {useEffect, useState} from 'react';
export default function Dashboard(){
  const [auth, setAuth] = useState(false);
  useEffect(()=>{ const t=localStorage.getItem('cco_token'); if(t) setAuth(true); else window.location='/portal/login';},[]);
  if(!auth) return null;
  return (
    <div style={{padding:24}}>
      <h1>Portal Dashboard</h1>
      <p>Welcome to your portal. Here you'll see live metrics, job queues, technician schedules, and messages.</p>
      <section style={{marginTop:20}}>
        <h3>Quick Actions</h3>
        <div style={{display:'flex',gap:12}}>
          <button className="cta">Create Job</button>
          <button className="cta">Send Message</button>
        </div>
      </section>
      <section style={{marginTop:20}}>
        <h3>Recent Activity</h3>
        <div className="card">No activity yet (this is a starter demo).</div>
      </section>
    </div>
  );
}