import styles from "./Cuenta.module.scss"
import {Icon} from "semantic-ui-react"
import Link from "next/link"
import { userAuth } from "@/hooks"



export function Cuenta() {

    const { user } = userAuth()
    const url = user ? "/cuenta" : "/join/login"


  return (
    <Link href={url} className={styles.cuenta}><Icon name="user"/>{user?.userEmail ?  `${user.userEmail.slice(0, 14)}...` : "Entrar"}</Link>
  )
}
