import { faGraduationCap, faHouseLaptop, faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WhatWeOfferCareer = () => {
  return (
    <div className="py-20">
      <section className="max-w-6xl mx-auto px-3">
        <div>
          <h2 className='text-4xl mb-16 leading-snug font-semibold text-center text-transparent bg-gradient-to-r from-black to-green-500 bg-clip-text'>Unlock Your Potential</h2>
          <div className="grid grid-cols-1 gap-5 ">
            <div className="flex gap-6 ">
              <div className="p-6 bg-green-500 rounded-2xl">
                <FontAwesomeIcon icon={faHouseLaptop} className="text-white text-4xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Complete Flexibility with Remote Work</h3>
                <p className="text-sm">Experience the freedom and convenience of remote work, allowing you to thrive in your professional journey from anywhere in the world.</p>
              </div>
            </div>
            <div className="flex gap-6 ">
              <div className="p-6 bg-green-500 rounded-2xl">
                <FontAwesomeIcon icon={faMoneyBill} className="text-white text-4xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Attractive Salary Packages</h3>
                <p className="text-sm">Our competitive salary packages reflect our commitment to valuing and rewarding talent, ensuring that your hard work and dedication are duly recognized and appreciated.</p>
              </div>
            </div>
            <div className="flex gap-6 ">
              <div className="p-6 bg-green-500 rounded-2xl">
                <FontAwesomeIcon icon={faGraduationCap} className="text-white text-4xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Growth and Development Opportunities</h3>
                <p className="text-sm">Explore abundant avenues for personal and professional growth, where learning is not just encouraged, but celebrated as a cornerstone of success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatWeOfferCareer