import React from 'react';
import style from './form.module.css';
const Form = () => {
  return (
    <form className={style.form}>
      <div>
        <div className={style.inputWrapper}>
          <input
            type='text'
            name=''
            className={style.input}
            id=''
            placeholder='Your name'
          />
        </div>
      </div>
      <div>
        <div className={style.inputWrapper}>
          <input
            type='text'
            name=''
            className={style.input}
            id=''
            placeholder='Email Address'
          />
        </div>
      </div>
      <div>
        <div className={style.inputWrapper}>
          <input
            type='text'
            name=''
            className={style.input}
            id=''
            placeholder='Tell us what you think about LINA'
          />
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div className={style.inputWrapper}>
          <button
            type='submit'
            className={`btn btn-primary ${style.submitBtn}`}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
