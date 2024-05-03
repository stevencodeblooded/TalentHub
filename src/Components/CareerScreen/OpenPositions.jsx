import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const OpenPositions = () => {
  const scrollTop = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }
  return (
    <div className="py-20 bg-gray-100" id="openings">
      <section className="max-w-4xl mx-auto px-3">
        <div>
          <h2 className='text-4xl mb-16 leading-snug font-semibold text-center text-transparent bg-gradient-to-r from-black to-green-500 bg-clip-text'>Current Job Openings</h2>
          <div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between bg-white p-8 rounded-lg shadow-md hover:shadow-green-400">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Junior Web Developer</h2>
                  <div className="flex items-center gap-3 text-sm">
                    <p className="flex items-center gap-1"><FontAwesomeIcon icon={faLocationDot} className="text-green-500"/>100% remote</p>
                    <p className="flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="text-green-500" />Full-time</p>
                  </div>
                </div>
                <Link to={'1'} onClick={scrollTop} className="px-5 py-2 bg-green-500 hover:bg-green-600 transition-all text-white rounded-3xl font-semibold text-sm" >Apply</Link>
              </div>
              <div className="flex items-center justify-between bg-white p-8 rounded-lg shadow-md hover:shadow-green-400">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Graphical Designer</h2>
                  <div className="flex items-center gap-3 text-sm">
                    <p className="flex items-center gap-1"><FontAwesomeIcon icon={faLocationDot} className="text-green-500"/>100% remote</p>
                    <p className="flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="text-green-500" />Part-time</p>
                  </div>
                </div>
                <Link to={'2'} onClick={scrollTop} className="px-5 py-2 bg-green-500 hover:bg-green-600 transition-all text-white rounded-3xl font-semibold text-sm">Apply</Link>
              </div>
              <div className="flex items-center justify-between bg-white p-8 rounded-lg shadow-md hover:shadow-green-400">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Marketing Specialist</h2>
                  <div className="flex items-center gap-3 text-sm">
                    <p className="flex items-center gap-1"><FontAwesomeIcon icon={faLocationDot} className="text-green-500"/>100% remote</p>
                    <p className="flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="text-green-500" />Part-time</p>
                  </div>
                </div>
                <Link to={'3'} onClick={scrollTop} className="px-5 py-2 bg-green-500 hover:bg-green-600 transition-all text-white rounded-3xl font-semibold text-sm">Apply</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OpenPositions