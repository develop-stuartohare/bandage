import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/state/store";
import { Container } from "app/components";
import Navigation from "app/navigation";
import Auth from "app/screens/Auth.screen";
import AppTheme from "app/containers/AppTheme";
import AudioPlayerContextProvider from "app/containers/AudioPlayer/AudioPlayerContext";
import AudioPlayer from "app/containers/AudioPlayer";

export const Bandage = () => {
    return (
        <AppTheme>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AudioPlayerContextProvider>
                        <Container style={StyleSheet.absoluteFillObject}>
                            <Auth>
                                <Navigation />
                                <AudioPlayer />
                            </Auth>
                        </Container>
                    </AudioPlayerContextProvider>
                </PersistGate>
            </Provider>
        </AppTheme>
    );
};

export default Bandage;
