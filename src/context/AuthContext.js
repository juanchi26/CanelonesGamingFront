import { useState, useEffect, createContext } from "react"

export const AuthContext = createContext()

export function AuthProvider(props) {
    const { children } = props

    const data = {
        user: "Juan"
    }

    return <AuthContext.Provider value = {data}>
        { children }
        </AuthContext.Provider>
}