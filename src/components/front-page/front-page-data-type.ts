export enum frontPageTypes {
    LEAD = 'LeadPage',
    REVIEW_START = 'Review',
    TUTORIAL_START = 'Tutorial',
    QUIZ_START = 'Quiz'
}

export enum frontPagePathTypes {
    NEWPAGE,
    LINKPAGE
}

export enum pageLinkTypes {
    FRONTPAGE = '/frontpage',
    QUIZ = '/quizPage',
    REVIEW = '/review',
    TUTORIAL ='/tutorial'
};

export type frontPageStylesType = {
    [key in frontPageTypes | string]: {
        text: string;
        buttonText: {
            yes: string;
            no: string;
        };
        buttonPaths: {
            yes: {
                type: frontPagePathTypes;
                path: frontPageTypes | pageLinkTypes;
            };
            no: {
                type: frontPagePathTypes;
                path: frontPageTypes | pageLinkTypes
                ;
            };
        };
    };
};