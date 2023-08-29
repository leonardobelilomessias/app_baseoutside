import { VStack, Box,Text, useTheme } from "native-base";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryHistogram, VictoryLine, VictoryPie } from "victory-native";

export function ContentData(){
    const {colors} = useTheme()
    return(
    <>
                    <VStack bgColor={'white'} m='2' p='4' rounded={10} shadow='2'>
                        <Box my={4}>
                            <Text fontFamily={'heading'}>Atividades</Text>

                        </Box>


                    </VStack>
    </>
    )
}