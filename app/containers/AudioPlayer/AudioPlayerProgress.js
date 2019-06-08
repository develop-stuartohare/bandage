import React, { useState, useCallback, useRef } from "react";
import { TouchableOpacity } from "react-native";
import Video from "react-native-video";
import { Container, Text } from "app/components";
import usePlayer from "app/hooks/player/usePlayer";
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

const TrackText = styled(Text)`
    color: #aaa;
    font-size: 12;
    font-weight: 100;
`;

const formatSeconds = seconds => moment.utc(seconds * 1000).format("mm:ss");

const TrackPosition = ({ position }) => {
    return <TrackText>{formatSeconds(position)}</TrackText>;
};

const TrackDuration = ({ duration }) => {
    return <TrackText>{formatSeconds(duration)}</TrackText>;
};

const TrackTitle = ({ title }) => {
    return <TrackText style={{ textAlign: "center", height: 20 }}>{title}</TrackText>;
};

const useVideoProps = () => {
    const ref = useRef();
    const { source, title, duration, onLoad, paused } = usePlayer();
    const [status, setStatus] = useState();
    const { position = 0 } = status || {};

    const progress = position && duration ? position / duration : 0;

    const [width, setWidth] = useState(0);

    const onLayout = useCallback(({ nativeEvent }) => {
        setWidth(nativeEvent.layout.width);
    }, []);

    const onSeek = useCallback(
        async ({ nativeEvent }) => {
            if (!ref.current) return;
            const { locationX } = nativeEvent;
            const ratio = locationX / width;
            const seekTo = duration * ratio;
            ref.current.seek(seekTo);
        },
        [width, duration]
    );

    const onProgress = useCallback(data => {
        const { currentTime, playableDuration } = data;
        setStatus({ position: currentTime, duration: playableDuration });
    }, []);

    return {
        ref,
        source,
        progress,
        position,
        title,
        paused,
        duration,
        onProgress,
        onLoad,
        onSeek,
        onLayout
    };
};

const AudioPlayerProgress = ({ children }) => {
    const {
        ref,
        source,
        position,
        progress,
        title,
        paused,
        duration,
        onProgress,
        onLoad,
        onSeek,
        onLayout
    } = useVideoProps();

    return (
        <ProgressContainer>
            <Row>
                <TrackPosition position={position} />
                <TrackTitle title={title} />
                <TrackDuration duration={duration} />
            </Row>

            {source && (
                <Video
                    ref={ref}
                    source={source}
                    onProgress={onProgress}
                    onLoad={onLoad}
                    paused={paused}
                />
            )}
            <TouchableOpacity style={{ paddingVertical: 5 }} onPress={onSeek}>
                <TrackBarContainer onLayout={onLayout}>
                    <Container style={{ flex: progress, backgroundColor: "white" }} />
                    <Container style={{ flex: 1 - progress, backgroundColor: "grey" }} />
                </TrackBarContainer>
            </TouchableOpacity>
        </ProgressContainer>
    );
};

export default AudioPlayerProgress;
