import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  return (
    <div>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
