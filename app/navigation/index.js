import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import AppIndex from "app/screens/AppIndex.screen";
import Dashboard from "app/screens/Dashboard.screen";
import Files from "app/screens/Files.screen";

const routes = {
    AppIndex,
    Dashboard,
    Files
};

const options = {};
const TabNavigator = createMaterialTopTabNavigator(routes, options);

export default createAppContainer(TabNavigator);
