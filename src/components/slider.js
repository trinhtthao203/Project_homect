import React from "react";
import "../index.css";

// import Carousel from "react-elastic-carousel";

// import slide1 from "../Images/ChungCu178.jpg";
// import slide2 from "../Images/ChungCu178.jpg";
// import slide3 from "../Images/ChungCu178.jpg";
// import slide4 from "../Images/ChungCu178.jpg";

// const breakPoint = [
//   { width: 1, itemToShow: 1 },
//   { width: 550, itemToShow: 2 },
//   { width: 760, itemToShow: 3 },
//   { width: 1260, itemToShow: 4 },
// ];

function slider() {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li
          data-target="#myCarousel"
          data-slide-to="0"
          className=" active"
        ></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container-itemslider">
            <h1>Example</h1>
            <p>abc efd ahd ah eur shd daf gh</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container-itemslider">
            <h1>Example 2</h1>
            <p>abc efd ahd ah eur shd daf gh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default slider;
