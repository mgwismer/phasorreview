import React from 'react';
import { frontPagePathTypes, pageLinkTypes } from '../../front-page/front-page-data-type';
import { YesNoButtons } from '../../Buttons/yes-no-buttons';

export const QuestionTwoReviewPage: React.FC = () => {
    const yesButtonProps = {
        mainText: 'YES!',
        subText: '',
        type: frontPagePathTypes.LINKPAGE,
        nextPath: pageLinkTypes.IMPEDANCEREVIEW,
    }

    const noButtonProps = {
        mainText: 'NO',
        subText: '',
        type: frontPagePathTypes.LINKPAGE,
        nextPath: pageLinkTypes.IMPEDANCETUT,
    }
    return (
        <React.Fragment>
            <h2>Right now do you remember anything about impedance</h2>
            <YesNoButtons yesButton={yesButtonProps} noButton={noButtonProps} />
        </React.Fragment>
    )
}