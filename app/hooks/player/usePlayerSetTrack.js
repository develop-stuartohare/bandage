import { useCallback, useMemo } from "react";
import useFile from "app/hooks/file/useFile";
import TrackPlayer from "react-native-track-player";

const fileToTrack = file => {
    if (!file) return undefined;
    const { id, title, artist, playUrl: url } = file;

    const track = {
        // url: require("../../assets/test.wav"),
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        // url,
        id,
        title,
        artist
    };

    return track;
};

export const usePlayerSetTrack = (fileId, autoPlay = true) => {
    const file = useFile(fileId);
    const track = useMemo(() => fileToTrack(file), [file]);

    return useCallback(async () => {
        const currentTrackId = await TrackPlayer.getCurrentTrack();
        if (currentTrackId == track.id) {
            const status = await TrackPlayer.getState();
            status === TrackPlayer.STATE_PLAYING ? TrackPlayer.pause() : TrackPlayer.play();
            return;
        }
        await TrackPlayer.reset();
        await TrackPlayer.add([track]);

        if (autoPlay) TrackPlayer.play();
    }, [track]);
};

export default usePlayerSetTrack;
