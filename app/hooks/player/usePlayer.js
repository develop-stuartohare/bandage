import { useContext } from "react";
import { AudioPlayerContext } from "app/containers/AudioPlayer/AudioPlayerContext";

export const usePlayerContext = () => useContext(AudioPlayerContext);

export default usePlayerContext;
