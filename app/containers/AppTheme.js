import React from "react";
import colors from "app/colors";
import { ThemeProvider } from "react-native-elements";

const { primaryInverted, primary, secondary, error, success, warning } = colors;

export const theme = {
    primary,
    secondary,
    success,
    error,
    warning,
    Header: {
        containerStyle: {
            backgroundColor: secondary
        }
    },
    SearchBar: {
        lightTheme: true
    },
    Input: {
        inputStyle: {
            color: primaryInverted
        }
    },
    Text: {
        style: {
            color: primaryInverted,
            fontSize: 15
        },
        h4Style: {
            color: primaryInverted
        }
    },
    ListItem: {
        containerStyle: {
            backgroundColor: primary,
            padding: 10
        },
        titleStyle: {
            color: primaryInverted,
            // fontWeight: "500",
            fontSize: 16
        },
        subtitleStyle: {
            color: primaryInverted,
            fontWeight: "100",
            fontSize: 13
        },
        rightIcon: {
            color: primaryInverted
        }
    },
    Icon: {
        color: primaryInverted,
        underlayColor: primary
    }
};

export default ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
