import React from 'react';
import img1 from '../../images/partners/01.png';
import img2 from '../../images/partners/02.png';
import img3 from '../../images/partners/03.png';
import img4 from '../../images/partners/04.png';
import img5 from '../../images/partners/05.png';
import startImage from '../../images/partners/star.png';
import style from './partner.module.css';
const items = [img1, img2, img3, img4, img5];
const Partners = () => {
  return (
    <div className={style.main}>
      <div className='container'>
        <h2 className={style.title}>Partners {'&'} Awards</h2>
        <div className={`row ${style.images}`}>
          {items.map((img) => (
            <div className='col-md-2' key={Math.random()}>
              <div className={style.imageWrapper}>
                <img src={img} alt='' className={style.image} />
              </div>
            </div>
          ))}
        </div>
        <div className='row justify-content-center mt-5'>
          <div className='col-md-9'>
            <div className='d-flex gap-2 align-items-center'>
              <div className={style.startImageWrapper}>
                <img src={startImage} alt='' />
              </div>
              <p className='m-0'>
                This project has received funding from the European Union's
                Horizon 2020 research and innovation programme under The Marie
                Skłodowska-Curie grant agreement No 801342
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
