import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { name, id, desc, comics, events, stories, series, image, comicLink } = props;

  const [readmore, setReadMore] = useState(false);
  const description = readmore ? desc : `${desc.substring(0, 50)}...`;

  function readmoreHandler() {
    setReadMore(!readmore);
  }

  return (
    <div className="flex flex-col gap-2 font-mono shadow-md">
      <div className="">
        <img className="w-full h-80 object-cover" src={image} alt="img" />
      </div>
      <div className="flex justify-between mx-2 text-base font-bold">
        <p className="w-[100%]">{name}</p>
        <p>{`#${id}`}</p>
      </div>
      <div className="p-2">
        <p className="text-sm">
          {description}
          <span
            className="text-red-600 font-medium cursor-pointer"
            onClick={readmoreHandler}
          >
            {readmore ? `show less` : `read more`}
          </span>
        </p>
      </div>
      <div className="mx-2 text-sm font-medium grid grid-cols-2 gap-4">
        <p>Comics: {comics}</p>
        <p>Events: {events}</p>
        <p>Stories: {stories}</p>
        <p>Series: {series}</p>
      </div>
      <div className="p-4 text-center">
        <Link
          className="p-1 border-b-2 border-black hover:text-red-600"
          target="_blank"
          to={comicLink}
        >
          View Comics
        </Link>
      </div>
    </div>
  );
};

export default Card;
