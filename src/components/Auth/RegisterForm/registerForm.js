import { Button, Form } from "semantic-ui-react"
import Link from "next/link"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./RegisterForm.form"
import styles from "./RegisterForm.module.scss"


export function RegisterForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validateOnChange: false,
        validationSchema: validationSchema(),
        onSubmit: (formValue) => {
            console.log("ENVIADO")
            console.log(formValue)
        }
    })

  return (
    <>
        <Form onSubmit={formik.handleSubmit}>
        <Form.Input name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email}/>
        <Form.Input type="password" name="password" placeholder="Contraseña" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password}/>
        <Form.Input type="password" name="repeatPassword" placeholder="Repetir Contraseña" value={formik.values.repeatPassword} onChange={formik.handleChange} error={formik.errors.repeatPassword}/>
        <Form.Button type="submit" fluid loading={formik.isSubmitting}>Crear Cuenta</Form.Button>
        </Form>

        <p className={styles.login}>Ya tengo una cuenta</p>
        <Button as={Link} href="/join/login" fluid basic>Iniciar sesión</Button>


    </>
  )
}
