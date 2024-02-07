import React from "react";
import Card from "./Card";

const CardsContainer = ({ cardValue }) => {
  console.log("Inside cardsContainer");
  console.log(cardValue);
  console.log(cardValue[1]);
  // console.log(cardValue[1]?.urls[1]?.url);
  let name = cardValue[1]?.name;
  let id = cardValue[1]?.id;
  let desc = cardValue[1]?.description;
  let comics = cardValue[1]?.comics?.available;
  let events = cardValue[1]?.comics?.available;
  let stories = cardValue[1]?.comics?.available;
  let series = cardValue[1]?.comics?.available;
  let image = `${cardValue[1]?.thumbnail?.path}.${cardValue[1]?.thumbnail?.extension}`;
  let comicLink = cardValue[1]?.urls[1]?.url;
  // console.log(image);
  return (
    <div>
      <Card
        name={name}
        id={id}
        desc={desc}
        comics={comics}
        events={events}
        stories={stories}
        series={series}
        image={image}
        comicLink={comicLink}
      />
    </div>
  );
};

export default CardsContainer;
