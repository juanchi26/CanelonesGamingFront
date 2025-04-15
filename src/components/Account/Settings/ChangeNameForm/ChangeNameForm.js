import { Form } from "semantic-ui-react"
import { initialValues, validationSchema } from "./ChangeNameForm.form"
import { useFormik } from "formik"
import { userCtrl } from "@/api"
import { userAuth } from "@/hooks"

export  function ChangeNameForm() {

    const { user } = userAuth()

    const formik = useFormik({
        initialValues: initialValues(user.userFirstName, user.userLastName),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await userCtrl.updateMe(formValue)
            } catch (error) {
                console.error(error)
            }
        }
    })


  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Cambiar Nombre y Apellidos</label>
      <Form.Input name="userFirstName" placeholder="Nombre"  value={formik.values.userFirstName} onChange={formik.handleChange}  error={formik.errors.userFirstName}/>
      <Form.Input name="userLastName" placeholder="Apellido" value={formik.values.userLastName} onChange={formik.handleChange}  error={formik.errors.userLastName} /> 


      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>Guardar</Form.Button>
    </Form>
  )
}
