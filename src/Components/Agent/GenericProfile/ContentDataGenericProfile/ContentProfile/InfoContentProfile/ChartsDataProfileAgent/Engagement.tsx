import { Box, HStack, Text, useTheme, VStack } from "native-base"
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLegend, VictoryPie } from "victory-native"

export function Engagement(){
    const {colors}= useTheme()
    return(
        <VStack bgColor={'white'} mx='2' p='4' my='2' rounded={10} shadow='2'>
            <Text fontFamily={'heading'}>Engajamento</Text>
            <HStack alignItems={'center'}>

            <Box  alignItems={'center'} alignContent='center' maxW='100%' >
            <VictoryChart domainPadding={{ x: 15 }}   >
                

            <VictoryAxis />
            <VictoryBar
            barRatio={1}
            categories={{ x: ["jan", "fev", "mar","abr", "mai", "jun"] }}
             domainPadding={{ x: 20 }}
             
             style={{ data: { fill: colors.green['300']} }}
             data={[20,20,30,50,10,35,5]}
             
             />
             </VictoryChart>
            </Box>

            </HStack>
        </VStack>
    )
}