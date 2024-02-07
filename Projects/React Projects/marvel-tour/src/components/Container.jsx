import React from "react";
import CardsContainer from "./CardsContainer";

const Container = (props) => {
  let cardValue = props.cardValue;
  return (
    //   <div>
    //   <div>
    //     <h3>props.title</h3>
    //   </div>
    //   <div>
    //     <CardsContainer cardValue={props.cardValue} />
    //   </div>
    //   <div>
    //     <button>Explore</button>
    //   </div>
    // </div>

    <div>
      <div>
        <h3>Heading</h3>
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
