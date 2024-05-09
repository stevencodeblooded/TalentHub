import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const JobDescription = () => {
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
  console.log(job)

  return (
    <div>
      <section className=" max-w-5xl mx-auto px-3">
        <div className="py-10 flex flex-col gap-12 text-sm">
          <div>
            <p>
              {job?.company_info}
            {/* At XYZ Tech, we're pioneering the next generation of mobile applications, driving innovation and 
            pushing boundaries in the iOS development sphere. As a dynamic and forward-thinking company, 
            we thrive on creativity, collaboration, 
            and a passion for delivering cutting-edge solutions to our global user base. */}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">What will you do:</h3>
            <ul className="list-disc ml-7 space-y-2">
              {job?.job_description.map((item) => (
                item.map((item, ind) => (
                  <li key={ind}>{item}</li>
                ))
              ))}

              {/* <li>Develop an existing product in the Business categor:</li>
              <li>Assess the tasks at hand and the possibility of their implementatio?</li>
              <li>Search for the best solutions, select and study technologies, and implement them in the development procesG</li>
              <li>Interact with the project team (PMs, PdMs, Q;, designers, etc)</li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">What you should have:</h3>
            <ul className=" list-disc ml-7 space-y-2">
              {job?.requirements.map((item) => (
                item.map((item, ind) => (
                  <li key={ind}>{item}</li>
                ))
              ))}
              {/* <li>Experience of 5+ years in backend web development Kotlin/Java</li>
              <li>Experience of 2+ years with Kotli?</li>
              <li> Extensive knowledge of RDBMS and SQL</li>
              <li>Basic knowledge of Hibernate</li>
              <li>Deep understanding of OOP and design patternG</li>
              <li>Detailed knowledge of Giu</li>
              <li>Experience with CI, DI</li>
              <li>Background in linux servers administratio?</li>
              <li>Understanding of Docker containerG</li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">What we offer:</h3>
            <ul className=" list-disc ml-7 space-y-2">
              {job?.benefits.map((item) => (
                item.map((item, ind) => (
                  <li key={ind}>{item}</li>
                ))
              ))}
              {/* <li>High level of decision-making freedo´</li>
              <li>A friendly team of professionals</li>
              <li>A chance to influence the development of our products directl:</li>
              <li>A possibility to work remotel:</li>
              <li>Medical Insurance</li>
              <li>English courseG</li>
              <li>Sports reimbursement progra´</li>
              <li>Compensation for psychological counseling</li>
              <li>5 sick days and other benefits</li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Location:</h3>
            <ul className=" list-disc ml-7 space-y-2">
              {/* remote */}
              <li>This position is fully {job?.location}</li> 
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Salary:</h3>
            <ul className=" list-disc ml-7 space-y-2">
              {/* <li>Monthly gross salary from $1000 to $4000.</li> */}
              <li>Monthly gross salary {job?.salary}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobDescription