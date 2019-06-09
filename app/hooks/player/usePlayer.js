import { useContext } from "react";
import AudioPlayerContext from "app/contexts/AudioPlayerContext";

export const usePlayerContext = () => useContext(AudioPlayerContext);

export default usePlayerContext;
