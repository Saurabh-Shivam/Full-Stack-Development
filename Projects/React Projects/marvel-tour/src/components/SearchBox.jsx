import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { apiUrl, publicApiKey, hashKey } from "../containerData";

const SearchBox = ({
  allCards,
  setAllCards,
  type,
  apiUrl,
  pKey,
  hKey,
  category,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState(false);
  // const [cardValue, setCardValue] = useState([]);

  function changeHandler(event) {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Give Input Value");
    console.log(inputValue);
    setSearchValue(true);
  }

  // const name = inputValue;

  // const url = `${apiUrl}/${type}?ts=1&apikey=${pKey}&hash=${hKey}&name=${name}`;
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const jsonData = await response.json();
  //     setCardValue(jsonData.data.results); // Assuming data is structured accordingly
  //     // console.log("Inside container component");
  //     // console.log(cardValue);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [url]);

  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter Your Character Name"
            value={inputValue}
            name="charName"
            onChange={changeHandler}
          />
          <button>Search</button>
        </form>
      </div>

      {/* cards container */}
      <Container
        type="characters"
        apiUrl={apiUrl} // Pass the apiUrl to Container
        pKey={publicApiKey}
        hKey={hashKey}
        category={category}
        name={inputValue}
        searchValue={searchValue}
      />
    </div>
  );
};

export default SearchBox;
