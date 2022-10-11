import { createContext,useState,useContext,ReactNode, useEffect} from 'react'
import { api } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage'

interface User{
  id_agent_token:string
  id: string;
  email: string;
  name: string;
  user_name: string;
  description?:string | null;
  balance?: number;
  is_active?: boolean;
  level?: number;
  image_profile?: string | null
  vocation?: string;
  state?: number
}
interface AuthContextData{
user:User;
signIn:({email,password}:SignInProps)=> void;
loading?:boolean;
agentAuthenticate:User
autoriztionToken?:string
}

interface AuthProviderProps{
  children: ReactNode
}
interface SignInProps{
  email:string;
  password:string |number
}
interface AutorizationApi{
  token:string;
  agent:{
    name:string;
    email:string;
  }
}
export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({children}:AuthProviderProps){
  const [user,setUser] = useState<User>({} as  User)
  const [loading,setLoading] = useState(false)
  const [agentAuthenticate,setAgentAuthenticate]  = useState({} as User)
  const [autoriztionToken,setAutorizationToken] = useState('')
  async function getData(){
    const info = await AsyncStorage.getItem('@base_outside:profile_agent')
    const getToken = await AsyncStorage.getItem('@base_outside:token_agent')
    setAutorizationToken(JSON.parse(getToken as string))
    setAgentAuthenticate(JSON.parse(info as string))
    
  }
  useEffect(()=>{
    getData()
  },[])
  
  async function signIn({email,password}:SignInProps){
    try{
      setLoading(true)
      const response =   await api.post('/sessions',{email:"leo@email",password:'123'})
      //const {token,agent} :AutorizationApi =   await (await api.post('/sessions',{email:email.trim(),password:password})).data 
      const {token,agent} :AutorizationApi =   await (await api.post('/sessions',{email:"leo@email",password:'123'})).data 
      const infoAgent = await api.post('/agent/findByName',{name:agent.name})
      try{
        if(token) AsyncStorage.setItem('@base_outside:token_agent',JSON.stringify(token))
        if(agent) AsyncStorage.setItem('@base_outside:profile_agent',JSON.stringify(infoAgent.data))
 
      }catch(e){
        throw e
      }
    const agentInfoProfile = infoAgent.data
    setUser(agentInfoProfile)

    }catch(e:any){
      console.log(e)
      return e.message
    }finally{
      setLoading(false)
    }
  }
  return (
    <AuthContext.Provider value={{user,signIn,loading, agentAuthenticate,autoriztionToken}}>
      {children}
    </AuthContext.Provider>
    )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context
}
export{ AuthProvider,useAuth}