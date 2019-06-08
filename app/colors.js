import * as palette from "app/palette";
const { white, black, yellow, red, green, orange } = palette;

export const colors = {
    primary: white,
    primaryInverted: black,
    secondary: yellow,
    secondaryInverted: black,
    success: green,
    error: red,
    warning: orange,
    ...palette
};

export default colors;
