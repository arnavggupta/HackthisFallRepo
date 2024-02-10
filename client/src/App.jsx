import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/SignUp";
import Footer from "./components/Footer";
import Crousels  from "./components/Crousels.jsx";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"  ;

function App() {
  return (
    <div>
   
    
    <Outlet />
    <Footer></Footer>
    </div>
  );
}

export default App;
