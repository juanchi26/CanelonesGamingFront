import { useState } from "react"
import { BasicLayout } from "@/layouts"
import { Container, Tab } from "semantic-ui-react"
import { useRouter } from "next/router"
import { userAuth } from "@/hooks"
import styles from "./admin.module.scss"
import { Search } from "@/components/Shared"
import { Products } from "@/components/Admin"
export default function AdminPage() {

    const [reload, setReload] = useState(false)
    const { isAdmin } = userAuth()

    const router = useRouter()

    const onReload = () => {
        setReload((prevState) => !prevState)
    }



    if(!isAdmin){
        router.push("/")
        return null
    }

    const panels = [
        {
            menuItem: "Productos",
            render: () => (
                <Tab.Pane>
                    <div className={styles.actions}>
                        <Search queryName="searchAdmin"/>
                        <Products.AddProduct onReload={onReload}/>
                    </div>
                    <Products.ListProducts reload={reload} onReload={onReload}/>
                </Tab.Pane>
            )
        },
        {
            menuItem: "Categorias",
            render: () => (
                <Tab.Pane>
                    <div className={styles.actions}>
                        <div/>
                        <span>Agregar Categoria</span>
                    </div>
                    <h2>categorias</h2>
                </Tab.Pane>
            )
        },
        {
            menuItem: "Usuarios",
            render: () => (
                <Tab.Pane>
                    <h2>Usuarios</h2>
                </Tab.Pane>
            )
        }
    ]


  return (
    <BasicLayout>
        <Container>
             <Tab panes={panels} className={styles.tabs}></Tab>
        </Container>
     
    </BasicLayout>
  )
}
