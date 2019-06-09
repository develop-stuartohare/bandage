import { SIGN_IN } from "app/state/actionTypes";

export const fetchSignIn = async ({ user, password }) => {
    const formData = new FormData();
    formData.append("user", user);
    formData.append("password", password);

    let response = await fetch("https://band-age.herokuapp.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: "same-origin",
        body: formData
    });

    // const cook = response.headers.get("set-cookie");

    return { cookie: `bandage_login="f63d25b3-e417-418e-9e95-73c8e52928d6_2"` };
};

export const signIn = params => async dispatch => {
    const { username, password } = params;

    const response = await fetchSignIn({ user: "2", password: "secret powers" });

    dispatch({ type: SIGN_IN, payload: response });
};

export default signIn;
