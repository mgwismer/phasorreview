import React, { useCallback, useState, useEffect } from 'react';
import NextImage from '../.././assets/images/next.gif';
import HomeImage from '../.././assets/images/home.gif';
import PreviousImage from '../.././assets/images/back.gif';
import './home-back-forward.scss';
import { Redirect } from 'react-router';

type OwnProps = {
    handlePreviousPageClicked: () => void;
    handleNextPageClicked: () => void;
}
export const HomeBackForwardBtns: React.FC<OwnProps> = ({ handlePreviousPageClicked, handleNextPageClicked }) => {
    const [returnToHome, setReturnToHome] = useState(false)

    if (returnToHome) {
        return <Redirect to={'/'} />
    }

    return (
        <div className='home-back-forward-buttons'>
            <div onClick={() => setReturnToHome(true)}>
                <img src={HomeImage} alt='points to home page'/>
            </div>
            <div onClick={handlePreviousPageClicked}>
                <img src={PreviousImage} alt='points to previous page'/>
            </div>
            <div onClick={handleNextPageClicked}>
                <img src={NextImage} alt='points to next page'/>
            </div>
        </div>
    )
}