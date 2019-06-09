import { createSelector } from "reselect";
import { getPersistedAuth } from "app/state/selectors/persisted";

export const getAuthCookie = createSelector(
    getPersistedAuth,
    auth => {
        const { cookie } = auth;

        return cookie;
    }
);

export default getAuthCookie;
