import React from 'react';
import { Carousel } from 'react-bootstrap';
import imageOne from '../Images/img-1.avif'
import imageTwo from '../Images/img-2.avif'

const BrandCarousel = () => {
    return (
        <div>


            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imageOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imageTwo}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarousel;