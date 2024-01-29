import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {props.title}
        </h6>
        <p className="card-text">{props.para}</p>
        <a href="/" className="card-link">
          {props.link1}
        </a>
        <a href="/" className="card-link">
          {props.link2}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

Card.defaultProps = {
  link1: "The link 1 field is necessary to write",
};

export default Card;