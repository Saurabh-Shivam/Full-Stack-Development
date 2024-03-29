import React from "react";
import Container from "../components/Container";
import { containerData, apiUrl, publicApiKey, hashKey } from "../containerData";

const Home = (props) => {
  let category = props.category;
  return (
    <div className="mt-4 p-4 flex flex-col gap-10 md:gap-20">
      {containerData.map((item) => (
        <Container
          key={item.id}
          type={item.type}
          title={item.title}
          apiUrl={apiUrl} // Pass the apiUrl to Container
          pKey={publicApiKey}
          hKey={hashKey}
          category={category}
        />
      ))}
    </div>
  );
};

export default Home;
