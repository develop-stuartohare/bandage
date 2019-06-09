import useSelector from "app/hooks/useSelector";
import getAuthCookie from "app/state/selectors/auth/getAuthCookie.selector";

export const useIsSignedIn = () => {
    return useSelector(getAuthCookie);
};

export default useIsSignedIn;
