import React from 'react';
import { capacitorTableData } from '../Data/CapacitorReviewData';
import { ReviewTable } from './review-table';
import CapacitorTimeVI from '../../../assets/images/phasor12-1.gif';
import CapacitorTimeVIEqn from '../../../assets/images/phasor12-12.gif';
import CapacitorPhasorVI from '../../../assets/images/phasor12-2.gif';
import CapacitorPhasorVIEqn from '../../../assets/images/phasor12-13.gif';
import RightArrow from '../../../assets/images/phasor10-13.gif';
import CapacitorGraphVI from '../../../assets/images/phasor12_graph.gif';

export const CapacitorReviewPage: React.FC = () => {
    const header = 
        <table className='review-table'>
            <tr>
                <td className='review-table-left-figure'>
                    <img src={CapacitorTimeVI} alt='Capacitor vi relations' />
                </td>
                <td className='review-table-header-text'>
                    <div>
                        Capacitor V&#770;
                    </div>
                </td>
                <td className='review-table-right-figure'>
                    <img src={CapacitorPhasorVI} alt='Capacitor vi relations' />
                </td>
            </tr>
        </table>;   
        const footer = 
        <table className='review-table'>
            <tr>
                <td className='review-table-left-figure'>
                    <img src={CapacitorTimeVIEqn} alt='Capacitor vi relations' />
                </td>
                <td className='review-table-footer-arrow'>
                    <img src={RightArrow} alt='pointer arrow' />
                </td>
                <td className='review-table-right-figure'>
                    <img src={CapacitorPhasorVIEqn} alt='Capacitor vi relations' />
                </td>
            </tr>
        </table>
    
    return (
        <React.Fragment>
            {header}
            <ReviewTable reviewData={capacitorTableData} />
            {footer}
        </React.Fragment>
    )
}