import { View ,Text,StyleSheet} from "react-native";

const elements =[{title:'',text:''}]
export const TextInfo =({title,text}:{title:string,text:string})=>(
  <View style={style.boxContent}>
    <Text style={style.title}>{title}</Text>
    <Text style={style.text}>{text}</Text>
  </View>
)

export function InfoContent(){
  return(
    <>
    <View style={style.infoContainer}>
      <TextInfo title='Vocation' text="Social and right humans"/>
      <TextInfo title='Interest' text="Sociology, Software developer , education,Teology"/>
      <TextInfo title='Level' text="new agent"/>
      <TextInfo title='State' text="Constant"/>
    </View>
    </>
  ) 
}
const style = StyleSheet.create({
  infoContainer:{
    padding:10,
 },
  title:{
    fontSize:16,
    fontWeight:'400',
  },
  text:{
    fontSize:14,
    color:'gray'
  },
  boxContent:{
    marginBottom:10

  },
  
})