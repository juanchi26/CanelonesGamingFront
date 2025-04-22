import { Separator, GridCategories, GridProducts } from "@/components/Shared"
import { Container } from "semantic-ui-react"
import { BasicLayout } from "@/layouts"
import { productsCtrl } from "@/api"
import { useState, useEffect } from "react"
import styles from "./home.module.scss"


export default function HomePage() {

  const [products, setProducts] = useState(null)


  useEffect(() => {
    (async () => {
      try {
        const response = await productsCtrl.getAll(1, 100)
        setProducts(response.data || [])
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])



  return (
    <BasicLayout>
        <Separator height={50} />
        <Container>
          <GridCategories />
          <Separator height={50} />
          <h2>Ultimos productos</h2>
          <Separator height={10} />
          <GridProducts products={products} columns={4} classProduct={styles.product} />
        </Container>
    </BasicLayout>
  )
}
