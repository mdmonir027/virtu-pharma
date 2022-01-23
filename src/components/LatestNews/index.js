import React from 'react';
import style from './index.module.css';
import News from './News';
const LatestNews = () => {
  return (
    <div className={style.main}>
      <div className='container'>
        <div className={style.sectionHeader}>
          <p className={style.sectionSubTitle}>The latest news</p>
          <h2 className={style.sectionTitle}>
            World renowned and authentic data and cloud analysis
          </h2>
        </div>

        <News />
      </div>
    </div>
  );
};

export default LatestNews;
