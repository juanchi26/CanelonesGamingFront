import * as Yup from "yup"


export function initialValues() {
    return {
        email: "",
        code: "",
    }
}

export function ValidationSchema() {
    return Yup.object({
        email: Yup.string().email(true).required(true),
        code: Yup.string().required(true)
    })
}