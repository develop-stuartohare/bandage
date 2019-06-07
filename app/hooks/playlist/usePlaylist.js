import useSelector from "app/hooks/useSelector";
import getPlaylist from "app/state/selectors/playlist/getPlaylist.selector";

export const usePlaylist = () => useSelector(getPlaylist);

export default usePlaylist;
