import { ENV } from "@/utils"

export default function HomePage() {
  return (
    <div>
        <h2>Estas en la HOME PAGE</h2>
        <p> URL API {ENV.API_URL}</p>
    </div>
  )
}
