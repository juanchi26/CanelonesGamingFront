import { Button, Icon } from "semantic-ui-react"
import styles from "./Address.module.scss"
import { useState } from "react"
import { Modal } from "@/components/Shared"
import { addressCtrl  } from "@/api"
import { AddressForm } from "../../AddressForm"



export function Address(props) {

    const { address,onReload } = props
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)


    const openCloseEdit = () => {
        setShowEdit((prevState) => !prevState)
    }

    const openCloseDelete = () => {
        setShowDelete((prevState) => !prevState)
    }



    const onDelete = async () => {
      try {
        await addressCtrl.delete(address.addId)
        onReload()
        openCloseDelete()
      } catch (error) {
        console.error(error)
      }
    }

  return (
    <>
      <div className={styles.address}>
            <div>
                <p className={styles.title}>{address.addTitle}</p>
                <p className={styles.addressInfo}>
                    {address.addName}, {address.addAddress}, {address.addState}, {" "}
                    {address.addCity}, {address.addPostalCode}
                    </p>
            </div>
        <div className={styles.actions}>
            <Button primary icon onClick={openCloseEdit} >
                <Icon name="pencil" />
            </Button>

            <Button primary icon onClick={openCloseDelete} >
                <Icon name="delete" />
            </Button>
        </div>
      </div>


      <Modal.Confirm open={showDelete} onCancel={openCloseDelete} onConfirm={onDelete} content={`Seguro que queres eliminar ${address.addTitle}`}/>



      <Modal.Basic show={showEdit} onClose={openCloseEdit} title="Editar Direccion" size="small">
        <AddressForm onClose={openCloseEdit} onReload={onReload} address={address} />
      </Modal.Basic>

      
    </>
  )
}
