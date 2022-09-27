import { useNavigation , } from "@react-navigation/native";
import { View,Text,StyleSheet,Image, TextInput, TouchableOpacity } from "react-native";
import Logo from '../../assets/images/base.png'

export interface useNavigation{
  key: string;
  index: number;
  routeNames: never[];
  history?: unknown[] | undefined;
  routes: any
  type: string;
  stale: false;
  navigate:(string:string)=>(string)
}

export function SignIn(){
  const navegation:useNavigation = useNavigation()
  function handleSignIn(){
    navegation.navigate("Home")
  }
  return(
    <View style= {style.container}>
      <Image source={Logo} resizeMode="stretch" />
      <Text style={style.text}>Entrar</Text>
      <TextInput style={style.input} placeholder="Email"/>
      <TextInput style={style.input} placeholder="Senha"/>
      <TouchableOpacity style={style.buttonLogin} onPress={handleSignIn} >
        <Text style =  {style.textButton}>Fazer Login</Text>
      </TouchableOpacity>
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