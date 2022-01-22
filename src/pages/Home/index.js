import React from 'react';
import GlobalNetwork from '../../components/GlobalNetwork';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import WhatWeDo from '../../components/WhatWeDo';

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <WhatWeDo />
        <GlobalNetwork />
      </div>
    </div>
  );
};

export default Home;
