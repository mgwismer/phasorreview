import React, { useMemo } from 'react';
import SolutionImage from '../../../assets/images/review4-1.gif'
import { ReplyButton } from '../../Buttons/reply-button';
import { frontPagePathTypes, frontPageTypes } from '../../front-page/front-page-data-type';

type OwnProps = {
    correctAnswer: Boolean;
}
export const QuestionOneSolution: React.FC<OwnProps> = ({ correctAnswer }) => {
    
    const WorkedSolutionPage = useMemo(() => {
        return (
        <div className='solution-one-page'>
            <h2 className='solution-one-page-title'>Sorry not quite, follow this step by step solution</h2>
            <img src={SolutionImage} alt='solution to problem' />
            <div className='solution-one-page-text'>
                Don't worry if you don't quite remember ALL of that. Hopefully this review will refresh your memory.
                <br/>
                So do you remember how to transform from phasor notation back to time notation?
            </div>
            <ReplyButton buttonText='Yes, Im good' buttonType={frontPagePathTypes.LINKPAGE} nextPath={frontPageTypes.REVIEW_START} />
        </div>
    )}, [correctAnswer])


    return (
        <div>
            {WorkedSolutionPage}
        </div>
    )
}