import React from 'react';
import ChooseExpertise from '../../components/ChooseExpertise';
import GlobalNetwork from '../../components/GlobalNetwork';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import PoweringPartner from '../../components/PowerPartner';
import WhatWeDo from '../../components/WhatWeDo';
import WorkingLab from '../../components/WorkingLab';

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <WhatWeDo />
        <GlobalNetwork />
        <WorkingLab />
        <ChooseExpertise />
        <PoweringPartner />
      </div>
    </div>
  );
};

export default Home;
