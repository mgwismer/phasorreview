import React from 'react';
import { inductorTableData } from '../Data/InductorReviewData';
import { ReviewTable } from './review-table';
import InductorTimeVI from '../../../assets/images/phasor11-1.gif';
import InductorTimeVIEqn from '../../../assets/images/phasor11-18.gif';
import InductorPhasorVI from '../../../assets/images/phasor11-2.gif';
import InductorPhasorVIEqn from '../../../assets/images/phasor11-19.gif';
import RightArrow from '../../../assets/images/phasor10-13.gif';

export const InductorReviewPage: React.FC = () => {
    const header = 
        <table className='review-table'>
            <tr>
                <td className='review-table-left-figure'>
                    <img src={InductorTimeVI} alt='resistor vi relations' />
                </td>
                <td className='review-table-header-text'>
                    <div>
                        Inductor
                    </div>
                </td>
                <td className='review-table-right-figure'>
                    <img src={InductorPhasorVI} alt='resistor vi relations' />
                </td>
            </tr>
        </table>;   
        const footer = 
        <table className='review-table'>
            <tr>
                <td className='review-table-left-figure'>
                    <img src={InductorTimeVIEqn} alt='resistor vi relations' />
                </td>
                <td className='review-table-footer-arrow'>
                    <img src={RightArrow} alt='pointer arrow' />
                </td>
                <td className='review-table-right-figure'>
                    <img src={InductorPhasorVIEqn} alt='resistor vi relations' />
                </td>
            </tr>
        </table>
    
    return (
        <React.Fragment>
            {header}
            <ReviewTable reviewData={inductorTableData} />
            {footer}
        </React.Fragment>
    )
}