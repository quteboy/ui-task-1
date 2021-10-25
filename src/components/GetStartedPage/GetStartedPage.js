import React, {useState} from 'react';
import './GetStartedStyle.css'
import LappyImage from '../../assets/img/LaptopLayer2.png'
import {Button, makeStyles, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
    inputStyle: {
        border: 'none',
        backgroundColor: '#3080c1',
        marginBottom: '15px'
    },
    buttonStyle: {
        backgroundColor: "#7dc855",
        padding: '10px',
        color: '#fff',
        marginBottom: '17px',
        height: '50px',
        textTransform: 'none'
    }
}));
const GetStartedPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const {inputStyle, buttonStyle} = useStyles()
    const validationSchema = Yup.object().shape({

        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),


    });
    const {
        register,
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
    };
    return (
        <div className='metaHead'>
            <div className="innerContainer">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                        <div className='mainHeading'>
                            Get Started Now
                        </div>
                        <div className='subHeading'>
                            Sign up and quickly get up running with examples,tutorials,
                            documentations and a helpful community
                        </div>

                        <div className="">
                            <TextField
                                placeholder='Email'
                                className={inputStyle}
                                id='outlined-basic'
                                label='Email'
                                variant='outlined'
                                InputProps={{disableUnderline: true}}
                                style={{width: "300px"}}
                                {...register('email')}
                                error={!!errors.email}
                                helperText={<Typography variant="inherit" color="textPrimary">
                                    {errors.email?.message}
                                </Typography>}
                            />
                        </div>
                        <div className="">
                            <TextField
                                label='Password'
                                className={inputStyle}
                                variant="outlined"
                                style={{width: "300px"}}
                                type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                                onChange={() => {
                                }}
                                InputProps={{ // <-- This is where the toggle button is added.
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                {...register('password')}
                                error={!!errors.password}
                                helperText={<Typography variant="inherit" color="textPrimary">
                                    {errors.password?.message}
                                </Typography>}
                            />
                        </div>
                        <Button variant='contained' onClick={handleSubmit(onSubmit)} className={buttonStyle}>
                            Try it for free
                        </Button>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                        <img className='img-fluid' src={LappyImage}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedPage;