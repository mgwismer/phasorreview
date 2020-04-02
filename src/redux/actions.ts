import { ReduxBaseAction } from "./reducer";
import { ReduxActionTypes } from "./action-types";

export function increaseQuestionIndex(): ReduxBaseAction {
    return {
        type: ReduxActionTypes.INCREASE_QUESTION_INDEX
    };
}

export function resetQuestionIndex(): ReduxBaseAction {
    return {
        type: ReduxActionTypes.RESET_QUESTION_INDEX
    };
}

export function setQuizStart(): ReduxBaseAction {
    return {
        type: ReduxActionTypes.SET_QUIZ_START
    };
}