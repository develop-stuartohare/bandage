import { combineReducers } from "redux";

import file from "app/state/reducers/file.reducer";
import auth from "app/state/reducers/auth.reducer";

const rootReducer = combineReducers({ file, auth });

export default rootReducer;
