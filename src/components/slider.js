import "../Style/styleSlider.css";
import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import carne1 from "../assets/img/carne1.jpg";
import carne2 from "../assets/img/carne2.jpg";
import carne3 from "../assets/img/carne3.jpg";
import carne4 from "../assets/img/carne4.jpg";
import carne5 from "../assets/img/carne5.jpg";

const images = [carne1, carne2, carne3, carne4, carne5];

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 10,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
