import React from "react";
import { ThemeProvider, Header } from "react-native-elements";
import { Text } from "app/components/Text";
import colors from "app/colors";
export const Navbar = ({ title, ...props }) => {
    const centerComponent = title ? <Text h4>{title}</Text> : undefined;
    return <Header centerComponent={centerComponent} {...props} />;
};

Navbar.defaultProps = {
    barStyle: "dark-content"
};

export default Navbar;
