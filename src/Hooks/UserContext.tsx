import {createContext, ReactElement, ReactNode, useContext, useEffect, useState } from 'react'
import { HandleDataAgent } from '../Services/HandleData/HandleDataAgent'
import { FindAgentDTO } from '../Services/HandleData/HandleDataAgent/AgentDTO/findAgentDTO'


type AgentProsp = FindAgentDTO

export const AgentContext = createContext({} as AgentProsp)


export function AgentDataProvider({children}:{children:ReactNode}){
    return(
    
        <AgentProvider>
            {children}
        </AgentProvider>

    )
}

export  function AgentProvider({children}:{children:ReactNode}) {
    const [dataAgent,setDataAgent ]= useState({} as AgentProsp)
    const handleDataAgent = new HandleDataAgent('local')
    async function fetchData(){
        const data = await handleDataAgent.fetchDataAgent({name:'Leonardo Belilo'})
        setDataAgent(data)
    }

    useEffect(()=>{
         fetchData()
    },[
    ])
    return (
      <AgentContext.Provider value={dataAgent}>
        {children}
      </AgentContext.Provider>
    )
  }

  export const useDataAgent =() => useContext(AgentContext)