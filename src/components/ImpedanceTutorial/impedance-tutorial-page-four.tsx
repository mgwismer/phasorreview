import React from 'react';
import NotesImage from '../../assets/images/notes.gif';
import HTMLReactParser from 'html-react-parser';
import { ihat, vhat, zhat } from '../../constants/expressions';

export const ImpedanceTutPageFour: React.FC = () => {
    return (
        <React.Fragment>
            <div className='impedance-tutorial-title'>
                <span className='impedance-tutorial-title-leftimage'>
                    <img src={NotesImage} alt='notes'/>
                </span>
                <h2>Notes</h2>
                <span className='impedance-tutorial-title-rightimage'>
                    <img src={NotesImage} alt='notes'/>
                </span>
            </div>
            <ul className='impedance-tutorial-text'>
                Impedance is NOT a phasor:
                <li>It is the ratio of two phasors</li>
                <li>Impedance is a complex number that relates one phasor, {vhat}, to another phasor, {ihat}, such that {HTMLReactParser(`${vhat}=${zhat}${ihat}`)} </li>
            </ul>
            <div className='impedance-tutorial-text' style={{display: 'flex'}}>
                <div className='impedance-tutorial-red-asterisk'>*</div>
                You know that the phasors  and  may be transformed from the frequency domain to the time domain resulting in a steady state voltage or current respectively. Not being a phasor, impedance has no meaning in the time domain.
            </div>
        </React.Fragment>
    )
}