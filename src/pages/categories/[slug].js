import { BasicLayout } from "@/layouts"
import { Container } from "semantic-ui-react"
import { Separator } from "@/components/Shared"
import styles from "./category.module.scss"

export default function CtegoryPage() {
  return (
    <BasicLayout>
        <Container>
            <Separator  height={20}/>
            <h2>
                CategoryPage
            </h2>
      </Container>
    </BasicLayout>
  )
}
