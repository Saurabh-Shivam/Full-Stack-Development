import React from "react";
import Card from "./Card";

const CardsContainer = ({ type, cardValue, category }) => {
  // console.log("Inside cardsContainer");
  // console.log(cardValue);
  console.log("Inside cardsContainer for comics");
  // console.log(cardValue[1]?.textObjects[0]?.text);
  let displayCards;
  if (category) {
    // Shuffle the cardValue array randomly
    const shuffledCards = cardValue.sort(() => Math.random() - 0.5);
    displayCards = shuffledCards;
  } else {
    // Shuffle the cardValue array randomly
    const shuffledCards = cardValue.sort(() => Math.random() - 0.5);
    // Slice the first 4 items from the shuffled array
    displayCards = shuffledCards.slice(0, 4);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {displayCards.map((card, index) => (
        <Card
          key={index}
          name={card?.name ? card?.name : card?.title}
          id={card?.id}
          desc={
            card?.description
              ? card?.description
              : "No description available for now"
          }
          // desc = {
          //   card?.textObjects[0]?.text ?
          //      card?.textObjects[0]?.text
          //     : "No description available for now"
          // }

          comics={card?.comics?.available}
          events={card?.events?.available}
          stories={card?.stories?.available}
          series={card?.series?.available}
          image={`${card?.thumbnail?.path}.${card?.thumbnail?.extension}`}
          comicLink={card?.urls.find((url) => url.type === "comiclink")?.url}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
