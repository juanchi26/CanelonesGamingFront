import { ENV, authFetch } from "@/utils"
import { update } from "lodash";



async function getAllAddresses(){
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`;

        const response = await authFetch(url)
        const result = await response.json()

        if(response.status !== 200) throw result

        return result

    } catch (error) {
        throw error
    }
}

async function createAddress(data){
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`;

        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }

        const response = await authFetch(url, params)

        if(response.status !== 200) throw response
        return true


    } catch (error) {
        throw error
    }
}

async function updateAddress(id, data){
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${id}`;

        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }

        const response = await authFetch(url, params)

        if(response.status !== 200) throw response
        return true


    } catch (error) {
        throw error
    }
}

export const addressCtrl = {
    getAll: getAllAddresses,
    create: createAddress,
    update: updateAddress,
}