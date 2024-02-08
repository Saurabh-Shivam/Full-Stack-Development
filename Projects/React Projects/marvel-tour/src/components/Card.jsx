import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  let name = props.name;
  let id = props.id;
  let desc = props.desc;
  let comics = props.comics;
  let events = props.events;
  let stories = props.stories;
  let series = props.series;
  let image = props.image;
  let comicLink = props.comicLink;

  return (
    <div className="border-2 border-black flex flex-wrap flex-col gap-2 w-[24%]">
      <div className="w-[100%]">
        <img src={image} alt="img" />
      </div>
      <div className="flex flex-wrap justify-between px-2 text-base font-bold">
        <p>{name}</p>
        <p>{`#${id}`}</p>
      </div>
      <div className="px-2 text-sm border-2 border-red-700 w-60">
        <p>{desc}</p>
      </div>
      <div>
        <p>Comics: {comics}</p>
        <p>Events: {events}</p>
        <p>Stories: {stories}</p>
        <p>Series: {series}</p>
      </div>
      <div>
        <Link target="_blank" to={comicLink}>
          View Comics
        </Link>
      </div>
    </div>
  );
};

export default Card;
