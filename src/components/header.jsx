import React, { useState } from "react";
import "./header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

export default function Header() {
  const [accounts, setAccounts] = useState("connect");

  async function handleConnect() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      if (chainId !== "0x4") {
        alert("Please connect to Rinkeby");
      } else {
        let account = accounts[0];
        let formatAccount = account.substr(0, 8) + "..." + account.substr(-4);
        setAccounts(formatAccount);
      }
    } else {
      alert("please install metaMask");
    }
  }

  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="punkLogo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="search" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Collection,item or user..."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} className="themeSwitchIcon" alt="" />
        </div>
      </div>
      <div className="login">
        <button className="loginButton" onClick={handleConnect}>
          {accounts}
        </button>
      </div>
    </div>
  );
}
