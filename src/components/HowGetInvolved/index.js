import React from 'react';
import style from './index.module.css';
const items = [
  {
    id: 1,
    title: 'Access the Public Data and Commons',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoquepenatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.',
  },
  {
    id: 2,
    title: 'Develop',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoquepenatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.',
  },
  {
    id: 3,
    title: 'Apply for Storage',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoquepenatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.',
  },
  {
    id: 4,
    title: 'Equipment',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoquepenatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.',
  },
];

const HowGetInvolved = () => {
  return (
    <div className={style.main}>
      <div className='container'>
        <div className={style.sectionHeader}>
          <h2 className={style.sectionTitle}>How Can I Get Involved?</h2>
          <p className={style.sectionSubTitle}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa
          </p>
        </div>
        <div className={style.items}>
          <div className='row'>
            {items.map((item) => (
              <div className='col-md-3' key={item.count}>
                <div className={style.item}>
                  <h5 className={style.title}>{item.title}</h5>
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

export default HowGetInvolved;
