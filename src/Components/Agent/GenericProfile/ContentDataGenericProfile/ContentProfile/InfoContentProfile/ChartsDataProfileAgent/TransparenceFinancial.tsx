import { Box, HStack, Text, useTheme, VStack } from "native-base"
import { VictoryLegend, VictoryPie } from "victory-native"

export function TransparenceFinancial(){
    const {colors}= useTheme()
    return(
        <VStack bgColor={'white'} mx='2' p='4' my='2' rounded={10} shadow='2'>
            <Text fontFamily={'heading'}>Transparência Financeira</Text>
            <HStack alignItems={'center'}>

            <Box flex={1} maxW='50%' >
            <VictoryPie  
            height={200}
            width={200}
            labels={['']}
            padAngle={2}
            innerRadius={30}
            colorScale={[colors.green['300'], colors.yellow['300'], colors.warning['300'], colors.red['400'], "navy" ]}
            data={[
                { x: "Declarado", y: 200 },
                { x: "subexistencia", y: 40 },
                { x: "Birds", y: 55 },
                { x: "indeclarado", y: 15 }
            ]}
            />
            </Box>
            <Box flex={1}>

            <VictoryLegend 
                height={120}
                gutter={20}
                orientation="vertical"
                borderPadding={{left:10}}
                style={{title:{fontSize:8, color:'red'}}}
                data={[
                { name: "Declarado", symbol: { fill: colors.green['300'], } },
                { name: "Analizando", symbol: { fill: "orange" } },
                { name: "Questionado", symbol: { fill: "gold" } },
                { name: "Não declarado", symbol: { fill: colors.red['300'] } },
                
            ]}
            />
            </Box>
            </HStack>
        </VStack>
    )
}