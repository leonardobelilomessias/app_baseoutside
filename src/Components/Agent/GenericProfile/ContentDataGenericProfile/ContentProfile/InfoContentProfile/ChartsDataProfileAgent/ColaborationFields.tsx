import { Box, HStack, Text, useTheme, VStack } from "native-base"
import { VictoryArea, VictoryAxis, VictoryBar, VictoryChart, VictoryLegend, VictoryPie, VictoryPolarAxis } from "victory-native"

export function ColaborationFields(){
    const {colors}= useTheme()
    return(
        <VStack bgColor={'white'} mx='2' p='4' my='2' rounded={10} shadow='2'>
            <Text fontFamily={'heading'}>Colaboração</Text>
            <HStack alignItems={'center'}>

            <Box  alignItems={'center'} alignContent='center' maxW='100%' >
            <VictoryChart polar

                >
                {
                    ["Social", "Bussiness", "Educação", "Saude", "Infra"].map((name, index) => {
                    return (
                        <VictoryPolarAxis dependentAxis
                        key={index}
                        label={name}
                        labelPlacement="perpendicular"
                        style={{ tickLabels: { fill: colors.gray['200'] },axis:{fill:colors.gray['600'],color:'red'},axisLabel:{},grid:{fill:'yellow',border:1,} }}
                        axisValue={name}
                        />
                    );
                    })
                }
                <VictoryBar 
                    style={{ data: { fill: colors.warning['500'], width: 25 }, }}
                    data={[
                    { x: "Social", y: 10 },
                    { x: "Bussiness", y: 25 },
                    { x: "Educação", y: 40 },
                    { x: "Saude", y: 50 },
                    { x: "Infra", y: 50 }
                    ]}
                />
                </VictoryChart>
            </Box>

            </HStack>
        </VStack>
    )
}