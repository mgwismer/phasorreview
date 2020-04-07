import React from 'react';
import ResistorImage from '../../assets/images/resistor.gif';
import ResistorDerivation from '../../assets/images/power8-1.gif';
import { zhat, vhat, ihat } from '../../constants/expressions';
import HTMLReactParser from 'html-react-parser';

export const ImpedanceTutPageSeven: React.FC = () => {
    return (
        <React.Fragment>
            <h2>Derivation of impedance for a resistor</h2>
            <div>
                <div>
                     Remember: {zhat} = {vhat}/{ihat}
                </div>
                <div>
                    <img src={ResistorImage} alt='resistor derivation'/>
                </div>
                <div>
                    <img src={ResistorDerivation} alt='resistor derivation'/>
                </div>
            </div>
        </React.Fragment>
    )
}
