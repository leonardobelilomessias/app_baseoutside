import { Button } from "native-base"
import { useState, useEffect } from "react"

import { FullAgentDTO } from "../../../../Dtos/AgentDTO/DataAgentDTO"
import { ModalColab } from "./ModalColab"


export function  ButonSponsor({agent}:{agent:FullAgentDTO}){
    const [showModal,setShowModal] = useState(false)
    const [existColab,setExistColab] = useState(false)

    function handleModalColab(){
        
        setShowModal(true)
    }
    useEffect(()=>{
        if(agent.colab.length) setExistColab(true)
    },[])
    return(<>
    {
    existColab?
        <Button size='sm' bgColor={'green.500'} onPress={()=>{handleModalColab()}} >
        descolab
        </Button>
    :
        <Button size='sm' bgColor={'green.500'} onPress={()=>{handleModalColab()}} >
                        
            colab
        </Button>
    }
    <ModalColab setExistColab={setExistColab} existColab={existColab} id_colab={agent.id} setShowModal={setShowModal}showModal={showModal}/>
    </>
    )
}