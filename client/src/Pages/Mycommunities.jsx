import LandingNavbar from "../components/LandingNavbar";
import Cards from "../components/Cards";
import { bottom } from "@popperjs/core";
import reactimage from "../assets/images/React.png"
function Community() {
  return (
<<<<<<< HEAD
    <div className="grid grid-rows-auto-1fr">
      <div>
        <LandingNavbar />
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="h-screen w-screen flex justify-center"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "40px",
            }}
          >
            <Cards to={"/mycommunities/java"} />
            <Cards />
            <Cards />
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
=======
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
>>>>>>> 3998ce2d78c7d456c0f7fced91ae301d467d3414
      </div>
    </div>
  );
}

export default Community;
