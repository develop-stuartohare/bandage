import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Dashboard from "app/screens/Dashboard.screen";
import Files from "app/screens/Files.screen";

const TabNavigator = createBottomTabNavigator({
    Dashboard,
    Files
});

export default createAppContainer(TabNavigator);
