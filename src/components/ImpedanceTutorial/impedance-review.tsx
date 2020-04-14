import React, { useState, useCallback } from 'react';
import { increaseQuestionIndex, setAnswerSubmitted } from '../../redux/actions';
import { store } from '../../App';
import { Redirect } from 'react-router';
import { pageLinkTypes, frontPagePathTypes } from '../front-page/front-page-data-type';
import ImpedanceReviewImage from '../../assets/images/review8-3.gif';
import { zhat, vhat, ihat, yhat } from '../../constants/expressions';
import { ImpedanceTutorialPage } from './impedance-tutorial-wrapper';
import { ReplyButton } from '../Buttons/reply-button';
import './impedance-tutorial.scss'

export const ImpedanceReview: React.FC = () => {
    const [loadImpedanceTutorialFlag, setLoadImpedanceTutorialFlag] = useState(false);
    const [gotoQuizPageFlag, setGotoQuizPage] = useState(false);

    const handleButtonClicked = useCallback(() => {
        store.dispatch(increaseQuestionIndex());
        store.dispatch(setAnswerSubmitted(false));
        setGotoQuizPage(true);
    }, [])

    if (loadImpedanceTutorialFlag)
        return <ImpedanceTutorialPage startIndex={7} />

    if (gotoQuizPageFlag)
        return <Redirect to={pageLinkTypes.QUIZ} />

    return (
        <div className='impedance-tutorial'>
            <h2>Impedance review</h2>
            <div>
                Wonderful, so remember that impedance, ${zhat}, is the ratio of the phasor voltage to the phasor current:
                {zhat} = {vhat}/{ihat}
            </div>
            <img src={ImpedanceReviewImage} alt='impedance review table'/>
            <div className='impedance-tutorial-text-redirect' onClick={() => setLoadImpedanceTutorialFlag(true)}>How were these expressions derived?</div>
            <div className='impedance-tutorial-text'>
                Don't forget that admittance, {yhat}, is just the reciprocal of 
                impedance, {yhat} = 1/{zhat}
            </div>
            <ReplyButton mainText='CONTINUE' buttonSubText='To next question' buttonType={frontPagePathTypes.NEWPAGE} buttonAction={handleButtonClicked} />
        </div>
    )
} 