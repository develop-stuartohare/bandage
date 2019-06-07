import React from "react";
import { ThemeProvider, Header } from "react-native-elements";
import { Text, Icon } from "app/components";
import colors from "app/colors";

const bandageIcon = {
    name: "spoon",
    type: "font-awesome"
};
export const Navbar = ({ title, ...props }) => {
    const centerComponent = title ? <Text>{title}</Text> : undefined;
    return (
        <Header
            leftComponent={<Icon {...bandageIcon} />}
            centerComponent={centerComponent}
            {...props}
        />
    );
};

Navbar.defaultProps = {
    barStyle: "dark-content"
};

export default Navbar;
