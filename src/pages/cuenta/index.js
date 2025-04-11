import { Container, MenuItem, Tab } from "semantic-ui-react"
import { BasicLayout } from "@/layouts"
import styles from "./account.module.scss"
import { Settings } from "@/components/Account"
import { userAuth } from "@/hooks"


export default function AccountPage() {

    const  { logout } = userAuth()


    const panes = [
        {
            menuItem: {content: "Mis datos", icon: "user outline"},
            render: () => (
                <Tab.Pane>
                    <Settings.AvatarForm/>  
                </Tab.Pane>
            )
        },
        {
            menuItem: {content: "Mis direcciones", icon: "map outline"},
            render: () => (
                <Tab.Pane>
                    <h2>Direcciones del Usuario</h2>
                </Tab.Pane>
            )
        },
        {
            menuItem: {content:"Mis Pedidos", icon: "clipboard list"},
            render: () => (
                <Tab.Pane>
                    <h2>Lista de pedidos</h2>
                </Tab.Pane>
            )
        },
        {
            menuItem: {
                key: 21,
                icon: "log out",
                content: "Cerrar sesión",
                onClick: logout

            }
        }
    ]


  return (
    <BasicLayout>
        <Container>
            <Tab panes={panes} className={styles.tabs} menu={{fluid: true, vertical: true, tabular: true}}/>
        </Container>
    </BasicLayout>
  )
}
