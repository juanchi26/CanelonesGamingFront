import styles from "./Loading.module.scss"
import { Separator } from "../Separator"
import { Loader } from "semantic-ui-react"

export function Loading(props) {

    const {text = "Cargando", top = 0} = props


  return <>
        <Separator height={top} />
        <Loader active inline="centered" className={styles.loading}>{text}</Loader>
    </>
}
