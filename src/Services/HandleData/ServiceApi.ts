import { Axios } from "axios";
import { CreateAgentDTO } from "../../Dtos/AgentDTO/CreateAgentDTO";
import { FindAgentDTO, FormatResponseAuthenticate } from "../../Dtos/AgentDTO/DataAgentDTO";
import {  FormatServiceAgent } from "./HandleDataAgent/FormatsService/FormatServiceAgent";
import { AxiosApi } from "./ProvideServices/axios";
import axios from 'axios'
import { Alert } from "react-native";

class ServiceApi implements FormatServiceAgent {
    api: Axios
    constructor() {
        this.api = AxiosApi
    }

    async authenticate({ email, password }: { email: string; password: string; }): Promise<FormatResponseAuthenticate| void> {
        try{

            const { data } = await this.api.post('/sessions', { email, password })
            return data as FormatResponseAuthenticate
        }catch(error){
            if(axios.isAxiosError(error)){
                console.log(error.response?.data.message)
                Alert.alert(String(error.response?.data.message))
                
            }
            

        }
    }

    async fetchDataAgent({ name }: { name: string }): Promise<FindAgentDTO> {
        const { data } = await this.api.get('agent/findByname', { params: { name: name } })
        return data
    }
    async find(url: string): Promise<FindAgentDTO> {
        throw new Error("Method not implemented.");
    }
    async create({ url, data }: { url: string, data: any }): Promise<CreateAgentDTO> {
        throw new Error("Method not implemented.");
    }
    async delete({ url, data }: { url: string, data: any }): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async edit({ url, data }: { url: string, data: any }): Promise<any> {
        throw new Error("Method not implemented.");
    }

}
export { ServiceApi }