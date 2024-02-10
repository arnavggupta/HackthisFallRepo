/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function Cards({ to }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={to} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
}
