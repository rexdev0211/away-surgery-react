import { ContactUs } from "../Components/Contact";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export default function Headfoot({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>

  )

}