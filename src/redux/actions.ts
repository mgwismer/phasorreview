import { ReduxBaseAction } from "./reducer";
import { ReduxActionTypes } from "./action-types";

export function setQuestionIndex(): ReduxBaseAction {
    return {
        type: ReduxActionTypes.SET_QUESTION_INDEX
    };
}