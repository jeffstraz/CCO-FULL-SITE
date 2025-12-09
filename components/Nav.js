import Link from 'next/link';
export default function Nav(){return (
  <header className="header">
    <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <div className="brand">
        <img src="/logo-orange.png" alt="logo" />
        <div>
          <div style={{fontWeight:800}}>Contractor Command Ops LLC</div>
          <div style={{fontSize:12}}>The Smart Way to Run Your Contracting Business</div>
        </div>
      </div>
      <nav className="nav">
        <Link href="/"><a>Home</a></Link>
        <Link href="/services"><a>Services</a></Link>
        <Link href="/pricing"><a>Pricing</a></Link>
        <Link href="/portal/login"><a>Portal</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </nav>
    </div>
  </header>
)}