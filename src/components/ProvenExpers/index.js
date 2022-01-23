import React from 'react';
import image1 from '../../images/provenExperts/01.png';
import image2 from '../../images/provenExperts/02.png';
import image3 from '../../images/provenExperts/03.png';
import image4 from '../../images/provenExperts/04.png';
import style from './index.module.css';

const profiles = [
  {
    id: 1,
    image: image1,
    title: 'Nexus Labs',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
  },
  {
    id: 2,
    image: image2,
    title: 'Nest Enterprises',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
  },
  {
    id: 3,
    image: image3,
    title: 'Maxtron Labs',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
  },
  {
    id: 4,
    image: image4,
    title: 'Proto Labs',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
  },
];

const ProvenExperts = () => {
  return (
    <div className={style.main}>
      <div className='container'>
        <div className={style.sectionHeader}>
          <div>
            <h2 className={style.sectionTitle}>Proven experts in one place</h2>
            <p className={style.sectionSubTitle}>Top industry experts</p>
          </div>
          <a href='/' className={style.sectionLink}>
            See all expert labs →
          </a>
        </div>
        <div className={style.allProfiles}>
          <div className='row'>
            {profiles.map((profile) => (
              <div className='col-md-3' key={profile.id}>
                <div className={style.profile}>
                  <div className={style.imageWrapper}>
                    <img src={profile.image} alt='' className={style.image} />
                  </div>
                  <h4 className={style.title}>{profile.title}</h4>
                  <p className={style.text}>{profile.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvenExperts;
