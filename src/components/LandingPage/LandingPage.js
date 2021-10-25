import React, {useState} from 'react';
import './LandingPageStyle.css'
import TextField from "@material-ui/core/TextField";
import FilledInput from '@material-ui/core/FilledInput';
import {Button, Typography} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import {makeStyles} from '@material-ui/core'
import ResAppBar from "../ResAppBar/ResAppBar";
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
    inputStyle: {
        border: 'none',
        backgroundColor: '#3080c1',
        marginLeft: '20px',
        marginBottom: '15px'
    },
    buttonStyle: {
        backgroundColor: "#7dc855",
        marginLeft: "20px",
        padding: '10px',
        color: '#fff',
        marginBottom: '17px',
        height: '50px',
        textTransform:'none'
    }
}));

const LandingPage = () => {
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
        <div>
            <ResAppBar/>

            <div className="callout">
                <div className="container px-4 px-lg-5 text-center">
                    <h2 className="mx-auto text-white mb-3 scale-up-hor-center">
                        Ultimate Tool for any kind of work on Earth
                    </h2>

                    <p className='subHeading'>
                        You need the potential to design something completely new.
                        <br/>
                        Prototyping shouldn't limit you
                    </p>
                    <div className='mx-auto'>

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
                            helperText={<Typography variant="inherit" color="textSecondary">
                                {errors.email?.message}
                            </Typography>}
                        />

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
                            helperText={<Typography variant="inherit" color="textSecondary">
                                {errors.password?.message}
                            </Typography>}
                        />

                        <Button
                            variant='contained'
                            className={buttonStyle}
                            onClick={handleSubmit(onSubmit)}
                        >
                            Try it for free
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LandingPage;