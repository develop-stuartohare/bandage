import { getPersistedFiles } from "app/state/selectors/persisted";
import { createSelector } from "reselect";

export const mapFilesById = createSelector(
    [getPersistedFiles],
    files => {
        return Object.keys(files).reduce((acc, fileId) => {
            const file = files[fileId];
            acc[fileId] = file;
            return acc;
        }, {});
    }
);

export default mapFilesById;
