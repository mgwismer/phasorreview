import { ReduxActionTypes } from "./action-types";

export interface AppState {
    questionIndex: number;
}

export interface ReduxBaseAction {
    type: ReduxActionTypes;
}

export const InitialState: AppState = {
    questionIndex: 0,
}

export const rootReducer = (state: AppState = InitialState, action: ReduxBaseAction) => {
    switch(action.type) {
        case ReduxActionTypes.INCREASE_QUESTION_INDEX:
            return {...state, questionIndex: state.questionIndex+1};
        case ReduxActionTypes.RESET_QUESTION_INDEX:
            return {...state, questionIndex: 0}
        default:
            return state;
    }
}
