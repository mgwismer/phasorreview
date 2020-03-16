import React from 'react';
import { NavLink } from 'react-router-dom';

type OwnProps = {
    buttonText: string;
    linkTo?: string;
    buttonAction?: () => void;
}
export const ReplyButton: React.FC<OwnProps> = ({ buttonText, buttonAction, linkTo = '/' }) => {
    return (
        <button onClick={buttonAction}>
            <NavLink to={linkTo}>
                {buttonText}
            </NavLink>
        </button>
    )
}