import { Center } from "native-base";
import { Text } from "react-native";
import { StripeProvider } from '@stripe/stripe-react-native';

function Sponsor() {
    return ( 
    <StripeProvider
      publishableKey="pk_test_51MR00mCVpoIEs3KjKRJRmVeEBXPe0ENMWCCyPAEhKy9X9DHQI19HEEHl1mwEIrKYX517iXblzmzO2qQ16dcNWJ6Y00D4t598ox"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <Center flex={1}>
        <Text>Sponsor</Text>
      </Center>
    </StripeProvider>
      );
}

export default Sponsor;