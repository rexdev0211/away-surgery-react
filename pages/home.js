
import Home from "../Components/Home";
import Headfoot from "../helpers/Headfoot";
import Script from 'next/script'


export default function MyIndexPage() {

  return (
    <Headfoot>
      <Script src="/js/talkshawk.js"></Script>
      <Home />
    </Headfoot>
  )
}
