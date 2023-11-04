import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';
import { styled } from '@mui/material/styles';



const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App


{/* <div className="header">
<h1 className="title">
  Welcome to{" "}
  <span className="gradient-text-0">
    <a
      href="https://thirdweb.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      thirdweb.
    </a>
  </span>
</h1>

<p className="description">
  Get started by configuring your desired network in{" "}
  <code className="code">src/index.js</code>, then modify the{" "}
  <code className="code">src/App.js</code> file!
</p>


</div>

<div className="grid">
<a
  href="https://portal.thirdweb.com/"
  className="card"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/images/portal-preview.png"
    alt="Placeholder preview of starter"
  />
  <div className="card-text">
    <h2 className="gradient-text-1">Portal ➜</h2>
    <p>
      Guides, references, and resources that will help you build with
      thirdweb.
    </p>
  </div>
</a>

<a
  href="https://thirdweb.com/dashboard"
  className="card"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/images/dashboard-preview.png"
    alt="Placeholder preview of starter"
  />
  <div className="card-text">
    <h2 className="gradient-text-2">Dashboard ➜</h2>
    <p>
      Deploy, configure, and manage your smart contracts from the
      dashboard.
    </p>
  </div>
</a>

<a
  href="https://thirdweb.com/templates"
  className="card"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/images/templates-preview.png"
    alt="Placeholder preview of templates"
  />
  <div className="card-text">
    <h2 className="gradient-text-3">Templates ➜</h2>
    <p>
      Discover and clone template projects showcasing thirdweb
      features.
    </p>
  </div>
</a>
</div> */}