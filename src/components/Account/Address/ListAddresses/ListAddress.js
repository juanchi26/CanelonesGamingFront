import styles from "./ListAddress.module.scss"
import { useState, useEffect  } from "react"
import { Address } from "./Address"
import { size, map } from "lodash"
import { addressCtrl } from "@/api"
import { Loading, NoResult } from "@/components/Shared"

export function ListAddress() {
    const [addresses, setAddresses] = useState(null)

    useEffect(() => {
        (async () =>{
            try {
                const response = await addressCtrl.getAll()
                setAddresses(response)
            } catch (error) {
                console.error(error)
            }
        })()
    },[])


    if(!addresses){
        return <Loading text="Cargando direcciones..." top={100}/>
    }


  return (
    <div className={styles.addresses}>
        {size(addresses) === 0 && <NoResult text="Crea tu primera dirección" />}
        {map(addresses, (address) => (
            <Address  key={address.addId} address={address}/>
        ))}
    </div>
  )
}
