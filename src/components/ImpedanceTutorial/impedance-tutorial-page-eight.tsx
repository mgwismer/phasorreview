import React from 'react';
import InductorImage from '../../assets/images/inductor.gif';
import ImpedanceDerivation from '../../assets/images/power9-1.gif';
import { zhat, vhat, ihat } from '../../constants/expressions';

export const ImpedanceTutPageEight: React.FC = () => {
    return (
        <React.Fragment>
            <h2>Derivation of impedance for a inductor</h2>
            <div>
                <div>
                     Remember: {zhat} = {vhat}/{ihat}
                </div>
                <div>
                    <img src={InductorImage} alt='resistor derivation'/>
                </div>
                <div>
                    <img src={ImpedanceDerivation} alt='resistor derivation'/>
                </div>
            </div>
        </React.Fragment>
    )
}