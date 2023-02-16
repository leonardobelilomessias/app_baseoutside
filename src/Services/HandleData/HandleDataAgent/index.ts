
import { ServiceApi } from "../ServiceApi"
import { ServiceLocal } from "../ServiceLocal"
import { FormatServiceAgent } from "./FormatsService/FormatServiceAgent"


type serviceType = 'local' | 'api'
class HandleDataAgent {
    envioroment : 'local' | 'api'
    service: FormatServiceAgent

    constructor(enviroment :serviceType){
        if(enviroment ==='local'){
            this.envioroment = 'api'
            this.service = new ServiceLocal

        }
        else{
            this.envioroment ='local'
            this.service = new ServiceApi
        }

    }

    async get(url:string){
        const response = await  this.service.find(url)
        return response
    }
    async post({url,data}:{url:string,data:any}){
        const response = await  this.service.create({url,data})
        return response
    }
    async delete({url,data}:{url:string,data:any}){
        const response = await  this.service.delete({url,data})
        return response
    }

    async patch({url,data}:{url:string,data:any}){
        const response = await  this.service.edit({url,data})
        return response
    }
    async put({url,data}:{url:string,data:any}){
        const response = await  this.service.edit({url,data})
        return response
    }
    async fetchDataAgent({name}:{name:string}){
        const response = await this.service.fetchDataLogin({name})
        return response
    }


}
export {HandleDataAgent}