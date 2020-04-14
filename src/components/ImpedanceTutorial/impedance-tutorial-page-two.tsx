import React from 'react';
import ImpedanceCartoon from '../../assets/images/power3-3.gif';
import { ihat, vhat, zhat } from '../../constants/expressions';

export const ImpedanceTutPageTwo: React.FC = () => {
    return (
        <React.Fragment>
            <h2 className='impedance-tutorial-title'>"Well, what exactly is impedance?"</h2>
            <h4>A ratio</h4>
            <div className='impedance-tutorial-text'>The impedance of an element, {zhat}, is the 
                ratio of the phasor voltage to the phasor current. 
            </div>
            <div className='impedance-tutorial-composite'>
                <img src={ImpedanceCartoon} alt='impedance stickman' />
                <div className='impedance-tutorial-text'>
                    <div>
                        Right-impedance is just Ohm's Law written in phasor notation.
                        {`${zhat}=${vhat}/${ihat}`}. (i.e. Impedance Law, but no one calls it that.)
                    </div>
                    <br/>
                    <div>
                        Impedance is analogous to resistance in resistance components.
                        Look at the units: {`${zhat}=${vhat}/${ihat}`} = Volts/Amperes = Ohms.
                    </div>
                    <br/>
                    <div>
                        Yup, the unit of impedance, like that of resistance, is Ohms.
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}