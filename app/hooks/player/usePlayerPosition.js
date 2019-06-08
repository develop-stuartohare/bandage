import { useState, useEffect, useCallback } from "react";
import TrackPlayer from "react-native-track-player";
import moment from "moment";

export const usePlayerPosition = (options = {}) => {
    const { interval = 100, format = true } = options;
    const [timerId, setTimerId] = useState();
    const [position, setPosition] = useState(0);

    const tick = useCallback(async () => {
        let position = await TrackPlayer.getPosition();
        setPosition(position);
    });
    useEffect(() => {
        setInterval(tick, interval);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return format ? moment.utc(position * 1000).format("mm:ss") : position;
};

export default usePlayerPosition;
