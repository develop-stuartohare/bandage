import React from "react";
import { View, Text } from "react-native";
import { Screen } from "app/components";

import FileList from "app/containers/FileList";

export const DashboardScreen = () => {
    return (
        <Screen>
            <FileList />
        </Screen>
    );
};

export default DashboardScreen;
