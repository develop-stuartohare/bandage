import React, { useState } from "react";
import { FlatList } from "react-native";
import FileListItem from "app/containers/FileListItem";
import useFileSync from "app/hooks/file/useFileSync";

export const FileList = ({ searchTerm = "", ...props }) => {
    const { loading, files, onRefresh } = useFileSync({ searchTerm });

    return <FlatList data={files} {...props} refreshing={loading} onRefresh={onRefresh} />;
};

FileList.defaultProps = {
    renderItem: ({ item, index }) => <FileListItem file={item} />,
    keyExtractor: ({ id }) => id
};

export default FileList;
