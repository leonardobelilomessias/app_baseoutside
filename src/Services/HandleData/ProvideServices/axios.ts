
import axios from 'axios'
import { AppError } from '../../../Utils/AppError'

 const AxiosApi = axios.create({
    baseURL:"http://192.168.0.43:3333/"
})
AxiosApi.interceptors.response.use((response)=>response,error=>{
    if(error.response.data && error.response){

        return Promise.reject(new AppError(error.response.data.message))
    }else{
        return Promise.reject(error)
    }
})

export{AxiosApi}