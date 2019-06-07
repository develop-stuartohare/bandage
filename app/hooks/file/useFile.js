import useSelector from "app/hooks/useSelector";
import getFileById from "app/state/selectors/file/getFileById.selector";

export const useFile = fileId => {
    return useSelector(getFileById, fileId, [fileId]);
};

export default useFile;
