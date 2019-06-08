import { combineReducers } from "redux";

import file from "app/state/reducers/file.reducer";

const rootReducer = combineReducers({ file });

export default rootReducer;
