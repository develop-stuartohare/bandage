import React, { useMemo, useState, useCallback, useEffect } from "react";
import TrackPlayer from "react-native-track-player";
import useFile from "app/hooks/file/useFile";

const TrackPlayerEvents = {
    REMOTE_PLAY: "remote-play",
    REMOTE_PLAY_ID: "remote-play-id",
    REMOTE_PLAY_SEARCH: "remote-play-search",
    REMOTE_PAUSE: "remote-pause",
    REMOTE_STOP: "remote-stop",
    REMOTE_SKIP: "remote-skip",
    REMOTE_PREVIOUS: "remote-previous",
    REMOTE_SEEK: "remote-seek",
    REMOTE_SET_RATING: "remote-set-rating",
    REMOTE_JUMP_FORWARD: "remote-jump-forward",
    REMOTE_JUMP_BACKWARD: "remote-jump-backward",
    REMOTE_DUCK: "remote-duck",
    PLAYBACK_STATE: "playback-state",
    PLAYBACK_TRACK_CHANGED: "playback-track-changed",
    PLAYBACK_QUEUE_ENDED: "playback-queue-ended",
    PLAYBACK_ERROR: "playback-error"
};

export const usePlayerTrack = () => {
    const [fileId, setFileId] = useState();
    const file = useFile(fileId);

    useEffect(() => {
        const sub = TrackPlayer.addEventListener("playback-track-changed", data => {
            setFileId(data.nextTrack);
        });

        return () => {
            sub.remove();
        };
    }, []);

    return file;
};

export default usePlayerTrack;
