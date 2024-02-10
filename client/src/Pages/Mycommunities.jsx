import LandingNavbar from "../components/LandingNavbar";
import Cards from "../components/Cards";
import { bottom } from "@popperjs/core";
function Community() {
  return (
<div className="grid grid-rows-auto-1fr">
  <div>
    <LandingNavbar />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  </div>
</div>

  );
}

export default Community;
