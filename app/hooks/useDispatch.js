import { useCallback } from "react";
import { useDispatch as useHookDispatch } from "react-redux";

const defaultDependencies = [];
export const useDispatch = (action, ...props) => {
    const dispatch = useHookDispatch();

    return useCallback((...args) => dispatch(action(...args)), ...props);
};

export default useDispatch;
