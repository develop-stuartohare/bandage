import React from "react";
import { Divider, Header } from "react-native-elements";
import { Text, TitleText, Icon } from "app/components";
import colors from "app/colors";
import styled from "styled-components/native";

export const Navbar = ({ title, ...props }) => {
    const centerComponent = title ? <TitleText>{title}</TitleText> : undefined;
    return (
        <>
            <Header centerComponent={centerComponent} {...props} />
            <Divider />
        </>
    );
};

Navbar.defaultProps = {
    placement: "left",
    statusBarProps: { translucent: true }
};

export default Navbar;
