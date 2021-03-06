import React, { useCallback } from "react";
import { ListItem } from "app/components";
import usePlayerContext from "app/hooks/player/usePlayer";
import colors from "app/colors";

export const FileListItem = React.memo(({ file, ...props }) => {
    const { id, title, recordedTimestamp, duration } = file;
    const { trackId, playing, setTrack } = usePlayerContext();
    const isCurrentTrack = trackId == id;
    const onPress = useCallback(() => {
        setTrack(id);
    }, [id, setTrack]);

    let containerStyle = {};
    let titleStyle = {};
    let leftIcon = {
        type: "ionicon",
        name: "ios-play",
        color: colors.primaryInverted,
        containerStyle: {
            padding: 5,
            paddingLeft: 8
        },
        underlayColor: colors.primary
    };
    if (isCurrentTrack) {
        leftIcon = {
            ...leftIcon,
            name: playing ? "ios-pause" : "ios-play",
            color: colors.primary,
            underlayColor: colors.primaryInverted,
            onPress
        };
        containerStyle = { backgroundColor: colors.primaryInverted };
        titleStyle = { color: colors.primary };
    }

    return (
        <ListItem
            title={title}
            rightTitle={duration}
            subtitle={recordedTimestamp ? recordedTimestamp : undefined}
            onPress={onPress}
            leftIcon={leftIcon}
            containerStyle={containerStyle}
            titleStyle={titleStyle}
            subtitleStyle={titleStyle}
            rightTitleStyle={titleStyle}
            {...props}
        />
    );
});

FileListItem.defaultProps = {
    topDivider: true
};

export default FileListItem;
