import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';
import { store } from '../../App';
import { pageLinkTypes } from '../../components/front-page/front-page-data-type';
import NextImage from '../.././assets/images/next.gif';
import HomeImage from '../.././assets/images/home.gif';
import PreviousImage from '../.././assets/images/back.gif';
import { resetQuestionIndex, setAnswerSubmitted, setQuizStart } from '../../redux/actions';
import './home-back-forward.scss';

type OwnProps = {
    handlePreviousPageClicked?: () => void | null;
    handleNextPageClicked: () => void;
}

export const HomeBackForwardBtns: React.FC<OwnProps> = ({ 
    handlePreviousPageClicked,
    handleNextPageClicked,
}) => {

    const [returnToHome, setReturnToHome] = useState(false)

    const homeButtonClicked = useCallback(() => {
        store.dispatch(setQuizStart(false));
        store.dispatch(setAnswerSubmitted(false));
        store.dispatch(resetQuestionIndex());
        setReturnToHome(true);
    }, [setQuizStart, setAnswerSubmitted, resetQuestionIndex])

    if (returnToHome) {
        return <Redirect to={pageLinkTypes.FRONTPAGE} />
    }

    return (
        <div className='home-back-forward-buttons'>
            <div onClick={homeButtonClicked}>
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
