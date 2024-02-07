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
    <div>
      <div>
        <img width={140} height={100} src={image} alt="img" />
      </div>
      <div>
        <p>{name}</p>
        <p>{id}</p>
      </div>
      <div>
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
