
import styles from "./Productos.module.scss"
import { Icon, Image, Table } from "semantic-ui-react"
import { fn } from "@/utils"
import { useEffect, useState } from "react"

const NOT_FOUND_IMAGE = "/img/imgnotfound.jpg"

export function Productos(props) {

    const {product, onReload} = props


    const [image, setImage] = useState(NOT_FOUND_IMAGE)

    useEffect(() => {
        const imgUrl = fn.getUrlImage(product.prodID)

        fn.checkIfImageExist(imgUrl, (exist) => {
            if(exist){
                setImage(imgUrl)
            }else{
                setImage(NOT_FOUND_IMAGE)
            }
        })


    }, [product])


  return (
    <>
      <Table.Cell>{product.prodID}</Table.Cell>
      <Table.Cell><Image className={styles.image} src={image} alt={product.prodTitle}/></Table.Cell>
      <Table.Cell>{product.prodTitle}</Table.Cell>
      <Table.Cell>$ {product.prodPrice}</Table.Cell>
      <Table.Cell><strong>{product.prodStock}</strong></Table.Cell>
      <Table.Cell className={styles.actions}>
        <Icon name="pencil" link/>
        <Icon name="image" link/>
        <Icon name="trash" link/>
      </Table.Cell>
      
    </>
  )
}
