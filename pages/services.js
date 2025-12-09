import Nav from '../components/Nav';
export default function Services(){
  return (
    <>
      <Nav />
      <main className="container">
        <h1>Services</h1>
        <p>We deliver turnkey AI office automation for home-service contractors.</p>
        <ul>
          <li>AI Phone Receptionist & Voice Profiles</li>
          <li>12-step Lead Follow-up Engine</li>
          <li>Dispatch & Scheduling Automation</li>
          <li>Customer Service Automation</li>
          <li>Dashboard & Reporting</li>
        </ul>
      </main>
    </>
  );
}