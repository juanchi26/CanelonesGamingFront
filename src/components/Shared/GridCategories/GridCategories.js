import styles from './GridCategories.module.scss'
import { Image } from "semantic-ui-react"
import Link, { link } from "next/link"
import { map } from "lodash"
import { data } from "./GridCategories.data"
export function GridCategories() {
  return (
    <div className={styles.container}>
      {map(data, (category) => (
        <Link key={category.id} href={category.link}>
            <div className={styles.category}>
                <Image src={category.image} alt={category.name} />
            </div>
        </Link>
      ))}
    </div>
  )
}
