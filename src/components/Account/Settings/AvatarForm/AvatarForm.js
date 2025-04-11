import styles from "./avatarForm.module.scss"
import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button, Image } from "semantic-ui-react"





export function AvatarForm() {
    const [avatar, setAvatar] = useState(null)
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0]
        console.log(file)
    })

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg",
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

      <Button primary>Enviar</Button>      

    </div>
  )
}
