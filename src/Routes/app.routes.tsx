import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { StackNavigation } from './StackNavigation';
import { AgentSearch } from '../Screens/Agents/AgentSearch';

import { Ionicons } from '@expo/vector-icons';
import { HeaderHome } from '../Components/Menu/HeaderHome';
import { MessageIcon } from '../Components/Menu/HeaderHome/MensageIcon';
import { ProfileAgent } from '../Screens/Agents/ProfileAgent';
import { SharerAgent } from '../Screens/Agents/SharerAgent';
import { PanelControllerAgent } from '../Screens/Agents/PanelControllerAgent';




type AppRoutes = {
    Home: undefined
    Profile: undefined
    Search: undefined
    SharererAgent: undefined
    PanelControl: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

export function AppRoutes() {
    const { colors } = useTheme()
    return (
        <Navigator screenOptions={{ tabBarShowLabel: false, tabBarHideOnKeyboard: true }}>
            <Screen name='Home' component={StackNavigation} options={{
                tabBarIcon: ({ color, focused }) => (
                    <Entypo name="home" size={24} color={focused ? colors.green['500'] : color} />
                ), headerShown: false,
            }} />

            <Screen name='Search' component={AgentSearch} options={{ tabBarIcon: ({ color, focused }) => (<AntDesign name="search1" size={24} color={focused ? colors.green['500'] : color} />), headerTitle: () => (<HeaderHome />), headerRight: () => (<MessageIcon />), headerRightContainerStyle: { marginRight: 15 } }} />

            <Screen name='SharererAgent' component={SharerAgent} options={{ tabBarIcon: ({ color, focused }) => (<Ionicons name="share-outline" size={24} color={focused ? colors.green['500'] : color} />), headerTitle: () => (<HeaderHome />), headerRight: () => (<MessageIcon />), headerRightContainerStyle: { marginRight: 15 } }} />

            <Screen name='PanelControl' component={PanelControllerAgent} options={{ tabBarIcon: ({ color, focused }) => (<Ionicons name="md-game-controller-outline" size={24} color={focused ? colors.green['500'] : color} />), headerShown: false }} />

            <Screen name='Profile' component={ProfileAgent} options={{ tabBarIcon: ({ color, focused }) => (<FontAwesome5 name="user-circle" size={24} color={focused ? colors.green['500'] : color} />), headerShown: false }} />
        </Navigator>
    )
}



