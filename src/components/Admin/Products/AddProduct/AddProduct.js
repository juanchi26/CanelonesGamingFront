import { Button } from "semantic-ui-react"
import { useState } from "react"
import { Modal } from "@/components/Shared"
import { Products } from "@/components/Admin"


export function AddProduct(props) {
    const { onReload } = props
    const [openModal, setOpenModal] = useState(false)

    const openCloseModal = () => setOpenModal((prevState) => !prevState)

  return (
    <>
      <Button primary onClick={openCloseModal}>Agregar Producto</Button>
      <Modal.Basic show={openModal} onClose={openCloseModal} title="Nuevo Producto">
        <Products.ProductForm onClose={openCloseModal} onReload={onReload}/>
      </Modal.Basic>
    </>
  )
}
