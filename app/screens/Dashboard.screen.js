import React, { useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { Screen, SearchBar, Icon } from "app/components";
import Navbar from "app/containers/Navbar";
import FileList from "app/containers/FileList";

export const NavbarSearch = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 10 }}>
            <Icon name={"ios-search"} type={"ionicon"} />
        </TouchableOpacity>
    );
};
export const DashboardScreen = () => {
    const [searchTerm, setSearchTerm] = useState();
    const [searchVisible, setSearchVisible] = useState(false);
    const toggleSearchVisible = useCallback(() => {
        setSearchTerm("");
        setSearchVisible(!searchVisible);
    }, [searchVisible]);

    const navRightComponent = <NavbarSearch onPress={toggleSearchVisible} />;

    return (
        <Screen>
            <Navbar title={"Bandage"} rightComponent={navRightComponent} />
            {searchVisible && <SearchBar value={searchTerm} onChangeText={setSearchTerm} />}
            <FileList searchTerm={searchTerm} />
        </Screen>
    );
};

export default DashboardScreen;
