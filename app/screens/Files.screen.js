import React from "react";
import { View, Text } from "react-native";
import { Screen } from "app/components";
export class FileScreen extends React.Component {
    static navigationOptions = {
        title: "Files"
    };

    render() {
        return (
            <Screen>
                <Text> FileScreen</Text>
            </Screen>
        );
    }
}

export default FileScreen;
