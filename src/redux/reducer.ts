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
        case ReduxActionTypes.SET_QUESTION_INDEX:
            return {...state, questionIndex: state.questionIndex+1};
        default:
            return state;
    }
}
