import { Box, HStack, Text, useTheme, VStack } from "native-base";

import { VictoryPie, VictoryContainer, VictoryLegend } from "victory-native";
import { TransparenceFinancial } from "./TransparenceFinancial";

export function ChartsDataProfileAgent(){
    const {colors}= useTheme()
    return(
        <>
        <TransparenceFinancial/>
        </>
    )
}

