import React from 'react';
import { frontPagePathTypes, pageLinkTypes } from '../../front-page/front-page-data-type';
import { YesNoButtons } from '../../Buttons/yes-no-buttons';
import './quiz-answers.scss';

export const QuestionTwoSolution: React.FC = () => {
    const yesButtonProps = {
        mainText: 'YES!',
        subText: '',
        type: frontPagePathTypes.LINKPAGE,
        nextPath: pageLinkTypes.IMPEDANCEREVIEW,
    }

    const noButtonProps = {
        mainText: 'NO',
        subText: '',
        type: frontPagePathTypes.LINKPAGE,
        nextPath: pageLinkTypes.IMPEDANCETUT,
    }
    return (
        <React.Fragment>
            <div className='quiz-solution'>
                <p className='quiz-solution-text'>Maybe your a little rusty. It's an inductor because the voltage leads the current by 90 degrees</p>
                <div className='quiz-solution-link'>Why does the voltage lead?</div>
                <div className='quiz-solution-text'>Now do you remember anything about impedance? </div>
            </div>
            <YesNoButtons yesButton={yesButtonProps} noButton={noButtonProps} />
        </React.Fragment>
    )
}