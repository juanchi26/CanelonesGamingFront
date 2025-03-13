import { useContext } from "react"

import { AuthContext } from "@/context"

export const userAuth = () => useContext(AuthContext)