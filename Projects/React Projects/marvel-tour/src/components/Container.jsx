import React, { useEffect, useState } from "react";
import CardsContainer from "./CardsContainer";
import { useNavigate } from "react-router-dom";

const Container = ({
  type,
  title,
  apiUrl,
  pKey,
  hKey,
  category,
  name,
  searchValue,
}) => {
  const [cardValue, setCardValue] = useState([]);
  let url;

  if (searchValue) {
    url = `${apiUrl}/${type}?ts=1&apikey=${pKey}&hash=${hKey}&name=${name}`;
  } else {
    url = `${apiUrl}/${type}?ts=1&apikey=${pKey}&hash=${hKey}`;
  }

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setCardValue(jsonData.data.results); // Assuming data is structured accordingly
      // console.log("Inside container component");
      // console.log(cardValue);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const navigate = useNavigate();

  function clickHandler() {
    // console.log(type);
    navigate(`/${type}`);
  }

  return (
    <div className="flex flex-col gap-6 md:gap-10 border-b-2 border-dashed border-black p-4 font-mono my-2 pb-10">
      <div className="text-3xl font-black text-center">
        <h2>{title}</h2>
      </div>
      <div>
        <CardsContainer type = {type} cardValue={cardValue} category={category} />
      </div>
      <div className="text-center">
        <button
          onClick={clickHandler}
          className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-400 hover:text-yellow-50  transition duration-300"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Container;
