import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import { apiUrl, publicApiKey, hashKey } from "../containerData";

const Comics = (props) => {
  let category = props.category;
  const [allCards, setAllCards] = useState(true);
  return (
    <div>
      {/* search box */}
      <SearchBox
        allCards={allCards}
        type="comics"
        setAllCards={setAllCards}
        apiUrl={apiUrl}
        pKey={publicApiKey}
        hKey={hashKey}
        category={category}
      />
    </div>
  );
};

export default Comics;
