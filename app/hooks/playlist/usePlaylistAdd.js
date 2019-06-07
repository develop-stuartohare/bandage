import useDispatch from "app/hooks/useDispatch";
import playlistAdd from "app/state/actions/playlistAdd.action";

export const usePlaylistAdd = () => useDispatch(playlistAdd);

export default usePlaylistAdd;
