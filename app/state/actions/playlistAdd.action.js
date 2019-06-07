import { PLAYLIST_ADD } from "app/state/actionTypes";

export const playlistAdd = fileId => ({ type: PLAYLIST_ADD, payload: [fileId] });

export default playlistAdd;
