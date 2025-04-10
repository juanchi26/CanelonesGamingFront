import { useState, useEffect } from 'react'
import { Table, Image, Icon } from 'semantic-ui-react'
import { fn } from "@/utils"


const NOT_FOUND_IMG = "/img/imgnotfound.jpg"



export  function User(props) {

    const { user } = props
    const [userData, setUserData] = useState(null)
    const [avatar, setAvatar] = useState(NOT_FOUND_IMG)
    const isAdmin = user.userStatus === 0

    useEffect(() => {
        const imageUrl = fn.getUrlImage(user.userUUID)

        fn.checkIfImageExist(imageUrl, (exist) => {
            if(exist) {
                setAvatar(imageUrl)
            }
        })


    },[user])

  return (
    <>
        <Table.Cell width={2}>
            <Image src={avatar} avatar alt={user.userEmail} />
        </Table.Cell>
        <Table.Cell>{user.userEmail}</Table.Cell>
        <Table.Cell>
            <Icon name={isAdmin ? "check" : "close"} color={isAdmin ? "green" : "red"} />
        </Table.Cell>
    </>
  )
}
