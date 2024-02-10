import LandingNavbar from "../components/LandingNavbar";
import Cards from "../components/Cards";
import { bottom } from "@popperjs/core";
import reactimage from "../assets/images/React.png"
function Community() {
  return (
<div className="grid grid-rows-auto-1fr">
  <div>
    <LandingNavbar />
    <div style={{ display: 'flex', flexDirection: 'column' }} className="h-screen w-screen flex justify-center">
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
      <Cards
  title="ReactJs"
  text="Join the ReactJS community to connect with other students, share knowledge, and stay updated on the latest developments in React!"
  imageUrl={reactimage}  // Assuming reactimage is the variable containing the image URL
/>
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
