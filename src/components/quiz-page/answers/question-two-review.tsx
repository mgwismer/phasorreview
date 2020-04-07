import React from 'react';
import { ReplyButton } from '../../Buttons/reply-button';
import { frontPagePathTypes, pageLinkTypes } from '../../front-page/front-page-data-type';

export const QuestionTwoReviewPage: React.FC = () => {
    return (
        <React.Fragment>
            <h2>Right now do you remember anything about impedance</h2>
            <ReplyButton buttonText='Yes' buttonType={frontPagePathTypes.LINKPAGE} nextPath={pageLinkTypes.IMPEDANCEREVIEW} />
            <ReplyButton buttonText='No' buttonType={frontPagePathTypes.LINKPAGE} nextPath={pageLinkTypes.IMPEDANCETUT} />
        </React.Fragment>
    )
}