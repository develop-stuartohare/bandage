import React, { useState } from "react";
import { FlatList } from "react-native";
import { ListItem, SearchBar } from "app/components";
import useFiles from "app/hooks/useFiles";

export const FlatListItem = file => {
    const { id, title, recordedTimestamp } = file;

    return <ListItem title={title} subtitle={recordedTimestamp} topDivider />;
};

export const FileList = props => {
    const [searchTerm, setSearchTerm] = useState();
    const { status, loading, error, files, onRefresh } = useFiles({ searchTerm });

    const searchbar = <SearchBar value={searchTerm} onChangeText={setSearchTerm} />;

    return (
        <FlatList
            data={files}
            {...props}
            refreshing={loading}
            onRefresh={onRefresh}
            ListHeaderComponent={searchbar}
        />
    );
};

FileList.defaultProps = {
    renderItem: ({ item, index }) => <FlatListItem {...item} />,
    keyExtractor: ({ id }) => id
};

export default FileList;
