
import { Center } from "native-base";
import { Text } from "react-native";
import CheckoutScreen from "../../Components/Payment";
import { LogBox  } from 'react-native';
import { Logs,disableErrorHandling } from "expo";
import { useRoute } from "@react-navigation/native";
// LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
// LogBox.ignoreAllLogs();

type IdSponseredProps={
  id_sponsered:string
}
function Sponsor() {
  const route = useRoute()
  const{ id_sponsered} = route.params as IdSponseredProps
    return ( 
        <CheckoutScreen id_sponsered={id_sponsered}/>
      );
}

export default Sponsor;