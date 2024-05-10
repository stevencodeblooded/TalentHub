import { useState } from "react";
import { toast } from "react-toastify";

const JoinOurTeamCareer = () => {
  const [applicationData, setApplicationData] = useState({
    fullname: '',
    email: '',
    message: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if(name === 'resume') {
      setApplicationData((prev) => {
        return {
          ...prev,
          [name] : files[0]
        }
      })
    } else {
      setApplicationData((prev) => {
        return {
          ...prev,
          [name] : value
        }
      })
    }
  } 

  const handleFormSubmission = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('fullname', applicationData.fullname);
    formData.append('email', applicationData.email);
    formData.append('message', applicationData.message);
    formData.append('resume', applicationData.resume);

    try {
      const res = await fetch('http://localhost:5000/api/users/application', {
      method: 'POST',
      body: formData
      })
      
      if (res.ok) {
        const data = await res.json()
        toast.success(data.message)
        setApplicationData({
          fullname: '',
          email: '',
          message: '',
          resume: null
        })
      } else {
        const err = await res.json()
        toast.error(err.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }
  
  return (
    <div className="py-20 px-3">
      <section className=" max-w-4xl mx-auto bg-green-200 px-4 py-12 rounded-3xl">
        <div className="max-w-xl mx-auto">
          <h1 className='text-4xl leading-snug text-center mb-6 font-semibold text-transparent bg-gradient-to-r from-green-500 to-black bg-clip-text'>Join the team</h1>
          <form onSubmit={handleFormSubmission} className="flex flex-col gap-3">
            <input type="text" name="fullname" required value={applicationData.fullname} onChange={handleChange} placeholder="Full name" className="rounded-md p-2 focus:outline-none bg-green-50 text-sm" />
            <input type="email" name="email" required value={applicationData.email} onChange={handleChange} placeholder="Email" className="rounded-md p-2 focus:outline-none bg-green-50 text-sm"/>
            <textarea name="message" required value={applicationData.message} onChange={handleChange} rows="4" placeholder="Write to us" className="rounded-md p-2 focus:outline-none bg-green-50 text-sm" />
            <input type="file" name="resume" required onChange={handleChange} placeholder="Resume (Optional)" className="rounded-md p-2 bg-green-50 text-sm" />
            <p className=" text-xs text-center">
              By filling in this form you agree to the processing of your personal data by Exitek. 
              Provided data is processed for recruitment purposes. You can withdraw your 
              consent to the processing of your personal data at any time. For more information on your rights 
              and data processing please read our Privacy Policy.
            </p>
            <button className="mt-9 bg-green-500 hover:bg-green-600 transition-all w-fit mx-auto py-3 px-9 rounded-3xl text-sm font-semibold text-white">Apply Now</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default JoinOurTeamCareer