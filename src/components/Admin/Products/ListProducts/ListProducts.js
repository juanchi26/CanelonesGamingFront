import { useState, useEffect } from "react"
import {  Table } from "semantic-ui-react"
import { size, map } from "lodash"
import { productsCtrl } from "@/api"
import { Loading, Pagination } from "@/components/Shared"
import { Productos } from "./Productos"
import { useRouter } from "next/router"

const ITEMS_POR_PAGINA = 10

export function ListProducts(props) {
    const { reload, onReload } = props
    const [productos, setProductos] = useState(null)
    const [totalPages, setTotalPages] = useState(null)

    const { query } = useRouter()



    const page = Number(query.page || 1)
    
    console.log(totalPages)
    useEffect(() => {
        (async () => {
            try {
                setProductos(null)
                const searchText = query.searchAdmin || ""
                const response = await productsCtrl.getAll(page, ITEMS_POR_PAGINA, searchText)
                setProductos(response.data || [])
                console.log(response.totalItems)
                setTotalPages(Math.ceil(response.totalItems / ITEMS_POR_PAGINA))
            } catch (error) {
                console.error(error)
            }
        })()
    }, [reload, query.page, query.searchAdmin])

    if(!productos) return <Loading text="Cargando Productos"/>

  return (
    <div>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              ID
            </Table.HeaderCell>
            <Table.HeaderCell>
              Image
            </Table.HeaderCell>
            <Table.HeaderCell>
              name
            </Table.HeaderCell>
            <Table.HeaderCell>
              price
            </Table.HeaderCell>
            <Table.HeaderCell>
              stock
            </Table.HeaderCell>
            <Table.HeaderCell>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {size(productos) === 0 && (
            <Table.Cell colSpan="5" >
              <p>No hay resultados</p>
            </Table.Cell>
          )}
          {map(productos, (product) => (
            <Table.Row key={product.prodID}>
              <Productos product={product} onReload={onReload}/>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination currentPage={page} totalPages={totalPages}/>
    </div>
  )
}
