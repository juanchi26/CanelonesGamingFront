import { useState, useEffect } from "react"
import { productsCtrl } from "@/api"
import { Loading } from "@/components/Shared"

const ITEMS_POR_PAGINA = 2

export function ListProducts() {
    const [productos, setProductos] = useState(null)
    const page = 1
    

    useEffect(() => {
        (async () => {
            try {
                setProductos(null)
                const searchText = ""
                const response = await productsCtrl.getAll(page, ITEMS_POR_PAGINA, searchText)
                setProductos(response.data || [])
                console.log(response.totalItems)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    if(!productos) return <Loading text="Carganto Productos"/>

  return (
    <div>
      <h2>ListProducts</h2>
    </div>
  )
}
