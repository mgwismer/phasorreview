import React from 'react';
import CircuitDiagram from '../../../assets/images/test1-1a.jpg';
import HTMLReactParser from 'html-react-parser';


export const QuestionFourSolution: React.FC = () => {

    const capOmega = HTMLReactParser('&#937')
    return (
        <div className='quiz-solution'>
            <h2 className='quiz-solution-title'>Quiz Circuit Analysis Solution</h2>
            <div className='quiz-solution-composite'>
                <p className='quiz-solution-text'> In order to find the solution label node A and the voltage across the resistor, V<sub>R</sub></p>
                <img className='quiz-solution-intro-image' src={CircuitDiagram} alt='phasor diagram' />
            </div>
            <div className='quiz-solution-text'>Define the impedance for the inductor, Z<sub>L</sub> and the capacitor Z<sub>C</sub></div>
            <div className='quiz-solution-text'>Z<sub>L</sub> = j*1000*0.015 = j15 {capOmega} and Z<sub>C</sub>= -j5 {capOmega} and Z<sub>R</sub> = 10 {capOmega}</div>
        </div>
    )
}