import { useState, useEffect } from "react";
import { assets } from "chain-registry";
import appStore from "./store/RootStore";
import { Box, AssetLists, Select, Space } from "./components";
import "./styles/globals.css";
import { observer } from "mobx-react";

function App() {
  const { appStotre } = appStore();
  const [selectedChain, setChain] = useState("bitsong");

  const options = [
    { value: "bitsong", label: "bitsong" },
    { value: "axelar", label: "axelar" },
    { value: "kujira", label: "kujira" },
  ];
  const handleChange = (value: string) => {
    setChain(value);
  };
  // 监听mobox
  useEffect(() => {
    const list = assets.find(({ chain_name }) => chain_name === selectedChain);
    if (list?.assets) appStotre.setAssetList(list?.assets);
    console.log("监听mobox");
  }, [appStotre, selectedChain]);

  return (
    <div style={{ height: "100vh", padding: "24px" }}>
      <Box>
        <Space size={16}>
          <Select
            defaultValue={selectedChain}
            options={options}
            onChange={handleChange}
          />
        </Space>
        <h2>On {selectedChain}</h2>
        <AssetLists list={appStotre.assetList} />
      </Box>
    </div>
  );
}

export default observer(App);
