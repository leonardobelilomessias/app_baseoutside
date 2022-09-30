import { createContext,useState,useContext,ReactNode} from 'react'
import { api } from '../services/api';

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
loading?:boolean
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
  const [user,setUser] = useState<User>({} as User)
  const [loading,setLoading] = useState(false)
  async function signIn({email,password}:SignInProps){
    try{
      setLoading(true)
      console.log(email,password)
      //const response =   await api.post('/sessions',{email:email,password:password})
     // const {token,agent} :AutorizationApi =   await (await api.post('/sessions',{email:email.trim(),password:password})).data 
      //console.log(token)

     // const infoAgent = await api.post('/agent/findByName',{name:agent.name})
     const agent= {
      id_agent_token:'string',
      id: 'string',
      email:' string',
      name: 'Agent Perfil',
      user_name: 'string',
      description:'mydescription',
    }
      setUser(agent)
      


    }catch(e:any){
      console.log(e)
      return e.message
    }finally{
      setLoading(false)
    }
  }
  return (
    <AuthContext.Provider value={{user,signIn,loading}}>
      {children}
    </AuthContext.Provider>
    )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context
}
export{ AuthProvider,useAuth}