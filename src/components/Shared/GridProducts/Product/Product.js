import { Image } from "semantic-ui-react"
import classNames from "classnames"
import  Link from "next/link"
import { useState, useEffect } from "react"
import { fn } from "@/utils"
import styles from './Product.module.scss';


const NOT_FOUND_IMG = "/img/imgnotfound.jpg"


export function Product(props) {
    const { product, classProduct } = props

    const  [image, setImage] = useState(NOT_FOUND_IMG)
    const lowStock = product.prodStock > 0 && product.prodStock <= 3

    
    useEffect(() => {
        const imageUrl = fn.getUrlImage(product.prodID)
        fn.checkIfImageExist(imageUrl, (exists) =>{
            if(exists){
                setImage(imageUrl)
            }
        })
    },[product])


  return (
    <div className={classNames(styles.container, {
        [classProduct] : classProduct,
    })}>
      <Link href={`/producto/${product.prodPath}`}>
      <div className={styles.content}>
        <Image src={image} alt={product.prodTitle}/>
        <h3>{product.prodTitle}</h3>
        
        
        <div className={styles.footer}>
            <span>US${product.prodPrice}</span>
        </div>
        {lowStock  && (
            <p className={styles.lowStock}>{`Quedan ${product.prodStock} Unidades`}</p>
        )}
      </div>
      </Link>
    </div>
  )
}
