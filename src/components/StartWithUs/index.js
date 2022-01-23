import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import style from './index.module.css';
import Partners from './Partners';

const StartWithUs = () => {
  return (
    <>
      <div className={style.main}>
        <div className='container'>
          <div className={style.content}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>Start with use</h2>
              <p className={style.sectionSubTitle}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <a href='/' className={`btn ${style.button}`}>
                Get Started{' '}
                <span>
                  <FaLongArrowAltRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </>
  );
};

export default StartWithUs;
