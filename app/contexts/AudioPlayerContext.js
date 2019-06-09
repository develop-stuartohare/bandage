import React, { useMemo, useState, useCallback } from "react";
import useFile from "app/hooks/file/useFile";
import useAuthCookie from "app/hooks/auth/useAuthCookie";
export const AudioPlayerContext = React.createContext(false);

export const STATE = {
    PLAYING: "playing",
    ERROR: "error",
    LOADING: "loading",
    LOADED: "loaded",
    NONE: "none"
};

const usePlayerState = () => {
    const cookie = useAuthCookie();
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
                  Cookie: cookie
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

export default AudioPlayerContext;
