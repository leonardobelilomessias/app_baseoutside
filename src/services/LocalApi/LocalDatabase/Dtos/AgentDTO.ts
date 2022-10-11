interface AgentDTO{
  id: string;
  email: string;
  name: string;
  user_name: string;
  description?:string | null;
  balance?: number;
  is_active?: boolean;
  level?: number;
  image_profile?: string | null
  vocation?: string;
  state?: number
}
export{AgentDTO}