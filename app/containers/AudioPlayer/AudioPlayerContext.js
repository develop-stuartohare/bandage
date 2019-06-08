import React, { useMemo } from "react";
import usePlayerTrackId from "app/hooks/player/usePlayerTrackId";
import usePlayerStatus from "app/hooks/player/usePlayerStatus";
import usePlayerDuration from "app/hooks/player/usePlayerDuration";

import useFile from "app/hooks/file/useFile";
import TrackPlayer from "react-native-track-player";

export const AudioPlayerContext = React.createContext(false);

export const AudioPlayerContextProvider = React.memo(({ children }) => {
    const trackId = usePlayerTrackId();
    const file = useFile(trackId);
    const status = usePlayerStatus();
    const duration = usePlayerDuration();
    const { title, artist } = file || {};

    const value = useMemo(() => {
        return {
            trackId,
            status,
            isPlaying: status === TrackPlayer.STATE_PLAYING,
            isPaused: status === TrackPlayer.STATE_PAUSED,
            isStopped: status === TrackPlayer.STATE_STOPPED,
            title,
            artist
        };
    }, [trackId, status, title, artist, duration]);

    return <AudioPlayerContext.Provider value={value}>{children}</AudioPlayerContext.Provider>;
});

export default AudioPlayerContextProvider;
