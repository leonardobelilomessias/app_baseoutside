import { Box, HStack, Text, useTheme, VStack } from "native-base";

import { VictoryPie, VictoryContainer, VictoryLegend } from "victory-native";
import { Engagement } from "./Engagement";
import { TransparenceFinancial } from "./TransparenceFinancial";

export function ChartsDataProfileAgent(){
    
    return(
        <>
        <TransparenceFinancial/>
        <Engagement/>
        </>
    )
}

