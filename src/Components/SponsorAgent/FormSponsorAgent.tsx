import {View,Text, TextInput, Pressable, StyleSheet} from 'react-native'
export function FormSponsorAgent(){
  return(
    <>
    <View style={style.containerForm}>
        <Text style={style.title}>Sponsor</Text>
        <View style={style.containerInput}>
          <Text style={style.moneyInput}>R$</Text>
          <TextInput style={style.styleInput}  keyboardType='number-pad' placeholder='Enter value ex.: 1500,00'/>
        </View>

        <View style={style.containerType}>
            <Pressable style={style.buttonChoice}>
              <Text style={ style.choiceRecurrent}>Recurrent</Text>
            </Pressable>
            <Pressable style={style.buttonChoice}>
              <Text style={style.choiceUnique}>Unique</Text>
            </Pressable>
        </View>
        <Pressable style={style.buttonToSponsor}>
          <Text style={style.textButtonTosponsor}>To Sponsor</Text>
        </Pressable>

    </View>
    </>
  )
}
const style = StyleSheet.create({
  containerForm:{
    flex:1,
    marginTop:3,
    backgroundColor:'white',
    padding:5,
    alignItems:'center',
  },
  title:{
    fontSize:40,
    fontWeight:"700"
  },
  containerInput:{
    flexDirection:"row",
    width:"70%",
    height:40,
    alignContent:"center",
    justifyContent:'center'
  },
  moneyInput:{
    flex:1,
    fontSize:20,
    backgroundColor:"green",
    color:"white",
    alignItems:"center",
    justifyContent:'center',
    alignContent:"center",
    textAlign:'center',
    textAlignVertical:"center",
    borderTopLeftRadius:6,
    borderBottomLeftRadius:6
  },
  styleInput:{
    width:"70%",
    borderColor:'gray',
    borderWidth:1,
    paddingLeft:5,
    borderTopRightRadius:6,
    borderBottomRightRadius:6
    
  },
  containerType:{
    width:"70%",
    flexDirection:"row",
    height:40,
    justifyContent:"center",
    marginTop:10
    
  },
  choiceUnique:{
    flex:1,
    fontSize:20,
    backgroundColor:"green",
    color:"white",
    alignItems:"center",
    justifyContent:'center',
    alignContent:"center",
    textAlign:'center',
    textAlignVertical:"center",
    borderTopRightRadius:6,
    borderBottomRightRadius:6
  },
  choiceRecurrent:{
    flex:1,
    fontSize:20,
    backgroundColor:"white",
    color:"green",
    textAlign:'center',
    textAlignVertical:"center",
    borderColor:'green',
    borderWidth:1,
    borderTopLeftRadius:6,
    borderBottomLeftRadius:6
  },
  buttonChoice:{
    flex:1
  },
  buttonToSponsor:{
    width:"70%",
    marginTop:70,
    padding:10,
    borderColor:'green',
    color:'green',
    borderWidth:1,
    textAlign:'center'
  },
  textButtonTosponsor:{
    color:"green",
    textAlign:'center',
  }

})