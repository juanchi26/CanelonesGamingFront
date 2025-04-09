import { useState, useEffect } from 'react'
import { Table, TableRow } from "semantic-ui-react"
import { categoryCtrl  } from "@/api"
import { size, map } from "lodash"
import { Loading, NoResult } from "@/components/Shared"
import { Category } from "./Category"



export function ListCategories(props) {
    const  { onReload, reload } = props

    const [categories, setCategories] = useState(null)

    useEffect(() =>{
        (async () => {
            try {
                const response = await categoryCtrl.getAll()
                setCategories(response)
            } catch (error) {
                console.error(error)
            }
        })()
    },[reload])

    if(!categories) return <Loading text="Cargando categorias"/>   

    
  return (
    <Table striped>
        <Table.Header>
            <TableRow>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Path</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </TableRow>
        </Table.Header>
        <Table.Body>
            {size(categories) === 0 && (
               <Table.Cell colSpan="4">
                    <NoResult text="No hay categorias"/>
               </Table.Cell> 
            )}
            {map(categories, (category) => (
                <TableRow key={category.categId}>
                    <Category category={category} onReload={onReload}/>
                </TableRow>
            ))}
        </Table.Body>
    </Table>
  )
}
