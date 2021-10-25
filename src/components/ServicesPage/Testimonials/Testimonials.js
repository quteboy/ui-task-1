import React from 'react';

import ArrowRightIcon from '../../../assets/img/Arrow1.png'
import ArrowLeftIcon from '../../../assets/img/Arrow.png'
import Carousel from 'react-material-ui-carousel'
import './Testimonials.css'

const data = [
    {
        name: "Shirley Fultz",
        designation:'Designer',
        companyName:'Retro Studio',
        description: "It Helps to personalize my business Experience",
        testimonial: 'It\'s freeing to be able to catch up on customized news and not be distracted by a social media element on the same site'
    },
    {
        name: "Tobias Eton",
        designation:'Businessman',
        companyName:'Relator Studio',
        description: "Backend services are outstanding",
        testimonial: 'The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.'
    },
    {
        name: "Free Guy",
        designation:'Executive',
        companyName:'Vyom Studio',
        description: "E-commerce services are top notch",
        testimonial: 'I enjoy catching up with Fetch on my laptop, or on my phone when I\'m on the go!'
    },
]
const Testimonials = () => {
    return (
        <div>
            <Carousel
                className='mt-3'
                NextIcon={<img src={ArrowRightIcon} alt='arrow-icon-right'/>}
                PrevIcon={<img src={ArrowLeftIcon} alt='arrow-icon-left'/>}
                navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        backgroundColor: 'transparent',
                        borderRadius: 0
                    }
                }}
                navButtonsAlwaysVisible
                indicators={false}
            >
                {
                    data.map((item) => {
                        return (
                            <div>

                                <div className="testHeader ">{item.description}</div>
                                <div className="testContent my-2">{item.testimonial}</div>
                                <div className="d-flex align-items-center justify-content-center clientStyle">
                                    <div>-{item.name},</div>
                                    <div className="ms-2">{item.designation}</div>
                                    <div className="ms-2">{item.companyName}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default Testimonials;