import { Button, Icon } from "semantic-ui-react"
import styles from "./Address.module.scss"
import { useState } from "react"
import { Modal } from "@/components/Shared"
import { addressCtrl  } from "@/api"
import { AddressForm } from "../../AddressForm"



export function Address(props) {

    const { address,onReload } = props
    const [showEdit, setShowEdit] = useState(false)


    const openCloseEdit = () => {
        setShowEdit((prevState) => !prevState)
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

            <Button primary icon>
                <Icon name="delete" />
            </Button>
        </div>
      </div>

      <Modal.Basic show={showEdit} onClose={openCloseEdit} title="Editar Direccion" size="small">
        <AddressForm onClose={openCloseEdit} onReload={onReload} address={address} />
      </Modal.Basic>

      
    </>
  )
}
