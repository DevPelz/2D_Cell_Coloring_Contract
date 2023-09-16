import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "viem/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import "./App.css";

const { VITE_SEPOLIA_API } = import.meta.env;
const { chains, publicClient } = configureChains(
  [sepolia],
  [alchemyProvider({ apiKey: VITE_SEPOLIA_API }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "001",
  chains,
});

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
