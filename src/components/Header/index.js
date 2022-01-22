import React from 'react';
import style from './header.module.css';
const menuLists = [
  { id: 1, name: 'About', url: '/about' },
  { id: 2, name: 'Services', url: '/services' },
  { id: 3, name: 'Work', url: '/work' },
  { id: 4, name: 'Contact', url: '/contact' },
];

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <div className='container m-auto'>
          <div className={style.headerWrapper}>
            <div className={style.logo}>
              <a href='/' className={style.logoText}>
                Company
              </a>
            </div>
            <div className={style.headerMenu}>
              <ul className={style.navList}>
                {menuLists.map((item) => (
                  <li className={style.navItem} key={item.id}>
                    <a href={item.url} className={style.navLink}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
