import React from 'react';
import ImpedanceZImage from '../../assets/images/z.gif';
import ImpedanceReview from '../../assets/images/power11-1.gif';
import { zhat, vhat, ihat } from '../../constants/expressions';
import HTMLReactParser from 'html-react-parser';

export const ImpedanceTutPageTen: React.FC = () => {
    return (
        <React.Fragment>
            <div className='impedance-tutorial-title'>
                <h2> A little more on impedance </h2>
                <span className='impedance-tutorial-title-rightimage'>
                    <img src={ImpedanceZImage} alt='resistor derivation' style={{marginTop: '20px'}}/>
                </span>
            </div>
            <div className='impedance-tutorial-composite'>
                <img src={ImpedanceReview} style={{width: '300px', height: '150px'}} alt='impedance review' />
                <div className='impedance-tutorial-text'>
                    <div>
                        Remember {zhat}=R+jX
                    </div>
                    <br/>
                    <div>
                        <span style={{color: 'blue', fontSize: 'large'}}>*</span>
                        Note that the resistive part of {zhat} is always positive, but the reactive part, X, may take on both negative and positive values
                    </div>
                    <br/>
                    <div>
                        <span style={{color: 'blue', fontSize: 'large'}}>*</span>
                        By looking at the chart on the left, you can infer that if reactive part is positive, the element is inductive.
                    </div>
                    <br/>
                    <div>
                        <span style={{color: 'blue', fontSize:'large'}}>*</span>
                        If the element is capacitive, X is negative.
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}