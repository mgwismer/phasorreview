import { ReduxActionTypes } from "./action-types";

export interface AppState {
    questionIndex: number;
    quizStarted: boolean;
    answerSubmittedFlag: boolean;
}

interface ReduxBaseAction {
    type: ReduxActionTypes;
}

interface ReduxToggleAnswerAction extends ReduxBaseAction {
    type: ReduxActionTypes.SET_ANSWER_SUBMITTED;
    data: boolean;
}

interface ReduxIncreaseQuestionAction extends ReduxBaseAction {
    type: ReduxActionTypes.INCREASE_QUESTION_INDEX;
}

interface ReduxResetQuestionAction extends ReduxBaseAction {
    type: ReduxActionTypes.RESET_QUESTION_INDEX;
}
;
interface ReduxSetQuizStartAction extends ReduxBaseAction {
    type: ReduxActionTypes.SET_QUIZ_START;
    data: boolean;
}

export type ReduxActions = ReduxToggleAnswerAction | ReduxIncreaseQuestionAction | ReduxResetQuestionAction | ReduxSetQuizStartAction;

export const InitialState: AppState = {
    questionIndex: 0,
    quizStarted: false,
    answerSubmittedFlag: false,
}

export function rootReducer(
    state: AppState = InitialState,
    action: ReduxActions,
): AppState {
    switch(action.type) {
        case ReduxActionTypes.INCREASE_QUESTION_INDEX:
            return {...state, questionIndex: state.questionIndex+1};
        case ReduxActionTypes.RESET_QUESTION_INDEX:
            return {...state, questionIndex: 0}
        case ReduxActionTypes.SET_QUIZ_START:
            return {...state, quizStarted: action.data}
        case ReduxActionTypes.SET_ANSWER_SUBMITTED:
            return {...state, answerSubmittedFlag: action.data}
        default:
            return state;
    }
}
