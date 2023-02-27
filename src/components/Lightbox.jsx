import React, { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import close from "../assets/images/icon-close.svg";

function Lightbox({ product, toggleLightbox }) {
  useEffect(() => {
    document.body.scrollIntoView();
  }, []);
  return (
    <div className="lightbox-container">
      <img
        className="lightbox-close"
        src={close}
        alt="close-image"
        onClick={toggleLightbox}
      />
      <ImageSlider product={product} toggleLightbox={toggleLightbox} />
    </div>
  );
}

export default Lightbox;
