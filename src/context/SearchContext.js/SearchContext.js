import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import { productsCtrl } from "@/api"
import { Separator } from "@/components/Shared"
import styles from "./SearchContext.module.scss"

export function SearchProvider(props){

    const {  children } = props
    const [products, setProducts] = useState(null)
    const [totalItems, setTotalItems] = useState(0)
    const { query } = useRouter()
 

    useEffect(() => {
        if (query.search) {
            document.body.style.overflow = "hidden"
        }else {
            document.body.style.overflow = "scroll"
        }
    },[query.search])


    useEffect(() => {
        (async () => {
            try {
                setProducts(null)
               const response = await productsCtrl.getAll(1, 1000, query.search)
               setProducts(response.data || [])
               setTotalItems(response.totalItems || 0)
            } catch (error) {
                console.error("Error fetching search results:", error)
            }
        })()
    },[query.search])
    



    return (
        <>
            {children}
            {query.search && (
                <div className={styles.container}>
                    <div className={styles.infoSearch}>
                        <p>
                            Buscando: <span>{query.search}</span>
                        </p>
                        <p>
                            {totalItems} resultados
                        </p>
                    </div>
                    <Separator height={20}/> 
                    <h3>Resultados del buscador</h3>
                </div>
            )}
        </>
    )
}