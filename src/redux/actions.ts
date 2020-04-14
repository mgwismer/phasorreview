import { ReduxActions } from "./reducer";
import { ReduxActionTypes } from "./action-types";

export function increaseQuestionIndex(): ReduxActions {
    return {
        type: ReduxActionTypes.INCREASE_QUESTION_INDEX
    };
}

export function resetQuestionIndex(): ReduxActions {
    return {
        type: ReduxActionTypes.RESET_QUESTION_INDEX
    };
}

export function setQuizStart(value: boolean): ReduxActions {
    return {
        type: ReduxActionTypes.SET_QUIZ_START,
        data: value,
    };
}

export function setAnswerSubmitted(value: boolean): ReduxActions {
    console.log('answer submitted action', value);
    return {
        type: ReduxActionTypes.SET_ANSWER_SUBMITTED,
        data: value,
    };
}