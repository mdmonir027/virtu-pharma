import React from 'react';
import heroImage from '../../images/hero-img.png';
import style from './hero.module.css';

const Hero = () => {
  return (
    <div className={style.main}>
      <div className='container py-4'>
        <div className='row'>
          <div className='col-md-6 d-flex align-items-center'>
            <div className={style.contentWrapper}>
              <h4 className={style.subtitle}>Be Part of a connected Future</h4>
              <h2 className={style.title}>
                World's first cloud based science laboratories
              </h2>
              <p className={style.titleText}>
                <b>Virtupharma</b> is ultra modern laboratory services. Delivery
                newer. Cloud computing is the on-demand availability of computer
                system resources, especially data storage and computing power
              </p>
              <div className={` d-flex gap-2 ${style.buttonGroup}`}>
                <a href='/' className={`btn btn-primary ${style.button1}`}>
                  Be a partner
                </a>
                <a
                  href='/'
                  className={`btn btn-outline-primary ${style.button2}`}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div style={style.imageWrapper}>
              <img src={heroImage} alt='' className={style.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
