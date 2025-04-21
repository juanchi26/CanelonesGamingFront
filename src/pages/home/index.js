import { Separator, GridCategories } from "@/components/Shared"
import { Container } from "semantic-ui-react"
import { BasicLayout } from "@/layouts"
import styles from "./home.module.scss"


export default function HomePage() {

  return (
    <BasicLayout>
        <Separator height={50} />
        <Container>
          <GridCategories />
          <Separator height={50} />
          <h2>Ultimos productos</h2>
          <Separator height={10} />
          <p>GRID DE PRODUCTOS</p>
        </Container>
    </BasicLayout>
  )
}
