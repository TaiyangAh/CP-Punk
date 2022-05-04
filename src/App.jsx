import Header from "./components/header";
import Collection from "./components/collection";
import Main from "./components/main";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [punkList, setPunkList] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    async function getMyNfts() {
      const nftsData = await axios.get(
        "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xc36d211da64a4cdd727f722196545ec8799bed9e&order_direction=asc&offset=0&limit=20"
      );
      // console.log(nftsData.data.assets);
      setPunkList(nftsData.data.assets);
    }
    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkList.length > 0 && (
        <>
          <Main punkList={punkList} selectedPunk={selectedPunk} />
          <Collection punkList={punkList} setSelectedPunk={setSelectedPunk} />
        </>
      )}
    </div>
  );
}

export default App;
