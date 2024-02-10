/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar";

const CommunityPage = () => {
  return (
    <>
      <LandingNavbar />
      <div className="flex justify-between">
        <p className="ml-10">Java</p>
        <div className="flex gap-12 mr-40">
          <Link to="/mycommunities/react/chats">Chats</Link>
          <Link>Resources</Link>
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
