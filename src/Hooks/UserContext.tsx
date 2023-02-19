import { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from 'react'
import { HandleDataAgent } from '../Services/HandleData/HandleDataAgent'
import { FindAgentDTO, FormatResponseAuthenticate } from '../Dtos/AgentDTO/DataAgentDTO'
import  {AxiosError} from 'axios'

type ContextAgentProsp = {
  dataAgent:FindAgentDTO
  handleSign({ email, password }: HandleSignProps):Promise<FormatResponseAuthenticate |void> |  AxiosError 
}
type HandleSignProps = {
  email: string;
  password: string
}

export const AgentContext = createContext({} as ContextAgentProsp)

export function AgentProvider({ children }: { children: ReactNode }) {
  const [dataAgent, setDataAgent] = useState({} as FindAgentDTO)
  const [dataLogin, setDataLogin] = useState({} as FormatResponseAuthenticate)
  const handleDataAgent = new HandleDataAgent('api')

  async function handleSign({ email, password }: HandleSignProps) {
    try{
      const responseAgentAuthenticated = await handleDataAgent.authenticateAgent({ email, password })
      console.log(responseAgentAuthenticated)
      return responseAgentAuthenticated
    }catch(error){
      throw  new AxiosError('Error na sua authenticação')
    }
  }

  async function fetchData() {
    const data = await handleDataAgent.fetchDataAgent({ name: "Leonardo Belilo" })
    setDataAgent(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (

    <AgentContext.Provider value={{dataAgent,handleSign}}>
      {children}
    </AgentContext.Provider>

  )
}


export function AgentDataProvider({ children }: { children: ReactNode }) {
  return (
    <AgentProvider>
      {children}
    </AgentProvider>
  )
}

export const useDataAgent = () => useContext(AgentContext)