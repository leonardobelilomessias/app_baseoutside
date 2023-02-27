
interface FindAgentDTO{
    
        id: string,
        email: string,
        password?: string,
        name:string,
        user_name: string,
        description: string,
        balance: string,
        is_active: boolean,
        level: number,
        image_profile?:string,
        vocation: string,
        created_at: string,
        state:number
    
}

interface FullAgentDTO{
    
    id: string,
    email: string,
    password?: string,
    name:string,
    user_name: string,
    description: string,
    balance: string,
    is_active: boolean,
    level: number,
    image_profile?:string,
    vocation: string,
    created_at: string,
    state:number
    actions: [];
    interests: []
    missions: [];
    skills: [];
    tasks: [];
    owner_mission: []
    colab: []

}
interface AgentAuthenticadeDTO{
    
    id: string,
    email: string,
    password?: string,
    name:string,
    user_name: string,
    description: string,
    balance: string,
    is_active: boolean,
    level: number,
    image_profile?:string,
    vocation: string,
    created_at: string,
    state:number

}
interface FormatResponseAuthenticate {
        token: string
        agent: {
            name: string,
            email: string,
            agent_id:string
        },
        refresh_token: string
    }
    

export{FindAgentDTO, FormatResponseAuthenticate, AgentAuthenticadeDTO,FullAgentDTO}