import styles from "./ProductImageForm.module.scss"
import { useCallback, useState } from "react"
import { Button, Image } from "semantic-ui-react"
import { useDropzone } from "react-dropzone"
import { useFormik } from "formik"
import { productsCtrl } from "@/api"
import { initialValues, validationSchema } from "./ProductImageForm.form"


export function ProductImageForm(props) {

    const  { onClose, onReload, productId } = props
    const [loading, setLoading] = useState(false)
    
    const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: validationSchema(),
      validateOnChange: false,
      onSubmit: async (formValue) => {
        try {
          setLoading(true)

          const render = new FileReader()
          
          render.readAsArrayBuffer(formValue.file)
          render.onload = async () => {
            const image = render.result
            
            console.log(image)
            await productsCtrl.updateImage(productId, image)
            
            onReload()
            onClose()
            
            
          }
      
          
          
        } catch (error) {
          console.error(error)
        }
        
      }
    })
    
    
    const onDrop = useCallback((acceptedFile)=>{
        const file = acceptedFile[0]
        console.log(file)
        formik.setFieldValue("file", file)
        formik.setFieldValue("preview", URL.createObjectURL(file))
    })

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpg",
        onDrop
    })

    const getMiniature = () => {
      if(formik.values.file){
       return formik.values.preview
      }
        return null
    }


  return (
    <div>
      <div className={styles.imageContainer} {...getRootProps()}>
        <input {...getInputProps()}/>
        {getMiniature() ? (<Image size="small" src={`${getMiniature()}`}/>): (<div><span>Arrastrar imagen</span></div>)}
      </div>
      <Button primary fluid loading={loading} onClick={formik.handleSubmit}>Subir Imagen</Button>
    </div>
  )
}
