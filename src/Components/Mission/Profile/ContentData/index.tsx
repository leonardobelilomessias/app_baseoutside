import { VStack, Box,Text, useTheme } from "native-base";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryHistogram, VictoryLine, VictoryPie } from "victory-native";

export function ContentData(){
    const {colors} = useTheme()
    return(
    <>
                    <VStack bgColor={'white'} m='2' p='4' rounded={10} shadow='2'>
                        <Box my={4}>
                            <Text fontFamily={'heading'}>Atividades</Text>
                            <VictoryChart height={220} width={380}>
                            <VictoryLine
                            animate={{
                                duration: 2000,
                                onLoad: { duration: 1000 } 
                              }}
                                
                                style={{
                                data: { stroke: colors.green['500'] },
                                parent: { border: "1px solid #ccc"}
                                }}
                                data={[
                                { month: "Jan", atividade: 0 },
                                { month: "Fev", atividade: 2 },
                                { month: "Mar", atividade: 0 },
                                { month: "Maio", atividade: 3 },
                                { month: "Abril", atividade: 2 },
                                ]}
                                x='month'
                                y='atividade'
                                
                            />
                            </VictoryChart>

                        </Box>
                        <Box my={4}  >
                            <Text  color={'gray.700'} fontFamily={'heading'}>Transparência</Text>
                            <VictoryChart height={220} width={380}>
                            <VictoryGroup offset={20} 
                                colorScale={"heatmap"}
                            >
                                <VictoryBar
                                data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
                                />
                                <VictoryBar
                                data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
                                />
                                <VictoryBar
                                data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
                                />
                            </VictoryGroup>
                        </VictoryChart>
                        </Box>

                        <Box my={4} >
                            <Text  color={'gray.700'} fontFamily={'heading'}>Daily Post</Text>
                            <VictoryChart
                                height={220} width={380}
                                domainPadding={50}
                                >
                                <VictoryBar
                                barRatio={0.5}
                                alignment="start"
                                    style={{ data: { fill: colors.green['500'] } }}
                                    data={[ 1,2,3,0,5,0,0]}
                                />
                                </VictoryChart>
                        </Box>
                        <Box my={4} >
                            <Text  color={'gray.700'} fontFamily={'heading'}>FeedBack</Text>
                            <VictoryPie
                            height={220} width={380}
                            colorScale='heatmap'
                                data={[
                                    { x: "Cats", y: 35 },
                                    { x: "Dogs", y: 40 },
                                    { x: "Birds", y: 55 }
                                ]}
                                />
                        </Box>


                    </VStack>
    </>
    )
}