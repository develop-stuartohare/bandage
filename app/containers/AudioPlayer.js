import React, { useRef, useCallback, useEffect } from "react";
import { Icon, Divider } from "app/components";
import styled from "styled-components/native";

const AudioPlayerContainer = styled.View`
    padding: 10px;
    padding-bottom: 30px;
`;

const AudioPlayerControls = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const PlayButton = () => {
    return <Icon name={"ios-play"} type={"ionicon"} size={60} />;
};
const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
};

export const useAudio = ({ source }) => {
    const playerRef = useRef();

    const onError = useCallback(error => {
        debugger;
    }, []);

    const createPlayer = useCallback(
        source => {
            if (playerRef.current) {
                playerRef.current.stop();
            }
            playerRef.current = new Player(source);
            playerRef.current.on("error", onError);
        },
        [playerRef]
    );

    useEffect(() => {
        createPlayer(source);
    }, [source]);

    const onPlay = useCallback(() => {
        if (playerRef.current) playerRef.current.play();
    }, [playerRef.current]);

    return {
        onPlay
    };
};

export const AudioPlayer = ({ source }) => {
    return (
        <>
            <Divider />
            <AudioPlayerContainer>
                <AudioPlayerControls>
                    <PlayButton />
                </AudioPlayerControls>
            </AudioPlayerContainer>
        </>
    );
};

export default AudioPlayer;
