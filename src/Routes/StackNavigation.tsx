import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HeaderHome } from '../Components/Menu/HeaderHome';
import { MessageIcon } from '../Components/Menu/HeaderHome/MensageIcon';

import { FindAgentDTO } from '../Dtos/AgentDTO/DataAgentDTO';
import { EditProfileAgent } from '../Screens/Agents/EditProfileAgent';
import { GenericProfile } from '../Screens/Agents/GenericProfile';
import { Home } from '../Screens/Agents/Home';
import Sponsor from '../Screens/Agents/Sponsor';
import { ProfileMission } from '../Screens/Missions/ProfileMission';


type NavigationAgent = {
    HomeAgent: undefined
    Sponsor: {
        id_sponsered: string
    }
    EditProfile: {
        dataAgent: FindAgentDTO
    }
    GenericProfile: {
        id: string
    },
    GenericMissionProfile: {
        id: string
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
                <Screen name='GenericProfile' component={GenericProfile} options={{ animation: "slide_from_right", headerShown:false }} />
                <Screen name='GenericMissionProfile' component={ProfileMission} options={{ animation: "slide_from_right",headerShown:false }} />

            </Navigator>
        </>);
}

export { }