import React from 'react';
import UserAvatar1 from "../../assets/img/Userpic.jpg"
import UserAvatar2 from "../../assets/img/Userpic1.jpg"
import UserAvatar3 from "../../assets/img/Userpic4.jpg"
import UserAvatar4 from "../../assets/img/Userpic3.jpg"
import UserAvatar5 from "../../assets/img/Userpic5.jpg"
import {makeStyles} from '@material-ui/core'
import './ServicesPageStyle.css'
import Testimonials from "./Testimonials/Testimonials";
const useStyles = makeStyles((theme) => ({
    userNameStyle: {
        fontSize: '1.1rem',
        lineHeight: '1.2',

    },

}));
const userData = [
    {
        title: 'Jane Doe',
        avatar: UserAvatar1,
    },
    {
        title: 'John Doe',
        avatar: UserAvatar2,
    },
    {
        title: 'Black Adam',
        avatar: UserAvatar3,
    },
    {
        title: 'Billy Batson',
        avatar: UserAvatar4,
    },
    {
        title: 'Arthur Curry',
        avatar: UserAvatar5,
    },
]
const ServicesPage = () => {
    const {userNameStyle} = useStyles()
    return (
        <div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                    <div className="text-center my-lg-5 my-sm-3 my-xs-2">
                        <h1>How it can help Everyone ?</h1>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="offset-lg-1 col-lg-10 col-md-12 col-sm-6 col-12">
                    <div className="row align-items-center">
                        <div className="col-lg-1"/>
                        {userData.map((user) => {
                            return (
                                <div className='col-lg-2 col-md-4 col-sm-12 col-12 text-center userAvatarStyle'>
                                    <img  src={user.avatar}/>
                                    <div className={userNameStyle}>{user.title}</div>
                                </div>
                            )
                        })}
                        <div className="col-lg-1"/>
                    </div>
                </div>
            </div>
            <div className="row my-5">
                <div className="offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12">
                    <div className="text-center">
                        <Testimonials/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServicesPage;