import { CreateAgentDTO } from "./HandleDataAgent/AgentDTO/CreateAgentDTO";
import { FindAgentDTO } from "./HandleDataAgent/AgentDTO/findAgentDTO";
import { FormatServiceAgent } from "./HandleDataAgent/FormatsService/FormatServiceAgent";
import { AxiosApi } from "./ProvideServices/axios";

class ServiceApi implements FormatServiceAgent {
    api = AxiosApi
    async fetchDataLogin({name}:{name:string}): Promise<FindAgentDTO> {
        const response: FindAgentDTO = await this.api.post(name)
        return response
    }
    find(url: string): Promise<FindAgentDTO> {
        throw new Error("Method not implemented.");
    }
    create({ url, data }: { url: string, data: any }): Promise<CreateAgentDTO> {
        throw new Error("Method not implemented.");
    }
    delete({ url, data }: { url: string, data: any }): Promise<any> {
        throw new Error("Method not implemented.");
    }
    edit({ url, data }: { url: string, data: any }): Promise<any> {
        throw new Error("Method not implemented.");
    }

}
export { ServiceApi }