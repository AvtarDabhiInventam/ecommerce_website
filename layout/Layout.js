import Footer from "../component/common/Footer";
import Navbar from "../component/common/Navbar";


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}