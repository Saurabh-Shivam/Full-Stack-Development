import React, { useEffect, useState } from "react";
import CardsContainer from "./CardsContainer";

const Container = ({ type, title, apiUrl, pKey, hKey }) => {
  const [cardValue, setCardValue] = useState([]);

  const url = `${apiUrl}/${type}?ts=1&apikey=${pKey}&hash=${hKey}`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setCardValue(jsonData.data.results); // Assuming data is structured accordingly
      console.log("Inside container component");
      console.log(cardValue);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div className="flex flex-wrap flex-col gap-10 border-2 border-black p-4">
      <div className="text-3xl font-black font-mono text-center">
        <h2>{title}</h2>
      </div>
      <div className="border-2 border-red-800">
        <CardsContainer cardValue={cardValue} />
      </div>
      <div>
        <button>Explore</button>
      </div>
    </div>
  );
};

export default Container;
