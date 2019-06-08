import React, { useCallback, useEffect } from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { Container, Icon, Divider, Text } from "app/components";
import styled from "styled-components/native";
import colors from "app/colors";

import TrackPlayer from "react-native-track-player";
import AudioPlayerTheme from "./AudioPlayerTheme";
import AudioPlayerProgress from "./AudioPlayerProgress";
import usePlayerStatus from "app/hooks/player/usePlayerStatus";
import usePlayerTitle from "app/hooks/player/usePlayerTitle";

TrackPlayer.setupPlayer();

const PlayerContainer = styled.View`
    padding: 5px;
    padding-bottom: 15px;
    background-color: ${colors.primaryInverted};
`;

const PlayerControls = styled.View`
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const iconMap = {
    default: "ios-play",
    [TrackPlayer.STATE_BUFFERING]: "ios-refresh",
    [TrackPlayer.STATE_NONE]: "ios-alert",
    [TrackPlayer.STATE_PAUSED]: "ios-play",
    [TrackPlayer.STATE_PLAYING]: "ios-pause",
    [TrackPlayer.STATE_READY]: "ios-play",
    [TrackPlayer.STATE_STOPPED]: "ios-play"
};

const TrackTitle = () => {
    const title = usePlayerTitle();
    return <Text style={{ textAlign: "center", height: 20 }}>{title}</Text>;
};

const PlayButton = () => {
    const status = usePlayerStatus();
    const onPress = useCallback(() => {
        if (status === TrackPlayer.STATE_PLAYING) {
            TrackPlayer.pause();
            return;
        }

        TrackPlayer.play();
    }, [status]);

    const name = iconMap[status] || iconMap.default;

    if (status === TrackPlayer.STATE_BUFFERING) {
        return (
            <Container style={{ marginHorizontal: 10, width: 30 }}>
                <ActivityIndicator size={"large"} />
            </Container>
        );
    }

    return (
        <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 10, width: 30 }}>
            <Icon name={name} type={"ionicon"} size={40} />
        </TouchableOpacity>
    );
};

export const AudioPlayer = ({ source }) => {
    useEffect(() => {
        TrackPlayer.reset();
        return () => {
            TrackPlayer.reset();
        };
    }, []);

    return (
        <AudioPlayerTheme>
            <Divider />
            <PlayerContainer>
                <PlayerControls>
                    <PlayButton />
                    <AudioPlayerProgress />
                </PlayerControls>
            </PlayerContainer>
        </AudioPlayerTheme>
    );
};

export default AudioPlayer;
