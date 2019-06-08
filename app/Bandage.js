import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/state/store";
import Navigation from "app/navigation";
import AppTheme from "app/containers/AppTheme";
import AudioPlayerContextProvider from "app/containers/AudioPlayer/AudioPlayerContext";
import AudioPlayer from "app/containers/AudioPlayer";

export const Bandage = () => {
    return (
        <AppTheme>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AudioPlayerContextProvider>
                        <Navigation />
                        <AudioPlayer />
                    </AudioPlayerContextProvider>
                </PersistGate>
            </Provider>
        </AppTheme>
    );
};

export default Bandage;
