import { View ,Text, StyleSheet} from "react-native";


export default function DataTopHeaderProfileAgent(){

  return (
    <View style={style.container}>
      <View style={style.blockDataTop}>
        <Text style={style.textNumber}>00</Text>
        <Text style={style.textData}>Missions</Text>
      </View>
      <View style={style.blockDataTop}>
        <Text style={style.textNumber}>00</Text>
        <Text style={style.textData}>Actions</Text>
      </View>
      <View style={style.blockDataTop}>
        <Text style={style.textNumber}>00</Text>
        <Text style={style.textData}>Task</Text>
      </View>
      <View style={style.blockDataTop}>
        <Text style={style.textNumber}>00</Text>
        <Text style={style.textData}>Colab</Text>
      </View>
    </View>

  )
}

const style = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-around",
    borderBottomColor:"#CBCBCA",
    borderWidth:1,
    padding:4
  },
  blockDataTop:{
    justifyContent:"center",
    alignItems:"center"
  },
  textNumber:{
    fontSize:24,
    fontWeight:"700"
  },
  textData:{
    fontSize:16,
    fontWeight:"400"
  }
})