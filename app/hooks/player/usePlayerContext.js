import { useContext } from "react";
import { AudioPlayerContext } from "app/containers/AudioPlayer/AudioPlayerContext";

export const usePlayerContext = () => {
    const value = useContext(AudioPlayerContext);

    return value;
};

export default usePlayerContext;
