import React, { useState } from 'react';
import MJ from '../../../src/mathjax-ts';

type OwnProps = {
    equationString: string;
}

export const EquationDisplay: React.FC<OwnProps> = ({ equationString }) => {
    return (
    <span className='equation'>
        <MJ.Context input='tex' onLoad={() => {console.log('LOAD')}} onError={() => {}}>
            <MJ.Node inline>{equationString}</MJ.Node>
        </MJ.Context>
    </span>
    )
}