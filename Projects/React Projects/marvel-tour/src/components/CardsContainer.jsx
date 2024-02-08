import React from "react";
import Card from "./Card";

const CardsContainer = ({ cardValue, category }) => {
  // console.log("Inside cardsContainer");
  // console.log(cardValue);
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
          name={card?.name}
          id={card?.id}
          desc={
            card?.description ? card?.description : "No description available"
          }
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
