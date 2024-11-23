import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../img/gallery1.png';
import img2 from '../img/gallery2.png';
import img3 from '../img/gallery3.png';

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjusts transition speed (1 second)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Duration before switching images
    fade: true, // Enables fade transition
    arrows: false, // Removes toggle arrows
    pauseOnHover: true,
  };

  const slides = [
    { image: img1, caption: 'Find the best freelancers' },
    { image: img2, caption: 'Price smartly' },
    { image: img3, caption: 'Post jobs strategically' },
  ];

  return (
    <div className="gallery-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="gallery-slide">
            <img
              src={slide.image}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
            />
            <p className="gallery-caption">{slide.caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
