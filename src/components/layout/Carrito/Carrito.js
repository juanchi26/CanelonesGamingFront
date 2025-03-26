import styles from "./Carrito.module.scss"
import { Icon, Label } from "semantic-ui-react"
import Link from "next/link"


const total = 2

export function Carrito() {



  return (
    <Link href="/carrito" className={styles.carrito}>
        <Icon name="cart"/>
        {total > 0 && (
            <Label circular color="blue">{total}</Label>
        )}
    </Link>
  )
}
