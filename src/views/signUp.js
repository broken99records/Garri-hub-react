import React from 'react';
// import sections
//import Hero from '../components/sections/Hero';
import Header from '../components/layout/Header';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
// import FeaturesSplit from '../components/sections/FeaturesSplit';
// import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const signUp = () => {

  return (
    <>
       <Header />
       
      {/* <Hero className="illustration-section-01" /> */}
      <div id='empty-space' className='container'></div>
      <div id="credentials" className='container' >
      <input id=""   type="name" class="form-input" placeholder="Your Name" value=" "></input>
      <input id=""  type="gmail" class="form-input" placeholder="Your best email" value=" "></input>
      </div>
      
              
      {/* <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider /> */}
      <Cta split />
    </>
  );
}

export default signUp;