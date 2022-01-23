import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Select from 'react-select';
import style from './search.module.css';
const selectCustomStyle = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    background: 'transparent',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const keywords = [
  {
    id: 1,
    value: 'Technical labs',
  },
  {
    id: 2,
    value: 'Biotech labs',
  },
  {
    id: 3,
    value: 'Pharma',
  },
];

const Search = () => {
  return (
    <div className={style.main}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 p-0'>
            <div className={style.contentWrapper}>
              <div className={style.icon}>
                <FaSearch />
              </div>
              <div className={style.inputWrapper}>
                <Select
                  styles={selectCustomStyle}
                  placeholder='Search listed labs or categories'
                  options={[]}
                />
              </div>
            </div>
          </div>
          <div className={`col-md-5 p-0 ${style.secondInputBox}`}>
            <div className={style.contentWrapper}>
              <div className={style.icon}>
                <FaSearch />
              </div>
              <div className={style.inputWrapper}>
                <Select
                  styles={selectCustomStyle}
                  placeholder='Search listed labs or categories'
                  options={[]}
                />
              </div>
            </div>
          </div>
          <div className='col-md-2 p-0'>
            <div className={style.buttonGroup}>
              <button className={style.button1}>Clear</button>
              <button className={style.button2}>Search</button>
            </div>
          </div>
        </div>
        <div className={style.keywords}>
          <p>Recent Searches:</p>
          <ul className={style.keyList}>
            {keywords.map((key) => (
              <li className={style.key} key={key.id}>
                <span>{key.value}</span>
                <span className={style.deleteIcon}>
                  <FaTimes />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
