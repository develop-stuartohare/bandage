import React, { useState } from "react";
import { FlatList } from "react-native";
import { SearchBar } from "app/components";
import FileListItem from "app/containers/FileListItem";
import useFileSync from "app/hooks/file/useFileSync";

export const FileList = props => {
    const [searchTerm, setSearchTerm] = useState();
    const { loading, files, onRefresh } = useFileSync({ searchTerm });

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
    renderItem: ({ item, index }) => <FileListItem file={item} />,
    keyExtractor: ({ id }) => id
};

export default FileList;
