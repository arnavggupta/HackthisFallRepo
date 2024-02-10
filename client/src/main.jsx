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
import Resources from "./subpage/Resources.jsx";
import Doubts from "./subpage/Doubts.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mycommunities" element={<Mycommunities />} />
      <Route path="/mycommunities/react" element={<CommunityPage />}>
        <Route path="/mycommunities/react/chats" element={<Chat />} />
        <Route path="/mycommunities/react/resources" element={<Resources />} />
        <Route path="/mycommunities/react/doubts" element={<Doubts/>} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
