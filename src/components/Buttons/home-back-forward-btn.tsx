import React from 'react';
import NextImage from '../.././assets/images/next.gif';
import HomeImage from '../.././assets/images/home.gif';
import PreviousImage from '../.././assets/images/back.gif';
import './home-back-forward.scss';

type OwnProps = {
    handleHomePageClicked: () => void;
    handlePreviousPageClicked: () => void;
    handleNextPageClicked: () => void;
}
export const HomeBackForwardBtns: React.FC<OwnProps> = ({ handleHomePageClicked, handlePreviousPageClicked, handleNextPageClicked }) => {
    return (
        <div className='home-back-forward-buttons'>
            <div onClick={handleHomePageClicked}>
                <img src={HomeImage} alt='points to next page'/>
            </div>
            <div onClick={handlePreviousPageClicked}>
                <img src={PreviousImage} alt='points to next page'/>
            </div>
            <div onClick={handleNextPageClicked}>
                <img src={NextImage} alt='points to next page'/>
            </div>
        </div>
    )
}