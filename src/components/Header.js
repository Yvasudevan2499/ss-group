import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/hero1.jpg'; // Import your images
import image2 from '../images/ss2.jpg';
import image3 from '../images/ss3.jpg';

function Header() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 500, // Set autoplay speed in milliseconds (3 seconds in this example)
      };

  return (
    <AppBar position="static" style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', height: '1000px' }}>
      <Toolbar style={{ minHeight: '120px' }}>
        <Typography variant="h1" style={{ fontFamily: 'Roboto', fontWeight: 600, fontSize: '3.5rem', marginTop: '10px', marginLeft: '10px' }}>
          <span style={{ color: '#FFFFFF', fontFamily: 'Arial', fontStyle: 'italic' }}>Company</span> 
          <span style={{ color: '#FFFF00', fontFamily: 'Times New Roman', fontWeight: 700 }}>Logo</span>
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          <Button color="inherit" style={{ fontSize: '1.2rem' }}>Home</Button>
          <Button color="inherit" style={{ fontSize: '1.2rem' }}>About</Button>
          <Button color="inherit" style={{ fontSize: '1.2rem' }}>Services</Button>
          <Button color="inherit" style={{ fontSize: '1.2rem' }}>Contact</Button>
        </div>
      </Toolbar>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" style={{ width: '100%', height: '600px' }} />
        </div>
        <div>
          <img src={image2} alt="Slide 2" style={{ width: '100%', height: '600px' }} />
        </div>
        <div>
          <img src={image3} alt="Slide 3" style={{ width: '100%', height: '600px' }} />
        </div>
      </Slider>
    </AppBar>
  );
}

export default Header;
