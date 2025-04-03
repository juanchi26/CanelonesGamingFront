import styles from "./ProductImageForm.module.scss"
import { useCallback, useState } from "react"
import { Button, Image } from "semantic-ui-react"
import { useDropzone } from "react-dropzone"


export function ProductImageForm(props) {

    const  { onClose, onReload, productId } = props
    const [loading, setLoading] = useState(false)

    const onDrop = useCallback((acceptedFile)=>{
        const files = acceptedFile[0]
        console.log(files)
    })

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpg",
        onDrop
    })

    const getMiniature = () => {
        return null
    }


  return (
    <div>
      <div className={styles.imageContainer} {...getRootProps()}>
        <input {...getInputProps()}/>
        {getMiniature() ? (<Image size="small" src={getMiniature}/>): (<div><span>Arrastrar imagen</span></div>)}
      </div>
      <Button primary fluid loading={loading}>Subir Imagen</Button>
    </div>
  )
}
