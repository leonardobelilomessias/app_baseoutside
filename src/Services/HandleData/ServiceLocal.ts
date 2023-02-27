import { CreateAgentDTO } from "../../Dtos/AgentDTO/CreateAgentDTO";
import { FindAgentDTO, FormatResponseAuthenticate, FullAgentDTO } from "../../Dtos/AgentDTO/DataAgentDTO";
import { FormatServiceAgent } from "./HandleDataAgent/IFormatsService/IFormatServiceAgent";
import { resolve, } from 'path'
import bse from '../../assets/images/imgprofile.jpg'

const dataAgent = {
    id: "0fd14a51-911e-4b3e-ab85-1005702c8fa2",
    email: "agent@email.com",
    password: undefined,
    name: "Agent example",
    user_name: "agent_example",
    description: "Iam a agent update and i want show how that things work in the project",
    balance: "0.00",
    is_active: true,
    level: 0,
    image_profile: '',
    vocation: "Sociology",
    created_at: "2022-09-12T21:42:50.241Z",
    state: 0
}

class ServiceLocal implements FormatServiceAgent {
    setTokenHeader(token: string): void {
        return
    }
    fetchDataAgentById(id_agent: string): Promise<FullAgentDTO> {
        throw new Error("Method not implemented.");
    }
    authenticate({ email, password }: { email: string; password: string; }): Promise<FormatResponseAuthenticate> {
        throw new Error("Method not implemented.");
    }
    async fetchDataAgent({ name }: { name: string }): Promise<FindAgentDTO> {
        const agent = await dataAgent
        return dataAgent
    }
    find(url: string): Promise<FindAgentDTO> {
        throw new Error("Method not implemented.");
    }
    create({ url, data }: { url: string, data: any }): Promise<CreateAgentDTO> {
        throw new Error("Method not implemented.");
    }
    async delete({ url, data }: { url: string, data: any }): Promise<any> {
        throw new Error("Method not implemented.");
    }
    edit({ url, data }: { url: string, data: any }): Promise<any> {
        throw new Error("Method not implemented.");
    }

}
export { ServiceLocal }