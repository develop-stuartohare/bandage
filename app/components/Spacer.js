import React from "React";
import { Text } from "react-native-elements";
import Container from "app/components/Container";

export const Spacer = React.memo(({ style }) => {
    return <Text>{""}</Text>;
});

Spacer.defaultProps = {
    style: {
        height: 10
    }
};

export default Spacer;
