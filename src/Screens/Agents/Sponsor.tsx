import { StripeContainer, StripeProvider } from "@stripe/stripe-react-native";
import { Center } from "native-base";
import { Text } from "react-native";
import CheckoutScreen from "../../Components/Payment";
import { LogBox  } from 'react-native';
import { Logs,disableErrorHandling } from "expo";
import { useRoute } from "@react-navigation/native";
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs();

type IdSponseredProps={
  id_sponsered:string
}
function Sponsor() {
  const route = useRoute()
  const{ id_sponsered} = route.params as IdSponseredProps
    return ( 
<StripeContainer >
    <StripeProvider
      publishableKey="pk_test_51MgFSIIB8NKyA3w4Ge7g5d5jK5SxIFe1OKZDb2A4J2rzdtNnMicR7t9k5xEcT6EamoRGAnyHBadKKvEwHoIpYjOw00anlfE2aQ"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
    </StripeProvider>

        <CheckoutScreen id_sponsered={id_sponsered}/>
     
    </StripeContainer>
      );
}

export default Sponsor;