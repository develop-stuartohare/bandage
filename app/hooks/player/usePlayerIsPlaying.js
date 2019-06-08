import usePlayerStatus from "app/hooks/player/usePlayerStatus";
import TrackPlayer from "react-native-track-player";

export const usePlayerIsPlaying = () => {
    const status = usePlayerStatus();
    return status === TrackPlayer.STATE_PLAYING;
};

export default usePlayerIsPlaying;
