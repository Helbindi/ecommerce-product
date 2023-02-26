import React from "react";
import ImageSlider from "./ImageSlider";
import close from "../assets/images/icon-close.svg";

function Lightbox({ toggleLightbox }) {
  return (
    <div className="lightbox-container">
      <img
        class="lightbox-close"
        src={close}
        alt="close-image"
        onClick={toggleLightbox}
      />
      <ImageSlider toggleLightbox={toggleLightbox} />
    </div>
  );
}

export default Lightbox;
