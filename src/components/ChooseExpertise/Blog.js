import React from 'react';
import style from './blog.module.css';
const Blog = ({ image, title, text }) => {
  return (
    <div
      className={style.main}
      style={{
        background: `linear-gradient(#06060638, 
            #06060638),linear-gradient(#06060638, 
                #06060638), url(${image})`,
      }}
    >
      <div className={style.wrapper}>
        <div className={style.content}>
          <h4 className={style.title}>{title}</h4>
          <p className={style.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
