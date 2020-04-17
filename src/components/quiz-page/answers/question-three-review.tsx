import React, { useState, useCallback } from 'react';
import { QuestionThreeSolution } from './question-three-answer';
import { store } from '../../../App';
import { frontPagePathTypes } from '../../front-page/front-page-data-type';
import { setAnswerSubmitted, increaseQuestionIndex } from '../../../redux/actions';
import { ReplyButton } from '../../Buttons/reply-button';
import './quiz-answers.scss';

export const QuestionThreeReviewPage: React.FC = () => {
    const [gotoSolutionFlag, setGotoSolutionFlag] = useState(false);
    
    const goToNextQuizQuestion = useCallback(() => {
        store.dispatch(increaseQuestionIndex());
        store.dispatch(setAnswerSubmitted(false));
    }, [])
    
    if (gotoSolutionFlag)
        return <QuestionThreeSolution />

    return (
        <div className='quiz-solution'>
            <h2>Phasor Review</h2>
            <div className='quiz-solution-text' >Thats right</div>
            <h4 style={{color: 'red', cursor: 'pointer'}} onClick={() => setGotoSolutionFlag(true)}>What's that? You really don't understand phasor diagrams</h4>
            <ReplyButton 
                mainText='CONTINUE' 
                buttonSubText='More practice questions'
                buttonType={frontPagePathTypes.NEWPAGE} 
                buttonAction={goToNextQuizQuestion} 
            />
        </div>
    )
}