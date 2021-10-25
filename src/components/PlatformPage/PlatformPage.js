
import React, {Fragment} from 'react';
import './PlatformPageStyle.css'
const PlatformPage = () => {
    return (
        <Fragment>
            <div className='mainImgContainer'>
                {/*<div className="text-center">*/}
                {/*    <h2 className='mainTitle'>*/}
                {/*        The Cross Platform App*/}
                {/*    </h2>*/}
                {/*    <div className='subTitle'>*/}
                {/*        I hate peeping Toms, For one thing they usually step all over the hedges and plants on*/}
                {/*         the side*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end">
                            <div className="mainTitle"> The Cross Platform App</div>
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <div className="subTitle mb-5">I hate peeping Toms, For one thing they usually step all over the hedges and plants on
                                the side
                                of someones house killing them</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PlatformPage;