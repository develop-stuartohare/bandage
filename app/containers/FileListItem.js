import React, { useCallback } from "react";
import { ListItem } from "app/components";
import usePlaylistAdd from "app/hooks/playlist/usePlaylistAdd";

export const FileListItem = React.memo(({ file, ...props }) => {
    const { id, title, recordedTimestamp, duration } = file;
    const playlistAdd = usePlaylistAdd();
    const onPress = useCallback(() => playlistAdd(id), [id]);

    return (
        <ListItem
            title={`${title} - ${duration}`}
            subtitle={recordedTimestamp}
            onPress={onPress}
            {...props}
        />
    );
});

FileListItem.defaultProps = {
    topDivider: true
};

export default FileListItem;
