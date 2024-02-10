/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.imageUrl}
          className="card-img-top"
          alt="Reload in some time"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <Link to={props.to} className="btn btn-primary">
            Join Community
          </Link>
        </div>
      </div>
    </div>
  );
}
