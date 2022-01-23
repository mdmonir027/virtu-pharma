import React from 'react';
import style from './index.module.css';

const WhyVirtuPharma = () => {
  return (
    <div className={style.main}>
      <div className='container mx-auto'>
        <div className={style.sectionHeader}>
          <h2 className={style.sectionTitle}>What we do</h2>
          <p className={style.sectionText}>
            Remotely access and operate cloud-based, complex lab instruments
            both real and virtual, within regulatory accreditation. Whether you
            need real-world job skills in life sciences industry, virtual
            centers around scientific instrumentation, or on-the-job training
            for your new candidates, VirtuPharma makes individual learning a
            breeze.
          </p>
          <p className={style.sectionText}>
            VirtuPharma uses patented technology to deliver a complete lab
            experience remotely. Our labs are made for sharing, and team-work.
            Own your complex instruments with us. Today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyVirtuPharma;
