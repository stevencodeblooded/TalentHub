import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const JoinOurTeamHome = () => {
  const scrollTop = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
  return (
    <div className="my-20 px-3 " data-aos="fade-up">
      <section className=" max-w-5xl mx-auto px-10 bg-green-200 py-16 rounded-full p-3">
        <div className="flex flex-col items-center gap-3 max-w-xl mx-auto text-center">
          <h2 className='text-4xl leading-snug font-semibold'>Get Ahead with <span className="text-green-500">Talent Hub</span></h2>
          <p className="text-sm lg:text-base">
            Come aboard the Talent Hub community and let's make career magic together. 
            Join our dynamic team and bring your unique talents to our innovative community!
          </p>
          <Link to={'/contact'} onClick={scrollTop} className="mt-9 bg-green-500 hover:bg-green-600 transition-all flex items-center gap-2 py-3 px-9 rounded-3xl text-sm font-semibold text-white">Learn More <FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
      </section>
    </div>
  )
}

export default JoinOurTeamHome