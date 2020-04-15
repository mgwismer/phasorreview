import React from 'react';
import ClapboardImage from '../../assets/images/power7-1.gif';
import { zhat } from '../../constants/expressions';

export const ImpedanceTutPageSix: React.FC = () => {
    return (
        <React.Fragment>
            <div className='impedance-tutorial-title'>
                <span className='impedance-tutorial-title-leftimage'>
                    <img src={ClapboardImage} alt='notes'/>
                </span>
                <h2>Another take on the rectangular form</h2>
            </div>
            <div className='impedance-tutorial-composite'>
                <div className='impedance-tutorial-text'>
                    <div>
                        Look again at the rectangular form: {zhat} = R + jX
                    </div>
                    <br/>
                    <div>
                        R = Real({zhat}) and is called the <span style={{color: 'yellow'}}> resistive </span>  part of the impedance. The unit of measure is ohms.
                    </div>
                    <br/>
                    <div>
                        X = Imaginary({zhat}) and is called the <span style={{color: 'yellow'}}> reactive </span>  part of the impedance. The unit of measure is ohms.
                    </div>
                    <br/>
                    <div>
                        Following are the impedances for Resistors, Inductors and Capacitors
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
