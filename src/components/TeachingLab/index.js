import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import laptopImg from '../../images/laptop-image.png';
import bg from '../../images/teaching-lab-bg.png';
import style from './index.module.css';
const TeachingLab = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className={style.main}
    >
      <div className='container'>
        <div className={style.sectionHeader}>
          <div>
            <h2 className={style.sectionTitle}>VirtuPharma teaching labs</h2>
            <p className={style.sectionSubTitle}>See Our Labs In Action</p>
            <a href='/' className={`btn ${style.button}`}>
              Become a Teacher{' '}
              <span>
                <FaLongArrowAltRight />
              </span>
            </a>
          </div>
          <div className={style.imageWrapper}>
            <img src={laptopImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingLab;
