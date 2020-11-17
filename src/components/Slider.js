import React, { useState } from "react";
import "./Slider.css";
import ImgComp from "./ImgComp";
import i1 from "../images/gallery/1.jpg";
import i2 from "../images/gallery/2.jpg";
import i3 from "../images/gallery/3.jpg";
import i4 from "../images/gallery/4.jpg";
import i5 from "../images/gallery/5.jpg";
import i6 from "../images/gallery/6.jpg";
import i7 from "../images/gallery/7.jpg";
import i8 from "../images/gallery/8.jpg";
import i9 from "../images/gallery/1.jpeg";
// import i10 from "../images/gallery/.jpg";

function Slider() {
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
    <ImgComp src={i6} />,
    <ImgComp src={i7} />,
    <ImgComp src={i8} />,
    <ImgComp src={i9} />,
    // <ImgComp src={i10} />,
  ];

  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <>
      {/* <h3 className="cont">Foto</h3> */}
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
        <button id="goLeft" className="btn" onClick={goLeft}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button id="goRight" className="btn" onClick={goRight}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}

export default Slider;
