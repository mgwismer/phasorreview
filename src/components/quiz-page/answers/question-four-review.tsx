import React, { useState, useCallback, useMemo } from 'react';
import { store } from '../../../App';
import { ReplyButton } from '../../Buttons/reply-button';
import { increaseQuestionIndex, setAnswerSubmitted } from '../../../redux/actions';
import { frontPagePathTypes, pageLinkTypes } from '../../front-page/front-page-data-type';
import { EquationDisplay } from '../../EquationDisplay/equation-display';
import { QuestionFourSolution } from './question-four-answer';

type OwnProps = {
    correctAnswer: Boolean;
}

export const QuestionFourReviewPage: React.FC<OwnProps> = ({ correctAnswer }) => {
    const [gotoSolutionFlag, setGotoSolutionFlag] = useState(false);
    const [displayResistorPowerFlag, setDisplayResistorPower] = useState(false);
    
    const resistorPowerDisplay = useMemo(() => {
        if (!displayResistorPowerFlag) return;
        return (
            <div className='resistor-solution'>
                <div> The phasor voltage, V<sub>R</sub> is 37V</div>
                <div> However this is the voltage magnitude. </div>
                <div> For power calculations the RMS voltage must be used, V<sub>RMS</sub> = 37/&#8730 2</div>
                <div> The dissipated power squared divided by the resistance </div>
                <EquationDisplay equationString={'P = frac{(37/sqrt{2})2}{10} = 68W'}/>
            </div>
        )
    }, [displayResistorPowerFlag])

    const pageToDisplay = useMemo(() => {
        if (!correctAnswer) 
            return <QuestionFourSolution />
        else return (
            <div>
                <h2>Correct</h2>
                <h4 onClick={() => setGotoSolutionFlag(true)}>See the problem worked out</h4>
                <div className='resistor-power-calculation'>
                    <p onClick={() => setDisplayResistorPower(true)}>How much power does the resistor dissipate?</p>
                    {resistorPowerDisplay}
                </div>
            </div>
        )
    }, [correctAnswer])

    if (gotoSolutionFlag)
        return <QuestionFourSolution />

    return (
        <React.Fragment>
            {pageToDisplay}
            <ReplyButton 
                mainText='START OVER' 
                buttonSubText="Let\'s do this again"
                buttonType={frontPagePathTypes.LINKPAGE} 
                nextPath={pageLinkTypes.FRONTPAGE}
            />
        </React.Fragment>
    )
}