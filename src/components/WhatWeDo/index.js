import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Image1 from '../../images/we-do/01.png';
import Image2 from '../../images/we-do/02.png';
import Image3 from '../../images/we-do/03.png';
import Image4 from '../../images/we-do/04.png';
import style from './whatWeDo.module.css';
const items = [
  {
    image: Image1,
    title: 'Lab-work from anywhere',
    text: 'Connect a device to your VP account within seconds, and start experimenting immediately.',
    url: '#',
  },
  {
    image: Image2,
    title: 'Real-time security',
    text: 'Lorem ipsum dolor security text is supposed to be here and filling this box',
    url: '#',
  },
  {
    image: Image3,
    title: 'Monetise your data',
    text: 'Any web-connected device can use VP.',
    url: '#',
  },
  {
    image: Image4,
    title: 'Share and manage devices',
    text: 'Manage your devices and lab jobs and share devices securely from your VP account.',
    url: '#',
  },
];

const WhatWeDo = () => {
  return (
    <div className={style.main}>
      <div className='container mx-auto'>
        <div className={style.sectionHeader}>
          <h2 className={style.sectionTitle}>What we do</h2>
          <p className={style.sectionSubTitle}>
            Cloud computing is the on-demand availability of computer system
            resources, especially data storage and computing power, without
            direct active management by the user.
          </p>
        </div>
        <div className='row'>
          {items.map((item) => (
            <div className='col-md-3' key={Math.random()}>
              <div className={style.item}>
                <div className={style.imageWrapper}>
                  <img src={item.image} alt='' />
                </div>
                <div className={style.itemContent}>
                  <h5 className={style.itemTitle}>{item.title}</h5>
                  <p className={style.itemText}>{item.text}</p>
                </div>
                <a href={item.url} className={style.itemLink}>
                  Learn More&nbsp;&nbsp;
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
