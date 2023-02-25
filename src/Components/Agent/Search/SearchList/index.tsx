import { Box, FlatList, Text } from "native-base";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../../../Shared/LoadingSpinner";
import { ListActions } from "./ListActions";
import { ListAgents } from "./ListAgents";
import { ListMission } from "./ListMissions";

type SearchListProps={
    selectItem:string
    name:string
}
export function SearchList({selectItem='agent', name}:SearchListProps) {
    const [dataloading,setDataLoading]=useState(false)
    useEffect(()=>{
    },[selectItem])

    if(selectItem==='agent')return (<ListAgents name={name}/>);
    if(selectItem==='mission')return (<ListMission name={name}/>);
    if(selectItem==='action')return (<ListActions name={name}/>);
    if(selectItem==='task')return (<Box p={10}><Text textAlign={'center'}>Tasks</Text></Box>);
    return(<Box><Text>Não foi possivel atualizar a lista</Text></Box>)

    
}

