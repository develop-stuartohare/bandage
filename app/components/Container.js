import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View``;

export const ContainerFlexOne = styled(Container)`
    flex: 1;
`;

export const VerticalCenter = styled(Container)`
    display: flex;
    justify-content: center;
`;

export const Margin = styled(Container)`
    margin: 15px;
`;

export const Padding = styled(Container)`
    padding: 15px;
`;

export default Container;
