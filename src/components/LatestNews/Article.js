import React from 'react';
import style from './article.module.css';
const Article = ({ image, title, text, name, profile }) => {
  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        <div className={style.imageWrapper}>
          <img src={image} alt={title} className={style.image} />
        </div>
        <div className={style.content}>
          <h4 className={style.title}>{title}</h4>
          <p className={style.text}>{text}</p>
        </div>
        <div className={style.footer}>
          <div className={style.userInfo}>
            <div class='media d-flex align-items-center gap-2'>
              <div className={style.profile}>
                <img
                  class='mr-3'
                  src={profile}
                  alt={title}
                  className={`rounded-circle ${style.image}`}
                />
              </div>
              <div class='media-body'>
                <h5 class='mt-0'>{name}</h5>
              </div>
            </div>
          </div>
          <div className={style.buttonWrapper}>
            <a href='/' className={`btn btn-outline-primary ${style.linkBtn}`}>
              Learn more{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
