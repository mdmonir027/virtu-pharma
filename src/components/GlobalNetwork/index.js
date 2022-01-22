import React from 'react';
import Image1 from '../../images/globalNetwork/01.png';
import Image2 from '../../images/globalNetwork/02.png';
import Image3 from '../../images/globalNetwork/03.png';
import Dots from '../../images/globalNetwork/dots.png';
import bg from '../../images/globalNetwork/global-network-bg.png';
import style from './index.module.css';
const mainStyle = {
  background: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};
const GlobalNetwork = () => {
  return (
    <div className={style.main} style={mainStyle}>
      <div className='container'>
        <div className={style.content}>
          <div className={style.sectionHeader}>
            <h2 className={style.sectionTitle}>
              Join our Global Network of Cloud-Based Labs.
            </h2>
            <a href='/' className={`btn ${style.button}`}>
              List your lab
            </a>
          </div>
          <div className={style.images}>
            <div>
              <img src={Image1} alt='' />
            </div>
            <div>
              <img src={Dots} alt='' />
            </div>
            <div>
              <img src={Image2} alt='' />
            </div>
            <div>
              <img src={Dots} alt='' />
            </div>
            <div>
              <img src={Image3} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork;
