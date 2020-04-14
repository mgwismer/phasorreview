import React from 'react';
import PhasorDiagram from '../../../assets/images/diagram2.gif'
import PhasorEquations from '../../../assets/images/diagram6.gif'
import PhasorColorDiagram from '../../../assets/images/diagram7.gif'
import { ihat } from '../../../constants/expressions';
import './quiz-answers.scss';
import { OutsideLinks } from '../../OutsideLinks/outside-links';

export const QuestionThreeSolution: React.FC = () => {
    return (
        <div className='quiz-solution'>
            <h2 className='quiz-solution-title'>Phasor Diagram Review</h2>
            <div className='quiz-solution-composite'>
                <p className='quiz-solution-text'> The correct solution is</p>
                <img className='quiz-solution-intro-image' src={PhasorDiagram} alt='phasor diagram' />
            </div>
            <div className='quiz-solution-text'>For this phasor diagram</div>
            <div className='quiz-solution-list'>
                <ul>
                    <li>First, take {ihat} as the reference phasor since this current is common to all of the elements</li>
                    <li>
                        You know the phasor voltages are
                        <br/>
                        <img src={PhasorEquations} alt='phasor-equations'/>
                    </li>
                    <li>
                        Draw these voltages on the phasor diagram, placing {ihat} on the positive horizontal axis.
                    </li>
                    <li>
                        By KVL, Vs is the sum of V<sub>R</sub>, V<sub>L</sub>, and V<sub>C</sub>
                        <img src={PhasorColorDiagram} alt='phasor-equations'/>
                    </li>
                </ul>
            </div>
            <OutsideLinks />
        </div>
    )
}