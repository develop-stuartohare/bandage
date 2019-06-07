import getFiles from "app/state/selectors/file/getFiles.selector";
import useSelector from "app/hooks/useSelector";

export const useFiles = fileId => {
    return useSelector(getFiles);
};

export default useFiles;
