import React from 'react';
import { resistorTableData } from '../Data/ResistorReviewData';
import { ReviewTable } from './review-table';
import ResistorTimeVI from '../../../assets/images/phasor10-1.gif';
import ResistorTimeVIEqn from '../../../assets/images/phasor10-11.gif';
import ResistorPhasorVI from '../../../assets/images/phasor10-2.gif';
import ResistorPhasorVIEqn from '../../../assets/images/phasor10-12.gif';
import RightArrow from '../../../assets/images/phasor10-13.gif';

export const ResistorReviewPage: React.FC = () => {
    const header = 
        <table className='review-table'>
            <tr>
                <td className='review-table-left-figure'>
                    <img src={ResistorTimeVI} alt='resistor vi relations' />
                </td>
                <td className='review-table-header-text'>
                    <div>
                        Resistor
                    </div>
                </td>
                <td className='review-table-right-figure'>
                    <img src={ResistorPhasorVI} alt='resistor vi relations' />
                </td>
            </tr>
        </table>;   
        const footer = 
        <table className='review-table'>
            <tr>
                <td className='review-table-left-figure'>
                    <img src={ResistorTimeVIEqn} alt='resistor vi relations' />
                </td>
                <td className='review-table-footer-arrow'>
                    <img src={RightArrow} alt='pointer arrow' />
                </td>
                <td className='review-table-right-figure'>
                    <img src={ResistorPhasorVIEqn} alt='resistor vi relations' />
                </td>
            </tr>
        </table>
    
    return (
        <React.Fragment>
            {header}
            <ReviewTable reviewData={resistorTableData} />
            {footer}
        </React.Fragment>
    )
}