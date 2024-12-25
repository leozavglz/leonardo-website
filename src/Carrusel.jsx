import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

import image1 from './assets/image1.jpeg';
import image2 from './assets/image2.jpeg';
import image3 from './assets/image3.jpeg';
import image4 from './assets/image4.jpeg';
import image5 from './assets/image5.jpeg';

const Carrusel = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(2);
            }
        };

        handleResize(); // Llamada inicial
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500  ,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const images = [image1, image2, image3, image4, image5];

    return (
        <div className="carrusel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="carrusel-slide">
                        <div className="image-wrapper">
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carrusel;