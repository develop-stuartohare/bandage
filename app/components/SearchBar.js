import React from "react";
import { SearchBar as RNWSearchBar } from "react-native-elements";

export const SearchBar = props => {
    return <RNWSearchBar {...props} />;
};

SearchBar.defaultProps = {
    autoCapitalize: "none"
};
export default SearchBar;
