import React, { useMemo, useState, useEffect } from 'react';
import SolutionImage from '../../../assets/images/review4-1.gif'
import { frontPagePathTypes, frontPageTypes } from '../../front-page/front-page-data-type';
import { PhasorToTimeReview } from '../../PhasorToTimeReview/phasor-to-time-review';
import { YesNoButtons } from '../../Buttons/yes-no-buttons';
import '../quiz-page.scss';

type OwnProps = {
    correctAnswer: Boolean;
}
export const QuestionOneSolution: React.FC<OwnProps> = ({ correctAnswer }) => {
    const [gotoPhasorReview, setGotoPhasorReview] = useState(false);

    useEffect(() => {
        return () => setGotoPhasorReview(false);
    }, [])

    const WorkedSolutionPage = useMemo(() => {
        const yesButtonProps = {
            mainText: 'YES!',
            subText: "I'm good",
            type: frontPagePathTypes.LINKPAGE,
            nextPath: frontPageTypes.REVIEW_START
        }
    
        const noButtonProps = {
            mainText: 'NO',
            subText: 'Show me',
            type: frontPagePathTypes.NEWPAGE,
            buttonAction: () => setGotoPhasorReview(true)
        }
        return (
        <div className='quiz-page'>
            <div className='quiz-page-title'>Sorry not quite, this is one way to solve it.</div>
            <div className='quiz-page-solution-image'>
                <img src={SolutionImage} alt='solution to problem' />
            </div>
            <div className='quiz-page-text' style={{fontSize: '1em'}}>
                Don't worry if you don't quite remember ALL of that. Hopefully this review will refresh your memory.
                <br/>
                <br/>
                So do you remember how to transform from phasor notation back to time notation?
            </div>
            <div className='quiz-page-reply-buttons'>
                <YesNoButtons yesButton={yesButtonProps} noButton={noButtonProps} />
            </div>
        </div>
    )}, [])

    if (gotoPhasorReview) {
        return <PhasorToTimeReview />
    }
    
    return (
        <div>
            {WorkedSolutionPage}
        </div>
    )
}