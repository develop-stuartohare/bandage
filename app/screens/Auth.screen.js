import React from "react";
import SignInForm from "app/containers/SignInForm";
import { Margin, Container } from "app/components";

export const Auth = ({ children }) => {
    return children;
    return (
        <Container style={{ marginTop: 50 }}>
            <Margin>
                <SignInForm />
            </Margin>
        </Container>
    );
};

export default Auth;
