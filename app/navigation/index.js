import { createStackNavigator, createAppContainer } from "react-navigation";
import AppIndex from "app/screens/AppIndex.screen";
import Dashboard from "app/screens/Dashboard.screen";
import Files from "app/screens/Files.screen";

const routes = {
    Dashboard,
    Files
};

const options = {
    headerMode: "none"
};
const TabNavigator = createStackNavigator(routes, options);

export default createAppContainer(TabNavigator);
