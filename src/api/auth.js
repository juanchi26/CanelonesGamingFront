import { signUp, resendSignUpCode, confirmSignUp, signIn,signOut, getCurrentUser, fetchAuthSession } from "@aws-amplify/auth"

async function register(email, password){
    try{
        const response = await signUp({ username: email, password });
        return response
    }catch(error){
        throw error
    }
} 

async function resendCode(email) {
    try {
        await resendSignUpCode({"username": email})
    } catch (error) {
        throw error
    }
}

async function Confirmation(email, code) {
    try {
        await  confirmSignUp({ username: email, confirmationCode: code })
        return true
    } catch (error) {
        throw error
    }
}


async function login(email, password) {
    try {
        await signOut()
        await signIn({
            username: email,
            password: password
        })
        const session = await getCurrentUser()
        return session
    } catch (error) {
        throw error
    }
}


async function retriveSession() {
    try {
        const session = await fetchAuthSession()
        return session.tokens.accessToken.toString()
    } catch (error) {
        throw error
    }
}

async function logout(){
    try {  
        await signOut()
        
    } catch (error) {
        throw error 
    }
}

export const authCtrl = {
    register,
    resendCode,
    Confirmation,
    login,
    retriveSession,
    logout
}