import { createSelector } from "reselect";
import getAuthCookie from "app/state/selectors/auth/getAuthCookie.selector";

export const getIsSignedIn = createSelector(
    getAuthCookie,
    cookie => {
        return !!cookie;
    }
);

export default getIsSignedIn;
