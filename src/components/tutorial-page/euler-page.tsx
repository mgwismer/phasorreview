import React from 'react';
import { EquationDisplay } from '../EquationDisplay/equation-display';
import './review-page.scss';

const eulerIntro = "The relationship between trigonometric functions, the mathematical constant 'e' and";

export const EulerPage: React.FC = () => {
    return (
        <React.Fragment>
            <div className='euler-first-line'>
                <span className='euler-first-line-text'>
                    {eulerIntro}
                </span>
                &nbsp;
                <EquationDisplay equationString="j=sqrt(-1)"/>
                &nbsp;
                is
            </div>
            <div className='euler-second-line'>
                <span>
                    In rectangular form:
                </span>
                &nbsp;
                <EquationDisplay equationString="e^(j theta) = cos(theta) + j sin(theta)" />
            </div>
            <div className='euler-third-line'>
                <span>
                    In polar form:
                </span>
                &nbsp;
                <EquationDisplay equationString="a + jb = C e^(j theta) = C \angle theta" />
            </div>
            <div className='euler-fourth-line'>
                <span>
                    Where
                </span>
                &nbsp;
                <EquationDisplay equationString="C=sqrt(a^2 + b^2)" />
                &nbsp;
                <br/>
                <span>
                    and
                </span>
                &nbsp;
                <EquationDisplay equationString="theta = tan^(-1) frac(b)(a)" />
            </div>
        </React.Fragment>
    )
}