/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
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
=======
export default function Cards(props) {
  return (
    <div>
<div className="card" style={{"width": "18rem"}}>
  <img src={props.imageUrl} className="card-img-top" alt="Reload in some time"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="#" className="btn btn-primary">Join Community</a>
  </div>
</div>
        
>>>>>>> 3998ce2d78c7d456c0f7fced91ae301d467d3414
    </div>
  );
}
