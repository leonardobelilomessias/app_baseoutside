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
import { Profile } from '../Screens/AgentScreens/ProfileAgent';


type AppRoutes = {
    Home: undefined
    Profile: undefined
    Search: undefined
    Share: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

export function AppRoutes() {
    const { colors } = useTheme()
    return (
        <Navigator screenOptions={{ tabBarShowLabel: false, }}>
            <Screen name='Home' component={StackNavigation} options={{ tabBarIcon: ({ color, focused }) => (<Entypo name="home" size={24} color={focused ? colors.green['500'] : color} />), headerShown: false, }} />
            <Screen name='Search' component={AgentSearch} options={{ tabBarIcon: ({ color, focused }) => (<AntDesign name="search1" size={24} color={focused ? colors.green['500'] : color} />), headerTitle: () => (<HeaderHome />), headerRight: () => (<MessageIcon />), headerRightContainerStyle: { marginRight: 15 } }} />
            <Screen name='Share' component={Home} options={{ tabBarIcon: ({ color, focused }) => (<AntDesign name="sharealt" size={24} color={focused ? colors.green['500'] : color} />), headerTitle: () => (<HeaderHome />), headerRight: () => (<MessageIcon />), headerRightContainerStyle: { marginRight: 15 } }} />
            <Screen name='Profile' component={Profile} options={{ tabBarIcon: ({ color, focused }) => (<FontAwesome5 name="user-circle" size={24} color={focused ? colors.green['500'] : color} />), headerShown: false }} />
        </Navigator>
    )
}



