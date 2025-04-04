

import { BasicLayout } from "@/layouts"
import { userAuth } from "@/hooks"
export default function HomePage() {
const { logout } = userAuth()
  return (
    <BasicLayout>
        <h2>Estas en la HOME PAGE</h2>
        <button onClick={logout}>cerrar sesion</button>
    </BasicLayout>
  )
}
