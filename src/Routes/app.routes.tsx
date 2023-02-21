import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { Center, Text } from 'native-base'

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'native-base';
import { MessageIcon } from '../Components/HeaderHome/MensageIcon';
import { HeaderHome } from '../Components/HeaderHome';
import { AntDesign } from '@expo/vector-icons';
import { StackNavigation } from './StackNavigation';
import { AgentSearch } from '../Screens/AgentScreens/AgentSearch';
import { Home } from '../Screens/AgentScreens/Home';
import { ProfileAgent } from '../Screens/AgentScreens/ProfileAgent';
import { Ionicons } from '@expo/vector-icons';
import { PanelControllerAgent } from '../Screens/AgentScreens/PanelControllerAgent';
import { Share } from '../Screens/AgentScreens/Share';



type AppRoutes = {
    Home: undefined
    Profile: undefined
    Search: undefined
    Share: undefined
    PanelControl:undefined
}

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

export function AppRoutes() {
    const { colors } = useTheme()
    return (
        <Navigator screenOptions={{ tabBarShowLabel: false, }}>
            <Screen name='Home' component={StackNavigation} options={{ tabBarIcon: ({ color, focused }) => (
            <Entypo name="home" size={24} color={focused ? colors.green['500'] : color} />
            ), headerShown: false, }} />

            <Screen name='Search' component={AgentSearch} options={{ tabBarIcon: ({ color, focused }) => (<AntDesign name="search1" size={24} color={focused ? colors.green['500'] : color} />), headerTitle: () => (<HeaderHome />), headerRight: () => (<MessageIcon />), headerRightContainerStyle: { marginRight: 15 } }} />

            <Screen name='Share' component={Share} options={{ tabBarIcon: ({ color, focused }) => (<AntDesign name="sharealt" size={24} color={focused ? colors.green['500'] : color} />), headerTitle: () => (<HeaderHome />), headerRight: () => (<MessageIcon />), headerRightContainerStyle: { marginRight: 15 } }} />

            <Screen name='PanelControl' component={PanelControllerAgent} options={{ tabBarIcon: ({ color, focused }) => (<Ionicons  name="md-game-controller-outline" size={24} color={focused ? colors.green['500'] : color} />), headerShown: false }} />

            <Screen name='Profile' component={ProfileAgent} options={{ tabBarIcon: ({ color, focused }) => (<FontAwesome5 name="user-circle" size={24} color={focused ? colors.green['500'] : color} />), headerShown: false }} />
        </Navigator>
    )
}



