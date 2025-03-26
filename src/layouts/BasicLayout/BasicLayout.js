import styles from "./basicLayout.module.scss"
import { Container } from "semantic-ui-react"
import { userAuth } from "@/hooks"
import { Layout } from "@/components/layout"
import { Search } from "@/components/Shared"
export function BasicLayout(props) {

  const  { children } = props
  const  { isAdmin} = userAuth()

  return (
    <>
     
      <div className={styles.border}>
        <Container className={styles.header}>
          <div className={styles.left}>
            <Layout.Logo/>
            <Search className={styles.search}/>
          </div>
          <div>
             { isAdmin && <span>admin</span> }
            <Layout.Cuenta/>
            <Layout.Carrito/>
          </div>
        </Container>
      </div>
      {children}
    </>
  )
}
