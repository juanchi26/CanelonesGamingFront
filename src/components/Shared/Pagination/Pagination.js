import styles from "./Pagination.module.scss"
import { Pagination as PaginationSu} from "semantic-ui-react"
import { useRouter } from "next/router"

export function Pagination(props) {
    const { currentPage, totalPages} = props
    const router = useRouter()
    console.log(router)
    const onPageChange = (_, data) => {
        const { activePage } = data

        router.replace({query: {...router.query, page: activePage}})

    }

  return (
    <div className={styles.container}>
      <PaginationSu defaultActivePage={currentPage} totalPages={totalPages} ellipsisItem={null} firstItem={null} lastItem={null} onPageChange={onPageChange}/>
    </div>
  )
}
