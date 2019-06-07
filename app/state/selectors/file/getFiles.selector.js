import mapFilesById from "app/state/selectors/file/mapFilesById.selector";

export const getFiles = (state, fileId) => {
    const files = mapFilesById(state);

    return Object.keys(files).map(fileId => {
        return files[fileId];
    });
};

export default getFiles;
