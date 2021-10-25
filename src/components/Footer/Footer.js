import React from 'react';
import {Button} from "@material-ui/core";
import './Footer.css'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        backgroundColor: "#358ed7",
        color: '#fff',
        textTransform:'none'
    }
}));
const Footer = () => {
    const {buttonStyle} = useStyles()
    return (
        <div>
            <footer className="bg-light py-4 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-lg-6">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                                    <div className="text-muted" href="#!">Powered by Great Simple Studio</div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <div className="text-muted" href="#!">Terms of use</div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <div className="text-muted" href="#!">Privacy Policy</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="m-0 text-muted">Free 14 days trial.no credit card required
                                <Button className={`ml-xl-2 ml-lg-2 ${buttonStyle}`} variant='contained'>
                                    Get Started
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;