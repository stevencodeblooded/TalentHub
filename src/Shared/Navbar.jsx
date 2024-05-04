import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const [mobileLinks, setMobileLinks] = useState(false);
    
  return (
    <div>
        <section className=" max-w-6xl mx-auto px-3">
        <div className="flex items-center justify-between py-4">
            <Link to={'/'}>
                <h3 className="text-transparent bg-gradient-to-r from-black to-green-500 bg-clip-text text-xl font-semibold z-50">TalentHub</h3>
            </Link>
            <ul className="flex items-center gap-5 md:hidden">
                <li><Link to={'signup'} className="text-sm px-5 py-2 bg-green-500 hover:bg-green-600 transition-all text-white font-semibold rounded-3xl">Join Us</Link></li>
                <li><FontAwesomeIcon icon={mobileLinks ? faX : faBars} className="cursor-pointer p-2 border hover:border-gray-300 rounded-md text-lg text-green-500 hover:text-green-600 transition-all" onClick={() => setMobileLinks(!mobileLinks)}/></li>
            </ul>
            {
                mobileLinks && (
                    <ul className="fixed top-0 left-0 z-10 w-full min-h-screen bg-gray-700 flex flex-col items-center justify-center gap-8 text-white text-sm md:hidden">
                        <li><NavLink onClick={() => setMobileLinks(false)} to={'/'}>Home</NavLink></li>
                        <li><NavLink onClick={() => setMobileLinks(false)} to={'/about'}>About Us</NavLink></li>
                        <li><NavLink onClick={() => setMobileLinks(false)} to={'/careers'}>Careers</NavLink></li>
                        <li><NavLink onClick={() => setMobileLinks(false)} to={'/contact'}>Contact Us</NavLink></li>
                        <Link to={'/signup'}  className="bg-green-500 hover:bg-green-600 transition-all font-semibold py-3 w-5/6 text-center rounded-3xl mt-10" onClick={() => setMobileLinks(false)} >Join Us</Link>
                    </ul>
                )
            }

            <ul className="hidden md:flex items-center gap-12 text-sm font-semibold">
                <li><NavLink to={'/'} className={({isActive}) => isActive ? 'border-b-2 p-2 rounded-2xl text-green-500 border-green-500' : 'p-2'}>Home</NavLink></li>
                <li><NavLink to={'/about'} className={({isActive}) => isActive ? 'border-b-2  rounded-2xl p-2 text-green-500 border-green-500' : 'p-2'}>About Us</NavLink></li>
                <li><NavLink to={'careers'} className={({isActive}) => isActive ? 'border-b-2  rounded-2xl p-2 text-green-500 border-green-500' : 'p-2'}>Careers</NavLink></li>
                <li><NavLink to={'contact'} className={({isActive}) => isActive ? 'border-b-2  rounded-2xl p-2 text-green-500 border-green-500' : 'p-2'}>Contact Us</NavLink></li>
                <Link to={'/signup'} className="px-5 py-2 bg-green-500 hover:bg-green-600 transition-all text-white rounded-3xl">Join Us</Link>
            </ul>
        </div>
        </section>
    </div>
  )
}

export default Navbar