import React from "react";
import styled from "styled-components/native";
import colors from "app/colors";

const ScreenContainer = styled.View`
    flex: 1;
    background-color: ${colors.primary};
`;

export const Screen = ({ children }) => {
    return <ScreenContainer>{children}</ScreenContainer>;
};

export default Screen;
