import styles from './Category.module.scss'
import { useState } from 'react'
import {Table, Icon} from "semantic-ui-react"
import { Modal } from "@/components/Shared"
import { categoryCtrl } from "@/api"
import { CategoryForm } from "../../CategoryForm"



export function Category(props) {

    const {category, onReload} = props
    const [openModal, setOpenModal] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)




  const onOpenCloseModal = () => {
    setOpenModal((prevState) => !prevState)
  }

  const onOpenCloseConfirm = () => {
    setShowConfirm((prevState) => !prevState)
  }


  const onDelete = async () => {
    try {
      await categoryCtrl.delete(category.categId)
      onReload()
      onOpenCloseConfirm()
    } catch (error) {
      console.error(error)
      
    }
  }

  return (
    <>
        <Table.Cell>{category.categId}</Table.Cell>
        <Table.Cell>{category.categName}</Table.Cell>
        <Table.Cell>{category.categPath}</Table.Cell>
        <Table.Cell className={styles.actions} textAlign='right'>
            <Icon name="pencil" onClick={onOpenCloseModal} link/>
            <Icon name="trash" onClick={onOpenCloseConfirm}  link/>
        </Table.Cell>

        <Modal.Confirm open={showConfirm} onCancel={onOpenCloseConfirm} onConfirm={onDelete} title={`Eliminar ${category.categName}`} content={`¿Estas seguro de eliminar la categoria ${category.categName}?`}/>



        <Modal.Basic show={openModal} onClose={onOpenCloseModal} title={`Editar ${category.categName}`}>
            <CategoryForm onClose={onOpenCloseModal} onReload={onReload} category={category}/>
        </Modal.Basic>
    </>
  )
}
