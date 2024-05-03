import { Link } from "react-router-dom"

const Footer = () => {
    const scrollTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <div>
        <section className=" max-w-6xl mx-auto px-3">
            <div>
                <div className="my-7 flex flex-col gap-7 md:flex-row md:justify-between">
                    <Link to={'/'}>
                        <h3 onClick={scrollTop} className="text-transparent bg-gradient-to-r from-black to-green-500 bg-clip-text text-lg font-semibold text-center">TalentHub</h3>
                    </Link>
                    <ul className="text-sm text-center flex flex-col gap-6 md:flex-row">
                        <li><Link to={'about'} onClick={scrollTop} className="hover:text-green-500 transition-all">About Us</Link></li>
                        <li><Link to={'careers'} onClick={scrollTop} className="hover:text-green-500 transition-all">Careers</Link></li>
                        <li><Link to={'contact'} onClick={scrollTop} className="hover:text-green-500 transition-all">Contact Us</Link></li>
                        <li><Link to={'terms'} onClick={scrollTop} className="hover:text-green-500 transition-all">Terms of Service</Link></li>
                        <li><Link to={'privacy'} onClick={scrollTop} className="hover:text-green-500 transition-all">Privacy Policy</Link></li>
                    </ul>
                </div>
                <hr />
                <div className="my-4">
                    <p className="text-xs text-center">© 2022-{new Date().getFullYear()} TalentHub. All rights reserved.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer