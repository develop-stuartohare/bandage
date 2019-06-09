import signIn from "app/state/actions/signIn.action";
import useDispatch from "app/hooks/useDispatch";

export const useSignIn = () => useDispatch(signIn);

export default useSignIn;
