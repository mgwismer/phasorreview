import React, { useState } from 'react';
import { QuestionThreeSolution } from './question-three-answer';
import { OutsideLinks } from '../../OutsideLinks/outside-links';

export const QuestionThreeReviewPage: React.FC = () => {
    const [gotoSolutionFlag, setGotoSolutionFlag] = useState(false);
    
    if (gotoSolutionFlag)
        return <QuestionThreeSolution />

    return (
        <div className='quiz-solution'>
            <h2>Phasor Review</h2>
            <div className='quiz-solution-text' >Thats right</div>
            <h4 style={{color: 'red', cursor: 'pointer'}} onClick={() => setGotoSolutionFlag(true)}>What's that? You really don't understand phasor diagrams</h4>
            <OutsideLinks />
        </div>
    )
}