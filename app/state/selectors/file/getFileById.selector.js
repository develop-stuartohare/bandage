import mapFilesById from "app/state/selectors/file/mapFilesById.selector";

export const getFileById = (state, fileId) => {
    const files = mapFilesById(state);

    return files[fileId];
};

export default getFileById;
