import React, { useMemo, useState, useCallback } from "react";
import useFile from "app/hooks/file/useFile";

export const AudioPlayerContext = React.createContext(false);

import STATE from "app/utils/playerStates";

const usePlayerState = () => {
    const [trackId, setTrackId] = useState();
    const [paused, setPaused] = useState(false);
    const [duration, setDuration] = useState(0);
    const [status, setStatus] = useState(STATE.NONE);

    const file = useFile(trackId);
    const { id, title, artist, playUrl: uri } = file || {};

    const source = uri
        ? {
              uri,
              headers: {
                  Cookie: `bandage_login="f63d25b3-e417-418e-9e95-73c8e52928d6_2"`
              }
          }
        : undefined;

    const setTrack = useCallback(
        newTrackId => {
            if (newTrackId === trackId) {
                togglePlayPause();
                return;
            }
            setStatus(STATE.LOADING);
            setTrackId(newTrackId);
            setPaused(paused);
        },
        [status, trackId]
    );

    const onLoad = useCallback(({ duration }) => {
        setDuration(duration);
        setStatus(STATE.PLAYING);
    }, []);

    const togglePlayPause = useCallback(() => {
        if (status === STATE.PLAYING) setStatus(STATE.PAUSED);
        else if (status === STATE.PAUSED) setStatus(STATE.PLAYING);
    }, [status]);

    const value = useMemo(() => {
        return {
            source,
            trackId,
            status,
            playing: status === STATE.PLAYING,
            paused: status === STATE.PAUSED,
            stopped: status === STATE.STOPPED,
            title,
            artist,
            setTrack,
            onLoad,
            duration,
            togglePlayPause
        };
    }, [trackId, status, togglePlayPause, duration]);

    return value;
};

export const AudioPlayerContextProvider = React.memo(({ children }) => {
    const value = usePlayerState();

    return <AudioPlayerContext.Provider value={value}>{children}</AudioPlayerContext.Provider>;
});

export default AudioPlayerContextProvider;
