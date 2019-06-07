import React from "react";
import { Input, Button } from "react-native-elements";
import { Field, Form } from "react-final-form";
import colors from "app/colors";

export const TextInputField = props => {
    return (
        <Field {...props}>
            {({ input }) => {
                return <Input {...input} {...props} />;
            }}
        </Field>
    );
};

TextInputField.defaultProps = {
    autoCapitalize: "none",
    placeholderTextColor: colors.lightGray
};
export default TextInputField;
