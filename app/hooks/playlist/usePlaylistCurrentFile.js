import useFile from "app/hooks/file/useFile";
import usePlaylist from "app/hooks/playlist/usePlaylist";

export const usePlaylistCurrentFile = () => {
    const [fileId] = usePlaylist();
    const file = useFile(fileId);

    return file;
};

export default usePlaylistCurrentFile;
