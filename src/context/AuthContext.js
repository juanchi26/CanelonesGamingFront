import { useState, useEffect, createContext } from "react"
import { userCtrl } from "@/api"

export const AuthContext = createContext()

export function AuthProvider(props) {
    const { children } = props
    const [user, setUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading , setLoading ] = useState(true)


    useEffect(() => {
        (async () => {
            try {
               await login() 
               setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        })()
    }, [])


   const login = async () => {
    try {
        const response = await userCtrl.me()
        setUser(response)
        setIsAdmin(response.userStatus === 0)
        setLoading(false)
    } catch (error) {
        console.log(error)
       setLoading(false)
    }
   } 

    const data = {
        user,
        login,
        isAdmin

    }

    if (loading) return null;


    return <AuthContext.Provider value = {data}>
        { children }
        </AuthContext.Provider>
}