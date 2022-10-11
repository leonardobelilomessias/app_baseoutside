import AsyncStorage from '@react-native-async-storage/async-storage'
import { AgentDTO } from '../Dtos/AgentDTO'
class Agent{
  dataKey :string

  constructor(){
    this.dataKey ='@baseoutside:agents'
  }
  async  create(){
    

  }
  
  async findById(id:string){

  }

  async edit(){

  }

  async delete(id:string){

  }

  async listAgents(){

  }
async populateAgent(){
  const data = await AsyncStorage.getItem(this.dataKey)
  if(data){
    const agents :AgentDTO[] = JSON.parse(data)
    
  }
}

}
export {Agent}