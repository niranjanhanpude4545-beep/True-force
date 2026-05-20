import React from 'react';
import EliteHero from '../components/Hero';
import Capabilities from '../components/Capabilities';
import TrustIndicators from '../components/TrustIndicators';
import TrustedPartners from '../components/TrustedPartners';
import ForceMap from '../components/ForceMap';
import EliteROICalculator from '../components/ROICalculator';
import GoogleReviews from '../components/GoogleReviews';
import CommanderBot from '../components/CommanderBot';

const Home = () => {
  return (
    <>
      <EliteHero />
      <Capabilities />
      <TrustedPartners />
      <TrustIndicators />
      <ForceMap />
      {/* <EliteROICalculator /> */}
      <GoogleReviews />
      <CommanderBot />
    </>
  );
};

export default Home;
