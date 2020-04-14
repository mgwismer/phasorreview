import React from 'react';
import { NavLink } from 'react-router-dom';
import { frontPagePathTypes, pageLinkTypes, frontPageTypes } from '../front-page/front-page-data-type';
import './reply-button.scss';

type OwnProps = {
    mainText: string;
    buttonSubText?: string;
    buttonType: frontPagePathTypes;
    nextPath?: frontPageTypes | pageLinkTypes;
    buttonAction?: () => void;
}
export const ReplyButton: React.FC<OwnProps> = ({ mainText, buttonSubText, buttonAction, buttonType, nextPath = '/' }) => {
    return (
        <button className='reply-button' onClick={buttonAction}>
            {buttonType === frontPagePathTypes.LINKPAGE &&
                <NavLink to={nextPath} style={{color: 'white', textDecoration: 'none', border: '0px'}}>
                    {mainText}
                    <div className='reply-button-subtext'>
                        {buttonSubText}
                    </div>
                </NavLink>
            }
            {buttonType === frontPagePathTypes.NEWPAGE && 
                <div>
                    {mainText}
                    <div className='reply-button-subtext'>
                        {buttonSubText}
                    </div>
                </div>}
        </button>
    )
}