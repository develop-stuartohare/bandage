import React from "react";
import { View, Text } from "react-native";
import { Screen } from "app/components";
import useFiles from "app/hooks/file/useFiles";

export class AppIndexScreen extends React.Component {
    static navigationOptions = {
        title: "Home"
    };

    render() {
        return (
            <Screen>
                <Text> AppIndexScreen</Text>
            </Screen>
        );
    }
}

export default AppIndexScreen;
