import 'semantic-ui-css/semantic.min.css';
import { AuthProvider, SearchProvider } from "@/context"
import { initAmplify } from "@/utils"
import "@/scss/scss/global.scss"


initAmplify()


export default function App(props) {
  const { Component, pageProps } = props

  return (
  <AuthProvider>
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  </AuthProvider>
  )

}
