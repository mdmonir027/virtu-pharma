import React from 'react';
import { BsEnvelope, BsFillTelephoneFill } from 'react-icons/bs';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import style from './address.module.css';
const Address = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <div className={style.item}>
            <h5 className={style.heading}>Address</h5>
            <p>
              Sydney Knowledge Hub, Merewether Building, H04, Level 2, 2006, NSW
            </p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className={style.item}>
            <h5 className={style.heading}>Timmings</h5>
            <p className={style.timeDay}>
              Monday-Friday <br />
              <span>7:00am to 5:00pm EST</span>
            </p>
            <p className={style.timeDay}>
              Monday-Friday <br />
              <span>7:00am to 5:00pm EST</span>
            </p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className={style.item}>
            <h5 className={style.heading}>Support</h5>
            <div
              className={` d-flex align-items-center gap-3 ${style.timeDay}`}
            >
              <div className={style.iconS}>
                <BsEnvelope />
              </div>
              <div className='icon'>
                <p className={`m-0`}>Email</p>
                <p className={`m-0`}>info@virtupharma.com.au</p>
              </div>
            </div>
            <div
              className={` d-flex align-items-center mt-2 gap-3 ${style.timeDay}`}
            >
              <div className={style.iconS}>
                <BsFillTelephoneFill />
              </div>
              <div>
                <p className={`m-0`}>Phone</p>
                <p className={`m-0`}>+61 8052 3988</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className={style.item}>
            <h5 className={style.heading}>Social Media</h5>
            <ul className={style.list}>
              <li className={style.icon}>
                <FaFacebookF />
              </li>
              <li className={style.icon}>
                <FaTwitter />
              </li>
              <li className={style.icon}>
                <FaInstagram />
              </li>
              <li className={style.icon}>
                <FaLinkedinIn />
              </li>
            </ul>
          </div>
        </div>
        <div className='col-md-6'></div>
      </div>
    </div>
  );
};

export default Address;
