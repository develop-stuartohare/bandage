import { useState, useEffect } from "react";
import TrackPlayer from "react-native-track-player";

export const usePlayerState = () => {
    const [status, setStatus] = useState(TrackPlayer.STATE_NONE);

    useEffect(() => {
        const sub = TrackPlayer.addEventListener("playback-state", data => {
            setStatus(data.state);
        });

        return () => {
            sub.remove();
        };
    }, []);

    return status;
};

export default usePlayerState;
