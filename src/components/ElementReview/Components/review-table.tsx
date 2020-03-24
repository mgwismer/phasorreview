import React from 'react';
import Parser from 'html-react-parser';
import { tableReviewType } from './review-table-data';
import { EquationDisplay } from '../../EquationDisplay/equation-display';
import './review-table.scss';

type OwnProps = {
    reviewData: tableReviewType;
}
export const ReviewTable: React.FC<OwnProps> = ({ reviewData }) => {
    const { tableSteps, tableEnd } = reviewData;
    return (
        <table className='review-table' >
            {tableSteps.map(row => 
                <tr className='review-table-row'>
                    <td className='review-table-body-text'>{Parser(row.text)}</td>
                    <td>
                        <EquationDisplay equationString={row.equation} />
                    </td>
                </tr>
            )}
            <tr className='review-table-end-row'> 
                <td>{tableEnd.text}</td>
                <td><img src={tableEnd.figure}/></td>
            </tr>
        </table>
    )
}

