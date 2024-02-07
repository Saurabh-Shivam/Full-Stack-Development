import React from "react";
import Container from "../components/Container";
import { apiUrl, containerData } from "../containerData.js";

const Home = ({ cardValue }) => {
  return (
    <div>
      {/* {containerData.map((item) => {
        return <Container key={item.id} type={item.type} title={item.title} cardValue={apiUrl}/>;
      })} */}
      <Container cardValue={cardValue} />
    </div>
  );
};

export default Home;
