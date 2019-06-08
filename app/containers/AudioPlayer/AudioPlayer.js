import React, { useCallback, useEffect } from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { Container, Icon, Divider, Text } from "app/components";
import styled from "styled-components/native";
import colors from "app/colors";

import AudioPlayerTheme from "./AudioPlayerTheme";
import AudioPlayerProgress from "./AudioPlayerProgress";
import usePlayer from "app/hooks/player/usePlayer";
import STATE from "app/utils/playerStates";

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
    [STATE.BUFFERING]: "ios-refresh",
    [STATE.NONE]: "ios-play",
    [STATE.PAUSED]: "ios-play",
    [STATE.PLAYING]: "ios-pause",
    [STATE.READY]: "ios-play",
    [STATE.STOPPED]: "ios-play"
};

const PlayButton = () => {
    const { status, togglePlayPause } = usePlayer();
    const onPress = useCallback(() => togglePlayPause(), [togglePlayPause]);

    const name = iconMap[status] || iconMap.default;

    if (status === STATE.LOADING) {
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

export const AudioPlayer = () => (
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

export default AudioPlayer;
