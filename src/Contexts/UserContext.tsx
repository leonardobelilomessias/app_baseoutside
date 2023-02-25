import { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from 'react'
import { HandleDataAgent } from '../Services/HandleData/HandleDataAgent'
import { FindAgentDTO, FormatResponseAuthenticate, FullAgentDTO } from '../Dtos/AgentDTO/DataAgentDTO'
import  {AxiosError} from 'axios'
import { storageRemoveUser, storageUserGet, storageUserSave } from '../Storage/storageUser'
import { storageAuthTokenRemove, storageAuthTokenSave, storageTokenGet } from '../Storage/storageToken'

type AgentAutenticated={
token:string,
agent_id:string
}
type ContextAgentProsp = {
  dataAgent:FullAgentDTO
  handleSign({ email, password }: HandleSignProps):Promise<AgentAutenticated > 
  loading:boolean;
  handleLogout:()=>void
}
type HandleSignProps = {
  email: string;
  password: string
}

type handleAuthenticated={
  authenticateAgent:({ email, password }:HandleSignProps)=> FormatResponseAuthenticate
}

export const AgentContext = createContext({} as ContextAgentProsp)


export function AgentProvider({ children }: { children: ReactNode }) {
  const [loading,setLoading]= useState(false)
  const [dataAgent, setDataAgent] = useState({} as FullAgentDTO)
  const [dataLogin, setDataLogin] = useState({} as FormatResponseAuthenticate)
  const handleDataAgent = new HandleDataAgent('api')

/* handle data login agent*/
  async function handleSign({ email, password }: HandleSignProps) {
    try{
      const {agent,token} = await handleDataAgent.authenticateAgent({ email, password })
      const {agent_id} = agent
      const loggedAgent  = await handleDataAgent.findAgentById(agent_id)
      if(token && loggedAgent){
       setLoading(true)
        try{
          
          await storageUserSave(loggedAgent)
          await storageAuthTokenSave(token)
          handleDataAgent.setToken(token)
          setDataAgent(loggedAgent)
          
        }
        catch(error){
          
          throw error
        }finally{
          setLoading(false)
        }
      }
      return {agent_id,token}
    }catch(error){
      setLoading(false)
      throw error
    }
  }

/* fetch data at storage when open the app  */
  async function fetchData() {
    setLoading(true)
    try{
      const agent = await storageUserGet()
      const token = await storageTokenGet()
      if(agent&& token){
        setDataAgent(agent)
        handleDataAgent.setToken(token)
      }
    
    }catch(error){
      throw error
    }finally{
      setLoading(false)

    }
  }
   useEffect(() => {
     fetchData()
   }, [])

   async function handleLogout(){
    
    await storageRemoveUser()
    await storageAuthTokenRemove()
    setDataAgent({} as FullAgentDTO)
   }
  return (
    <AgentContext.Provider value={{dataAgent,handleSign,loading,handleLogout}}>
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