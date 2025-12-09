import Nav from '../components/Nav';
export default function Home(){
  return (
    <>
      <Nav />
      <main className="container">
        <section className="hero">
          <div className="left">
            <h1>Run Your Contracting Business on Autopilot</h1>
            <p>Contractor Command Ops builds fully automated AI offices that answer calls, respond to leads, book appointments, dispatch technicians, and manage customer service 24/7.</p>
            <div style={{marginTop:20}}>
              <a href="/portal/login"><button className="cta">Client Portal</button></a>
              <a href="/contact" style={{marginLeft:12}}><button className="cta" style={{background:'#fff', color:'#333', border:'1px solid #ddd'}}>Book a Demo</button></a>
            </div>
          </div>
          <div className="right card">
            <h3>How it works</h3>
            <ol>
              <li>AI answers calls & qualifies leads</li>
              <li>Auto-booking based on availability</li>
              <li>Dispatch techs & send confirmations</li>
            </ol>
          </div>
        </section>

        <section style={{marginTop:30}}>
          <h2>Features</h2>
          <div className="grid">
            <div className="card"><h4>24/7 AI Reception</h4><p>No missed calls, instant qualification.</p></div>
            <div className="card"><h4>Lead Nurture</h4><p>Automated follow-ups across SMS, email, voicemail.</p></div>
            <div className="card"><h4>Dispatch Engine</h4><p>Optimized routing and tech notifications.</p></div>
            <div className="card"><h4>Customer Service AI</h4><p>Reschedules, FAQs, upsells handled automatically.</p></div>
          </div>
        </section>

        <section style={{marginTop:30}}>
          <h2>Trusted Results</h2>
          <div className="grid">
            <div className="card">“We went from 40 to 63 booked jobs per week.” — Jared, Prime Plumbing</div>
            <div className="card">“Reduced admin costs and boosted bookings.” — Maya, Rapid HVAC</div>
            <div className="card">“No more missed calls. Techs stay busy.” — Carlos, TopRoof</div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <img src="/logo-white.png" alt="logo" style={{height:48}} />
            <div style={{marginTop:8}}>© {new Date().getFullYear()} Contractor Command Ops LLC</div>
          </div>
          <div>
            <div>1-855-303-2681</div>
            <div><a href="mailto:jeff@contractorcommandops.com" style={{color:'#fff'}}>jeff@contractorcommandops.com</a></div>
          </div>
        </div>
      </footer>
    </>
  );
}