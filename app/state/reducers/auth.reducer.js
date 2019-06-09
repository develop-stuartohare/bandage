import { SIGN_IN, SIGN_OUT } from "app/state/actionTypes";
import { mergeRecords } from "app/state/helpers";

const defaultState = {};
export const reducer = (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SIGN_IN: {
            return {
                ...state,
                ...payload
            };
        }
        case SIGN_OUT: {
            return defaultState;
        }
        default: {
            return state;
        }
    }
};

export default reducer;
