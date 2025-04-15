import * as Yup from 'yup';

export function initialValues(userFirstName, userLastName) {
    return {
        userFirstName: userFirstName || "",
        userLastName: userLastName || ""
    }
}


export function validationSchema(){
    return Yup.object({
        userFirstName: Yup.string().required("El nombre es obligatorio"),
        userLastName: Yup.string().required("El apellido es obligatorio")
    })
}