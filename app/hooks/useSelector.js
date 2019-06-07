import { useSelector as useHookSelector } from "react-redux";
import { useCallback } from "react";

export const useSelector = (selector, props, dependencies = []) => {
    const mapState = useCallback(state => selector(state, props), dependencies);
    return useHookSelector(mapState);
};

export default useSelector;
