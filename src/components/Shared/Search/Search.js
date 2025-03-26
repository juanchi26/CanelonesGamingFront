import { Input } from "semantic-ui-react"
export function Search(props) {

    const { placeholder= "Buscar Productos", className } = props


  return <Input placeholder={placeholder} icon={{name: "search", link: true}} className={className} />
}
