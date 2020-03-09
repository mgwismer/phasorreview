import React, { useState } from 'react';
import LogoImage from '../.././assets/images/ee_symbol1.gif';
import { ReplyButton } from '../Buttons/reply-button';
import MJ from '../../../src/mathjax-ts';

const tex = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))';

export const FrontPage: React.FC = () => {
    const [answeredYes, setAnsweredYes] = useState(false);
    const [answeredNo, setAnsweredNo] = useState(false);

    
    return (
        <div>
            <div className='front-page-ee-symbol'>
                {/* Front Page */}
                <img src={LogoImage} width="614" height="168" /> 
                <div>
                    Do you remember anything about phasors
                </div>
                <ReplyButton buttonText='Yes' />
                <ReplyButton buttonText='No'/>
            </div>
            <div className='equation'>
                <MJ.Context input='tex' onLoad={() => {console.log('LOAD')}} onError={() => {}}>
                    <MJ.Node inline>{tex}</MJ.Node>
                </MJ.Context>
            </div>
        </div>
    )
}