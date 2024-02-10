/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar";
import reactimg from "../assets/images/React.png";
const CommunityPage = () => {
  return (
    <>
      <LandingNavbar />
      <div className="flex justify-between">
        <p className="ml-10 font-bold tracking-wide text-2xl my-2 underline">Java</p>
        <div className="flex gap-12 mr-40 my-3">
          <Link to="/mycommunities/react/chats">Chats</Link>
          <Link to="/mycommunities/react/resources">Resources</Link>
          <Link to="/mycommunities/react/doubts">Doubts</Link>
        </div>
      </div>
      <div className="h-[100dvh]">
        <Outlet />
      </div>
    </>
  );
};

export default CommunityPage;
