import { size, map } from "lodash"
import { Loading, Separator, NoResult } from "../../Shared"
import styles from './GridProducts.module.scss';
import classNames from "classnames"
import { Product } from "./Product"


export function GridProducts(props) {
    const { products, columns = 4, classProduct } = props

    if(!products){
        <>
            <Separator height={50} />
            <Loading   text="Cargando Productos" />
            <Separator height={50} />

        </>
    }

    if(size(products) === 0){
        <>
            
            <NoResult text="No se han encontrado resultados" />
            
        </>
    }

  return (
    <div className={styles.container}>
      {map(products, (product) =>(
        <div key={product.prodID} className={classNames(styles.product, {
            [styles.oneColumn] : columns === 1,
            [styles.twoColumns] : columns === 2,
            [styles.threeColumns] : columns === 3,
            [styles.fourColumns] : columns === 4,
            [styles.fiveColumns] : columns === 5,
            [styles.sixColumns] : columns === 6,
        })}>
            <Product  product={product} classProduct={classProduct}/>
        </div>
      ))}
    </div>
  )
}
