import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/state/store";
import Auth from "app/screens/Auth.screen";
import Dashboard from "app/screens/Dashboard.screen";
import AppTheme from "app/containers/AppTheme";

import AudioPlayer from "app/containers/AudioPlayer";

export const Bandage = () => {
    return (
        <AppTheme>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Dashboard />
                    <AudioPlayer />
                </PersistGate>
            </Provider>
        </AppTheme>
    );
};

export default Bandage;
