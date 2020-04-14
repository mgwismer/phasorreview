import React, { useCallback } from 'react';
import { tableReviewType } from '../ElementReview/Components/review-table-data';
import { ReviewTable } from '../ElementReview/Components/review-table';
import { YesNoButtons } from '../Buttons/yes-no-buttons';
import { frontPagePathTypes, pageLinkTypes } from '../front-page/front-page-data-type';
import { store } from '../../App';
import { setAnswerSubmitted } from '../../redux/actions';


const phasorToTimeReview: tableReviewType = {
    tableSteps: [
        {
            text: 'Write the phasor in exponential form',
            equation: '\hat{Y} = Y_m e^(j theta)',
        },
        {
            text: 'Express y(t) in terms of the phasor',
            equation: 'y(t) = Re {\hat{Y} e^(j omega t)}',
        },
        {
            text: 'Substitute in the phasor expression',
            equation: 'y(t) = Re{Y_m e^(j theta) e^(j omega t)}',
        },
        {
            text: "Use Euler's formula to change the real part to a cosine",
            equation: 'y(t) = Y_m \cos(omega t + theta)',
        },
    ],
    tableEnd: {
       text: '',
       figure: '' 
    }
}
export const PhasorToTimeReview: React.FC = () => {
    const gotoNextQuizQuestion = useCallback(() => {
        store.dispatch(setAnswerSubmitted(false))
    }, []);
    
    const yesButtonProps = {
        mainText: 'YES!',
        subText: 'Ready for another',
        type: frontPagePathTypes.NEWPAGE,
        buttonAction: gotoNextQuizQuestion
    }

    const noButtonProps = {
        mainText: 'NO',
        subText: 'How \'bout more info',
        type: frontPagePathTypes.LINKPAGE,
        nextPath: pageLinkTypes.REVIEW
    }
    return (
        <div className='phasor-to-time'>
            <h2>Going from phasor back to time notation?</h2>
            <h4>Again four easy steps</h4>
            <ReviewTable reviewData={phasorToTimeReview} />
            <YesNoButtons yesButton={yesButtonProps} noButton={noButtonProps}/>
        </div>
    )
}