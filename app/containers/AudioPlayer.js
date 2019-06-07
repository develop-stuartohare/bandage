import React, { useRef, useState, useCallback, useEffect } from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { Container, Icon, Divider, Text } from "app/components";
import styled from "styled-components/native";
import colors from "app/colors";
import useCurrentTrack from "app/hooks/player/useCurrentTrack";
import TrackPlayer from "react-native-track-player";
import usePlayerState from "app/hooks/player/usePlayerState";
import usePlayerTrack from "app/hooks/player/usePlayerTrack";
import { Slider } from "react-native-elements";

TrackPlayer.setupPlayer();

const AudioPlayerContainer = styled.View`
    padding: 10px;
    padding-bottom: 30px;
    background-color: ${colors.background};
`;

const AudioPlayerControls = styled.View`
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const iconMap = {
    default: "ios-play",
    loading: "ios-refresh",
    idle: "ios-refresh",
    playing: "ios-pause"
};
const PlayButton = () => {
    const { status, playing, paused, stopped, loading } = usePlayerState();
    const onPress = useCallback(() => {
        if (playing) {
            TrackPlayer.pause();
            return;
        }

        TrackPlayer.play();
    }, [status]);

    const name = iconMap[status] || iconMap.default;
    if (loading) {
        return <ActivityIndicator size={"large"} />;
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name={name} type={"ionicon"} size={60} />
        </TouchableOpacity>
    );
};
const TrackTitle = () => {
    const track = usePlayerTrack();
    const { title } = track || {};

    return <Text style={{ textAlign: "center" }}>{title}</Text>;
};

const TrackStatus = () => {
    const { status } = usePlayerState();
    return <Text style={{ textAlign: "center" }}>{status}</Text>;
};

const formatSeconds = (time = 0) => {
    const minutes = Math.floor(time / 60);
    let seconds = (time - minutes * 60).toFixed(0);
    seconds = `${seconds}`.padStart(2, "0");

    return `${minutes}:${seconds}`;
};

const ProgressBar = ({ children }) => {
    const [width, setWidth] = useState(0);
    const onLayout = useCallback(({ nativeEvent }) => {
        setWidth(nativeEvent.layout.width);
    }, []);

    const onPress = useCallback(
        async ({ nativeEvent }) => {
            const { locationX } = nativeEvent;
            const ratio = locationX / width;
            let duration = await TrackPlayer.getDuration();
            const seekTo = duration * ratio;
            TrackPlayer.seekTo(seekTo);
        },
        [width]
    );
    return (
        <TouchableOpacity style={{ paddingVertical: 5 }} onPress={onPress}>
            <Container
                style={{ height: 4, width: "100%", flexDirection: "row" }}
                onLayout={onLayout}
            >
                {children}
            </Container>
        </TouchableOpacity>
    );
};

class Progress extends TrackPlayer.ProgressComponent {
    render() {
        const duration = formatSeconds(this.state.duration);
        const progress = this.getProgress();
        const value = progress;

        return (
            <Container style={{ padding: 10 }}>
                <Container
                    style={{
                        marginVertical: 4,
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    <ProgressCount />
                    <Text>{duration}</Text>
                </Container>
                <ProgressBar>
                    <Container style={{ flex: progress, backgroundColor: "white" }} />
                    <Container style={{ flex: 1 - progress, backgroundColor: "grey" }} />
                </ProgressBar>
            </Container>
        );
    }
}

const ProgressCount = () => {
    const [timerId, setTimerId] = useState();
    const [position, setPosition] = useState(0);

    const tick = useCallback(async () => {
        let position = await TrackPlayer.getPosition();
        setPosition(position);
    });
    useEffect(() => {
        setInterval(tick, 100);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    const positionFormatted = formatSeconds(position);

    return <Text>{positionFormatted}</Text>;
};

const TrackLength = () => {
    const [timerId, setTimerId] = useState();
    const [position, setPosition] = useState(0);

    const tick = useCallback(async () => {
        let position = await TrackPlayer.getPosition();
        setPosition(position);
    });
    useEffect(() => {
        setInterval(tick, 100);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    const positionFormatted = position.toFixed(2);

    return <Text>{positionFormatted}</Text>;
};

export const usePlaylistObserver = () => {
    const track = useCurrentTrack();

    const initialise = useCallback(async () => {
        const state = await TrackPlayer.getState();
        await TrackPlayer.reset();
        await TrackPlayer.add([track]);

        if (state === "playing") {
            TrackPlayer.play();
        }
    }, [track]);

    useEffect(() => {
        initialise();
    }, [initialise]);
};

export const AudioPlayer = ({ source }) => {
    usePlaylistObserver();

    return (
        <>
            <Divider />
            <AudioPlayerContainer>
                <AudioPlayerControls>
                    <PlayButton />
                </AudioPlayerControls>
                <Progress />
                <TrackTitle />
            </AudioPlayerContainer>
        </>
    );
};

export default AudioPlayer;
