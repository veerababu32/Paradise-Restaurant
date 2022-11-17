import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h2 className='headtext__cormorant' style={{ marginBottom: '3rem'}}>Find Us</h2>
      <div className='app__wrapper-content'>
        <p className="p__opensans">4760 Marsh Road Okemos MI 48864</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <span className="p__opensans">Mon - Fri: 12:00 am - 10:00 pm</span><br />
        <span className="p__opensans">Sat - Sun: 12:00 am - 12:00 pm</span>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
