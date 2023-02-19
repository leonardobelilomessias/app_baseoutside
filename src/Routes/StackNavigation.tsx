import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HeaderHome } from '../Components/HeaderHome';
import { MessageIcon } from '../Components/HeaderHome/MensageIcon';
import { FindAgentDTO } from '../Dtos/AgentDTO/DataAgentDTO';
import { EditProfileAgent } from '../Screens/AgentScreens/EditProfileAgent';
import { Home } from '../Screens/AgentScreens/Home';
import Sponsor from '../Screens/AgentScreens/Sponsor';


type NavigationAgent = {
    HomeAgent: undefined
    Sponsor: undefined
    EditProfile: {
        dataAgent: FindAgentDTO
    }
}

const { Navigator, Screen } = createNativeStackNavigator<NavigationAgent>()


export type NavigatotionAgentProps = NativeStackNavigationProp<NavigationAgent>
export function StackNavigation() {
    return (
        <>
            <Navigator screenOptions={{ animation: 'slide_from_right' }}>
                <Screen name='HomeAgent' component={Home} options={{ headerTitle: () => (<HeaderHome />), headerRight: () => (<MessageIcon />), }} />
                <Screen name='Sponsor' component={Sponsor} options={{ animation: "slide_from_right" }} />
                <Screen name='EditProfile' component={EditProfileAgent} options={{ animation: "slide_from_right" }} />

            </Navigator>
        </>);
}

export { }