import * as Yup from 'yup';

export function initialValues(data){
    return {
        addTitle: data?.addTitle || "",
        addName: data?.addName || "",
        addAddress: data?.addAddress || "",
        addState: data?.addState || "",
        addCity:  data?.addCity || "",
        addPostalCode: data?.addPostalCode || "",
        addPhone: data?.addPhone || "",
    }
}


export function validationSchema(){
    return Yup.object({
        addTitle: Yup.string().required("Debe agregar un título"),
        addName: Yup.string().required("Debe agregar un nombre"),
        addName: Yup.string().required("Debe agregar un nombre"),
        addAddress: Yup.string().required("Debe agregar una dirección"),
        addState: Yup.string().required("Debe agregar un departamento"),
        addCity: Yup.string().required("Debe agregar una ciudad"),
        addPostalCode: Yup.string().required("Debe agregar un código postal"),
        addPhone: Yup.number().required("Debe agregar un teléfono").positive("El teléfono no puede ser negativo").integer("El teléfono no puede tener decimales")
    })
}