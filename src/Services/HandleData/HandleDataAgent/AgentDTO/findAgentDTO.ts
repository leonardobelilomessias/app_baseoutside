
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

export{FindAgentDTO}