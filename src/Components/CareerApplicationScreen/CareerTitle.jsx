import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const CareerTitle = () => {
  const [jobDesc, setJobDesc] = useState();
  const { id } = useParams()

  useEffect(() => {
    const getJobDesc = async () => {
      const res = await fetch(`http://localhost:5000/api/users/description/${id}`)
      const data = await res.json()
      setJobDesc(data)
    }
  
    getJobDesc()
  }, [])

  const job = jobDesc?.data
  return (
    <div className="bg-green-200 py-20">
      <section className=" max-w-6xl mx-auto px-3">
        <div className="flex flex-col gap-8">
          <Link to={'/careers'} className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </Link>
          {/* Junior Web Developer */}
          <h2 className='text-4xl leading-snug font-semibold text-transparent bg-gradient-to-r from-green-500 to-black bg-clip-text'>{job?.title}</h2>
        </div>
      </section>
    </div>
  )
}

export default CareerTitle