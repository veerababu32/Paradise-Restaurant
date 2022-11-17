import React from 'react';
import { images } from '../../constants';

const SubHeading = ({title}) => (
  <div className={{marginBottom: '16px'}}>
    <h5 className='p__cormorant'>{title}</h5>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
