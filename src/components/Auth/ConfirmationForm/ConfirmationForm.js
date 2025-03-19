import { useEffect, useState } from "react"
import { Form, Button } from "semantic-ui-react"
import { useRouter } from "next/router"
import { useFormik } from "formik"
import { initialValues, ValidationSchema } from "./ConfirmationForm.form"
import { Separator } from "@/components/Shared"
import { authCtrl } from "@/api"
export function ConfirmationForm() {

    const router = useRouter()

    const  { query } = router
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        formik.setFieldValue("email", query.email)
    }, [query])




    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: ValidationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await authCtrl.Confirmation(formValue.email, formValue.code)
                router.push("/join/login")
            } catch (error) {
                console.error(error)
            }
        }
    })


    const onResendCode = async () => {
        formik.setFieldError("email", false)
        if (!formik.values.email){
            formik.setFieldError("email", true)
            return
        }
        setLoading(true)    
        await authCtrl.resendCode(formik.values.email)
        setLoading(false)

        console.log("SEND OK")
    }


  return (
    <>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email}/>
            <Form.Input name="code" placeholder="Codigo de Confirmacion" value={formik.values.code} onChange={formik.handleChange} error={formik.errors.code}/>
            <Form.Button type="submit" fluid loading={formik.isSubmitting}> Activar Usuario </Form.Button>

            
            

        </Form>
        <Separator height={50}/>
        <Button fluid basic onClick={onResendCode} loading={loading}>Reenviar Codigo</Button>
    </>
  )
}
