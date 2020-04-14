import React from 'react';
import CapacitorImage from '../../assets/images/capacitor.gif';
import ImpedanceDerivation from '../../assets/images/power10-1.gif';
import { zhat, vhat, ihat } from '../../constants/expressions';

export const ImpedanceTutPageNine: React.FC = () => {
    return (
        <React.Fragment>
            <h2>Derivation of impedance for a capacitor</h2>
            <div>
                <div>
                     Remember: {zhat} = {vhat}/{ihat}
                </div>
                <div>
                    <img src={CapacitorImage} alt='resistor derivation'/>
                </div>
                <div>
                    <img src={ImpedanceDerivation} alt='resistor derivation'/>
                </div>
            </div>
        </React.Fragment>
    )
}