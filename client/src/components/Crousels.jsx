import React from 'react'
import img4 from "../assets/images/img4.png";
import img1 from "../assets/images/image-1.jpg";
import img2 from "../assets/images/img4.png";

export default function Crousels() {
  return (
    <div><div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner " id='crousel'>
      <div className="carousel-item active">
        <img src={img1} className="d-block w-100 h-50" alt="Connection Error"/>
      </div>
      <div className="carousel-item">
        <img src={img2} className="d-block w-100" alt="Connection Error"/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?development" className="d-block w-100" alt="Connection Error"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}
