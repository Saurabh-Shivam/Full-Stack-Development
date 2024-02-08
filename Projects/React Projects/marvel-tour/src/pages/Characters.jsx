import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import Container from "../components/Container";
import { apiUrl, publicApiKey, hashKey } from "../containerData";

const Characters = (props) => {
  let category = props.category;
  const [allCards, setAllCards] = useState(true);
  return (
    <div>
      {/* search box */}
      <div>
        <h2>Search your favourite character</h2>
        <SearchBox
          allCards={allCards}
          type="characters"
          setAllCards={setAllCards}
          apiUrl={apiUrl}
          pKey={publicApiKey}
          hKey={hashKey}
          category={category}
        />
      </div>
      {/* cards container */}
      {/* <Container
        type="comics"
        apiUrl={apiUrl} // Pass the apiUrl to Container
        pKey={publicApiKey}
        hKey={hashKey}
        category={category}
      /> */}
    </div>
  );
};

export default Characters;
