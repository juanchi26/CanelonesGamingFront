
import { Form } from "semantic-ui-react"
import { useFormik } from  "formik"
import { initialValues, validationSchema } from "./Category.form"
import { categoryCtrl } from "@/api"


export  function CategoryForm(props) {

    const { onClose, onReload, category } = props

    const formik = useFormik({
        initialValues: initialValues(category),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {

              if(category){
                await categoryCtrl.update(category.categId, formValue)
              }else{
                await categoryCtrl.create(formValue)
              }


                
                onReload()
                onClose()
            } catch (error) {
                console.error(error)
            }
        },
    })


  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input name="CategName" placeholder="Nombre de la categoria" value={formik.values.CategName} onChange={formik.handleChange} error={formik.errors.CategName}/>
      <Form.Input name="CategPath" placeholder="Slug de la categoria" value={formik.values.CategPath} onChange={formik.handleChange} error={formik.errors.CategPath}/>
      <Form.Button primary fluid type="submit" loading={formik.isSubmitting}> Crear </Form.Button>
    </Form>
  )
}
