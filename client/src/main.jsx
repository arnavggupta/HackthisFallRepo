import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import LoginPage from './Pages/Login.jsx';
import SignUpPage from './Pages/SignUp.jsx';
import Home from './Pages/Home.jsx';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import CommunityPage from './Pages/community_page.jsx';
import Mycommunities from "./Pages/Mycommunities.jsx";
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} /> 
      <Route path='/community' element={<CommunityPage/>} />
      <Route path ="/mycommunities" element={<Mycommunities/>}/> 

      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
