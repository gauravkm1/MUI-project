import React from 'react';
import Carousel from "react-material-ui-carousel";
import './global.css';
import { Paper, Button } from '@mui/material';
import image1 from './Images/Image1.jpg';
import image2 from './Images/Image2.jpg';
import image3 from './Images/Image3.jpg';
import image4 from './Images/Image4.jpg';
import image5 from './Images/Image5.jpg';

const images = [image1, image2, image3, image4, image5];
const ImageSlider = () => {
//   const imageSize = {
//     width: '100%', 
//     height: '300px', 
//     objectFit: 'cover',
//   };
  return (
    <Carousel className='imagesize'>
      {images.map((image, index) => (
        <Paper key={index}>
          <img src={image} alt={`slide-${index + 1}`} />
        </Paper>
      ))}
  </Carousel>
  );
};

export default ImageSlider;

