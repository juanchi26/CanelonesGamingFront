import { authFetch, ENV } from "@/utils"
import { method, update } from "lodash"



async function getAllCategories() {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}`

        const response = await fetch(url)
        const result = await response.json()

        if (response.status !== 200) throw result 

        return result

    } catch (error) {
        throw error
    }
}


async function createCategory(data){
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}`
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify(data)
        }
        const response = await authFetch(url, params)
        

        if(response.status !== 200) throw result
        return true
    } catch (error) {
        throw error
    }
}


async function updateCategory(id, data){
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}/${id}`
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }

        const response = await authFetch(url, params)
        
        if(response.status !== 200) throw result
        return true

    } catch (error) {
        throw error
    }
}


async function deleteCategory(id){
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}/${id}`
        const params = {
            method: "DELETE",
        }

        const response = await authFetch(url, params)

        if(response.status !== 200) throw response
        return true


    } catch (error) {
        throw error
    }
}

export const categoryCtrl = {
    getAll: getAllCategories,
    create: createCategory,
    update: updateCategory,
    delete: deleteCategory,
}