import React, { useEffect, useState } from "react";
import CardsContainer from "./CardsContainer";

// const Container = (props) => {
//   let cardValue = props.cardValue;
//   return (
//     //   <div>
//     //   <div>
//     //     <h3>props.title</h3>
//     //   </div>
//     //   <div>
//     //     <CardsContainer cardValue={props.cardValue} />
//     //   </div>
//     //   <div>
//     //     <button>Explore</button>
//     //   </div>
//     // </div>

//     <div>
//       <div>
//         <h3>Heading</h3>
//       </div>
//       <div>
//         <CardsContainer cardValue={cardValue} />
//       </div>
//       <div>
//         <button>Explore</button>
//       </div>
//     </div>
//   );
// };
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
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <CardsContainer cardValue={cardValue} />
      </div>
      <div>
        <button>Explore</button>
      </div>
    </div>
  );
};

export default Container;
