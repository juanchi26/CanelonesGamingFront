
import styles from "./Productos.module.scss"
import { Icon, Image, Table } from "semantic-ui-react"
import { Modal } from "@/components/Shared"
import { ProductForm } from "../../ProductForm"
import { fn } from "@/utils"
import { useEffect, useState } from "react"

const NOT_FOUND_IMAGE = "/img/imgnotfound.jpg"

export function Productos(props) {

    const {product, onReload} = props

    const [image, setImage] = useState(NOT_FOUND_IMAGE)

    const [openModal, setOpenModal] = useState(false)
    const [modalContent, setModalContent]= useState(null)

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


    const closeModal = () => {
      setOpenModal(false)
      setModalContent(null)
    }

    const openEditProduct = () => {
      setModalContent(<ProductForm onClose={closeModal} onReload={onReload} product={product}/>)
      setOpenModal(true)
    }

  return (
    <>
      <Table.Cell>{product.prodID}</Table.Cell>
      <Table.Cell><Image className={styles.image} src={image} alt={product.prodTitle}/></Table.Cell>
      <Table.Cell>{product.prodTitle}</Table.Cell>
      <Table.Cell>$ {product.prodPrice}</Table.Cell>
      <Table.Cell><strong>{product.prodStock}</strong></Table.Cell>
      <Table.Cell className={styles.actions}>
        <Icon name="pencil" link onClick={openEditProduct}/>
        <Icon name="image" link/>
        <Icon name="trash" link/>
      </Table.Cell>

      <Modal.Basic show={openModal} onClose={closeModal} title={`Editando (${product.prodTitle})`}>{modalContent}</Modal.Basic>
      
    </>
  )
}
