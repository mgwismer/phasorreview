import React from 'react';
import { NavLink } from 'react-router-dom';
import { frontPagePathTypes, pageLinkTypes, frontPageTypes } from '../front-page/front-page-data-type';

type OwnProps = {
    buttonText: string;
    buttonType: frontPagePathTypes;
    nextPath: frontPageTypes | pageLinkTypes;
    buttonAction?: () => void;
}
export const ReplyButton: React.FC<OwnProps> = ({ buttonText, buttonAction, buttonType, nextPath = '/' }) => {
    return (
        <button onClick={buttonAction}>
            {buttonType === frontPagePathTypes.LINKPAGE &&
                <NavLink to={nextPath}>
                    {buttonText}
                </NavLink>
            }
            {buttonType === frontPagePathTypes.NEWPAGE && 
                <div>
                    {buttonText}
                </div>}
        </button>
    )
}