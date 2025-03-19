import { ENV } from "@/utils"
import { userAuth } from "@/hooks"

export default function HomePage() {
  const data = userAuth()
  console.log(data)
  return (
    <div>
        <h2>Estas en la HOME PAGE</h2>
        <p> URL API {ENV.API_URL}</p>
    </div>
  )
}
