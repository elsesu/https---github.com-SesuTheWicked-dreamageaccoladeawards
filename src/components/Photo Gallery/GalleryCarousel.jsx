import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import all images from /img
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#444675",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      position: "absolute",
      right: "-50px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      zIndex: 2,
      color: "#fff",
      fontSize: "18px",
    }}
    onClick={onClick}
  >
    ➡
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#444675",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      position: "absolute",
      left: "-50px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      zIndex: 2,
      color: "#fff",
      fontSize: "18px",
    }}
    onClick={onClick}
  >
    ⬅
  </div>
);

const GalleryCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "2rem" }}>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={src}
              alt={`Gallery ${idx}`}
              style={{
                width: "90%",
                maxHeight: "400px",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GalleryCarousel;
