import React from 'react';

type OwnProps = {
    buttonText: string;
    buttonAction?: () => void;
}
export const ReplyButton: React.FC<OwnProps> = ({ buttonText, buttonAction }) => {
    return (
        <button onClick={buttonAction}>
            {buttonText}
        </button>
    )
}