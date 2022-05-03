import Header from "./components/header";
// import Card from "./components/card";
import Collection from "./components/collection";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [punkList, setPunkList] = useState([]);

  useEffect(() => {
    async function getMyNfts() {
      const nftsData = await axios.get(
        "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xc36d211da64a4cdd727f722196545ec8799bed9e&order_direction=desc&offset=0&limit=20"
      );
      // console.log(nftsData.data.assets);
      setPunkList(nftsData.data.assets);
    }
    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {/* <Card
        id={0}
        name={"punk"}
        traits={[{ value: 8 }]}
        image="https://lh3.googleusercontent.com/6KMKAyeLxNRSJqPzAd0bm8DrUOBjt1cZWD-UZu13FvXpEmQuRsPFTCiP4W8WawI9VpEwo-v1_Vo1ddYe-u6QuOQFiBxi582hS5Oj7w"
      /> */}
      <Collection punkList={punkList} />
    </div>
  );
}

export default App;
