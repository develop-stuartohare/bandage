import React from "react";
import SignInForm from "app/containers/SignInForm";
import { Margin, Container } from "app/components";
import useIsSignedIn from "app/hooks/auth/useIsSignedIn";

export const Auth = ({ children }) => {
    const isSignedIn = useIsSignedIn();

    if (isSignedIn) return children;
    return (
        <Container style={{ marginTop: 50 }}>
            <Margin>
                <SignInForm />
            </Margin>
        </Container>
    );
};

export default Auth;
