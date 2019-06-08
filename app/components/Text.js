import React from "react";
import { Text as RNEText } from "react-native-elements";
import styled from "styled-components/native";

export const Text = RNEText;

export const TitleText = styled(Text)`
    font-size: 16px;
    font-weight: bold;
`;

export const SubitleText = styled(Text)`
    font-size: 13px;
    font-weight: 200;
`;

export default Text;
