import { useState, useCallback, useEffect } from "react";
import TrackPlayer from "react-native-track-player";
import usePlayerTrackId from "app/hooks/player/usePlayerTrackId";

export const usePlayerDuration = () => {
    const trackId = usePlayerTrackId();
    const [duration, setDuration] = useState(0);

    const update = useCallback(async () => {
        const duration = await TrackPlayer.getDuration();
        setDuration(duration);
    }, []);

    useEffect(() => {
        if (trackId) update();
    }, [trackId]);

    return duration;
};

export default usePlayerDuration;
