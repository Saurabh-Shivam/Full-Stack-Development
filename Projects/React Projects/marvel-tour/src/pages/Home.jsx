import React from "react";
import Container from "../components/Container";
import { containerData, apiUrl, publicApiKey, hashKey } from "../containerData";

const Home = ({ cardValue }) => {
  return (
    <div className="mt-4 p-4 flex flex-wrap flex-col gap-20">
      {containerData.map((item) => (
        <Container
          key={item.id}
          type={item.type}
          title={item.title}
          apiUrl={apiUrl} // Pass the apiUrl to Container
          pKey={publicApiKey}
          hKey={hashKey}
        />
      ))}
    </div>
  );
};

export default Home;
