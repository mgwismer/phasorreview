import React from 'react';
import LaughFace from '../../assets/images/power6-2.gif';
import GoogleEyes from '../../assets/images/power6-1.gif';
import ImpedanceInfo from '../../assets/images/power6-3.gif';
import { zhat } from '../../constants/expressions';
import HTMLReactParser from 'html-react-parser';

export const ImpedanceTutPageFive: React.FC = () => {
    return (
        <React.Fragment>
            <div className='impedance-tutorial-title'>
                <span className='impedance-tutorial-title-leftimage'>
                    <img src={LaughFace} alt='notes image'/>
                </span>
                <span className='impedance-tutorial-title-leftimage'>
                    <img src={GoogleEyes} alt='notes image'/>
                </span>
                <h2>More Faces</h2>
                <span className='impedance-tutorial-title-rightimage'>
                    <img src={LaughFace} alt='notes image'/>
                </span>
                <span className='impedance-tutorial-title-rightimage'>
                    <img src={GoogleEyes} alt='notes image'/>
                </span>
            </div>
            <div>
                <img src={ImpedanceInfo} alt='impedance equations'/>
            </div>
            <div>
                Being a complex number, {zhat}, may be written in polar, exponential, or rectangular form.
            </div>
        </React.Fragment>
    )
}
