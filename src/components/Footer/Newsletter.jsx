import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.scss';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='Newsletter' />
      <h2 className='headtext__cormorant'>Subscribe to Our Newsletter</h2>
      <p className='p__opensans'>And never miss the updates!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter your e-mail address' />
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
