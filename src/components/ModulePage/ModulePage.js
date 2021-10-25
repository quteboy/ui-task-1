import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core'
import sideImg from "../../assets/img/Video.jpg"
import CardIcon1 from '../../assets/img/Icon3.png'
import CardIcon2 from '../../assets/img/Icon4.png'
import CardIcon3 from '../../assets/img/Icon5.png'
import CardIcon4 from '../../assets/img/Icon6.png'
import sketchLogo from  '../../assets/img/Icon1.png'
import psLogo from  '../../assets/img/Icon2.png'
const useStyles = makeStyles((theme) => ({
    moduleSubtext: {
        lineHeight: 1.5,
        color: 'darkgray',
        marginBottom:'30px'
    },
    buttonStyle: {
        backgroundColor: "#7dc855",
        marginLeft: "20px",
        padding: '10px',
        color: '#fff',
        marginBottom: '17px',
        height: '50px'
    },
    cardHeading: {
        fontWeight: '600',
        lineHeight: 1.2,
        color: 'black',
        textAlign: 'center',
        fontSize: '1.2rem',
        marginBottom: '10px'
    },
    cardSubText:{
        lineHeight: 1.2,
        color: 'darkgrey',
        textAlign: 'center',
        fontSize: '1rem',
        marginBottom: '10px'
    }
}));
const moduleData = [
    {
        label: 'Clean Structure',
        subText: '24/7 proactive threat scanning to prevent attack',
        cardLogo:CardIcon1,
    },
    {
        label: 'Secure',
        subText: 'To keep your site safe from any hiccups',
        cardLogo:CardIcon2,
    },
    {
        label: 'Layers',
        subText: 'Reliably powered by Google cloud with NGINX caching',
        cardLogo:CardIcon3,
    },
    {
        label: 'Great Fonts',
        subText: 'Free and automatic SSL with Lets Encrypt',
        cardLogo:CardIcon4,
    },
]
const ModulePage = () => {
    const {moduleSubtext, cardHeading,cardSubText} = useStyles()
    return (
        <Fragment>
            <div className="row align-items-center py-5">
                <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                    <div className="row px-2 pb-1">
                        <div className="offset-lg-2 col-lg-8 col-12">
                            <h1 className='mb-3'>
                                What is Module ?
                            </h1>

                            <h5 className={moduleSubtext}>
                                I hate peeping Toms, For one thing they usually step all over the hedges and plants on
                                the side
                                of someones house killing them
                            </h5>
                            <div className="d-flex align-items-center">
                                <img src={sketchLogo}/>
                                <img className='ml-4' src={psLogo}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                    <div className="">
                        <img className='img-fluid' style={{
                            objectFit: 'contain',
                            width: 'auto',
                            height: '300px'
                        }} src={sideImg}/>
                    </div>
                </div>
            </div>
            <div className="row align-items-center my-lg-5">
                <div className="offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12">
                    <div className="row align-items-center">
                        {moduleData.map((card) => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-12 col-12">


                                    <div className='p-2' style={{height: '200px'}}>
                                        <>
                                            <div className="text-center mb-3">
                                                <img src={card.cardLogo}/>
                                            </div>

                                            <div className={cardHeading}>{card.label}</div>
                                            <div className={cardSubText}>{card.subText}</div>
                                        </>
                                    </div>


                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default ModulePage;