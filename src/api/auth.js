import { signUp } from "@aws-amplify/auth"

async function register(email, password){
    try{
        const response = await signUp({ username: email, password });
        return response
    }catch(error){
        throw error
    }
} 


export const authCtrl = {
    register,
}