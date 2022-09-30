import { useNavigation  , } from "@react-navigation/native";
import {Alert, View,Text,StyleSheet,Image, TextInput, TouchableOpacity,ActivityIndicator } from "react-native";
import Logo from '../../assets/images/base.png'
import {useContext,useState} from 'react'
import { useAuth } from "../../hooks/auth";

interface useNavigation{
  navigate:(string:string)=>(string)
}

export function SignIn(){
  const {user,signIn,loading} = useAuth()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function handleSignIn(){
    try{
    const response =  await signIn({email,password})
  
    }catch(e:any){
      Alert.alert(e)
    }
  }
  return(
    <View style= {style.container}>
      <Image source={Logo} resizeMode="stretch" />
      <Text style={style.text}>Entrar</Text>
      <TextInput style={style.input} placeholder="Email" autoCapitalize="none" onChangeText={setEmail}/>
      <TextInput style={style.input} placeholder="Senha" secureTextEntry={true}  onChangeText={setPassword} />
      
      { loading ?<ActivityIndicator color={"#16D129"}/>:<TouchableOpacity style={style.buttonLogin} onPress={handleSignIn}  >
        <Text style =  {style.textButton}>Fazer Login</Text>
      </TouchableOpacity>}

    </View>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  

  },
  text:{
    width:"100%",
    paddingHorizontal:"10%",
    fontSize:24,
    fontWeight:"500",
  },
  input:{
    margin:10,
    borderColor:"#CBCBCA",
    borderWidth:1,
    padding:10,
    width:"80%"
  },
  buttonLogin:{
    backgroundColor:"#16D129",
    width:"80%",
    padding:10,
    alignItems:"center",
    borderRadius:5,
  },
  textButton:{
    color:"white",
    fontWeight:"500",
    fontSize:16
  }
})