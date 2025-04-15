import styles from "./avatarForm.module.scss"
import { useState, useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import { Button, Image } from "semantic-ui-react"
import { userAuth } from "@/hooks"
import { useFormik } from "formik"
import { userCtrl } from "@/api"
import { fn } from "@/utils"
import { initialValues, validationSchema } from "./AvatarForm.form"
import { set } from "lodash"





export function AvatarForm() {
    const [avatar, setAvatar] = useState(null)
    const { user } = userAuth()
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
            await userCtrl.updateAvatar(user.userUUID, image)
            setLoading(false)
          }
        } catch (error) {
            console.error(error)
        }
      }

    })


    useEffect(() => {
      if(formik.values.file){
        setAvatar(formik.values.preview)
      }else {
        const imageUrl = fn.getUrlImage(user.userUUID)
        fn.checkIfImageExist(imageUrl, (exists) => {
          if(exists) setAvatar(imageUrl)
          else setAvatar(null)
        })
      }
    },[formik.values.file])




    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0]
        formik.setFieldValue("file", file)
        formik.setFieldValue("preview", URL.createObjectURL(file))
    })

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpg",
        onDrop
    })


  return (
    <div>
      <div className={styles.imageContainer} {...getRootProps()}>
        <input {...getInputProps()}/>
        {avatar ?
        (<Image size="small" src={avatar} alt="Avatar"/>)
         : (<div>
            <span>Arrastra la imagen</span>
         </div>)}
      </div>

      <Button primary loading={loading} onClick={formik.handleSubmit}>Guardar</Button>      

    </div>
  )
}
