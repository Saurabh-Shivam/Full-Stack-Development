import React from "react";
import Card from "./Card";
const Tours = ({ tours, removeTour }) => {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan With Saurabh</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card {...tour} key={tour.id} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
