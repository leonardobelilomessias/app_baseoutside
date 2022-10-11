import { tb_actions } from "./tableAction/db_action";
import { tb_colabs_agent } from "./tableAgent/colabs_agent";
import { tb_task_agent } from "./tableAgent/db_task_agent";
import { tableUsers } from "./tableAgent/tb_agents";
import { tb_missions } from "./tableMission/db_mission";


interface ITableDatabase{
  item:[]
}

interface IDbBaseOutside{
  tb_actions:[]
  tb_colabs_agent:any
  tb_task_agent:any
  tableUsers:any
  tb_missions:any
}
const db_outside = [
{ 
  tb_actions:tb_actions,
  tb_colabs_agent,
  tb_task_agent,
  tableUsers,
  tb_missions,
}
] 
export {db_outside, IDbBaseOutside}