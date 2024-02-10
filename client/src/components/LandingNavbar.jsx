import { Link } from "react-router-dom";

function LandingNavbar() {
  return (
    <nav className="flex justify-between items-center py-4 bg-blue-700 text-slate-200">
      <div className="flex gap-4">
        <img src="" alt="Logo" />
        <Link to="/mycommunities">My communities</Link>
      </div>
      <input
        className="rounded-full px-4 py-2"
        placeholder="Search Communities "
      />
      <button className="border border-black rounded-full px-4 py-2 mr-4 bg-white text-black ">
        Logout
      </button>
    </nav>
  );
}

export default LandingNavbar;