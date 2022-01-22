import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import style from './index.module.css';

const PoweringPartner = () => {
  return (
    <div className={style.main}>
      <div className='container'>
        <div className={style.content}>
          <div className={style.sectionHeader}>
            <h2 className={style.sectionTitle}>Powering our partners</h2>
            <p className={style.sectionSubTitle}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <a href='/' className={`btn ${style.button}`}>
              Become a partner{' '}
              <span>
                <FaLongArrowAltRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweringPartner;
