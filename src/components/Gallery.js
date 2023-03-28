import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const images = [
    {
      src: 'https://picsum.photos/800/500?random=1',
      alt: 'Image 1',
      caption: 'Caption 1'
    },
    {
      src: 'https://picsum.photos/800/500?random=2',
      alt: 'Image 2',
      caption: 'Caption 2'
    },
    {
      src: 'https://picsum.photos/800/500?random=3',
      alt: 'Image 3',
      caption: 'Caption 3'
    }
  ];

    return (
      //code for image slide show in gallery section
      <section id="gallery" className='text-center'>
      <h2>Gallery</h2>
         <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image.src} alt={image.alt} />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </section>
    );
  }


export default Gallery;

