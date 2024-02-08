import React from "react";
import Card from "./Card";

const CardsContainer = ({ cardValue }) => {
  console.log("Inside cardsContainer");
  console.log(cardValue);
  // console.log(cardValue[1]);
  // console.log(cardValue[1]?.urls[1]?.url);
  // let name = cardValue[1]?.name;
  // let id = cardValue[1]?.id;
  // let desc = cardValue[1]?.description;
  // let comics = cardValue[1]?.comics?.available;
  // let events = cardValue[1]?.events?.available;
  // let stories = cardValue[1]?.stories?.available;
  // let series = cardValue[1]?.series?.available;
  // let image = `${cardValue[1]?.thumbnail?.path}.${cardValue[1]?.thumbnail?.extension}`;
  // let comicLink = cardValue[1]?.urls[1]?.url;
  // console.log(image);

  // Shuffle the cardValue array randomly
  const shuffledCards = cardValue.sort(() => Math.random() - 0.5);
  // Slice the first 4 items from the shuffled array
  const randomCards = shuffledCards.slice(0, 4);

  return (
    <div>
      {randomCards.map((card, index) => (
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

      {/* <Card
        name={name}
        id={id}
        desc={desc}
        comics={comics}
        events={events}
        stories={stories}
        series={series}
        image={image}
        comicLink={comicLink}
      /> */}
    </div>
  );
};

export default CardsContainer;
