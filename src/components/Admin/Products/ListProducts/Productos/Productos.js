
import styles from "./Productos.module.scss"
import { Icon, Image, Table } from "semantic-ui-react"
import { Modal } from "@/components/Shared"
import { ProductForm } from "../../ProductForm"
import { fn } from "@/utils"
import { ProductImageForm } from "../../ProductImageForm"
import { useEffect, useState } from "react"
import { productsCtrl } from "@/api"  
const NOT_FOUND_IMAGE = "/img/imgnotfound.jpg"

export function Productos(props) {

    const {product, onReload} = props

    const [image, setImage] = useState(NOT_FOUND_IMAGE)
    const  [showConfirm, setShowConfirm] = useState(false)

    const [openModal, setOpenModal] = useState(false)
    const [modalContent, setModalContent]= useState(null)

    useEffect(() => {
        const imgUrl = `${fn.getUrlImage(product.prodID)}?v=${Date.now()}`

        fn.checkIfImageExist(imgUrl, (exist) => {
            if(exist){
                setImage(imgUrl)
            }else{
                setImage(NOT_FOUND_IMAGE)
            }
        })


    }, [product])

    const onOpenCloseConfirm = () => {
      setShowConfirm((prevState) => !prevState)
    }

    const onDelete = async () => {
      try {
        await productsCtrl.delete(product.prodID)
        onReload()
        onOpenCloseConfirm()
      } catch (error) {
        console.error(error)
      }
    }

    const closeModal = () => {
      setOpenModal(false)
      setModalContent(null)
    }

    const openEditProduct = () => {
      setModalContent(<ProductForm onClose={closeModal} onReload={onReload} product={product}/>)
      setOpenModal(true)
    }


    const openEditImageProduct = () => {
      setModalContent(<ProductImageForm onClose={closeModal} onReload={onReload} productId={product.prodID}/>)
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
        <Icon name="image" link onClick={openEditImageProduct}/>
        <Icon name="trash" link onClick={onOpenCloseConfirm}/>
      </Table.Cell>

      <Modal.Confirm open={showConfirm} onCancel={onOpenCloseConfirm} onConfirm={onDelete} content={`¿Desea eliminar el producto? (${product.prodTitle})`}/>

      <Modal.Basic show={openModal} onClose={closeModal} title={`Editando (${product.prodTitle})`}>{modalContent}</Modal.Basic>
      
    </>
  )
}
