import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-bootstrap";
import './Display.css';


const Display = () => {
    return (
        <Carousel variant="dark" autoPlay={true}
        interval={2000}
        controls={false}
        indicators={false}>
            <Carousel.Item className='carousel-inner' interval={2000}>
                <img
                    className="tales"
                    src="images/image3.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='carousel-caption d-flex flex-column justify-content-center h-100" style="top: 0'>
                    <h5>Welcome to Cartal Network Solution</h5><hr style={{color:'white', fontSize:'bold'}}/>
                    <p>Feel free to look around</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-inner'  interval={2000}>
                <img
                    className="tales"
                    src="images/image2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className='carousel-caption'>
                    <h5>Welcome to Cartal Network Solution</h5><hr style={{color:'white', fontSize:'bold'}}/>
                    <p>Feel free to look around</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-inner' interval={2000}>
                <img
                    className="tales"
                    src="images/image1.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className='carousel-caption'>
                    <h5>Welcome to Cartal Network Solution</h5><hr style={{color:'white', fontSize:'bold'}}/>
                    <p>Feel free to look around</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-inner' interval={2000}>
                <img
                    className="tales"
                    src="images/image4.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className='carousel-caption'>
                    <h5>Welcome to Cartal Network Solution</h5><hr style={{color:'white', fontSize:'bold'}}/>
                    <p>Feel free to look around</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
)
}

export default Display