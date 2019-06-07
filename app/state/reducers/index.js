import { combineReducers } from "redux";

import file from "app/state/reducers/file.reducer";
import playlist from "app/state/reducers/playlist.reducer";

const rootReducer = combineReducers({ file, playlist });

export default rootReducer;
