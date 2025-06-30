import React, { useRef } from "react";
import "./homeDetails.css";

const images = [
  "https://m.media-amazon.com/images/I/61FTbLCxX0L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61FTbLCxX0L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61FTbLCxX0L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61FTbLCxX0L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61FTbLCxX0L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61FTbLCxX0L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61FTbLCxX0L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61FTbLCxX0L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61FTbLCxX0L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61FTbLCxX0L._AC_SY200_.jpg",
];

const HomeDetails = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const scroll = (direction,ref) => {
    if (ref.current) {
      const scrollAmount = 300; // px
      if (direction === "left") {
        ref.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="homeDetails">
      <div className="homeDetailLongCard">
        <div className="homeDetailLongCardTitle">Best Sellers in Book</div>
        <div
          className="homeDetailLongCardItems"
          style={{ position: "relative" }}
        >
          <button
            className="arrowBtn left"
            onClick={() => scroll("left",scrollRef1)}
            aria-label="Scroll Left"
          >
            &lt;
          </button>
          <div className="scrollDiv" ref={scrollRef1}>
            {images.map((img, idx) => (
              <div className="homeDetailLongCardItem" key={idx}>
                <img className="homeDetailLongCardItemImg" src={img} alt="" />
              </div>
            ))}
          </div>
          <button
            className="arrowBtn right"
            onClick={() => scroll("right",scrollRef1)}
            aria-label="Scroll Right"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="homeDetailLongCard">
        <div className="homeDetailLongCardTitle">Best Sellers in Book</div>
        <div
          className="homeDetailLongCardItems"
          style={{ position: "relative" }}
        >
          <button
            className="arrowBtn left"
            onClick={() => scroll("left",scrollRef2)}
            aria-label="Scroll Left"
          >
            &lt;
          </button>
          <div className="scrollDiv" ref={scrollRef2}>
            {images.map((img, idx) => (
              <div className="homeDetailLongCardItem" key={idx}>
                <img className="homeDetailLongCardItemImg" src={img} alt="" />
              </div>
            ))}
          </div>
          <button
            className="arrowBtn right"
            onClick={() => scroll("right",scrollRef2)}
            aria-label="Scroll Right"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
