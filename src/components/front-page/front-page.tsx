import React, { useState } from 'react';
import LogoImage from '../.././assets/images/ee_symbol1.gif';
import { ReplyButton } from '../Buttons/reply-button';
import { MathJax } from 'react-mathjax-ts';

const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`

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
            <MathJax.Node tex={tex} />
        </div>
    )
}