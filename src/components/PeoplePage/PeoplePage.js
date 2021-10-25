import React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import RUserPic1 from '../../assets/img/Review_Userpic1.jpg'
import RUserPic2 from '../../assets/img/Review_Userpic2.jpg'
import RUserPic3 from '../../assets/img/Review_Userpic3.jpg'
import RUserPic4 from '../../assets/img/Review_Userpic4.jpg'
import RUserPic5 from '../../assets/img/Review_Userpic5.jpg'
import RUserPic6 from '../../assets/img/Review_Userpic6.jpg'
import TwitterIcon from '../../assets/img/Twitter Icon.png'
import CardContent from '@material-ui/core/CardContent';
import './PeoplePage.css'
const reviewData = [
    {
        id: 1,
        name: 'Arthur Fleck',
        designation: 'Designer',
        reviewContent: 'I\'m always relieved when someone is delivering a eulogy and I realise I\'m listening to it.',
        profilePic: RUserPic1
    },
    {
        id: 2,
        name: 'Khal Drogo',
        designation: 'Dothraki King',
        reviewContent: 'From this day on I shall be known as Bob. For Bob is a good name and I am good. But if you want you can just call me Sally.',
        profilePic: RUserPic2
    },
    {
        id: 3,
        name: 'Chico',
        designation: 'Gangstar',
        reviewContent: 'I saw six men kicking and punching the mother-in-law. My neighbor said “Are you going to help?” I said, “No, Six should be enough.”',
        profilePic: RUserPic3
    },
    {
        id: 4,
        name: 'Vito Corleone',
        designation: 'Don',
        reviewContent: 'i will give him an offer cant refuse',
        profilePic: RUserPic4
    },
    {
        id: 5,
        name: 'Louis Litt',
        designation: 'Senior Partner',
        reviewContent: 'From this day on I shall be known as Bob. For Bob is a good name and I am good. But if you want you can just call me Sally.',
        profilePic: RUserPic5
    },
    {
        id: 6,
        name: 'Harold Gandarson',
        designation: 'Associate',
        reviewContent: 'Now this is the story all about how My life got flipped, turned upside down And I\'d like to take a minute just sit right there I\'ll tell you how I became the prince of a town called Bel-air.',
        profilePic: RUserPic6
    },
]
const PeoplePage = () => {
    return (
        <div className='bg-greyLight'>
            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12 col-12">
                    <h1 className="text-center my-5">
                        What people are Saying
                    </h1>
                </div>
            </div>
            <div className="row pb-lg-5">
                <div className="offset-lg-1 col-lg-10">
                    <div className="row">
                        {reviewData.map((card) => {
                            return (
                                <div className="col-lg-4 mb-3 col-md-6 col-sm-12 col-12">
                                    <Card key={card.id} className='cardStyle'>
                                        <CardContent>
                                            <div className="d-flex align-items-center justify-content-between">


                                                <div className='d-flex align-items-center'>
                                                    <Avatar src={card.profilePic}/>
                                                    <div className="ms-2">
                                                        <div className='userNameStyle'>{card.name}</div>
                                                        <div className='userDesignationStyle'>{card.designation}</div>
                                                    </div>

                                                </div>

                                                <div className="">
                                                    <img src={TwitterIcon}/>
                                                </div>

                                            </div>
                                            <div className='commentStyle commentTruncate'>
                                                {card.reviewContent}
                                            </div>
                                        </CardContent>
                                    </Card>

                                </div>
                            )
                        })}


                    </div>

                </div>
            </div>
        </div>
    );
};

export default PeoplePage;