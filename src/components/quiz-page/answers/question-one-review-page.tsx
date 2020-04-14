import React, { useCallback, useState, useMemo } from 'react';
import { QuestionOneSolution } from './question-one-answer';
import { PhasorToTimeReview } from '../../PhasorToTimeReview/phasor-to-time-review';
import  ElementReview  from '../../ElementReview/Components/element-review';
import { ReplyButton } from '../../Buttons/reply-button';
import { frontPagePathTypes } from '../../front-page/front-page-data-type';
import { YesNoButtons } from '../../Buttons/yes-no-buttons';

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
        const yesButtonProps = {
            mainText: 'YES!',
            subText: 'Not an issue',
            type: frontPagePathTypes.NEWPAGE,
            buttonAction: yesButtonClicked
        }
    
        const noButtonProps = {
            mainText: 'NO',
            subText: 'What are you talking about',
            type: frontPagePathTypes.NEWPAGE,
            buttonAction: noButtonClicked
        }
        const QuestionResponse = (
            <div>
                <h2 className='question-one-review-title'> GOOD JOB!</h2>
                <div className='question-one-review-message'>Or did you just guess correctly
                    <span className='question-one-review-redirect' onClick={() => setRedirectToSolution(true)}> See the problem worked out </span>
                </div>
                <div className='question-one-review-prompt'>I guess that you remember how to transform from phasor notation back to time notation?</div>
                <YesNoButtons yesButton={yesButtonProps} noButton={noButtonProps} />
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