import usePlaylistCurrentFile from "app/hooks/playlist/usePlaylistCurrentFile";

export const useCurrentTrack = () => {
    const file = usePlaylistCurrentFile();

    if (!file) return null;

    const { id, title, artist, playUrl: url } = file;

    var track = {
        // url: require("../../assets/test.wav"),
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        // url,
        id,
        title,
        artist
    };

    return track;
};

export default useCurrentTrack;
