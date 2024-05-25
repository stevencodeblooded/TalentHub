import { faBriefcase, faHeart, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const OverviewSteps = () => {
  return (
    <div className="bg-gray-100 py-20">
        <section className=" max-w-6xl mx-auto px-3">
            <h2 className='text-transparent bg-gradient-to-r from-black to-green-500 bg-clip-text text-4xl lg:text-5xl leading-snug lg:leading-snug font-semibold mb-12'>How Does It Work?</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-20 justify-between bg-white px-8 py-16 rounded-3xl">
                    <div className="space-y-6">
                        <FontAwesomeIcon icon={faUser} className="text-5xl text-green-500" />
                        <h2 className="text-3xl font-semibold">Create an Account</h2>
                        <p className="text-sm">
                            Sign up on our platform to start posting jobs. It's quick and easy to get started.
                        </p>
                    </div>
                    <div>
                        <Link to={'/signup'} className="mt-9 bg-green-500 hover:bg-green-600 transition-all py-3 px-9 rounded-3xl text-sm font-semibold text-white">Get Started</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-20 justify-between bg-white px-8 py-16 rounded-3xl">
                    <div className="space-y-6">
                        <FontAwesomeIcon icon={faBriefcase} className="text-5xl text-green-500" />
                        <h2 className="text-3xl font-semibold">Post Your Job</h2>
                        <p className="text-sm">
                            Fill out a simple form with details about the job you are offering. Our intuitive interface makes it easy to specify the requirements.
                        </p>
                    </div>
                    <div>
                        <Link to={'/post'} className="mt-9 bg-green-500 hover:bg-green-600 transition-all py-3 px-9 rounded-3xl text-sm font-semibold text-white">Get Started</Link>
                    </div>
                </div>
                <div className=" flex flex-col gap-20 justify-between bg-white px-8 py-16 rounded-3xl">
                    <div className="space-y-6">
                        <FontAwesomeIcon icon={faHeart} className="text-5xl text-green-500" />
                        <h2 className="text-3xl font-semibold">Find the Right Talent</h2>
                        <p className="text-sm">
                            Browse through applications and find the perfect candidates. Use our advanced filters to narrow down your search.
                        </p>
                    </div>
                    <div>
                        <Link to={'/careers#openings'} className="mt-9 bg-green-500 hover:bg-green-600 transition-all py-3 px-9 rounded-3xl text-sm font-semibold text-white">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default OverviewSteps