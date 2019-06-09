import React, { useEffect, useState, useCallback } from "react";
import { Form } from "react-final-form";
import { Button, Spacer, TextInputField } from "app/components";
import useSignIn from "app/hooks/auth/useSignIn";

export const SignInForm = () => {
    let formSubmit;
    const signIn = useSignIn();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = useCallback(
        async values => {
            await signIn(values);
        },
        [signIn]
    );

    const onPress = useCallback(() => {
        formSubmit();
    }, [formSubmit]);

    return (
        <Form onSubmit={onSubmit} initialValues={{ username, password }}>
            {({ form, submitting }) => {
                formSubmit = form.submit;
                return (
                    <>
                        <TextInputField
                            name={"username"}
                            placeholder={"username"}
                            autoFocus
                            onSubmitEditing={() => form.focus("password")}
                        />
                        <TextInputField
                            name={"password"}
                            placeholder={"password"}
                            secureTextEntry
                            onSubmitEditing={() => formSubmit()}
                        />
                        <Spacer />
                        <Button onPress={onPress} title={"Sign In"} loading={submitting} />
                    </>
                );
            }}
        </Form>
    );
};

export default SignInForm;
