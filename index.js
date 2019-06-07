import { AppRegistry } from "react-native";
import Bandage from "app/Bandage";
import TrackPlayer from "react-native-track-player";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Bandage);
TrackPlayer.registerPlaybackService(() => require("./service"));
