import React from "react";
import colors from "app/colors";
import { ThemeProvider, Button } from "react-native-elements";

const { foreground, background } = colors;
export const theme = {
    Header: {
        containerStyle: {
            backgroundColor: background
        }
    },
    Input: {
        inputStyle: {
            color: foreground
        }
    },
    Text: {
        h4Style: {
            color: foreground
        }
    },
    ListItem: {
        containerStyle: {
            backgroundColor: background
        },
        titleStyle: {
            color: foreground
        },
        subtitleStyle: {
            color: foreground
        }
    },
    Icon: {
        color: foreground
    }
};

export default ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
