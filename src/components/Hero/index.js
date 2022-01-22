import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
// slider css
import 'slick-carousel/slick/slick.css';
import heroImage from '../../images/hero-bg.jpg';
import style from './hero.module.css';
const mainStyle = {
  background: `url(${heroImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Hero = () => {
  return (
    <div className={style.main} style={mainStyle}>
      <div className={`${style.contentWrapper}`}>
        <Slider {...settings}>
          <div>
            <h2 className={style.title}>
              Modern <br />
              background
            </h2>
            <p className={style.titleText}>
              <b>Virtupharma</b> is ultra modern laboratory services. Delivery
              newer. Cloud computing is
            </p>
            <div
              className={` d-flex gap-2 justify-content-center ${style.buttonGroup}`}
            >
              <a href='/' className={`btn ${style.button}`}>
                Try It now
              </a>
            </div>
          </div>
          <div>
            <h2 className={style.title}>
              Modern <br />
              background
            </h2>
            <p className={style.titleText}>
              <b>Virtupharma</b> is ultra modern laboratory services. Delivery
              newer. Cloud computing is
            </p>
            <div
              className={` d-flex gap-2 justify-content-center ${style.buttonGroup}`}
            >
              <a href='/' className={`btn ${style.button}`}>
                Try It now
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
