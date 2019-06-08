import { useMemo, useState, useCallback, useEffect } from "react";
import TrackPlayer from "react-native-track-player";
import moment from "moment";
import usePlayerTrack from "app/hooks/player/usePlayerTrack";

export const usePlayerTrackTitle = () => {
    const file = usePlayerTrack();
    const { title } = file || {};
    return title;
};

export default usePlayerTrackTitle;
