import React from 'react';
import style from './whatWeDo.module.css';
const WhatWeDo = () => {
  return (
    <div style={style.main}>
      <div className='container mx-auto'>
        <h2 className={style.sectionTitle}>What we do</h2>
        <p className={style.sectionSubTitle}>
          Cloud computing is the on-demand availability of computer system
          resources, especially data storage and computing power, without direct
          active management by the user. Large clouds often have functions
          distributed over multiple locations, each location being a data
          center.
        </p>
        <div className='row'>
          <div className='col-md-3'>
            <div className={style.imageWrapper}>
              <img src='' alt='' />
            </div>
            <h3 className={style.itemTitle}>Item title</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
