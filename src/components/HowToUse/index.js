import React from 'react';
import style from './index.module.css';
const items = [
  {
    count: 1,
    title: 'I cloud your lab',
    subtitle: 'Choose your plan',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.',
  },
  {
    count: 2,
    title: 'Scope your project',
    subtitle: 'Select your demo',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.',
  },
  {
    count: 3,
    title: 'Get work done',
    subtitle: 'Finish your project',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.',
  },
];

const HowToUse = () => {
  return (
    <div className={style.main}>
      <div className='container'>
        <div className={style.sectionHeader}>
          <h2 className={style.sectionTitle}>Simple steps on how to use</h2>
          <p className={style.sectionSubTitle}>VirtuPharma</p>
        </div>
        <div className={style.steps}>
          <div className='row'>
            {items.map((item) => (
              <div className='col-md-4' key={item.count}>
                <div className={style.step}>
                  <p className={style.count}>{item.count}</p>
                  <h5 className={style.title}>{item.title}</h5>
                  <p className={style.subtitle}>{item.subtitle}</p>
                  <p className={style.text}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
