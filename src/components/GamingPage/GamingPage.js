import React from 'react';
import './GamingPageStyle.css'
import GamingImage from '../../assets/img/Image.jpg'

const GamingPage = () => {
    return (
        <div className='mainHeader'>
            <div className="text-center">

                <img className='imgContainer img-fluid' src={GamingImage}/>


            </div>

        </div>
    );
};

export default GamingPage;