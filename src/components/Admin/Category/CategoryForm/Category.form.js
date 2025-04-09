import * as Yup from "yup"


export function initialValues() {
  return {
    CategName: "",
    CategPath: "",
  }
}

export function validationSchema() {
    return Yup.object({
        CategName: Yup.string().required(true),
        CategPath: Yup.string().required(true),
    })
}