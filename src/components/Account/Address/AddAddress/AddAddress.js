import { useState } from "react"
import { Button } from "semantic-ui-react"
import { Modal } from "@/components/Shared"
import { AddressForm } from "../AddressForm"


export  function AddAddress(props) {
    const { onReload } = props

    const [showModal, setShowModal] = useState(false)
    
    const onCloseOpenModal = () => {
        setShowModal((prevState) => !prevState)
    }

  return (
    <>
      <Button primary onClick={onCloseOpenModal}>Agregar dirección</Button>

        <Modal.Basic show={showModal} onClose={onCloseOpenModal} title="Nueva Dirección" size="small">
            <AddressForm onClose={onCloseOpenModal} onReload={onReload}/>
        </Modal.Basic>
    </>
  )
}
