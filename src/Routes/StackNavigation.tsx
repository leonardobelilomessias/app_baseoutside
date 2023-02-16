import { createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'
import { HeaderHome } from '../Components/HeaderHome';
import { MessageIcon } from '../Components/MensageIcon';
import { Home } from '../Screens/Home';
import { Profile } from '../Screens/Profile';
import Sponsor from '../Screens/Sponsor';

type NavigationAgent = {
    HomeAgent:undefined
    Sponsor:undefined
}

const {Navigator,Screen} = createNativeStackNavigator<NavigationAgent>()


export type NavigatotionAgentProps = NativeStackNavigationProp<NavigationAgent>
export function StackNavigation() {
    return ( 
    <>
    <Navigator screenOptions={{animation:'slide_from_right'}}>
        <Screen name='HomeAgent'  component={Home} options={{headerTitle:()=>(<HeaderHome/>), headerRight:()=>(<MessageIcon/>),}}/>
        <Screen name='Sponsor' component={Sponsor} options={{ animation:"slide_from_right"}}/>
    </Navigator>
    </> );
}

export{}