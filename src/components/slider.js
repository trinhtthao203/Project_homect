import React from "react";
import "../index.css";

// import Carousel from "react-elastic-carousel";

import Slide1 from "../Images/slide1.jpg";
import Slide2 from "../Images/slide2.jpg";
import Slide3 from "../Images/slide3.jpg";
import Slide4 from "../Images/slide4.jpg";

// const breakPoint = [
//   { width: 1, itemToShow: 1 },
//   { width: 550, itemToShow: 2 },
//   { width: 760, itemToShow: 3 },
//   { width: 1260, itemToShow: 4 },
// ];

function Slider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 slider-style"
            src={Slide1}
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block text-slide">
            <h5>Mua bán căn hộ chung cư</h5>
            <p>"Biểu tượng của sự hoàn hảo" - Thiên Quân Plaza</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Slide4} alt="Second slide" />
          <div className="carousel-caption d-none d-md-block text-slide ">
            <h5>Mua bán căn hộ chung cư</h5>
            <p>"Vì cộng đồng - Kiến tạo an cư" - TTC Land.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Slide3} alt="Third slide" />
          <div className="carousel-caption d-none d-md-block text-slide">
            <h5>Mua bán căn hộ chung cư</h5>
            <p>"Thành phố xanh tươi. Cuộc đời trọn vẹn" - Dự án Ecopark</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Slider;
