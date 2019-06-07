import React from "react";
import { View } from "react-native";

import { Screen } from "app/components";

import Auth from "app/screens/Auth.screen";
import Dashboard from "app/screens/Dashboard.screen";
import AppTheme from "app/containers/AppTheme";
import Navbar from "app/containers/Navbar";
import AudioPlayer from "app/containers/AudioPlayer";

export const Bandage = () => {
    return (
        <AppTheme>
            <Screen>
                <Navbar title={"Bandage"} />
                <Auth>
                    <Dashboard />
                    <AudioPlayer />
                </Auth>
            </Screen>
        </AppTheme>
    );
};

export default Bandage;
