import styles from "./adminButton.module.scss"
import { Icon } from "semantic-ui-react"
import Link from "next/link"
export function adminButton() {
  return (
    <Link href="/admin" className={styles.adminButton}>
        <Icon name="cog"/>
        Admin
    </Link>
  )
}
