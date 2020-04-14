import { frontPageStylesType, frontPageTypes, frontPagePathTypes, pageLinkTypes } from "./front-page-data-type";

export const frontPageStyles: frontPageStylesType = {
   [frontPageTypes.LEAD]: {
        text: 'Do you remember anything about Phasors?',
        subText: 'the shorthand notation used to analyze AC circuits?',
        buttonText: {
            yes: 'I know what I\'m doing',
            no: 'I need help'
        },
        buttonPaths: {
            yes: {
                type: frontPagePathTypes.NEWPAGE,
                path: frontPageTypes.QUIZ_START,
            },
            no: {
                type: frontPagePathTypes.NEWPAGE,
                path: frontPageTypes.TUTORIAL_START,
            }
        }
    },
    [frontPageTypes.TUTORIAL_START]: {
        text: 'Would you like to go through simple tutorial on explaining phasors?',
        subText: '',
        buttonText: {
            yes: 'Start tutorial',
            no: 'Quick Review'
        },
        buttonPaths: {
            yes: {
                type: frontPagePathTypes.LINKPAGE,
                path: pageLinkTypes.TUTORIAL,
            },
            no: {
                type: frontPagePathTypes.NEWPAGE,
                path: frontPageTypes.REVIEW_START,
            }
        }
    },
    [frontPageTypes.REVIEW_START]: {
        text: 'Would you like to go through a quick review on phasor theory?',
        subText: '',
        buttonText: {
            yes: 'Start Review',
            no: 'Not sure'
        },
        buttonPaths: {
            yes: {
                type: frontPagePathTypes.LINKPAGE,
                path: pageLinkTypes.REVIEW,
            },
            no: {
                type: frontPagePathTypes.NEWPAGE,
                path: frontPageTypes.LEAD,
            }
        }
    },
    [frontPageTypes.QUIZ_START]: {
        text: 'So you remember phasors?',
        subText: ' Are you ready to start a brief phasor-related quiz?',
        buttonText: {
            yes: 'Start Quiz',
            no: 'Maybe a quick review'
        },
        buttonPaths: {
            yes: {
                type: frontPagePathTypes.LINKPAGE,
                path: pageLinkTypes.QUIZ,
            },
            no: {
                type: frontPagePathTypes.NEWPAGE,
                path: frontPageTypes.REVIEW_START,
            }
        }
    },
}