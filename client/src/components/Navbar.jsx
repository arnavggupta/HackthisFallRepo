import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-700 h-[12vh] shadow sticky z-50 top-0 flex justify-between w-screen">
      <div className="w-[60%] flex justify-between">
        <div className="w-[20%]">
         
        </div>
        <div className="w-[78%] flex flex-row justify-start">
          <Link className="hover:border-b m-5 tracking-wide font-semibold text-lg text-slate-200" to="/">
              Home           
          </Link>
          <Link className="hover:border-b m-5 tracking-wide font-semibold text-lg text-slate-200" to="/about">
               About Us
          </Link>
        </div>
      </div>
      <div className="w-[38%] flex justify-end">
      <button className="tracking-wide font-semibold text-lg m-4 px-2 rounded-lg bg-slate-200">Login</button>
      <button className="tracking-wide font-semibold text-lg m-4 px-2 rounded-lg bg-slate-200">SignUp</button>
      </div>
    </div>
  );
}

export default Navbar;



// function Navbar() {
//   const navigate = useNavigate();
//   return (
//     <header className="flex justify-between bg-[#1995AD] items-center text-white">
//       <div className="flex gap-60 p-4 h-[50%]">
//         <img src="" alt="LOGO" />
//         <ul className="flex gap-6 items-center">
//           <li>
//             <Link className="hover:border-b" to="/">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link className="hover:border-b" to="/about">
//               About Us
//             </Link>
//           </li>
//           <li>Home</li>
//         </ul>
//       </div>
//       <div className="flex gap-2 items-center mr-4">
//         <Button onClick={() => navigate("/login")}>Login</Button>
//         <Button onClick={() => navigate("/signup")}>Sign Up</Button>
//       </div>
//     </header>
//   );
// }

// export default Navbar;