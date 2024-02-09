import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import { apiUrl, publicApiKey, hashKey } from "../containerData";

const Series = (props) => {
  let category = props.category;
  const [allCards, setAllCards] = useState(true);
  return (
    <div>
      {/* search box */}
      <SearchBox
        allCards={allCards}
        type="series"
        setAllCards={setAllCards}
        apiUrl={apiUrl}
        pKey={publicApiKey}
        hKey={hashKey}
        category={category}
      />
    </div>
  );
};

export default Series;
