import { Button, Form } from "semantic-ui-react"
import Link from "next/link"
import styles from "./RegisterForm.module.scss"


export function RegisterForm() {
  return (
    <>
        <Form>
        <Form.Input name="email" placeholder="Email"/>
        <Form.Input type="password" name="password" placeholder="Contraseña"/>
        <Form.Input type="password" name="repeatPassword" placeholder="Repetir Contraseña"/>
        <Form.Button type="submit" fluid>Crear Cuenta</Form.Button>
        </Form>

        <p className={styles.login}>Ya tengo una cuenta</p>
        <Button as={Link} href="/join/login" fluid basic>Iniciar sesión</Button>


    </>
  )
}
