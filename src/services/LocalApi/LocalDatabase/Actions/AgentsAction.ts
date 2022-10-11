import AsyncStorage from "@react-native-async-storage/async-storage";

class AgentsActions{
  dataKey:string ;

  constructor(){
    this.dataKey ='@baseoutside'
  }
  async create(){

  }
  
  async findById(id:string){
    const result = await AsyncStorage.getItem(this.dataKey)
    if(result){
      const data: [{id:string}]= JSON.parse(result)
      const foundAgent = data.find(element  =>(element.id ===id ));
      return foundAgent

    }
    return result
  }

  async edit(){

  }

  async delete(id:string){

  }

  async listAgents(){

  }
}