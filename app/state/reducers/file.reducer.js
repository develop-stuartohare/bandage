import { SYNC_FILES } from "app/state/actionTypes";
import { mergeRecords } from "app/state/helpers";

const defaultState = {};
export const reducer = (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SYNC_FILES: {
            const newState = mergeRecords(state, payload);
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default reducer;
