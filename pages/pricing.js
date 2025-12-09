import Nav from '../components/Nav';
export default function Pricing(){
  return (
    <>
      <Nav />
      <main className="container">
        <h1>Pricing</h1>
        <div className="grid">
          <div className="card"><h3>Starter</h3><p>$997 / mo - Small teams</p></div>
          <div className="card"><h3>Pro</h3><p>$1,997 / mo - Growing businesses</p></div>
          <div className="card"><h3>Ops Enterprise</h3><p>$4,997 / mo - Multi-location</p></div>
        </div>
      </main>
    </>
  );
}