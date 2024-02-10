/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoginPage from "./Pages/Login.jsx";
import SignUpPage from "./Pages/SignUp.jsx";
import Home from "./Pages/Home.jsx";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CommunityPage from "./Pages/CommunityPage.jsx";
import Mycommunities from "./Pages/Mycommunities.jsx";
import Chat from "./subpage/Chats.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mycommunities" element={<Mycommunities />} />
      <Route path="/mycommunities/java" element={<CommunityPage />}>
        <Route path="/mycommunities/java/chats" element={<Chat />} />
        <Route
          path="/mycommunities/java/resources"
          element={<div>Resources</div>}
        />
        <Route path="doubts" element={<div>Doubts</div>} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
