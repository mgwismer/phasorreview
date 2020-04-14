import React from 'react';
import { ReplyButton } from './reply-button';
import { frontPagePathTypes, frontPageTypes, pageLinkTypes } from '../front-page/front-page-data-type';

type OwnProps = {
    yesButton: {
        mainText: string;
        subText?: string;
        type: frontPagePathTypes;
        nextPath?: frontPageTypes | pageLinkTypes;
        buttonAction?: () => void;
    },
    noButton: {
        mainText: string;
        subText?: string;
        type: frontPagePathTypes;
        nextPath?: frontPageTypes | pageLinkTypes;
        buttonAction?: () => void;
    },
}
export const YesNoButtons: React.FC<OwnProps> = ({ yesButton, noButton }) => {
    const { 
        mainText: yesMain,
        subText: yesSub = '',
        type: yesType, 
        nextPath: yesNext = frontPageTypes.LEAD,
        buttonAction: yesAction 
    } = yesButton;
    const { 
        mainText: noMain,
        subText: noSub = '',
        type: noType, 
        nextPath: noNext = frontPageTypes.LEAD,
        buttonAction: noAction 
    } = noButton;

    return (
        <div className='yes-no-buttons'>
            <ReplyButton 
                mainText={yesMain}
                buttonSubText={yesSub}
                buttonType={yesType} 
                nextPath={yesNext}
                buttonAction={yesAction}
        />
        <ReplyButton 
                mainText={noMain}
                buttonSubText={noSub}
                buttonType={noType} 
                nextPath={noNext}
                buttonAction={noAction}
        />
        </div>
    )

}