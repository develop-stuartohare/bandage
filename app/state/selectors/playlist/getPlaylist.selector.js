import { getPersistedPlaylist } from "app/state/selectors/persisted";

export const getPlaylist = state => getPersistedPlaylist(state);

export default getPlaylist;
