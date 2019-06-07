import React from "react";
import { Screen } from "app/components";
import Navbar from "app/containers/Navbar";
import FileList from "app/containers/FileList";

export const DashboardScreen = () => {
    return (
        <Screen>
            <Navbar title={"Bandage"} />

            <FileList />
        </Screen>
    );
};

export default DashboardScreen;
