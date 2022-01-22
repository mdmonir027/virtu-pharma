import React from 'react';
import Blogs from './Blogs';
import style from './index.module.css';
import Search from './Search';
const ChooseExpertise = () => {
  return (
    <div className={style.main}>
      <div className='container'>
        <div className={style.sectionHeader}>
          <h2 className={style.sectionTitle}>
            Choose the right <span>Expertise</span> with confidence.
          </h2>
          <p className={style.sectionSubTitle}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>
        <Search />
        <Blogs />
      </div>
    </div>
  );
};

export default ChooseExpertise;
