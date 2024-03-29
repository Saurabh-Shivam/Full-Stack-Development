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

  function refreshHandler() {
    window.location.reload(true);
  }

  return (
    <div>
      <div className="flex justify-center mt-8">
        <form
          className=" shadow-md rounded-md p-4 w-[25%] flex flex-col gap-4 justify-center items-center "
          onSubmit={submitHandler}
        >
          <div>
            <input
              className="border-1 rounded-md outline-red-700 w-80 p-2 font-mono"
              type="text"
              placeholder={`Enter Your ${type} Name...`}
              value={inputValue}
              name="charName"
              onChange={changeHandler}
            />
          </div>
          <div className="flex gap-12">
            <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-400 hover:text-yellow-50  transition duration-300">
              Search
            </button>
            <button
              className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-400 hover:text-yellow-50  transition duration-300"
              onClick={refreshHandler}
            >
              Refresh
            </button>
          </div>
        </form>
      </div>

      {/* cards container */}
      <Container
        type={type}
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
