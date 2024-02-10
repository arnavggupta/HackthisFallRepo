/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar";
import reactimg from "../assets/images/React.png";
const CommunityPage = () => {
  return (
    <>
      <LandingNavbar />
      <div className="flex justify-between text-2xl tracking-wide mt-4">
        <p className="ml-10 flex gap-1 items-center">
          <img className="h-10 w-10" src={reactimg} alt="Reloaded" />
          <span>ReactJs</span>
        </p>
        <div className="flex gap-12 mr-40">
          <Link to="/mycommunities/react/chats">Chats</Link>
          <Link to="/mycommunities/react/resources">Resources</Link>
          <Link>Doubts</Link>
        </div>
      </div>
      <div className="h-[100dvh]">
        <Outlet />
      </div>
    </>
  );
};

export default CommunityPage;
