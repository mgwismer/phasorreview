import React, { useCallback, useState, useMemo } from 'react';
import { QuestionOneSolution } from './question-one-answer';
import { PhasorToTimeReview } from '../../PhasorToTimeReview/phasor-to-time-review';
import  ElementReview  from '../../ElementReview/Components/element-review';

export const QuestionOneReviewPage: React.FC = () => {
    const [redirectToSolution, setRedirectToSolution] = useState(false);
    const [redirectToPhasorToTime, setRedirectToPhasorToTime] = useState(false);
    const [redirectToElementReview, setRedirectToElementReview] = useState(false);

    const yesButtonClicked = useCallback(() => {
        setRedirectToElementReview(true);
    }, []);

    const noButtonClicked = useCallback(() => {
        setRedirectToPhasorToTime(true);
    }, []);

    const PageToDisplay = useMemo(() => {
        const QuestionResponse = (
            <div>
                <h2 className='question-one-review-title'> GOOD JOB!</h2>
                <div className='question-one-review-message'>Or did you just guess correctly
                    <span className='question-one-review-redirect' onClick={() => setRedirectToSolution(true)}> See the problem worked out </span>
                </div>
                <div className='question-one-review-prompt'>I guess that you remember how to transform from phasor notation back to time notation?</div>
                <button className='reply-button' onClick={yesButtonClicked}>
                    <div>Yep, Not an issue</div>
                </button>
                <button className='reply-button' onClick={noButtonClicked}>
                    <div>Huh? What are you talking about</div>
                </button>
            </div>
        )
        return QuestionResponse
    }, [yesButtonClicked, noButtonClicked]);

    if (redirectToSolution) {
        return <QuestionOneSolution correctAnswer={true}/>
    }

    if (redirectToPhasorToTime) {
        return <PhasorToTimeReview />
    }

    if (redirectToElementReview) {
        return <ElementReview />
    }
    return (
        <React.Fragment>
            {PageToDisplay}
        </React.Fragment>
    )
}