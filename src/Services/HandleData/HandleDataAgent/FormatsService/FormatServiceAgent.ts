import { CreateAgentDTO } from "../../../../Dtos/AgentDTO/CreateAgentDTO"
import { FindAgentDTO, FormatResponseAuthenticate } from "../../../../Dtos/AgentDTO/DataAgentDTO"



interface FormatServiceAgent {
    fetchDataAgent({ name }: { name: string }): Promise<FindAgentDTO>
    find(url: string): Promise<FindAgentDTO>
    create({ url, data }: { url: string, data: any }): Promise<CreateAgentDTO>
    delete({ url, data }: { url: string, data: any }): Promise<any>
    edit({ url, data }: { url: string, data: any }): Promise<any>
    authenticate({ email, password }: { email: string, password: string }): Promise<FormatResponseAuthenticate|void >
}
export { FormatServiceAgent }
