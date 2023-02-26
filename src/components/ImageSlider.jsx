import React, { useState } from "react";
import prevImg from "../assets/images/icon-previous.svg";
import nextImg from "../assets/images/icon-next.svg";
import { productImages } from "../data/productImages";

function ImageSlider({ toggleLightbox }) {
  const [index, setIndex] = useState(0);
  const maxSize = productImages.length - 1;

  function handleNext(e) {
    e.preventDefault();
    if (index === maxSize) {
      setIndex(0);
    } else {
      setIndex((prev) => {
        return prev + 1;
      });
    }
  }

  function handlePrev(e) {
    e.preventDefault();
    if (index === 0) {
      setIndex(maxSize);
    } else {
      setIndex((prev) => {
        return prev - 1;
      });
    }
  }

  function handleChange(e, id) {
    e.preventDefault();
    setIndex(id - 1);
  }

  function handleLightbox(e) {
    e.preventDefault();
    if (window.innerWidth > 768) {
      toggleLightbox();
    }
  }
  return (
    <div className="img-container">
      <div className="main-image">
        <img
          className="prev product-btn"
          src={prevImg}
          alt="previous-image"
          onClick={(e) => handlePrev(e)}
        />
        <img
          className="product-img"
          src={productImages[index].image}
          alt="product-image"
          onClick={(e) => handleLightbox(e)}
        />
        <img
          className="next product-btn"
          src={nextImg}
          alt="next-image"
          onClick={(e) => handleNext(e)}
        />
      </div>
      <div className="thumbnails">
        {productImages.map((item) => (
          <img
            className={index + 1 === item.id ? "thumb-img active" : "thumb-img"}
            key={item.id}
            src={item.thumbnail}
            alt="thumbnail-image"
            onClick={(e) => handleChange(e, item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
