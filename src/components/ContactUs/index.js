import React from 'react';
import Address from './Address';
import Form from './Form';
import style from './index.module.css';
const ContactUs = () => {
  return (
    <div className={style.main}>
      <div className='container'>
        <div className={style.sectionHeader}>
          <h2 className={style.sectionTitle}>Contact us</h2>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <Form />
          </div>
          <div className='col-md-6'>
            <Address />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
