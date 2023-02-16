import { CreateAgentDTO } from "../AgentDTO/CreateAgentDTO"
import { FindAgentDTO } from "../AgentDTO/findAgentDTO"


interface FormatServiceAgent {
    fetchDataLogin({name}:{name:string}): Promise<FindAgentDTO>
    find(url: string): Promise<FindAgentDTO>
    create({ url, data }: { url: string, data: any }): Promise<CreateAgentDTO>
    delete({ url, data }: { url: string, data: any }): Promise<any>
    edit({ url, data }: { url: string, data: any }): Promise<any>
}
export { FormatServiceAgent }