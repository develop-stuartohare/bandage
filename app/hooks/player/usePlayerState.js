import React, { useMemo, useState, useCallback, useEffect } from "react";
import TrackPlayer from "react-native-track-player";

export const usePlayerState = () => {
    const [state, setState] = useState(TrackPlayer.STATE_NONE);
    const [fileId, setFileId] = useState();

    useEffect(() => {
        const sub = TrackPlayer.addEventListener("playback-state", data => {
            setState(data.state);
        });

        return () => {
            sub.remove();
        };
    }, []);

    const res = useMemo(() => {
        const playing = state === "playing";
        const paused = state === "paused";
        const idle = state === "idle";
        const loading = state === "loading";
        return {
            playing,
            paused,
            loading,
            idle,
            status: state
        };
    }, [state]);

    return res;
};

export default usePlayerState;
