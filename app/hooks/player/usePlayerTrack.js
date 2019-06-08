import { useState, useCallback, useEffect } from "react";
import TrackPlayer from "react-native-track-player";
import useFile from "app/hooks/file/useFile";
import usePlayerTrackId from "app/hooks/player/usePlayerTrackId";

export const usePlayerTrack = () => {
    const trackId = usePlayerTrackId();
    const file = useFile(trackId);
    return file;
};

export default usePlayerTrack;
