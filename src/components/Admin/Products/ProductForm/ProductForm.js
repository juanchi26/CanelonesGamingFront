import { useState, useEffect} from "react"
import { categoryCtrl } from "@/api"
import { Editor } from "@tinymce/tinymce-react"
import { map  } from "lodash"
import { Form } from "semantic-ui-react"
import { Separator } from "@/components/Shared"




export function ProductForm(props) {

    const  { onClose } = props

    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async ()=> {
            try {
                const response = await categoryCtrl.getAll()
                const result = map(response, (item) =>({
                    key: item.categId,
                    value: item.categId,
                    text: item.categName
                }))
                setCategories(result)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

  return (
    <Form>
        <Form.Input name="ProdTitle" placeholder="Nombre"/>
        <Form.Input name="ProdPath" placeholder="Slug"/>
        
        <Editor
        apiKey='of56s6lls0y9662se22e235y4nfyrmjlk4yad3i8eznt7irx'
        
        
        init={{
          height: 400,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          
        }}
        />


        <Separator height={20}/>

        <Form.Dropdown name="ProdCategId" placeholder="Categoria del producto" search selection fluid options={categories}/> 


        <Form.Group widths="equal">
            <Form.Input type="number" name="ProdPrice" placeholder="Precio en USD"/>
            <Form.Input type="number" name="ProdStock" placeholder="Stock"/>
        </Form.Group>
        <Form.Button type="submit" fluid>Enviar</Form.Button>
    </Form>
  )
}
