import { Button } from "semantic-ui-react"
import { useState } from "react"
import { Modal } from "@/components/Shared"
export function AddProduct() {
    const [openModal, setOpenModal] = useState(false)

    const openCloseModal = () => setOpenModal((prevState) => !prevState)

  return (
    <>
      <Button primary onClick={openCloseModal}>Agregar Producto</Button>
      <Modal.Basic show={openModal} onClose={openCloseModal} title="Nuevo Producto">
        <h2>contenido del modal</h2>
      </Modal.Basic>
    </>
  )
}
