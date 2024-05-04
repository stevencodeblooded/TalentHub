import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { ToastContainer } from 'react-toastify';
import Navbar from "./Navbar"
import Footer from "./Footer"
import Aos from "aos"
import 'aos/dist/aos.css'
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="flex flex-col min-h-screen">
        <ToastContainer theme="colored" />
        <Navbar />
        <Outlet />
        <div className="top-full sticky">
            <Footer />
        </div>
    </div>
  )
}

export default Layout