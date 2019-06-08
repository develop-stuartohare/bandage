import React from "react";
import colors from "app/colors";
import { ThemeProvider, Button } from "react-native-elements";

const { primaryInverted, primary, secondary, secondaryInverted } = colors;
export const theme = {
    Text: {
        style: {
            color: primary
        },
        h4Style: {
            color: primary
        }
    },

    Icon: {
        color: primary
    }
};

export default ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
