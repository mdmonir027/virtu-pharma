import React from 'react';
import {
  FaCertificate,
  FaDatabase,
  FaGraduationCap,
  FaPills,
  FaRegPlayCircle,
  FaShieldAlt,
  FaUnlock,
  FaUserFriends,
} from 'react-icons/fa';
import style from './index.module.css';

const items = [
  {
    icon: <FaUserFriends />,
    title: 'Collaborate',
    content:
      ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },

  {
    icon: <FaRegPlayCircle />,
    title: 'Automate',
    content:
      ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Buy & Sell',
    content:
      ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },

  {
    icon: <FaGraduationCap />,
    title: 'Community / Acadme',
    content:
      ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Industry experience',
    content:
      ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure',
    content:
      ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    icon: <FaUnlock />,
    title: 'Access any time',
    content:
      ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    icon: <FaDatabase />,
    title: 'Monetize your data',
    content:
      ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    icon: <FaPills />,
    title: 'Drug profiling',
    content:
      ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    icon: <FaCertificate />,
    title: 'Instrumental training',
    content:
      ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
];

const WorkingLab = () => {
  return (
    <div className={style.main}>
      <div className='container'>
        <div className={style.sectionHeader}>
          <h2 className={style.sectionTitle}>Work With VirtuPharma Labs</h2>
          <p className={style.sectionSubTitle}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div className='contents'>
          <div className='row'>
            {items.map((item) => (
              <div className='col-md-3'>
                <div className={style.item}>
                  <div className={style.itemHeader}>
                    <div className={style.icon}>{item.icon}</div>
                    <h4 className={style.itemTitle}>{item.title}</h4>
                  </div>
                  <div className={style.itemContent}>
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingLab;
