import { useEffect, useState, useCallback, useMemo } from "react";

const _fetchFiles = async () => {
    try {
        let response = await fetch("https://band-age.herokuapp.com/api/tracks", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Cookie: 'bandage_login="f63d25b3-e417-418e-9e95-73c8e52928d6_2"'
            }
        });

        const files = await response.json();

        return { files };
    } catch (error) {
        const tt = error;

        return { error };
    }
};

export const useFiles = (params = {}) => {
    const { searchTerm = "" } = params;
    const [status, setStatus] = useState("LOADING");
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);

    const onRefresh = useCallback(async () => {
        setStatus("LOADING");
        const { files, error } = await _fetchFiles();
        if (files) setFiles(files);
        if (error) {
            setError(error);
            setStatus("FAIL");
        } else setStatus("COMPLETE");
    });

    useEffect(() => {
        onRefresh();
    }, []);

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

export default useFiles;
