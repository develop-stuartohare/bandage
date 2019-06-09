import { useEffect, useState, useCallback, useMemo } from "react";

import useDispatch from "app/hooks/useDispatch";
import syncFiles from "app/state/actions/syncFiles.action";
import useFiles from "app/hooks/file/useFiles";
export const useSyncFiles = () => useDispatch(syncFiles);

export const useFileSync = (params = {}) => {
    const { searchTerm = "" } = params;
    const files = useFiles();
    const [status, setStatus] = useState("LOADING");
    const [error, setError] = useState(null);
    const syncFiles = useSyncFiles();

    const fetch = useCallback(
        async (force = false) => {
            try {
                setStatus("LOADING");
                await syncFiles(force);
                setStatus("COMPLETE");
            } catch (error) {
                setError(error);
                setStatus("FAIL");
            }
        },
        [syncFiles]
    );

    useEffect(() => {
        fetch();
    }, []);

    const onRefresh = useCallback(() => {
        const force = true;
        fetch(force);
    }, [fetch]);

    const filesFiltered = useMemo(() => {
        if (!searchTerm) return files;

        return files.filter(({ title = "" }) => {
            return title.includes(searchTerm);
        });
    }, [searchTerm, files]);

    return {
        onRefresh,
        files: filesFiltered,
        status,
        loading: status === "LOADING",
        error
    };
};

export default useFileSync;
