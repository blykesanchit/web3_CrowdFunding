import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './context';
import "./index.css";
import {
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <ThirdwebProvider
        desiredChainId={ChainId.Mumbai}
        activeChain={activeChain}
        clientId='812b4873657f17f35673e4573a6dd604'
        supportedWallets={[
          metamaskWallet(),
          coinbaseWallet({ recommended: true }),
          walletConnect(),
          localWallet(),
          embeddedWallet(),
        ]}
      >
        {/* <ConnectWallet
          theme={"dark"}
          modalSize={"wide"}
        /> */}

        <StateContextProvider>
          <App />
        </StateContextProvider>
      </ThirdwebProvider>
    </Router>
  </React.StrictMode>
);
