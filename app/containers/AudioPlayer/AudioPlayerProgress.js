import React, { useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { Container, Text } from "app/components";
import TrackPlayer from "react-native-track-player";
import usePlayerPosition from "app/hooks/player/usePlayerPosition";
import usePlayerDuration from "app/hooks/player/usePlayerDuration";
import usePlayerTitle from "app/hooks/player/usePlayerTitle";
import moment from "moment";
import styled from "styled-components/native";

const ProgressContainer = styled(Container)`
    flex: 1;
    padding: 10px;
`;

const Row = styled(Container)`
    margin-vertical: 4px;
    flex-direction: row;
    justify-content: space-between;
`;

const TrackBarContainer = styled(Container)`
    height: 4px;
    width: 100%;
    flex-direction: row;
`;

const TrackPosition = () => {
    const position = usePlayerPosition();
    return <Text>{position}</Text>;
};
const TrackDuration = () => {
    const duration = usePlayerDuration();

    const durationFormatted = moment.utc(duration * 1000).format("mm:ss");

    return <Text>{durationFormatted}</Text>;
};

const TrackTitle = () => {
    const title = usePlayerTitle();
    return <Text style={{ textAlign: "center", height: 20 }}>{title}</Text>;
};

const TrackBar = ({ children }) => {
    const position = usePlayerPosition({ format: false });
    const duration = usePlayerDuration();

    const progress = position && duration ? position / duration : 0;

    const [width, setWidth] = useState(0);
    const onLayout = useCallback(({ nativeEvent }) => {
        setWidth(nativeEvent.layout.width);
    }, []);

    const onPress = useCallback(
        async ({ nativeEvent }) => {
            const { locationX } = nativeEvent;
            const ratio = locationX / width;
            const seekTo = duration * ratio;
            TrackPlayer.seekTo(seekTo);
        },
        [width, duration]
    );
    return (
        <TouchableOpacity style={{ paddingVertical: 5 }} onPress={onPress}>
            <TrackBarContainer onLayout={onLayout}>
                <Container style={{ flex: progress, backgroundColor: "white" }} />
                <Container style={{ flex: 1 - progress, backgroundColor: "grey" }} />
            </TrackBarContainer>
        </TouchableOpacity>
    );
};

const AudioPlayerProgress = () => {
    return (
        <ProgressContainer>
            <Row>
                <TrackPosition />
                <TrackTitle />
                <TrackDuration />
            </Row>
            <TrackBar />
        </ProgressContainer>
    );
};

export default AudioPlayerProgress;
