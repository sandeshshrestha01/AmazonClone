import React from "react";
import "./homeBanner.css";
import homeBannerItemProduct from "../../../homeProduct.json";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <Slide
        arrows={true}
        autoplay={true}
        duration={3500}
        transitionDuration={600}
        infinite={true}
        indicators={false}
      >
        {homeBannerItemProduct.slideImages.map((slide, index) => (
          <img
            key={index}
             className="homeBannerimg"
            src={slide.slidImg}
            alt={`slide-${index}`}
          />
        ))}
      </Slide>
    
      <div className="grayBackgroundHomeBanner"></div>

      <div className="homeBannerItemDiv">
        {homeBannerItemProduct.product.map((item, ind) => (
          <div className="homeBannerItemDivCard" key={ind}>
            <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
            <div className="imgHomeBannerItemDivCard">
              {item.imgs && item.imgs.map((it, imgInd) => (
                <div className="imgBannerHomeDiv" key={imgInd}>
                  <img className="imgBannerHomeDivImg" src={it} alt={`product-${ind}-img-${imgInd}`} />
                  <div className="imgBannerImgName">
                   booAT Stone 1800 Bluet
                  </div>
                </div>
              ))}
            </div>
            <div className="seeMoreHomeBanner">See More</div>
          </div>
        ))}
      </div>
      
    </div>

  );
};

export default HomeBanner;