import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import { apiUrl, publicApiKey, hashKey } from "../containerData";

const Events = (props) => {
  let category = props.category;
  const [allCards, setAllCards] = useState(true);
  return (
    <div>
      {/* search box */}
        <SearchBox
          allCards={allCards}
          type="events"
          setAllCards={setAllCards}
          apiUrl={apiUrl}
          pKey={publicApiKey}
          hKey={hashKey}
          category={category}
        />
    </div>
  );
}

export default Events
