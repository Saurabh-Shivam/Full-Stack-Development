import React from "react";
import Container from "../components/Container";
import { containerData, apiUrl, publicApiKey, hashKey } from "../containerData";

const Home = ({ cardValue }) => {
  return (
    //     <div>
    //       {/* {containerData.map((item) => {
    //         return <Container key={item.id} type={item.type} title={item.title} cardValue={apiUrl}/>;
    //       })} */}
    //       <Container cardValue={cardValue} />
    //     </div>
    <div>
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
