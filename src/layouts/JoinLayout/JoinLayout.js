import { useRouter } from "next/router"
import styles from "./JoinLayout.module.scss"
import { Layout } from "@/components/layout"
import { Container } from "semantic-ui-react"
import { userAuth } from "@/hooks"
import { useEffect } from "react"

export function JoinLayout(props) {
    const { children } = props
    const { user } = userAuth()
    const router = useRouter()


    useEffect(() =>{
        if (user) router.push("/")
        
    

    }, [])

    if(user) return null
    
  return (
    <Container className={styles.container}>
      <Layout.Logo/>
      <div>
        <div className={styles.left}>
            INFORMACION
        </div>
        <div className= {styles.right}>
            { children }
        </div>
      </div>

    </Container>
  )
}
