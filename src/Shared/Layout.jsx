import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const Layout = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
        <div className=" top-full sticky">
            <Footer />
        </div>
    </div>
  )
}

export default Layout