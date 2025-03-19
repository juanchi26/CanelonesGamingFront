import {Form, Button } from "semantic-ui-react"
import styles from "./loginForm.module.scss"
import { useRouter } from "next/router"
import { userAuth } from "@/hooks"
import { authCtrl } from "@/api"
import { validationSchema, initialValues } from "./LoginForm.form"
import { useFormik  } from "formik"
import { Link } from "next/link"

export function LoginForm() {

  const { login } = userAuth()
  const router = useRouter()

  const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: validationSchema(),
      validateOnChange: false,
      onSubmit: async (formValue) => {
        try {
          await authCtrl.login(formValue.email, formValue.password)
          await login()
          router.push("/")
        } catch (error) {
          console.error(error)
        }
      }
  })

  return (
    <>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} />
            <Form.Input type="password" name="password" placeholder="Contraseña" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} />
            <Form.Button type="submit" fluid loading={formik.isSubmitting}>Iniciar sesión</Form.Button>
        </Form>
        <p className={styles.register}>¿Sos nuevo cliente?</p>
        <Button as={Link} href="/join/register" fluid basic>
            Crear Cuenta
        </Button>
    </>
  )
}
