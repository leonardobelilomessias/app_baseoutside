import AsyncStorage from "@react-native-async-storage/async-storage";
import {USER_STORAGE} from './storageConfig'

import { AgentAuthenticadeDTO, FindAgentDTO, FullAgentDTO } from "../Dtos/AgentDTO/DataAgentDTO";
export async function storageUserSave(user:AgentAuthenticadeDTO) {
    await AsyncStorage.setItem(USER_STORAGE,JSON.stringify(user))
}

export async function storageUserGet() {
    const storage = await AsyncStorage.getItem(USER_STORAGE)
    const user:FullAgentDTO = storage?JSON.parse(storage):{}
    return user;

}

export async function storageRemoveUser() {
    await AsyncStorage.removeItem(USER_STORAGE)
}