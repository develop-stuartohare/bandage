import useSelector from "app/hooks/useSelector";
import getIsSignedIn from "app/state/selectors/auth/getIsSignedIn.selector";

export const useIsSignedIn = () => {
    return useSelector(getIsSignedIn);
};

export default useIsSignedIn;
