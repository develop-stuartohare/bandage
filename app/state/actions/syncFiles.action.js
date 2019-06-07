import { SYNC_FILES } from "app/state/actionTypes";
import { getPersistedFiles } from "app/state/selectors/persisted";
const fetchFiles = async () => {
    let response = await fetch("https://band-age.herokuapp.com/api/tracks", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Cookie: 'bandage_login="f63d25b3-e417-418e-9e95-73c8e52928d6_2"'
        }
    });

    const files = await response.json();

    return files;
};

export const syncFiles = () => async (dispatch, getState) => {
    const state = getState();
    const persistedFiles = getPersistedFiles(state);
    if (Object.keys(persistedFiles).length) return;
    const files = await fetchFiles();
    dispatch({ type: SYNC_FILES, payload: files });

    return files;
};

export default syncFiles;
