import React from 'react';
import heroImage from '../../images/hero-bg.jpg';
import style from './hero.module.css';
const Hero = () => {
  return (
    <div
      className={style.main}
      style={{
        background: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className={`${style.contentWrapper}`}>
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
      </div>
    </div>
  );
};

export default Hero;
