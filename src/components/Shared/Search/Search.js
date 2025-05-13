import { Input } from "semantic-ui-react"
import { useRouter } from "next/router"




export function Search(props) {

    const { placeholder= "Buscar Productos", className, queryName="search" } = props
    const router = useRouter()
    const inputValue = router.query[queryName] || ""

    const onChange = (_, data) => {
      if(data.value) {
        router.replace({query: {...router.query, [queryName]: data.value}})
      }else {
        clearSearch()
      }
    }

    const clearSearch = () => {
      const newQuery = router.query
      delete newQuery[queryName]
      router.replace({query: newQuery})
    }


  return <Input placeholder={placeholder} icon={{name: inputValue ? "close" : "Buscar", link: true, onClick: clearSearch}} className={className} onChange={onChange} value={inputValue}/>
}
