import React from 'react';
import { images } from '../../constants';
import './AboutUs.scss';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h2 className='headtext__cormorant'>About Us</h2>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero nulla necessitatibus est perspiciatis ut corrupti, maiores modi, voluptates, neque at optio rem iste. Eveniet repudiandae provident voluptate.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h2 className='headtext__cormorant'>Our History</h2>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero nulla necessitatibus est perspiciatis ut corrupti, maiores modi, voluptates, neque at optio rem iste. Eveniet repudiandae provident voluptate.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
