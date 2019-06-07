export const signIn = async ({ username, password }) => {
    const body = new FormData();
    body.append("user", "2");
    body.append("password", "secret powers");

    try {
        let response = await fetch("https://band-age.herokuapp.com/login", {
            method: "POST",
            // headers: {
            //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            // },
            body
        });
        debugger;
        response = await response.json();
        debugger;
        return { files: null };
    } catch (error) {
        const tt = error;

        return { error };
    }
};

export default signIn;
