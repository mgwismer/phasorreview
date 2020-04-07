import React from 'react';
import CoolSmile from '../../assets/images/cool-smile.gif';
import Smiley from '../../assets/images/smily.gif';
import ImpedanceDefinitions from '../../assets/images/power4-1.gif';

export const ImpedanceTutPageThree: React.FC = () => {
    return (
        <React.Fragment>
            <h2 className='impedance-tutorial-title'>The many faces of impedance</h2>
                <div className='impedance-tutorial-faces-row' >
                    <img src={CoolSmile} alt='cool smile'/>
                    <img src={Smiley} alt='smiley'/>
                    <img src={CoolSmile} alt='cool smile'/>
                    <img src={Smiley} alt='smiley'/>
                </div>
            <h4>Various ways to express impedance</h4>
            <img src={ImpedanceDefinitions} alt='impedance definitions'/>
        </React.Fragment>
    )
}