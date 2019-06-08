import { useState, useEffect } from "react";
import TrackPlayer from "react-native-track-player";

export const usePlayerTrackId = (options = {}) => {
    const [trackId, setTrackId] = useState();

    useEffect(() => {
        const sub = TrackPlayer.addEventListener("playback-track-changed", data => {
            setTrackId(data.nextTrack);
        });

        return () => {
            sub.remove();
        };
    }, []);

    return trackId;
};

export default usePlayerTrackId;
