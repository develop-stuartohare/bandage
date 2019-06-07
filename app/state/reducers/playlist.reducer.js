import { PLAYLIST_ADD } from "app/state/actionTypes";
import { mergeRecords } from "app/state/helpers";

const defaultState = [];
export const reducer = (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case PLAYLIST_ADD: {
            return [...payload];
        }
        default: {
            return state;
        }
    }
};

export default reducer;
