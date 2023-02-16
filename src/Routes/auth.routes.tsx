import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SignIn } from '../Screens/SignIn'
import { SignUp } from '../Screens/SingUp'

type AuthRoutes = {
    SignIn: undefined
    SignUp: undefined
}
export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()
export function AuthRoutes() {
    return (

        <Navigator screenOptions={{ contentStyle: { backgroundColor: "white" }, animation: "slide_from_right", headerShown:false,}}>
            <Screen name='SignIn' component={SignIn} />
            <Screen name='SignUp' component={SignUp} />
            
        </Navigator>

    )
}